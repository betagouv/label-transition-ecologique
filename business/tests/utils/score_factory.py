from business.core.domain.models.referentiel import ActionReferentiel
from business.utils.action_id import ActionId
from business.evaluation.domain.models.action_score import ActionScore


def make_action_score(
    action_id: str,
    point_potentiel: float = 100,
    point_fait: float = 100,
    point_pas_fait: float = 100,
    point_non_renseigne: float = 100,
    point_programme: float = 100,
    point_referentiel: float = 100,
    concerne: bool = True,
    total_taches_count: int = 1,
    completed_taches_count: int = 1,
    referentiel: ActionReferentiel = "eci",
):
    return ActionScore(
        action_id=ActionId(action_id),
        point_potentiel=point_potentiel,
        point_referentiel=point_referentiel,
        point_fait=point_fait,
        point_pas_fait=point_pas_fait,
        point_non_renseigne=point_non_renseigne,
        point_programme=point_programme,
        concerne=concerne,
        total_taches_count=total_taches_count,
        completed_taches_count=completed_taches_count,
        referentiel=referentiel,
    )
