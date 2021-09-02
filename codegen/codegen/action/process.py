from typing import List


def relativize_ids(actions: List[dict], referentiel_slug: str) -> None:
    """Add path to actions in place"""
    for action in actions:
        if "id" in action.keys():
            action["id_nomenclature"] = action["id"]
            action["id"] = f'{referentiel_slug}__{action["id"]}'
        if "actions" in action.keys():
            relativize_ids(action["actions"], referentiel_slug)


def referentiel_from_actions(actions: List[dict], name: str, id: str) -> dict:
    """
    Nest actions into a root referentiel action.

    This function is tightly coupled with the way markdowns are organized in each referentiels directories
    """
    referentiel = {
        "nom": name,
        "id": id,
        "actions": [],
        "description": "",
        "ressources": "",
        "exemples": "",
        "contexte": "",
    }

    def attach_children(parent: dict) -> None:
        for action in actions:
            if action["id"].startswith(parent["id"]) and action["id"] != parent["id"]:
                parent["actions"].append(action)

    for action in actions:
        if "." not in action["id"]:
            level_1 = action

            if level_1["actions"]:
                for level_2 in level_1["actions"]:
                    attach_children(level_2)

            else:
                attach_children(level_1)

            referentiel["actions"].append(level_1)

    return referentiel


def clean_thematiques(actions: List[dict]) -> List:
    cleaned_actions = actions.copy()
    for action in cleaned_actions:
        theme = (
            action["climat_pratic_id"].strip()
            if "climat_pratic_id" in action.keys()
            else ""
        )
        action["thematique_id"] = theme if theme else "pas_de_theme"
    return cleaned_actions


def remove_top_nodes(actions: List[dict]) -> List:
    """
    Remove top nodes (axes and domaines) from the list
    as a temporary fix for having axes in thematiques client view
    """
    return [action for action in actions if "." in action["id_nomenclature"]]


def propagate_thematiques(actions: List[dict], thematique_id: str = "") -> List:
    """Propagate thematiques ids to children"""
    cleaned_actions = actions.copy()

    for action in cleaned_actions:
        if thematique_id:
            if "thematique_id" in action.keys() and action["thematique_id"]:
                continue
            action["thematique_id"] = thematique_id
        if action["actions"]:
            action["actions"] = propagate_thematiques(
                action["actions"], action["thematique_id"]
            )

    return cleaned_actions
