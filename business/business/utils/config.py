import abc
from pathlib import Path
from typing import List, Optional
import os
from dotenv import load_dotenv

from realtime_py import Socket
from business.evaluation.domain.ports.action_statut_update_event_repo import (
    AbstractActionStatutUpdateEventRepository,
    InMemoryActionStatutUpdateEventRepository,
)


from business.referentiel.adapters.json_referentiel_repo import (
    JsonReferentielRepository,
)
from business.evaluation.adapters.replay_realtime import ReplayRealtime
from business.evaluation.adapters.supabase_realtime import SupabaseRealtime
from business.core.domain.ports.domain_message_bus import AbstractDomainMessageBus
from business.referentiel.domain.ports.referentiel_repo import (
    AbstractReferentielRepository,
)
from business.evaluation.adapters.postgres_action_score_repo import (
    PostgresActionScoreRepository,
)
from business.referentiel.adapters.sql_referentiel_repo import SqlReferentielRepository
from business.evaluation.domain.ports.realtime import (
    AbstractConverter,
    AbstractRealtime,
    CollectiviteActionStatutUpdateConverter,
)
from business.evaluation.domain.ports.action_score_repo import (
    AbstractActionScoreRepository,
    InMemoryActionScoreRepository,
)
from business.evaluation.adapters.postgres_action_statut_repo import (
    PostgresActionStatutRepository,
)
from business.evaluation.adapters.postgres_action_statut_update_event_repo import (
    PostgresActionStatutUpdateEventRepository,
)
from business.evaluation.domain.ports.action_status_repo import (
    AbstractActionStatutRepository,
    InMemoryActionStatutRepository,
)
from business.evaluation.domain.use_cases import *
from business.utils.get_postgres_connection_params import get_postgres_connection_params
from business.utils.use_case import UseCase
from .environment_variables import (
    EnvironmentVariables,
    get_env_variables,
)

load_dotenv()


class PrepareBusError(Exception):
    pass


class Config:
    def __init__(
        self,
        domain_message_bus: AbstractDomainMessageBus,
        env_variables: Optional[EnvironmentVariables] = None,
    ) -> None:
        self.domain_message_bus = domain_message_bus
        self.ENV = env_variables or get_env_variables()

    @abc.abstractmethod
    def prepare_use_cases(self) -> List[UseCase]:
        raise NotImplementedError

    def get_postgres_connection(self):
        import psycopg

        postgres_url = os.getenv("POSTGRES_URL")
        if postgres_url is None:
            raise EnvironmentError("Missing POSTGRES_URL env variable. ")
        connection = psycopg.connect(**get_postgres_connection_params(postgres_url))
        return connection

    def get_referentiel_repo(self) -> AbstractReferentielRepository:
        if self.ENV.referentiels_repository == "JSON":
            if self.ENV.referentiels_repo_file is None:
                raise ValueError(
                    "`REFERENTIEL_REPO_JSON` should de specified in mode JSON"
                )
            return JsonReferentielRepository(Path(self.ENV.referentiels_repo_file))
        elif self.ENV.referentiels_repository == "SQL":
            if self.ENV.referentiels_repo_file is None:
                raise ValueError(
                    "`REFERENTIEL_REPO_JSON` should de specified in mode JSON"
                )
            return SqlReferentielRepository(Path(self.ENV.referentiels_repo_file))
        else:
            # PostgresReferentielRepository()
            raise NotImplementedError(
                f"Referentiels repo adapter {self.ENV.referentiels_repository} not yet implemented."
            )

    def get_scores_repo(self) -> AbstractActionScoreRepository:
        if self.ENV.labelisation_repositories == "IN_MEMORY":
            return InMemoryActionScoreRepository()
        elif self.ENV.labelisation_repositories == "POSTGRES":
            return PostgresActionScoreRepository(
                connection=self.get_postgres_connection()
            )
        else:
            raise NotImplementedError(
                f"Scores repo adapter {self.ENV.labelisation_repositories} not yet implemented."
            )

    def get_statuts_repo(self) -> AbstractActionStatutRepository:
        if self.ENV.labelisation_repositories == "IN_MEMORY":
            return InMemoryActionStatutRepository()
        elif self.ENV.labelisation_repositories == "POSTGRES":
            return PostgresActionStatutRepository(
                connection=self.get_postgres_connection()
            )
        else:
            raise NotImplementedError(
                f"Statuts repo adapter {self.ENV.labelisation_repositories} not yet implemented."
            )

    def get_action_statut_update_event_repo(
        self,
    ) -> AbstractActionStatutUpdateEventRepository:
        if self.ENV.labelisation_repositories == "IN_MEMORY":
            return InMemoryActionStatutUpdateEventRepository()
        elif self.ENV.labelisation_repositories == "POSTGRES":
            return PostgresActionStatutUpdateEventRepository(
                connection=self.get_postgres_connection()
            )
        else:
            raise NotImplementedError(
                f"Statuts repo adapter {self.ENV.labelisation_repositories} not implemented."
            )

    def get_realtime(self, socket: Optional[Socket]) -> AbstractRealtime:

        converters: List[AbstractConverter] = [
            CollectiviteActionStatutUpdateConverter()
        ]

        if self.ENV.realtime == "REPLAY":
            return ReplayRealtime(self.domain_message_bus, converters=converters)
        elif self.ENV.realtime == "SUPABASE":
            if not socket:
                raise ValueError(
                    "In SUPABASE realtime mode, you should specify SUPABASE_WS_URL."
                )
            return SupabaseRealtime(
                self.domain_message_bus, converters=converters, socket=socket
            )
        else:
            raise NotImplementedError(
                f"Realtime adapter {self.ENV.realtime} not yet implemented."
            )
