from business.referentiel.domain.models import events
from business.core.domain.ports.domain_message_bus import (
    InMemoryDomainMessageBus,
)
from business.referentiel.domain.ports.referentiel_repo import (
    InMemoryReferentielRepository,
)
from business.referentiel.domain.use_cases.store_referentiel import (
    StoreReferentielActions,
)

from tests.utils.spy_on_event import spy_on_event
from tests.utils.referentiel_factory import (
    make_action_definition,
    make_action_children,
    make_action_points,
)

definition_entities = [
    make_action_definition(action_id="eci", referentiel="eci"),
    make_action_definition(action_id="eci_1", referentiel="eci"),
    make_action_definition(action_id="eci_2", referentiel="eci"),
    make_action_definition(action_id="eci_1.0", referentiel="eci"),
]
children_entities = [
    make_action_children(action_id="eci", children_ids=["eci_1", "eci_2"]),
    make_action_children(action_id="eci_1", children_ids=["eci_1.0"]),
    make_action_children(action_id="eci_2", children_ids=[]),
    make_action_children(action_id="eci_1.0", children_ids=[]),
]
points_entities = [
    make_action_points(action_id="eci", points=10),
    make_action_points(action_id="eci_1", points=6),
    make_action_points(action_id="eci_2", points=4),
    make_action_points(action_id="eci_1.0", points=4),
]


def test_can_store_correct_referentiel():
    bus = InMemoryDomainMessageBus()
    referentiel_repo = InMemoryReferentielRepository()

    use_case = StoreReferentielActions(bus, referentiel_repo)

    trigger = events.MarkdownReferentielNodeConvertedToEntities(
        definition_entities, points_entities, children_entities, referentiel="eci"
    )

    entity_stored_events = spy_on_event(bus, events.ReferentielActionsStored)
    failure_events = spy_on_event(bus, events.ReferentielStorageFailed)

    use_case.execute(trigger)

    assert len(entity_stored_events) == 1
    assert len(failure_events) == 0
    assert len(referentiel_repo._actions_by_ref["eci"].points) == 4
    assert len(referentiel_repo._actions_by_ref["eci"].children) == 4
    assert len(referentiel_repo._actions_by_ref["eci"].definitions) == 4


def test_wont_store_if_incoherent_children():
    bus = InMemoryDomainMessageBus()
    referentiel_repo = InMemoryReferentielRepository()
    use_case = StoreReferentielActions(bus, referentiel_repo)

    incoherent_children_entities = [
        make_action_children(action_id="eci", children_ids=["eci_1", "eci_2"]),
        make_action_children(action_id="eci_1", children_ids=["eci_1.0"]),
        make_action_children(
            action_id="eci_2", children_ids=["eci_1.1"]
        ),  # child "eci_1.1" is refered but not defined
        make_action_children(action_id="eci_1.0", children_ids=[]),
    ]

    trigger_with_incoherence = events.MarkdownReferentielNodeConvertedToEntities(
        definition_entities,
        points_entities,
        incoherent_children_entities,
        referentiel="eci",
    )

    entity_stored_events = spy_on_event(bus, events.ReferentielActionsStored)
    failure_events = spy_on_event(bus, events.ReferentielStorageFailed)

    use_case.execute(trigger_with_incoherence)

    assert len(failure_events) == 1
    assert (
        failure_events[0].reason
        == "Inconsistency in action eci_2: some children id are refered but defined."
    )
    assert len(entity_stored_events) == 0
    assert "eci" not in referentiel_repo._actions_by_ref
