from business.evaluation.personnalisation.execute_personnalisation_regles import (
  ActionPersonnalisationConsequence, execute_personnalisation_regles)
from business.evaluation.personnalisation.regles_parser import ReglesParser
from business.utils.models.actions import ActionId
from business.utils.models.identite import IdentiteCollectivite
from business.utils.models.regles import ActionRegles, Regle
from business.utils.models.reponse import Reponse


def test_execute_personnalisation_regles_when_all_reponses_are_given():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("eci_1"),
                [
                    Regle("reponse(mobilite_1, VRAI)", "desactivation"),
                    Regle("reponse(mobilite_2)", "reduction"),
                ],
            )
        ]
    )
    reponses = [Reponse("mobilite_1", True), Reponse("mobilite_2", 0.6)]
    assert execute_personnalisation_regles(
        regles_parser, reponses, IdentiteCollectivite()
    )[ActionId("eci_1")] == ActionPersonnalisationConsequence(
        desactive=True, potentiel_perso=0.6
    )


def test_execute_personnalisation_regles_when_some_reponses_are_not_given():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("eci_1"),
                [
                    Regle("reponse(mobilite_1, VRAI)", "desactivation"),
                    Regle("reponse(mobilite_2)", "reduction"),
                ],
            )
        ]
    )
    reponses = [Reponse("mobilite_2", 0.2)]
    assert execute_personnalisation_regles(
        regles_parser, reponses, IdentiteCollectivite()
    )[ActionId("eci_1")] == ActionPersonnalisationConsequence(
        desactive=False, potentiel_perso=0.2
    )


def test_execute_personnalisation_regles_when_both_identite_type_and_reponse_are_needed():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("eci_1"),
                [
                    Regle(
                        "identite(type, EPCI) et identite(localisation, DOM) et reponse(EP_1, EP_1_c)",
                        "desactivation",
                    ),
                ],
            )
        ]
    )
    reponses = [Reponse("EP_1", "EP_1_c")]
    identite = IdentiteCollectivite(type={"EPCI", "commune"}, localisation={"DOM"})

    assert execute_personnalisation_regles(regles_parser, reponses, identite) == {
        ActionId("eci_1"): ActionPersonnalisationConsequence(
            desactive=True, potentiel_perso=None
        )
    }


def test_execute_personnalisation_regles_with_identite_population():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("eci_1"),
                [
                    Regle(
                        "si identite(population, moins_de_5000) et reponse (EP_1, EP_1_b) alors 2/12",
                        "reduction",
                    ),
                ],
            )
        ]
    )
    reponses = [Reponse("EP_1", "EP_1_b")]
    identite = IdentiteCollectivite(population={"moins_de_5000"})

    assert execute_personnalisation_regles(regles_parser, reponses, identite) == {
        ActionId("eci_1"): ActionPersonnalisationConsequence(
            desactive=None, potentiel_perso=2 / 12
        )
    }


def test_execute_personnalisation_regles_with_reduction_depends_on_score():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("eci_1"),
                [
                    Regle(
                        "min(score(cae_1.2.3), 2/12)",
                        "score",
                    ),
                ],
            )
        ]
    )
    reponses = [Reponse("dechets_2", "NON")]
    identite = IdentiteCollectivite(type={"commune"})

    assert execute_personnalisation_regles(regles_parser, reponses, identite) == {
        ActionId("eci_1"): ActionPersonnalisationConsequence(
            desactive=None,
            potentiel_perso=None,
            score_formule="min(score(cae_1.2.3), 0.16666666666666666)",
        )
    }

def test_execute_personnalisation_regles_without_answer():
    regles_parser = ReglesParser(
        [
            ActionRegles(
                ActionId("cae_6.3.1"),
                [
                    Regle(
                        "si identite(type, commune) alors max (reponse(dev_eco_2), 2/8) \n",
                        "reduction",
                    ),
                ],
            )
        ]
    )
    reponses = [Reponse("dev_eco_4", "NON")]
    identite = IdentiteCollectivite(type={"commune"})

    assert execute_personnalisation_regles(regles_parser, reponses, identite) == {
        ActionId("cae_6.3.1"): ActionPersonnalisationConsequence(
            desactive=None,
            potentiel_perso=None,
            score_formule=None,
        )
    }
