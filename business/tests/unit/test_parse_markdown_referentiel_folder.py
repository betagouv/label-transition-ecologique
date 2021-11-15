from business.domain.models.markdown_action_node import MarkdownActionNode
from business.domain.ports.domain_message_bus import InMemoryDomainMessageBus
from business.domain.use_cases.parse_markdown_referentiel_folder import (
    ParseMarkdownReferentielFolder,
)
from business.domain.models import commands, events
from tests.utils.spy_on_event import spy_on_event


def test_build_markdown_action_node_from_ok_folder():
    test_command = commands.ParseMarkdownReferentielFolder(
        folder_path="./tests/data/md_referentiel_example_ok"
    )
    bus = InMemoryDomainMessageBus()
    use_case = ParseMarkdownReferentielFolder(bus=bus)

    failure_events = spy_on_event(bus, events.ParseMarkdownReferentielFolderFailed)
    parsed_events = spy_on_event(bus, events.MarkdownReferentielFolderParsed)

    use_case.execute(test_command)

    assert len(failure_events) == 0
    assert len(parsed_events) == 1

    expected_event = events.MarkdownReferentielFolderParsed(
        referentiel_node=MarkdownActionNode(
            referentiel="eci",
            identifiant="",
            nom="Titre du référentiel",
            thematique_id="",
            description="",
            contexte="",
            exemples="",
            ressources="",
            points=100.0,
            pourcentage=None,
            actions=[
                MarkdownActionNode(
                    referentiel=None,
                    identifiant="1",
                    nom="Titre de l'action 1",
                    thematique_id="",
                    description="",
                    contexte="",
                    exemples="",
                    ressources="",
                    points=100,
                    pourcentage=None,
                    actions=[
                        MarkdownActionNode(
                            referentiel=None,
                            identifiant="1.1",
                            nom="Titre de l'action 1.1",
                            thematique_id="",
                            description="Description de l'action 1.1\n\n",
                            contexte="Contexte de l'action 1.1.\n\nAprès être allé à la ligne !\n\n",
                            exemples="Exemples de l'action 1.1\n\n",
                            ressources="Ressources de l'action 1.1\n\n",
                            points=30.0,
                            pourcentage=None,
                            actions=[
                                MarkdownActionNode(
                                    referentiel=None,
                                    identifiant="1.1.1",
                                    nom="Titre de l'action 1.1.1",
                                    thematique_id="",
                                    description="Description de l'action 1.1.1\n\n",
                                    contexte="Contexte de l'action 1.1.1\n\n",
                                    exemples="Exemples de l'action 1.1.1\n\n",
                                    ressources="Ressources de l'action 1.1.1\n\n",
                                    points=20.0,
                                    pourcentage=None,
                                    actions=[
                                        MarkdownActionNode(
                                            referentiel=None,
                                            identifiant="1.1.1.1",
                                            nom="Titre de l'action 1.1.1.1",
                                            thematique_id="",
                                            description="",
                                            contexte="",
                                            exemples="",
                                            ressources="",
                                            points=None,
                                            pourcentage=20.0,
                                            actions=[],
                                        ),
                                        MarkdownActionNode(
                                            referentiel=None,
                                            identifiant="1.1.1.2",
                                            nom="Titre de l'action 1.1.1.2",
                                            thematique_id="",
                                            description="",
                                            contexte="",
                                            exemples="",
                                            ressources="",
                                            points=None,
                                            pourcentage=30.0,
                                            actions=[],
                                        ),
                                        MarkdownActionNode(
                                            referentiel=None,
                                            identifiant="1.1.1.3",
                                            nom="Titre de l'action 1.1.1.3",
                                            thematique_id="",
                                            description="",
                                            contexte="",
                                            exemples="",
                                            ressources="",
                                            points=None,
                                            pourcentage=50.0,
                                            actions=[],
                                        ),
                                    ],
                                )
                            ],
                        )
                    ],
                )
            ],
        )
    )
    assert parsed_events[0] == expected_event


def test_build_markdown_action_node_when_referentiel_is_unknown():
    test_command = commands.ParseMarkdownReferentielFolder(
        folder_path="./tests/data/md_referentiel_examples_nok/unknown_referentiel",
    )
    bus = InMemoryDomainMessageBus()
    use_case = ParseMarkdownReferentielFolder(bus=bus)

    failure_events = spy_on_event(bus, events.ParseMarkdownReferentielFolderFailed)
    success_events = spy_on_event(bus, events.MarkdownReferentielFolderParsed)

    use_case.execute(test_command)

    assert len(failure_events) == 1
    assert len(success_events) == 0

    assert (
        failure_events[0].reason
        == "1 validation error for MarkdownActionNode\nreferentiel\n  unexpected value; permitted: 'eci', 'cae', 'crte' (type=value_error.const; given=some_new_fancy_referentiel; permitted=('eci', 'cae', 'crte'))"
    )


def test_build_markdown_action_node_when_no_action_root():
    test_command = commands.ParseMarkdownReferentielFolder(
        folder_path="./tests/data/md_referentiel_examples_nok/no_root",
    )
    bus = InMemoryDomainMessageBus()
    use_case = ParseMarkdownReferentielFolder(bus=bus)

    failure_events = spy_on_event(bus, events.ParseMarkdownReferentielFolderFailed)
    success_events = spy_on_event(bus, events.MarkdownReferentielFolderParsed)

    use_case.execute(test_command)

    assert len(failure_events) == 1
    assert len(success_events) == 0

    assert (
        failure_events[0].reason
        == "Le dossier de markdowns doit contenir une unique action racine (dont l'identifiant est ''). 0 trouvé(s)."
    )


def test_build_markdown_action_node_when_orphan_nodes():
    test_command = commands.ParseMarkdownReferentielFolder(
        folder_path="./tests/data/md_referentiel_examples_nok/orphan_nodes"
    )
    bus = InMemoryDomainMessageBus()
    use_case = ParseMarkdownReferentielFolder(bus=bus)

    failure_events = spy_on_event(bus, events.ParseMarkdownReferentielFolderFailed)
    success_events = spy_on_event(bus, events.MarkdownReferentielFolderParsed)

    use_case.execute(test_command)

    assert len(failure_events) == 1
    assert len(success_events) == 0

    assert (
        failure_events[0].reason
        == "Il manque un niveau entre l'action 1 et son enfant 1.1.1"
    )
