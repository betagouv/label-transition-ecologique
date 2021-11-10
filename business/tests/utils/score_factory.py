from typing import Tuple

from business.utils.action_id import ActionId, retrieve_referentiel
from business.domain.models.action_score import ActionScore


def make_action_score(
    action_id: str,
    points: float = 100,
    potentiel: float = 100,
    previsionnel: float = 100,
    referentiel_points: float = 100,
    concerne: bool = True,
    total_taches_count: int = 1,
    completed_taches_count: int = 1,
):
    return ActionScore(
        action_id=ActionId(action_id),
        points=points,
        potentiel=potentiel,
        previsionnel=previsionnel,
        referentiel_points=referentiel_points,
        concerne=concerne,
        total_taches_count=total_taches_count,
        completed_taches_count=completed_taches_count,
    )
