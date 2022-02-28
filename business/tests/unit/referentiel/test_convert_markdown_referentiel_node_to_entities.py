from typing import List, Tuple

from business.referentiel.domain.models import events
from business.referentiel.domain.models.action_children import ActionChildren
from business.referentiel.domain.models.action_computed_point import ActionComputedPoint
from business.referentiel.domain.models.markdown_action_node import MarkdownActionNode
from business.utils.domain_message_bus import (
    InMemoryDomainMessageBus,
)
from business.referentiel.domain.use_cases.convert_markdown_referentiel_node_to_entities import (
    ConvertMarkdownReferentielNodeToEntities,
)
from business.utils.action_id import ActionId
from tests.utils.referentiel_factory import (
    make_markdown_action_node,
    set_markdown_action_node_children_with_points,
)
from tests.utils.spy_on_event import spy_on_event


def prepare_use_case(
    markdown_root_action_node: MarkdownActionNode,
) -> Tuple[
    List[events.MarkdownReferentielNodeConvertedToEntities],
    List[events.MarkdownReferentielNodeInconsistencyFound],
]:
    bus = InMemoryDomainMessageBus()
    trigger = events.MarkdownReferentielFolderParsed(markdown_root_action_node)
    node_converted_events = spy_on_event(
        bus, events.MarkdownReferentielNodeConvertedToEntities
    )
    conversion_failed_events = spy_on_event(
        bus, events.MarkdownReferentielNodeInconsistencyFound
    )

    use_case = ConvertMarkdownReferentielNodeToEntities(bus)
    use_case.execute(trigger)
    return node_converted_events, conversion_failed_events


def test_import_referentiel_succeeds_when_all_is_good():
    markdown_root_action_node = make_markdown_action_node(
        identifiant="", points=100, referentiel="eci"
    )
    markdown_root_action_node.actions = [
        make_markdown_action_node(
            identifiant="1",
            points=30,
            actions=[
                make_markdown_action_node(identifiant="1.1"),
                make_markdown_action_node(identifiant="1.2"),
                make_markdown_action_node(identifiant="1.3"),
            ],
        ),
        make_markdown_action_node(
            identifiant="2",
            points=70,
            actions=[
                make_markdown_action_node(identifiant="2.1"),
                make_markdown_action_node(identifiant="2.2"),
            ],
        ),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )

    assert len(node_converted_events) == 1
    assert len(conversion_failed_events) == 0

    assert sorted(node_converted_events[0].points, key=lambda a: a.action_id) == sorted(
        [
            ActionComputedPoint(
                action_id=ActionId("eci"), value=100.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_1"), value=30.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_2"), value=70.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_1.1"), value=10.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_1.2"), value=10.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_1.3"), value=10.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_2.1"), value=35.0, referentiel="eci"
            ),
            ActionComputedPoint(
                action_id=ActionId("eci_2.2"), value=35.0, referentiel="eci"
            ),
        ],
        key=lambda a: a.action_id,
    )
    assert node_converted_events[0].children == [
        ActionChildren(
            action_id=ActionId("eci"),
            children=[ActionId("eci_1"), ActionId("eci_2")],
            referentiel="eci",
        ),
        ActionChildren(
            action_id=ActionId("eci_1"),
            children=[
                ActionId("eci_1.1"),
                ActionId("eci_1.2"),
                ActionId("eci_1.3"),
            ],
            referentiel="eci",
        ),
        ActionChildren(action_id=ActionId("eci_1.1"), children=[], referentiel="eci"),
        ActionChildren(action_id=ActionId("eci_1.2"), children=[], referentiel="eci"),
        ActionChildren(action_id=ActionId("eci_1.3"), children=[], referentiel="eci"),
        ActionChildren(
            action_id=ActionId("eci_2"),
            children=[ActionId("eci_2.1"), ActionId("eci_2.2")],
            referentiel="eci",
        ),
        ActionChildren(action_id=ActionId("eci_2.1"), children=[], referentiel="eci"),
        ActionChildren(action_id=ActionId("eci_2.2"), children=[], referentiel="eci"),
    ]
    assert len(node_converted_events[0].definitions) == 8


def test_import_referentiel_succeeds_when_action_has_0_point():
    markdown_root_action_node = make_markdown_action_node(
        identifiant="", points=100, referentiel="eci"
    )
    markdown_root_action_node.actions = [
        make_markdown_action_node(identifiant="0"),
        make_markdown_action_node(identifiant="1", points=100),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )

    assert len(node_converted_events) == 1
    assert len(conversion_failed_events) == 0

    assert node_converted_events[0].points == [
        ActionComputedPoint(action_id=ActionId("eci"), value=100.0, referentiel="eci"),
        ActionComputedPoint(
            action_id=ActionId("eci_1"), value=100.0, referentiel="eci"
        ),
        ActionComputedPoint(action_id=ActionId("eci_0"), value=0.0, referentiel="eci"),
    ]


def test_import_referentiel_fails_when_identifiants_are_not_unique():
    markdown_root_action_node = make_markdown_action_node(
        identifiant="root", points=100
    )
    markdown_root_action_node.actions = [
        make_markdown_action_node(identifiant="1"),
        make_markdown_action_node(identifiant="1"),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )

    assert len(node_converted_events) == 0
    assert len(conversion_failed_events) == 1
    assert (
        conversion_failed_events[0].reason
        == "Tous les identifiants devraient être uniques. Doublons: 1"
    )


def test_check_referentiel_quotations_fails_when_percentage_level_isnt_100():
    markdown_root_action_node = make_markdown_action_node(identifiant="", points=500)
    markdown_root_action_node.actions = [
        make_markdown_action_node(identifiant="1", pourcentage=10),
        make_markdown_action_node(identifiant="2", pourcentage=80),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )
    assert len(node_converted_events) == 0
    assert len(conversion_failed_events) == 1
    assert (
        conversion_failed_events[0].reason
        == "Les valeurs des actions eci_1, eci_2 sont renseignées en pourcentage, mais leur somme fait 90.0 au lieu de 100."
    )


def test_points_are_equi_redistributed_amongst_siblings_when_one_action_worth_0_percent():
    markdown_root_action_node = make_markdown_action_node(identifiant="", points=100)
    markdown_root_action_node.actions = [
        make_markdown_action_node(identifiant="1", pourcentage=0),
        make_markdown_action_node(identifiant="2"),
        make_markdown_action_node(identifiant="3"),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )
    assert len(node_converted_events) == 1
    assert len(conversion_failed_events) == 0

    assert node_converted_events[0].points == [
        ActionComputedPoint(action_id=ActionId("eci"), value=100.0, referentiel="eci"),
        ActionComputedPoint(action_id=ActionId("eci_1"), value=0.0, referentiel="eci"),
        ActionComputedPoint(action_id=ActionId("eci_2"), value=50.0, referentiel="eci"),
        ActionComputedPoint(action_id=ActionId("eci_3"), value=50.0, referentiel="eci"),
    ]


def test_check_referentiel_quotations_fails_when_children_points_doesnt_sum_to_parent_point():
    markdown_root_action_node = make_markdown_action_node(identifiant="root", points=60)
    set_markdown_action_node_children_with_points(markdown_root_action_node, [10, 51])

    (node_converted_events, conversion_failed_events) = prepare_use_case(
        markdown_root_action_node
    )

    assert len(node_converted_events) == 0
    assert len(conversion_failed_events) == 1
    assert (
        conversion_failed_events[0].reason
        == "Les valeurs des actions de l'action eci_root sont renseignées en points, mais leur somme fait 61.0 au lieu de 60.0."
    )


def test_check_referentiel_quotations_handles_points_parent_propagation_when_necessary_and_fails_if_incoherent():
    root_action = make_markdown_action_node(identifiant="", points=20)
    action_1 = make_markdown_action_node(
        identifiant="1", pourcentage=50
    )  # hence worth 10 points
    action_2 = make_markdown_action_node(
        identifiant="2", pourcentage=50
    )  # hence worth 10 points
    root_action.actions = [action_1, action_2]
    action_1.actions = [  # All good : it sums to 10
        make_markdown_action_node(identifiant="1.1", points=8),
        make_markdown_action_node(identifiant="1.2", points=2),
        make_markdown_action_node(identifiant="1.3", points=0),
    ]
    action_2.actions = [  # Not good : it sums to 7 instead of 10
        make_markdown_action_node(identifiant="2.1", points=7),
    ]
    (node_converted_events, conversion_failed_events) = prepare_use_case(root_action)

    assert len(node_converted_events) == 0
    assert len(conversion_failed_events) == 1
    assert (
        conversion_failed_events[0].reason
        == "Les valeurs des actions de l'action eci_2 sont renseignées en points, mais leur somme fait 7.0 au lieu de 10.0."
    )


def test_check_referentiel_quotations_handles_children_propagation_when_necessary():
    root_action = make_markdown_action_node(identifiant="root", points=500)
    action_1 = make_markdown_action_node(
        identifiant="1"
    )  # no points specified but children have points that sum to 400
    action_2 = make_markdown_action_node(
        identifiant="2"
    )  # no points specified but children have points that sum to 99
    root_action.actions = [action_1, action_2]

    set_markdown_action_node_children_with_points(action_1, [100, 200, 100])
    set_markdown_action_node_children_with_points(action_2, [99])

    (node_converted_events, conversion_failed_events) = prepare_use_case(root_action)

    assert len(node_converted_events) == 0
    assert len(conversion_failed_events) == 1
    assert (
        conversion_failed_events[0].reason
        == "Les valeurs des actions de l'action eci_root sont renseignées en points, mais leur somme fait 499.0 au lieu de 500.0."
    )
