import json
import os
from typing import List

import typer
from fuzzywuzzy import process

from codegen.action.process import referentiel_from_actions
from codegen.action.read import build_action
from codegen.paths import orientations_markdown_dir
from codegen.utils.files import load_md, sorted_files, write

app = typer.Typer()


@app.command()
def correspondance_table(
    orientations_dir=orientations_markdown_dir,
    correspondance_file: str = '../referentiels/sources/dteci_correspondance.json',
    output_dir: str = '../referentiels/data'
) -> None:
    """
    Regenerate (overwrite) markdown files in a new format
    """
    files = sorted_files(orientations_dir, 'md')
    actions_economie_circulaire = []

    for file in files:
        md = load_md(file)
        action = build_action(md)
        action['climat_pratic_id'] = 'eci'
        actions_economie_circulaire.append(action)

    # relativize_ids(actions_economie_circulaire, 'economie_circulaire')
    economie_circulaire = referentiel_from_actions(
        actions_economie_circulaire,
        id='economie_circulaire',
        name="Economie circulaire"
    )

    def actionById(id: str, actions: List[dict]) -> dict:
        for action in actions:
            if action['id'] == id:
                return action
            elif id.startswith(action['id']):
                return actionById(id, action['actions'])

    def parentId(action: dict) -> str:
        ns = action['id'].split('.')
        ns.pop()
        return '.'.join(ns)

    with open(correspondance_file, encoding='utf-8') as file:
        axes = json.load(file)

        for axe in axes:
            for orientation in axe['orientations']:
                for niveau in orientation['niveaux']:
                    id = niveau['id']
                    action = actionById(id, economie_circulaire['actions'])
                    print(id)

                    if not action or 'indicateur' not in niveau.keys():
                        continue

                    indicateur = niveau['indicateur']

                    # handle oui non
                    if 'question' in indicateur.keys():
                        question = indicateur['question']
                        if action['actions']:
                            # ex 3.1.1
                            indicateur['raison'] = f"{len(action['actions'])} actions pour un seul niveau en oui non"
                            continue

                        question['oui']['faite'] = [action['id']]

                    # handle many oui non
                    elif 'questions' in indicateur.keys():
                        questions = indicateur['questions']

                        if not action['actions']:
                            indicateur['raison'] = 'Pas de sous actions pour plusieurs oui non'
                            continue

                        noms = [action['nom'] for action in action['actions']]
                        for question in questions.keys():
                            choice, score = process.extractOne(question, noms)
                            chosen = [action for action in action['actions'] if action['nom'] == choice][0]

                            questions[question]['oui']['faite'] = [chosen['id']]
                            questions[question]['oui']['raison'] = f'"{action["id"]} {option["nom"]}" ' \
                                                                   f'ressemble à {score}% à "{choice}"'

                    # handle fonction
                    elif 'fonction' in indicateur.keys():
                        indicateur['raison'] = 'Pas de correspondance pour une fonction'

                    # handle interval
                    elif 'interval' in indicateur.keys():
                        indicateur['raison'] = 'Pas de correspondance pour des intervalles de valeurs'

                    # handle intervalles
                    elif 'intervalles' in indicateur.keys():
                        indicateur['raison'] = 'Pas de correspondance pour des intervalles de valeurs'

                    # handle checkboxes
                    elif 'choix' in indicateur.keys():
                        choix = indicateur['choix']

                        if not action['actions']:
                            indicateur[
                                'raison'] = f"pas de sous actions à {action['id']} pour ce niveau à choix multiple"
                            continue

                        if len(choix) > len(action['actions']):
                            indicateur[
                                'raison'] = f"plus d'options ({len(choix)}) que d'actions ({len(action['actions'])})"
                            continue

                        noms = [action['nom'] for action in action['actions']]

                        for option in choix:
                            choice, score = process.extractOne(option["nom"], noms)
                            chosen = [action for action in action['actions'] if action['nom'] == choice][0]
                            option['faite'] = [chosen['id']]
                            option['raison'] = f'"{action["id"]} {option["nom"]}" ressemble à {score}% à "{choice}"'

                    # handle dropdown
                    elif 'liste' in indicateur.keys():
                        liste = indicateur['liste']

                        if not action['actions']:
                            indicateur['raison'] = f"pas de sous actions à {action['id']} pour ce niveau à liste"
                            continue

                        if len(liste) > len(action['actions']):
                            indicateur[
                                'raison'] = f"plus d'options ({len(liste)}) que d'actions ({len(action['actions'])})"
                            continue

                        noms = [action['nom'] for action in action['actions']]

                        for option in liste:
                            choice, score = process.extractOne(option["nom"], noms)
                            chosen = [action for action in action['actions'] if action['nom'] == choice][0]
                            i = int(chosen['id'].split('.')[-1])
                            option['faite'] = [chosen['id']]
                            option['faite'] = [f'{parentId(chosen)}.{n}' for n in range(1, i + 1)]
                            option['raison'] = f'"{action["id"]} {option["nom"]}" ressemble à {score}% à "{choice}"'
                            print(option['faite'])

        write(os.path.join(output_dir, 'correspondance_table.json'), json.dumps(axes, indent=4, ensure_ascii=False))
