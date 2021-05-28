import re
from typing import List, Dict

import pandas as pd


def rm_top_rows(df: pd.DataFrame, row_count: int) -> pd.DataFrame:
    """Remove the head of a dataframe."""
    df.columns = df.iloc[row_count - 1]
    return df[row_count:]


def parse_indicators_xlsx(indicateurs: str, correspondance: str) -> List[dict]:
    """Parse indicateurs and correspondance excel documents and return a list of indicateurs"""
    # Starts with indicators
    indicateurs = pd.read_excel(indicateurs, dtype=str, sheet_name=1, header=1)
    indicateurs = rm_top_rows(indicateurs, 9)

    # Rename columns
    indicateurs.columns = ['n', 'mesures', 'nom', 'descriptif', 'valeur audit',
                           'commentaires', 'autres', 'pcaet', 'obligation']

    # Convert columns
    indicateurs['pcaet'] = indicateurs['pcaet'] == 'oui'
    indicateurs["obligation"] = indicateurs["obligation"] == 'oui'
    indicateurs["mesures"] = indicateurs['mesures'].apply(lambda x: re.findall(r'\d+.\d+.\d+', str(x)))

    # Add DOM
    def find_dom(nom: str) -> str:
        if nom.endswith('(DOM)'):
            return 'dom'
        if nom.endswith('hors DOM)'):
            return 'hors_dom'
        return ''

    indicateurs["dom"] = indicateurs["nom"].apply(find_dom)

    # Add units
    def find_unit(nom: str) -> str:
        m = re.findall(r'\(([^\)]+)\)', nom)
        if len(m) > 0:
            return m[0]
        return ''

    indicateurs["unit"] = indicateurs["nom"].apply(find_unit)

    # Now let's open 'correspondance' table
    correspondance = pd.read_excel(correspondance, dtype=str, sheet_name=0, header=1)
    correspondance = correspondance.iloc[:, [4, 5]]
    correspondance.columns = ['n', 'climat_pratic']

    # Add climat pratic to indicateurs
    def find_cc(n: str) -> str:
        try:
            return str(correspondance[correspondance['n'] == n].iat[0, 1]).strip()
        except:
            return ''

    indicateurs['climat_pratic'] = indicateurs['mesures'].apply(lambda x: [find_cc(n) for n in x])

    # Remove unwanted columns
    indicateurs.drop(columns=["valeur audit", "autres", "commentaires"], inplace=True)

    # Forward fill seems reasonable for missing data
    indicateurs['climat_pratic'] = indicateurs['climat_pratic'].apply(lambda x: x if x else None)
    indicateurs['mesures'] = indicateurs['mesures'].apply(lambda x: x if x else None)
    indicateurs.ffill(inplace=True)

    return indicateurs.to_dict('records')


def clean_unite(unite: str) -> str:
    """Make unite valid yaml"""
    unite = cleanup(unite)
    if unite.startswith('%'):
        return f"'{unite}'"
    return unite


def cleanup(nom: str) -> str:
    """General cleanup function"""
    nom = nom.strip()
    nom = nom.replace('\n', ' ')
    if not nom:
        return 'Non trouvé'
    return nom


def indicators_to_markdowns_legacy(indicators: List[dict]) -> Dict[str, str]:
    """
    Legacy function used by the extractor cli with the results of `parse_indicators_xlsx`
    todo: parse_indicators_xlsx should be updated to output a dictionary of indicators grouped by `number`.
          The indicators should be compatible with the new function and similar to the output of
          `indicators_generator.build_indicators`

    Transform a list of indicators into markdown.
    One markdown per indicator.
    If an indicator is composite (ex 4), then its sub indicators (4a, 4b) will be written in the same markdown.
    """
    mds = {}

    for indicator in indicators:
        # build the uid
        uid = indicator['n']
        if indicator['dom']:
            uid = f"{uid}_{indicator['dom']}"

        number = re.findall(r'\d+', uid)[0]

        # initialize current md
        if number not in mds.keys():
            mds[number] = ''

        lines = []

        def wl(s: str) -> None:
            lines.append(f'{s}\n')

        wl(f"# {cleanup(indicator['nom'])}")
        wl("```yaml")
        wl(f"id: {uid}")
        wl(f"unite: {clean_unite(indicator['unit'])}")
        wl(f"mesures:")
        for mesure_name in indicator['mesures']:
            wl(f"  - {mesure_name}")
        wl(f"climat_pratic:")
        for theme in indicator['climat_pratic']:
            wl(f"  - {theme}")
        wl(f"pcaet: {str(indicator['pcaet']).lower()}")
        wl(f"obligation_citergie: {str(indicator['obligation']).lower()}")
        if indicator['dom']:
            wl(f"dom: {indicator['dom']}")

        wl("```")
        if indicator['descriptif']:
            wl('## Description')
            wl(indicator['descriptif'])
        wl('\n\n')
        mds[number] += ''.join(lines)

    return mds


def indicators_to_markdown_legacy_2(indicators: List[dict]) -> str:
    """
    Transform a list of indicators into a single markdown string.

    :parameter indicators is a list similar to the output of `indicators_generator.build_indicators`
    :returns a markdown string compatible with `indicators_generator.build_indicators` input once parsed as a Document
    """
    markdown = ''

    for indicator in indicators:
        lines = []

        def add_line(s: str) -> None:
            lines.append(f'{s}\n')

        add_line(f"# {cleanup(indicator['nom'])}")
        add_line("```yaml")
        add_line(f"id: {indicator['id']}")
        add_line(f"unite: {clean_unite(indicator['unite'])}")
        add_line(f"mesures:")
        for mesure_name in indicator['mesures']:
            add_line(f"  - {mesure_name}")
        add_line(f"climat_pratic_ids:")
        for theme in indicator['climat_pratic_ids']:
            add_line(f"  - {theme}")
        add_line(f"pcaet: {str(indicator['pcaet']).lower()}")
        add_line(f"obligation_citergie: {str(indicator['obligation_citergie']).lower()}")
        if 'dom' in indicator.keys() and indicator['dom']:
            add_line(f"dom: {indicator['dom']}")

        add_line("```")
        if 'description' in indicator.keys() and indicator['description']:
            add_line('## Description')
            add_line(indicator['description'])
        markdown += ''.join(lines)

    return markdown
