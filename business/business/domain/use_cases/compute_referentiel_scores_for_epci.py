from typing import Dict, List

from business.domain.models import commands, events
from business.domain.models.action_statut import (
    ActionStatut,
)
from business.domain.models.action_score import ActionScore
from business.domain.models.litterals import Referentiel
from business.domain.ports.action_status_repo import AbstractActionStatutRepository
from business.domain.ports.referentiel_repo import AbstractReferentielRepository
from business.domain.ports.domain_message_bus import AbstractDomainMessageBus
from .use_case import UseCase
from business.utils.action_points_tree import (
    ActionPointsNode,
    ActionsPointsTree,
    ActionsPointsTreeError,
)


class ComputeReferentielscoresError(Exception):
    pass


class ComputeReferentielScoresForEpci(UseCase):
    def __init__(
        self,
        bus: AbstractDomainMessageBus,
        referentiel_repo: AbstractReferentielRepository,
        statuses_repo: AbstractActionStatutRepository,
    ) -> None:
        self.bus = bus
        self.statuses_repo = statuses_repo
        self.referentiel_repo = referentiel_repo
        self.points_trees: Dict[Referentiel, ActionsPointsTree] = {}

    def execute(self, command: commands.ComputeReferentielScoresForEpci):

        point_tree = self.points_trees.get(command.referentiel)
        if point_tree is None:
            try:
                point_tree = self.build_points_tree(command.referentiel)
                self.points_trees[command.referentiel] = point_tree
            except ActionsPointsTreeError:
                self.bus.publish_event(
                    events.ReferentielScoresForEpciComputationFailed(
                        f"Referentiel tree could not be computed for referentiel {command.referentiel}"
                    )
                )  # TODO
                return
        statuses = self.statuses_repo.get_all_for_epci(command.epci_id)

        status_by_action_id: Dict[str, ActionStatut] = {
            action_status.action_id: action_status
            for action_status in statuses
            if action_status.is_renseigne
        }

        actions_non_concernees_ids: List[str] = [
            action_status.action_id
            for action_status in statuses
            if not action_status.concernee
        ]

        scores: Dict[str, ActionScore] = {}

        point_tree.map_on_taches(
            lambda tache: self.update_scores_from_tache_given_statuses(
                scores,
                tache,
                status_by_action_id,
                actions_non_concernees_ids,
                referentiel=command.referentiel,
            )
        )

        point_tree.map_from_sous_actions_to_root(
            lambda action: self.update_scores_for_action_given_children_scores(
                scores, action, command.referentiel
            )
        )
        self.bus.publish_event(
            events.ReferentielScoresForEpciComputed(
                epci_id=command.epci_id,
                referentiel=command.referentiel,
                scores=list(scores.values()),
            )
        )

    def update_scores_from_tache_given_statuses(
        self,
        scores: Dict[str, ActionScore],
        tache_points_node: ActionPointsNode,
        status_by_action_id: Dict[str, ActionStatut],
        actions_non_concernees_ids: List[str],
        referentiel: Referentiel,
    ):
        # sibling_taches = sous_action.actions
        # for tache in sibling_taches:
        # TODO : find a softer way to tell that points cannot be None once they have been filled by referentiel constructor.
        assert tache_points_node.value is not None

        tache_potentiel = (
            tache_points_node.value
        )  # TODO : handle concerne/non-concerne here

        tache_status = status_by_action_id.get(tache_points_node.action_id)
        tache_concernee = tache_points_node.action_id not in actions_non_concernees_ids

        if not tache_concernee:
            scores[tache_points_node.action_id] = ActionScore(
                action_id=tache_points_node.action_id,
                points=0,
                potentiel=0,
                previsionnel=0,
                total_taches_count=1,
                completed_taches_count=1,
                referentiel_points=tache_points_node.value,
                concernee=tache_concernee,
            )
            return

        if tache_status:
            tache_points = (
                tache_potentiel if tache_concernee and tache_status.is_done else 0.0
            )
            tache_previsionnel = (
                tache_potentiel
                if tache_concernee
                and (tache_status.is_done or tache_status.will_be_done)
                else 0.0
            )
            scores[tache_points_node.action_id] = ActionScore(
                action_id=tache_points_node.action_id,
                points=tache_points,
                potentiel=tache_potentiel,
                previsionnel=tache_previsionnel,
                completed_taches_count=1,
                total_taches_count=1,
                referentiel_points=tache_points_node.value,
                concernee=tache_concernee,
            )

    def update_scores_for_action_given_children_scores(
        self,
        scores: Dict[str, ActionScore],
        action: ActionPointsNode,
        referentiel: Referentiel,
    ):
        action_children = action.children
        action_referentiel_points = action.value
        action_children_with_scores = [
            child for child in action_children if child.action_id in scores
        ]
        points = sum(
            [scores[child.action_id].points for child in action_children_with_scores]
        )
        potentiel = sum(
            [
                scores[child.action_id].potentiel
                if child.action_id in scores
                else child.value
                for child in action_children
            ]
        )
        previsionnel = sum(
            [
                scores[child.action_id].previsionnel
                for child in action_children_with_scores
            ]
        )
        concernee = (
            any(
                [
                    scores[child.action_id].concernee
                    for child in action_children_with_scores
                ]
            )
            if action_children_with_scores
            else True
        )  # concernee if any action children is concernee
        completed_taches_count = sum(
            [
                scores[child.action_id].completed_taches_count
                for child in action_children_with_scores
            ]
        )
        total_taches_count = sum(
            [
                scores[child.action_id].total_taches_count
                if child.action_id in scores
                else 1
                for child in action_children
            ]
        )

        scores[action.action_id] = ActionScore(
            action_id=action.action_id,
            points=points,
            potentiel=potentiel,
            previsionnel=previsionnel,
            completed_taches_count=completed_taches_count,
            total_taches_count=total_taches_count,
            referentiel_points=action_referentiel_points,
            concernee=concernee,
        )

    def build_points_tree(self, referentiel: Referentiel) -> ActionsPointsTree:
        ref_points = self.referentiel_repo.get_all_points_from_referentiel(
            referentiel=referentiel
        )
        ref_children = self.referentiel_repo.get_all_children_from_referentiel(
            referentiel=referentiel
        )
        return ActionsPointsTree(ref_points, ref_children)
