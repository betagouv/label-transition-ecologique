from dataclasses import dataclass, field
from typing import Literal, Set


IdentiteTypeOption = Literal["syndicat", "commune", "EPCI", "syndicat_traitement"]
IdentitePopulationOption = Literal[
    "moins_de_5000",
    "moins_de_10000",
    "moins_de_20000",
    "moins_de_50000",
    "moins_de_100000",
    "plus_de_20000",
    "plus_de_100000",
]
IdentiteLocalisationOption = Literal["DOM", "Metropole"]


@dataclass
class IdentiteCollectivite:
    """Caracteristiques of a collectivite used in identite function"""

    type: Set[IdentiteTypeOption] = field(default_factory=lambda: set())
    population: Set[IdentitePopulationOption] = field(default_factory=lambda: set())
    localisation: Set[IdentiteLocalisationOption] = field(default_factory=lambda: set())

    def asdict(self):
        return {
            "type": list(self.type),
            "population": list(self.population),
            "localisation": list(self.localisation),
        }
