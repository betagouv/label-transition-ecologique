import pandas as pd
from pathlib import Path

if __name__ == '__main__':
    pathlist = Path("./").glob('**/*.xlsx')

    # Pour chaque fichier xlsx
    for path in pathlist:
        path_in_str = str(path)
        print(f'reading {path_in_str}...')

        # On lit la premiere feuille avec les commentaires
        sheet = pd.read_excel(path, 0, header=1, dtype="object")
        sheet.columns = ["axe", "sous_axe", "sous_sous_axe", "num_action", "titre", "description", "objectifs", "resultats_attendus",
         "cibles", "structure_pilote", "moyens", "partenaires", "personne_referente", "elu_referent", "financements",
         "budget", "statut", "priorite", "date_debut", "date_fin", "amelioration_continue", "calendrier", "notes", "collectivite_id" ,"plan_nom"]
        sheet = sheet[sheet['titre'].notna()]
        save_path = Path("./").joinpath(path.parts[-1].replace('.xlsx', '.csv'))
        sheet.to_csv(save_path, index=False, header=True, encoding='UTF-8')
