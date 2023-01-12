export type Json =
  | string
  | number
  | boolean
  | null
  | {[key: string]: Json}
  | Json[];

export interface Database {
  public: {
    Enums: {
      action_categorie: 'bases' | 'mise en œuvre' | 'effets';
      action_discussion_statut: 'ouvert' | 'ferme';
      action_type:
        | 'referentiel'
        | 'axe'
        | 'sous-axe'
        | 'action'
        | 'sous-action'
        | 'tache';
      audit_statut: 'non_audite' | 'en_cours' | 'audite';
      avancement:
        | 'fait'
        | 'pas_fait'
        | 'programme'
        | 'non_renseigne'
        | 'detaille';
      collectivite_filtre_type: 'population' | 'score' | 'remplissage';
      fiche_action_cibles:
        | 'Grand public et associations'
        | 'Autres collectivités du territoire'
        | 'Acteurs économiques';
      fiche_action_niveaux_priorite: 'Élevé' | 'Moyen' | 'Bas';
      fiche_action_piliers_eci:
        | 'Approvisionnement durable'
        | 'Écoconception'
        | 'Écologie industrielle (et territoriale)'
        | 'Économie de la fonctionnalité'
        | 'Consommation responsable'
        | 'Allongement de la durée d’usage'
        | 'Recyclage';
      fiche_action_resultats_attendus:
        | 'Adaptation au changement climatique'
        | 'Allongement de la durée d’usage'
        | 'Amélioration de la qualité de vie'
        | 'Développement des énergies renouvelables'
        | 'Efficacité énergétique'
        | 'Préservation de la biodiversité'
        | 'Réduction des consommations énergétiques'
        | 'Réduction des déchets'
        | 'Réduction des émissions de gaz à effet de serre'
        | 'Réduction des polluants atmosphériques'
        | 'Sobriété énergétique';
      fiche_action_statuts:
        | 'À venir'
        | 'En cours'
        | 'Réalisé'
        | 'En pause'
        | 'Abandonné';
      filterable_type_collectivite:
        | 'commune'
        | 'syndicat'
        | 'CU'
        | 'CC'
        | 'POLEM'
        | 'METRO'
        | 'CA'
        | 'EPT'
        | 'PETR';
      indicateur_group: 'cae' | 'crte' | 'eci';
      membre_fonction:
        | 'referent'
        | 'conseiller'
        | 'technique'
        | 'politique'
        | 'partenaire';
      nature:
        | 'SMF'
        | 'CU'
        | 'CC'
        | 'SIVOM'
        | 'POLEM'
        | 'METRO'
        | 'SMO'
        | 'CA'
        | 'EPT'
        | 'SIVU'
        | 'PETR';
      niveau_acces: 'admin' | 'edition' | 'lecture';
      preuve_type:
        | 'complementaire'
        | 'reglementaire'
        | 'labellisation'
        | 'rapport'
        | 'audit';
      question_type: 'choix' | 'binaire' | 'proportion';
      referentiel: 'eci' | 'cae';
      regle_type: 'score' | 'desactivation' | 'reduction';
      role_name: 'agent' | 'referent' | 'conseiller' | 'auditeur' | 'aucun';
      thematique_completude: 'complete' | 'a_completer';
      type_collectivite: 'EPCI' | 'commune' | 'syndicat';
      usage_action: 'clic' | 'vue' | 'telechargement' | 'saisie' | 'selection';
      usage_fonction:
        | 'aide'
        | 'preuve'
        | 'graphique'
        | 'decrocher_les_etoiles'
        | 'rejoindre_une_collectivite'
        | 'collectivite_carte'
        | 'pagination'
        | 'filtre'
        | 'recherche'
        | 'filtre_region'
        | 'filtre_departement'
        | 'filtre_type'
        | 'filtre_population'
        | 'filtre_referentiel'
        | 'filtre_niveau'
        | 'filtre_remplissage';
      visite_onglet:
        | 'progression'
        | 'priorisation'
        | 'detail'
        | 'suivi'
        | 'preuve'
        | 'indicateur'
        | 'historique'
        | 'comparaison'
        | 'critere';
      visite_page:
        | 'autre'
        | 'signin'
        | 'signup'
        | 'recover'
        | 'recover_landing'
        | 'mon_compte'
        | 'mes_collectivites'
        | 'rejoindre'
        | 'toutes_collectivites'
        | 'tableau_de_bord'
        | 'referentiel'
        | 'indicateur'
        | 'action'
        | 'labellisation'
        | 'personnalisation'
        | 'membre'
        | 'bibliotheque'
        | 'historique'
        | 'plan'
        | 'fiche';
      visite_tag:
        | 'cae'
        | 'eci'
        | 'crte'
        | 'referentiel'
        | 'thematique'
        | 'personnalise';
    };
    Functions: {
      action_contexte: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      action_down_to_tache: {
        Args: {
          identifiant: string;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Returns: unknown;
      };
      action_exemples: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      action_perimetre_evaluation: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      action_preuve: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      action_reduction_potentiel: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      action_ressources: {
        Args: {id: unknown};
        Returns: Record<string, unknown>[];
      };
      add_bibliotheque_fichier: {
        Args: {collectivite_id: number; filename: string; hash: string};
        Returns: unknown;
      };
      add_compression_policy: {
        Args: {
          compress_after: unknown;
          hypertable: unknown;
          if_not_exists: boolean;
        };
        Returns: number;
      };
      add_continuous_aggregate_policy: {
        Args: {
          continuous_aggregate: unknown;
          end_offset: unknown;
          if_not_exists: boolean;
          schedule_interval: unknown;
          start_offset: unknown;
        };
        Returns: number;
      };
      add_data_node: {
        Args: {
          bootstrap: boolean;
          database: unknown;
          host: string;
          if_not_exists: boolean;
          node_name: unknown;
          password: string;
          port: number;
        };
        Returns: Record<string, unknown>[];
      };
      add_dimension: {
        Args: {
          chunk_time_interval: unknown;
          column_name: unknown;
          hypertable: unknown;
          if_not_exists: boolean;
          number_partitions: number;
          partitioning_func: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      add_job: {
        Args: {
          config: Json;
          initial_start: string;
          proc: unknown;
          schedule_interval: unknown;
          scheduled: boolean;
        };
        Returns: number;
      };
      add_reorder_policy: {
        Args: {
          hypertable: unknown;
          if_not_exists: boolean;
          index_name: unknown;
        };
        Returns: number;
      };
      add_retention_policy: {
        Args: {drop_after: unknown; if_not_exists: boolean; relation: unknown};
        Returns: number;
      };
      add_user: {
        Args: {
          collectivite_id: number;
          email: string;
          niveau: Database['public']['Enums']['niveau_acces'];
        };
        Returns: Json;
      };
      ajouter_action: {
        Args: {action_id: unknown; fiche_id: number};
        Returns: undefined;
      };
      ajouter_annexe: {
        Args: {annexe: unknown; fiche_id: number};
        Returns: unknown;
      };
      ajouter_fiche_action_dans_un_axe: {
        Args: {axe_id: number; fiche_id: number};
        Returns: undefined;
      };
      ajouter_indicateur: {
        Args: {fiche_id: number; indicateur: unknown};
        Returns: undefined;
      };
      ajouter_partenaire: {
        Args: {fiche_id: number; partenaire: unknown};
        Returns: unknown;
      };
      ajouter_pilote: {
        Args: {fiche_id: number; pilote: unknown};
        Returns: unknown;
      };
      ajouter_referent: {
        Args: {fiche_id: number; referent: unknown};
        Returns: unknown;
      };
      ajouter_sous_thematique: {
        Args: {fiche_id: number; thematique_id: number};
        Returns: undefined;
      };
      ajouter_structure: {
        Args: {fiche_id: number; structure: unknown};
        Returns: unknown;
      };
      ajouter_thematique: {
        Args: {fiche_id: number; thematique: string};
        Returns: undefined;
      };
      alter_job: {
        Args: {
          config: Json;
          if_exists: boolean;
          job_id: number;
          max_retries: number;
          max_runtime: unknown;
          next_start: string;
          retry_period: unknown;
          schedule_interval: unknown;
          scheduled: boolean;
        };
        Returns: Record<string, unknown>[];
      };
      approximate_row_count: {
        Args: {relation: unknown};
        Returns: number;
      };
      attach_data_node: {
        Args: {
          hypertable: unknown;
          if_not_attached: boolean;
          node_name: unknown;
          repartition: boolean;
        };
        Returns: Record<string, unknown>[];
      };
      attach_tablespace: {
        Args: {
          hypertable: unknown;
          if_not_attached: boolean;
          tablespace: unknown;
        };
        Returns: undefined;
      };
      business_insert_actions: {
        Args: {
          computed_points: unknown;
          definitions: unknown;
          relations: unknown;
        };
        Returns: undefined;
      };
      business_update_actions: {
        Args: {computed_points: unknown; definitions: unknown};
        Returns: undefined;
      };
      business_upsert_indicateurs: {
        Args: {indicateur_actions: unknown; indicateur_definitions: unknown};
        Returns: undefined;
      };
      chunk_compression_stats: {
        Args: {hypertable: unknown};
        Returns: Record<string, unknown>[];
      };
      chunks_detailed_size: {
        Args: {hypertable: unknown};
        Returns: Record<string, unknown>[];
      };
      claim_collectivite: {
        Args: {id: number};
        Returns: Json;
      };
      collectivite_membres: {
        Args: {id: number};
        Returns: Record<string, unknown>[];
      };
      compress_chunk: {
        Args: {if_not_compressed: boolean; uncompressed_chunk: unknown};
        Returns: unknown;
      };
      consume_invitation: {
        Args: {id: string};
        Returns: undefined;
      };
      create_distributed_hypertable: {
        Args: {
          associated_schema_name: unknown;
          associated_table_prefix: unknown;
          chunk_sizing_func: unknown;
          chunk_target_size: string;
          chunk_time_interval: unknown;
          create_default_indexes: boolean;
          data_nodes: unknown;
          if_not_exists: boolean;
          migrate_data: boolean;
          number_partitions: number;
          partitioning_column: unknown;
          partitioning_func: unknown;
          relation: unknown;
          replication_factor: number;
          time_column_name: unknown;
          time_partitioning_func: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      create_distributed_restore_point: {
        Args: {name: string};
        Returns: Record<string, unknown>[];
      };
      create_hypertable: {
        Args: {
          associated_schema_name: unknown;
          associated_table_prefix: unknown;
          chunk_sizing_func: unknown;
          chunk_target_size: string;
          chunk_time_interval: unknown;
          create_default_indexes: boolean;
          data_nodes: unknown;
          if_not_exists: boolean;
          migrate_data: boolean;
          number_partitions: number;
          partitioning_column: unknown;
          partitioning_func: unknown;
          relation: unknown;
          replication_factor: number;
          time_column_name: unknown;
          time_partitioning_func: unknown;
        };
        Returns: Record<string, unknown>[];
      };
      decompress_chunk: {
        Args: {if_compressed: boolean; uncompressed_chunk: unknown};
        Returns: unknown;
      };
      delete_data_node: {
        Args: {
          drop_database: boolean;
          force: boolean;
          if_exists: boolean;
          node_name: unknown;
          repartition: boolean;
        };
        Returns: boolean;
      };
      delete_job: {
        Args: {job_id: number};
        Returns: undefined;
      };
      detach_data_node: {
        Args: {
          force: boolean;
          hypertable: unknown;
          if_attached: boolean;
          node_name: unknown;
          repartition: boolean;
        };
        Returns: number;
      };
      detach_tablespace: {
        Args: {hypertable: unknown; if_attached: boolean; tablespace: unknown};
        Returns: number;
      };
      detach_tablespaces: {
        Args: {hypertable: unknown};
        Returns: number;
      };
      drop_chunks: {
        Args: {
          newer_than: unknown;
          older_than: unknown;
          relation: unknown;
          verbose: boolean;
        };
        Returns: string;
      };
      enlever_action: {
        Args: {action_id: unknown; fiche_id: number};
        Returns: undefined;
      };
      enlever_annexe: {
        Args: {annexe: unknown; fiche_id: number; supprimer: boolean};
        Returns: undefined;
      };
      enlever_fiche_action_d_un_axe: {
        Args: {axe_id: number; fiche_id: number};
        Returns: undefined;
      };
      enlever_indicateur: {
        Args: {fiche_id: number; indicateur: unknown};
        Returns: undefined;
      };
      enlever_partenaire: {
        Args: {fiche_id: number; partenaire: unknown};
        Returns: undefined;
      };
      enlever_pilote: {
        Args: {fiche_id: number; pilote: unknown};
        Returns: undefined;
      };
      enlever_referent: {
        Args: {fiche_id: number; referent: unknown};
        Returns: undefined;
      };
      enlever_sous_thematique: {
        Args: {fiche_id: number; thematique_id: number};
        Returns: undefined;
      };
      enlever_structure: {
        Args: {fiche_id: number; structure: unknown};
        Returns: undefined;
      };
      enlever_thematique: {
        Args: {fiche_id: number; thematique: string};
        Returns: undefined;
      };
      est_auditeur: {
        Args: {col: number};
        Returns: boolean;
      };
      gbt_bit_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_bpchar_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_bytea_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_cash_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_cash_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_date_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_date_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_decompress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_enum_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_enum_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_float4_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_float4_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_float8_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_float8_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_inet_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int2_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int2_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int4_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int4_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int8_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_int8_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_intv_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_intv_decompress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_intv_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_macad8_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_macad8_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_macad_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_macad_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_numeric_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_oid_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_oid_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_text_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_time_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_time_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_timetz_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_ts_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_ts_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_tstz_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_uuid_compress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_uuid_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_var_decompress: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbt_var_fetch: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey16_in: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey16_out: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey32_in: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey32_out: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey4_in: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey4_out: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey8_in: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey8_out: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey_var_in: {
        Args: {'': unknown};
        Returns: unknown;
      };
      gbtreekey_var_out: {
        Args: {'': unknown};
        Returns: unknown;
      };
      get_telemetry_report: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      have_admin_acces: {
        Args: {id: number};
        Returns: boolean;
      };
      have_discussion_edition_acces: {
        Args: {id: number};
        Returns: boolean;
      };
      have_discussion_lecture_acces: {
        Args: {id: number};
        Returns: boolean;
      };
      have_edition_acces: {
        Args: {id: number};
        Returns: boolean;
      };
      have_lecture_acces: {
        Args: {id: number};
        Returns: boolean;
      };
      have_one_of_niveaux_acces: {
        Args: {id: number; niveaux: unknown};
        Returns: boolean;
      };
      hypertable_compression_stats: {
        Args: {hypertable: unknown};
        Returns: Record<string, unknown>[];
      };
      hypertable_detailed_size: {
        Args: {hypertable: unknown};
        Returns: Record<string, unknown>[];
      };
      hypertable_index_size: {
        Args: {index_name: unknown};
        Returns: number;
      };
      hypertable_size: {
        Args: {hypertable: unknown};
        Returns: number;
      };
      interpolate:
        | {
            Args: {
              next: Record<string, unknown>[];
              prev: Record<string, unknown>[];
              value: number;
            };
            Returns: number;
          }
        | {
            Args: {
              next: Record<string, unknown>[];
              prev: Record<string, unknown>[];
              value: number;
            };
            Returns: number;
          }
        | {
            Args: {
              next: Record<string, unknown>[];
              prev: Record<string, unknown>[];
              value: number;
            };
            Returns: number;
          }
        | {
            Args: {
              next: Record<string, unknown>[];
              prev: Record<string, unknown>[];
              value: number;
            };
            Returns: number;
          }
        | {
            Args: {
              next: Record<string, unknown>[];
              prev: Record<string, unknown>[];
              value: number;
            };
            Returns: number;
          };
      is_agent_of: {
        Args: {id: number};
        Returns: boolean;
      };
      is_any_role_on: {
        Args: {id: number};
        Returns: boolean;
      };
      is_authenticated: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      is_bucket_writer: {
        Args: {id: string};
        Returns: boolean;
      };
      is_referent_of: {
        Args: {id: number};
        Returns: boolean;
      };
      is_service_role: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      json_matches_schema: {
        Args: {instance: Json; schema: Json};
        Returns: boolean;
      };
      jsonb_matches_schema: {
        Args: {instance: Json; schema: Json};
        Returns: boolean;
      };
      labellisation_demande: {
        Args: {
          collectivite_id: number;
          etoiles: '1' | '2' | '3' | '4' | '5';
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Returns: unknown;
      };
      labellisation_parcours: {
        Args: {collectivite_id: number};
        Returns: Record<string, unknown>[];
      };
      labellisation_submit_demande: {
        Args: {
          collectivite_id: number;
          etoiles: '1' | '2' | '3' | '4' | '5';
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Returns: unknown;
      };
      locf: {
        Args: {prev: unknown; treat_null_as_missing: boolean; value: unknown};
        Returns: unknown;
      };
      move_chunk: {
        Args: {
          chunk: unknown;
          destination_tablespace: unknown;
          index_destination_tablespace: unknown;
          reorder_index: unknown;
          verbose: boolean;
        };
        Returns: undefined;
      };
      naturalsort: {
        Args: {'': string};
        Returns: string;
      };
      personnes_collectivite: {
        Args: {collectivite_id: number};
        Returns: unknown;
      };
      peut_modifier_la_fiche: {
        Args: {fiche_id: number};
        Returns: boolean;
      };
      plan_action: {
        Args: {id: number};
        Returns: Json;
      };
      plans_action_collectivite: {
        Args: {collectivite_id: number};
        Returns: unknown;
      };
      quit_collectivite: {
        Args: {id: number};
        Returns: Json;
      };
      referent_contact: {
        Args: {id: number};
        Returns: Json;
      };
      referent_contacts: {
        Args: {id: number};
        Returns: Record<string, unknown>[];
      };
      referentiel_down_to_action: {
        Args: {referentiel: Database['public']['Enums']['referentiel']};
        Returns: unknown;
      };
      remove_compression_policy: {
        Args: {hypertable: unknown; if_exists: boolean};
        Returns: boolean;
      };
      remove_continuous_aggregate_policy: {
        Args: {continuous_aggregate: unknown; if_not_exists: boolean};
        Returns: undefined;
      };
      remove_membre_from_collectivite: {
        Args: {collectivite_id: number; email: string};
        Returns: Json;
      };
      remove_reorder_policy: {
        Args: {hypertable: unknown; if_exists: boolean};
        Returns: undefined;
      };
      remove_retention_policy: {
        Args: {if_exists: boolean; relation: unknown};
        Returns: undefined;
      };
      reorder_chunk: {
        Args: {chunk: unknown; index: unknown; verbose: boolean};
        Returns: undefined;
      };
      retool_user_list: {
        Args: Record<PropertyKey, never>;
        Returns: Record<string, unknown>[];
      };
      save_reponse: {
        Args: {'': Json};
        Returns: undefined;
      };
      set_adaptive_chunking: {
        Args: {chunk_target_size: string; hypertable: unknown};
        Returns: Record<string, unknown>[];
      };
      set_chunk_time_interval: {
        Args: {
          chunk_time_interval: unknown;
          dimension_name: unknown;
          hypertable: unknown;
        };
        Returns: undefined;
      };
      set_integer_now_func: {
        Args: {
          hypertable: unknown;
          integer_now_func: unknown;
          replace_if_exists: boolean;
        };
        Returns: undefined;
      };
      set_number_partitions: {
        Args: {
          dimension_name: unknown;
          hypertable: unknown;
          number_partitions: number;
        };
        Returns: undefined;
      };
      set_replication_factor: {
        Args: {hypertable: unknown; replication_factor: number};
        Returns: undefined;
      };
      show_chunks: {
        Args: {newer_than: unknown; older_than: unknown; relation: unknown};
        Returns: unknown;
      };
      show_tablespaces: {
        Args: {hypertable: unknown};
        Returns: unknown;
      };
      teapot: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      test_add_random_user: {
        Args: {
          collectivite_id: number;
          niveau: Database['public']['Enums']['niveau_acces'];
        };
        Returns: Record<string, unknown>[];
      };
      test_attach_user: {
        Args: {
          collectivite_id: number;
          niveau: Database['public']['Enums']['niveau_acces'];
          user_id: string;
        };
        Returns: undefined;
      };
      test_clear_history: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_create_user: {
        Args: {email: string; nom: string; prenom: string; user_id: string};
        Returns: undefined;
      };
      test_disable_fake_score_generation: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_enable_fake_score_generation: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_fulfill: {
        Args: {collectivite_id: number; etoile: '1' | '2' | '3' | '4' | '5'};
        Returns: undefined;
      };
      test_generate_fake_scores: {
        Args: {
          collectivite_id: number;
          referentiel: Database['public']['Enums']['referentiel'];
          statuts: unknown;
        };
        Returns: Json;
      };
      test_remove_user: {
        Args: {email: string};
        Returns: undefined;
      };
      test_reset: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_action_statut_and_desc: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_audit: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_discussion_et_commentaires: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_droits: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_membres: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_plan_action: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_preuves: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_reponse: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_reset_users: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
      test_write_scores: {
        Args: {collectivite_id: number; scores: unknown};
        Returns: undefined;
      };
      time_bucket:
        | {
            Args: {bucket_width: unknown; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; origin: string; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; origin: string; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; origin: string; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: number; offset: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: number; offset: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: number; offset: number; ts: number};
            Returns: number;
          }
        | {
            Args: {bucket_width: unknown; offset: unknown; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; offset: unknown; ts: string};
            Returns: string;
          }
        | {
            Args: {bucket_width: unknown; offset: unknown; ts: string};
            Returns: string;
          };
      time_bucket_gapfill:
        | {
            Args: {
              bucket_width: unknown;
              finish: string;
              start: string;
              ts: string;
            };
            Returns: string;
          }
        | {
            Args: {
              bucket_width: number;
              finish: number;
              start: number;
              ts: number;
            };
            Returns: number;
          }
        | {
            Args: {
              bucket_width: number;
              finish: number;
              start: number;
              ts: number;
            };
            Returns: number;
          }
        | {
            Args: {
              bucket_width: number;
              finish: number;
              start: number;
              ts: number;
            };
            Returns: number;
          }
        | {
            Args: {
              bucket_width: unknown;
              finish: string;
              start: string;
              ts: string;
            };
            Returns: string;
          }
        | {
            Args: {
              bucket_width: unknown;
              finish: string;
              start: string;
              ts: string;
            };
            Returns: string;
          };
      timescaledb_fdw_handler: {
        Args: Record<PropertyKey, never>;
        Returns: unknown;
      };
      timescaledb_post_restore: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      timescaledb_pre_restore: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      unaccent: {
        Args: {'': string};
        Returns: string;
      };
      unaccent_init: {
        Args: {'': unknown};
        Returns: unknown;
      };
      update_collectivite_membre_champ_intervention: {
        Args: {
          champ_intervention: unknown;
          collectivite_id: number;
          membre_id: string;
        };
        Returns: Json;
      };
      update_collectivite_membre_details_fonction: {
        Args: {
          collectivite_id: number;
          details_fonction: string;
          membre_id: string;
        };
        Returns: Json;
      };
      update_collectivite_membre_fonction: {
        Args: {
          collectivite_id: number;
          fonction: Database['public']['Enums']['membre_fonction'];
          membre_id: string;
        };
        Returns: Json;
      };
      update_collectivite_membre_niveau_acces: {
        Args: {
          collectivite_id: number;
          membre_id: string;
          niveau_acces: Database['public']['Enums']['niveau_acces'];
        };
        Returns: Json;
      };
    };
    Tables: {
      abstract_any_indicateur_value: {
        Insert: {
          annee: number;
          modified_at?: string;
          valeur?: number | null;
        };
        Row: {
          annee: number;
          modified_at: string;
          valeur: number | null;
        };
        Update: {
          annee?: number;
          modified_at?: string;
          valeur?: number | null;
        };
      };
      abstract_modified_at: {
        Insert: {
          modified_at?: string;
        };
        Row: {
          modified_at: string;
        };
        Update: {
          modified_at?: string;
        };
      };
      action_commentaire: {
        Insert: {
          action_id: string;
          collectivite_id: number;
          commentaire: string;
          modified_at?: string;
          modified_by?: string;
        };
        Row: {
          action_id: string;
          collectivite_id: number;
          commentaire: string;
          modified_at: string;
          modified_by: string;
        };
        Update: {
          action_id?: string;
          collectivite_id?: number;
          commentaire?: string;
          modified_at?: string;
          modified_by?: string;
        };
      };
      action_computed_points: {
        Insert: {
          action_id: string;
          modified_at?: string;
          value: number;
        };
        Row: {
          action_id: string;
          modified_at: string;
          value: number;
        };
        Update: {
          action_id?: string;
          modified_at?: string;
          value?: number;
        };
      };
      action_definition: {
        Insert: {
          action_id: string;
          categorie?: Database['public']['Enums']['action_categorie'] | null;
          contexte: string;
          description: string;
          exemples: string;
          identifiant: string;
          modified_at?: string;
          nom: string;
          perimetre_evaluation: string;
          points?: number | null;
          pourcentage?: number | null;
          preuve?: string | null;
          reduction_potentiel: string;
          referentiel: Database['public']['Enums']['referentiel'];
          ressources: string;
        };
        Row: {
          action_id: string;
          categorie: Database['public']['Enums']['action_categorie'] | null;
          contexte: string;
          description: string;
          exemples: string;
          identifiant: string;
          modified_at: string;
          nom: string;
          perimetre_evaluation: string;
          points: number | null;
          pourcentage: number | null;
          preuve: string | null;
          reduction_potentiel: string;
          referentiel: Database['public']['Enums']['referentiel'];
          ressources: string;
        };
        Update: {
          action_id?: string;
          categorie?: Database['public']['Enums']['action_categorie'] | null;
          contexte?: string;
          description?: string;
          exemples?: string;
          identifiant?: string;
          modified_at?: string;
          nom?: string;
          perimetre_evaluation?: string;
          points?: number | null;
          pourcentage?: number | null;
          preuve?: string | null;
          reduction_potentiel?: string;
          referentiel?: Database['public']['Enums']['referentiel'];
          ressources?: string;
        };
      };
      action_discussion: {
        Insert: {
          action_id: string;
          collectivite_id: number;
          created_at?: string;
          created_by?: string;
          id?: number;
          modified_at?: string;
          status?: Database['public']['Enums']['action_discussion_statut'];
        };
        Row: {
          action_id: string;
          collectivite_id: number;
          created_at: string;
          created_by: string;
          id: number;
          modified_at: string;
          status: Database['public']['Enums']['action_discussion_statut'];
        };
        Update: {
          action_id?: string;
          collectivite_id?: number;
          created_at?: string;
          created_by?: string;
          id?: number;
          modified_at?: string;
          status?: Database['public']['Enums']['action_discussion_statut'];
        };
      };
      action_discussion_commentaire: {
        Insert: {
          created_at?: string;
          created_by?: string;
          discussion_id: number;
          id?: number;
          message: string;
        };
        Row: {
          created_at: string;
          created_by: string;
          discussion_id: number;
          id: number;
          message: string;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          discussion_id?: number;
          id?: number;
          message?: string;
        };
      };
      action_relation: {
        Insert: {
          id: string;
          parent?: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Row: {
          id: string;
          parent: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Update: {
          id?: string;
          parent?: string | null;
          referentiel?: Database['public']['Enums']['referentiel'];
        };
      };
      action_statut: {
        Insert: {
          action_id: string;
          avancement: Database['public']['Enums']['avancement'];
          avancement_detaille?: number[] | null;
          collectivite_id: number;
          concerne: boolean;
          modified_at?: string;
          modified_by?: string;
        };
        Row: {
          action_id: string;
          avancement: Database['public']['Enums']['avancement'];
          avancement_detaille: number[] | null;
          collectivite_id: number;
          concerne: boolean;
          modified_at: string;
          modified_by: string;
        };
        Update: {
          action_id?: string;
          avancement?: Database['public']['Enums']['avancement'];
          avancement_detaille?: number[] | null;
          collectivite_id?: number;
          concerne?: boolean;
          modified_at?: string;
          modified_by?: string;
        };
      };
      annexe: {
        Insert: {
          collectivite_id: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          collectivite_id: number;
          commentaire: string;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          titre: string;
          url: string | null;
        };
        Update: {
          collectivite_id?: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
      };
      audit: {
        Insert: {
          collectivite_id: number;
          date_debut?: string;
          date_fin?: string | null;
          demande_id?: number | null;
          id?: number;
          referentiel: Database['public']['Enums']['referentiel'];
          valide?: boolean;
        };
        Row: {
          collectivite_id: number;
          date_debut: string;
          date_fin: string | null;
          demande_id: number | null;
          id: number;
          referentiel: Database['public']['Enums']['referentiel'];
          valide: boolean;
        };
        Update: {
          collectivite_id?: number;
          date_debut?: string;
          date_fin?: string | null;
          demande_id?: number | null;
          id?: number;
          referentiel?: Database['public']['Enums']['referentiel'];
          valide?: boolean;
        };
      };
      audit_auditeur: {
        Insert: {
          audit_id: number;
          auditeur: string;
        };
        Row: {
          audit_id: number;
          auditeur: string;
        };
        Update: {
          audit_id?: number;
          auditeur?: string;
        };
      };
      axe: {
        Insert: {
          collectivite_id: number;
          created_at?: string;
          id?: number;
          modified_at?: string;
          modified_by?: string | null;
          nom?: string | null;
          parent?: number | null;
        };
        Row: {
          collectivite_id: number;
          created_at: string;
          id: number;
          modified_at: string;
          modified_by: string | null;
          nom: string | null;
          parent: number | null;
        };
        Update: {
          collectivite_id?: number;
          created_at?: string;
          id?: number;
          modified_at?: string;
          modified_by?: string | null;
          nom?: string | null;
          parent?: number | null;
        };
      };
      client_scores: {
        Insert: {
          collectivite_id: number;
          modified_at: string;
          payload_timestamp?: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
          scores: Json;
        };
        Row: {
          collectivite_id: number;
          modified_at: string;
          payload_timestamp: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
          scores: Json;
        };
        Update: {
          collectivite_id?: number;
          modified_at?: string;
          payload_timestamp?: string | null;
          referentiel?: Database['public']['Enums']['referentiel'];
          scores?: Json;
        };
      };
      client_scores_update: {
        Insert: {
          collectivite_id: number;
          modified_at: string;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Row: {
          collectivite_id: number;
          modified_at: string;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Update: {
          collectivite_id?: number;
          modified_at?: string;
          referentiel?: Database['public']['Enums']['referentiel'];
        };
      };
      collectivite: {
        Insert: {
          created_at?: string;
          id?: number;
          modified_at?: string;
        };
        Row: {
          created_at: string;
          id: number;
          modified_at: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          modified_at?: string;
        };
      };
      collectivite_bucket: {
        Insert: {
          bucket_id: string;
          collectivite_id: number;
        };
        Row: {
          bucket_id: string;
          collectivite_id: number;
        };
        Update: {
          bucket_id?: string;
          collectivite_id?: number;
        };
      };
      collectivite_test: {
        Insert: {
          collectivite_id?: number | null;
          id?: number;
          nom: string;
        };
        Row: {
          collectivite_id: number | null;
          id: number;
          nom: string;
        };
        Update: {
          collectivite_id?: number | null;
          id?: number;
          nom?: string;
        };
      };
      commune: {
        Insert: {
          code: string;
          collectivite_id?: number | null;
          id?: number;
          nom: string;
        };
        Row: {
          code: string;
          collectivite_id: number | null;
          id: number;
          nom: string;
        };
        Update: {
          code?: string;
          collectivite_id?: number | null;
          id?: number;
          nom?: string;
        };
      };
      cot: {
        Insert: {
          actif: boolean;
          collectivite_id: number;
        };
        Row: {
          actif: boolean;
          collectivite_id: number;
        };
        Update: {
          actif?: boolean;
          collectivite_id?: number;
        };
      };
      dcp: {
        Insert: {
          created_at?: string;
          deleted?: boolean;
          email: string;
          limited?: boolean;
          modified_at?: string;
          nom: string;
          prenom: string;
          telephone?: string | null;
          user_id?: string | null;
        };
        Row: {
          created_at: string;
          deleted: boolean;
          email: string;
          limited: boolean;
          modified_at: string;
          nom: string;
          prenom: string;
          telephone: string | null;
          user_id: string | null;
        };
        Update: {
          created_at?: string;
          deleted?: boolean;
          email?: string;
          limited?: boolean;
          modified_at?: string;
          nom?: string;
          prenom?: string;
          telephone?: string | null;
          user_id?: string | null;
        };
      };
      epci: {
        Insert: {
          collectivite_id?: number | null;
          id?: number;
          nature: Database['public']['Enums']['nature'];
          nom: string;
          siren: string;
        };
        Row: {
          collectivite_id: number | null;
          id: number;
          nature: Database['public']['Enums']['nature'];
          nom: string;
          siren: string;
        };
        Update: {
          collectivite_id?: number | null;
          id?: number;
          nature?: Database['public']['Enums']['nature'];
          nom?: string;
          siren?: string;
        };
      };
      fiche_action: {
        Insert: {
          amelioration_continue?: boolean | null;
          budget_previsionnel?: number | null;
          calendrier?: string | null;
          cibles?: Database['public']['Enums']['fiche_action_cibles'][] | null;
          collectivite_id: number;
          created_at?: string;
          date_debut?: string | null;
          date_fin_provisoire?: string | null;
          description?: string | null;
          financements?: string | null;
          id?: number;
          maj_termine?: boolean | null;
          modified_at?: string;
          modified_by?: string | null;
          niveau_priorite?:
            | Database['public']['Enums']['fiche_action_niveaux_priorite']
            | null;
          notes_complementaires?: string | null;
          objectifs?: string | null;
          piliers_eci?:
            | Database['public']['Enums']['fiche_action_piliers_eci'][]
            | null;
          ressources?: string | null;
          resultats_attendus?:
            | Database['public']['Enums']['fiche_action_resultats_attendus'][]
            | null;
          statut?: Database['public']['Enums']['fiche_action_statuts'] | null;
          titre?: string | null;
        };
        Row: {
          amelioration_continue: boolean | null;
          budget_previsionnel: number | null;
          calendrier: string | null;
          cibles: Database['public']['Enums']['fiche_action_cibles'][] | null;
          collectivite_id: number;
          created_at: string;
          date_debut: string | null;
          date_fin_provisoire: string | null;
          description: string | null;
          financements: string | null;
          id: number;
          maj_termine: boolean | null;
          modified_at: string;
          modified_by: string | null;
          niveau_priorite:
            | Database['public']['Enums']['fiche_action_niveaux_priorite']
            | null;
          notes_complementaires: string | null;
          objectifs: string | null;
          piliers_eci:
            | Database['public']['Enums']['fiche_action_piliers_eci'][]
            | null;
          ressources: string | null;
          resultats_attendus:
            | Database['public']['Enums']['fiche_action_resultats_attendus'][]
            | null;
          statut: Database['public']['Enums']['fiche_action_statuts'] | null;
          titre: string | null;
        };
        Update: {
          amelioration_continue?: boolean | null;
          budget_previsionnel?: number | null;
          calendrier?: string | null;
          cibles?: Database['public']['Enums']['fiche_action_cibles'][] | null;
          collectivite_id?: number;
          created_at?: string;
          date_debut?: string | null;
          date_fin_provisoire?: string | null;
          description?: string | null;
          financements?: string | null;
          id?: number;
          maj_termine?: boolean | null;
          modified_at?: string;
          modified_by?: string | null;
          niveau_priorite?:
            | Database['public']['Enums']['fiche_action_niveaux_priorite']
            | null;
          notes_complementaires?: string | null;
          objectifs?: string | null;
          piliers_eci?:
            | Database['public']['Enums']['fiche_action_piliers_eci'][]
            | null;
          ressources?: string | null;
          resultats_attendus?:
            | Database['public']['Enums']['fiche_action_resultats_attendus'][]
            | null;
          statut?: Database['public']['Enums']['fiche_action_statuts'] | null;
          titre?: string | null;
        };
      };
      fiche_action_action: {
        Insert: {
          action_id: string;
          fiche_id: number;
        };
        Row: {
          action_id: string;
          fiche_id: number;
        };
        Update: {
          action_id?: string;
          fiche_id?: number;
        };
      };
      fiche_action_annexe: {
        Insert: {
          annexe_id: number;
          fiche_id: number;
        };
        Row: {
          annexe_id: number;
          fiche_id: number;
        };
        Update: {
          annexe_id?: number;
          fiche_id?: number;
        };
      };
      fiche_action_axe: {
        Insert: {
          axe_id: number;
          fiche_id: number;
        };
        Row: {
          axe_id: number;
          fiche_id: number;
        };
        Update: {
          axe_id?: number;
          fiche_id?: number;
        };
      };
      fiche_action_indicateur: {
        Insert: {
          fiche_id: number;
          indicateur_id?: string | null;
          indicateur_personnalise_id?: number | null;
        };
        Row: {
          fiche_id: number;
          indicateur_id: string | null;
          indicateur_personnalise_id: number | null;
        };
        Update: {
          fiche_id?: number;
          indicateur_id?: string | null;
          indicateur_personnalise_id?: number | null;
        };
      };
      fiche_action_partenaire_tag: {
        Insert: {
          fiche_id: number;
          partenaire_tag_id: number;
        };
        Row: {
          fiche_id: number;
          partenaire_tag_id: number;
        };
        Update: {
          fiche_id?: number;
          partenaire_tag_id?: number;
        };
      };
      fiche_action_pilote: {
        Insert: {
          fiche_id: number;
          tag_id?: number | null;
          user_id?: string | null;
        };
        Row: {
          fiche_id: number;
          tag_id: number | null;
          user_id: string | null;
        };
        Update: {
          fiche_id?: number;
          tag_id?: number | null;
          user_id?: string | null;
        };
      };
      fiche_action_referent: {
        Insert: {
          fiche_id: number;
          tag_id?: number | null;
          user_id?: string | null;
        };
        Row: {
          fiche_id: number;
          tag_id: number | null;
          user_id: string | null;
        };
        Update: {
          fiche_id?: number;
          tag_id?: number | null;
          user_id?: string | null;
        };
      };
      fiche_action_sous_thematique: {
        Insert: {
          fiche_id: number;
          thematique_id: number;
        };
        Row: {
          fiche_id: number;
          thematique_id: number;
        };
        Update: {
          fiche_id?: number;
          thematique_id?: number;
        };
      };
      fiche_action_structure_tag: {
        Insert: {
          fiche_id: number;
          structure_tag_id: number;
        };
        Row: {
          fiche_id: number;
          structure_tag_id: number;
        };
        Update: {
          fiche_id?: number;
          structure_tag_id?: number;
        };
      };
      fiche_action_thematique: {
        Insert: {
          fiche_id: number;
          thematique: string;
        };
        Row: {
          fiche_id: number;
          thematique: string;
        };
        Update: {
          fiche_id?: number;
          thematique?: string;
        };
      };
      filtre_intervalle: {
        Insert: {
          id: string;
          intervalle: unknown;
          libelle: string;
          type: Database['public']['Enums']['collectivite_filtre_type'];
        };
        Row: {
          id: string;
          intervalle: unknown;
          libelle: string;
          type: Database['public']['Enums']['collectivite_filtre_type'];
        };
        Update: {
          id?: string;
          intervalle?: unknown;
          libelle?: string;
          type?: Database['public']['Enums']['collectivite_filtre_type'];
        };
      };
      indicateur_action: {
        Insert: {
          action_id: string;
          indicateur_id: string;
          modified_at?: string;
        };
        Row: {
          action_id: string;
          indicateur_id: string;
          modified_at: string;
        };
        Update: {
          action_id?: string;
          indicateur_id?: string;
          modified_at?: string;
        };
      };
      indicateur_commentaire: {
        Insert: {
          collectivite_id: number;
          commentaire: string;
          indicateur_id: string;
          modified_at?: string;
          modified_by?: string;
        };
        Row: {
          collectivite_id: number;
          commentaire: string;
          indicateur_id: string;
          modified_at: string;
          modified_by: string;
        };
        Update: {
          collectivite_id?: number;
          commentaire?: string;
          indicateur_id?: string;
          modified_at?: string;
          modified_by?: string;
        };
      };
      indicateur_definition: {
        Insert: {
          description: string;
          id: string;
          identifiant: string;
          indicateur_group: Database['public']['Enums']['indicateur_group'];
          modified_at?: string;
          nom: string;
          obligation_eci: boolean;
          parent?: number | null;
          unite: string;
          valeur_indicateur?: string | null;
        };
        Row: {
          description: string;
          id: string;
          identifiant: string;
          indicateur_group: Database['public']['Enums']['indicateur_group'];
          modified_at: string;
          nom: string;
          obligation_eci: boolean;
          parent: number | null;
          unite: string;
          valeur_indicateur: string | null;
        };
        Update: {
          description?: string;
          id?: string;
          identifiant?: string;
          indicateur_group?: Database['public']['Enums']['indicateur_group'];
          modified_at?: string;
          nom?: string;
          obligation_eci?: boolean;
          parent?: number | null;
          unite?: string;
          valeur_indicateur?: string | null;
        };
      };
      indicateur_objectif: {
        Insert: {
          annee: number;
          collectivite_id: number;
          indicateur_id: string;
          modified_at?: string;
          valeur?: number | null;
        };
        Row: {
          annee: number;
          collectivite_id: number;
          indicateur_id: string;
          modified_at: string;
          valeur: number | null;
        };
        Update: {
          annee?: number;
          collectivite_id?: number;
          indicateur_id?: string;
          modified_at?: string;
          valeur?: number | null;
        };
      };
      indicateur_parent: {
        Insert: {
          id?: number;
          nom: string;
          numero: string;
        };
        Row: {
          id: number;
          nom: string;
          numero: string;
        };
        Update: {
          id?: number;
          nom?: string;
          numero?: string;
        };
      };
      indicateur_personnalise_definition: {
        Insert: {
          collectivite_id?: number | null;
          commentaire: string;
          description: string;
          id?: number;
          modified_at?: string;
          modified_by?: string;
          titre: string;
          unite: string;
        };
        Row: {
          collectivite_id: number | null;
          commentaire: string;
          description: string;
          id: number;
          modified_at: string;
          modified_by: string;
          titre: string;
          unite: string;
        };
        Update: {
          collectivite_id?: number | null;
          commentaire?: string;
          description?: string;
          id?: number;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          unite?: string;
        };
      };
      indicateur_personnalise_objectif: {
        Insert: {
          annee: number;
          collectivite_id: number;
          indicateur_id: number;
          modified_at?: string;
          valeur?: number | null;
        };
        Row: {
          annee: number;
          collectivite_id: number;
          indicateur_id: number;
          modified_at: string;
          valeur: number | null;
        };
        Update: {
          annee?: number;
          collectivite_id?: number;
          indicateur_id?: number;
          modified_at?: string;
          valeur?: number | null;
        };
      };
      indicateur_personnalise_resultat: {
        Insert: {
          annee: number;
          collectivite_id: number;
          indicateur_id: number;
          modified_at?: string;
          valeur?: number | null;
        };
        Row: {
          annee: number;
          collectivite_id: number;
          indicateur_id: number;
          modified_at: string;
          valeur: number | null;
        };
        Update: {
          annee?: number;
          collectivite_id?: number;
          indicateur_id?: number;
          modified_at?: string;
          valeur?: number | null;
        };
      };
      indicateur_resultat: {
        Insert: {
          annee: number;
          collectivite_id: number;
          indicateur_id: string;
          modified_at?: string;
          valeur?: number | null;
        };
        Row: {
          annee: number;
          collectivite_id: number;
          indicateur_id: string;
          modified_at: string;
          valeur: number | null;
        };
        Update: {
          annee?: number;
          collectivite_id?: number;
          indicateur_id?: string;
          modified_at?: string;
          valeur?: number | null;
        };
      };
      indicateur_terristory_json: {
        Insert: {
          created_at?: string;
          indicateurs: Json;
        };
        Row: {
          created_at: string;
          indicateurs: Json;
        };
        Update: {
          created_at?: string;
          indicateurs?: Json;
        };
      };
      indicateurs_json: {
        Insert: {
          created_at?: string;
          indicateurs: Json;
        };
        Row: {
          created_at: string;
          indicateurs: Json;
        };
        Update: {
          created_at?: string;
          indicateurs?: Json;
        };
      };
      labellisation: {
        Insert: {
          annee?: number | null;
          collectivite_id?: number | null;
          etoiles: number;
          id?: number;
          obtenue_le: string;
          referentiel: Database['public']['Enums']['referentiel'];
          score_programme?: number | null;
          score_realise?: number | null;
        };
        Row: {
          annee: number | null;
          collectivite_id: number | null;
          etoiles: number;
          id: number;
          obtenue_le: string;
          referentiel: Database['public']['Enums']['referentiel'];
          score_programme: number | null;
          score_realise: number | null;
        };
        Update: {
          annee?: number | null;
          collectivite_id?: number | null;
          etoiles?: number;
          id?: number;
          obtenue_le?: string;
          referentiel?: Database['public']['Enums']['referentiel'];
          score_programme?: number | null;
          score_realise?: number | null;
        };
      };
      labellisation_action_critere: {
        Insert: {
          action_id: string;
          etoile: '1' | '2' | '3' | '4' | '5';
          formulation: string;
          min_programme_percentage?: number | null;
          min_programme_score?: number | null;
          min_realise_percentage?: number | null;
          min_realise_score?: number | null;
          prio: number;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Row: {
          action_id: string;
          etoile: '1' | '2' | '3' | '4' | '5';
          formulation: string;
          min_programme_percentage: number | null;
          min_programme_score: number | null;
          min_realise_percentage: number | null;
          min_realise_score: number | null;
          prio: number;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Update: {
          action_id?: string;
          etoile?: '1' | '2' | '3' | '4' | '5';
          formulation?: string;
          min_programme_percentage?: number | null;
          min_programme_score?: number | null;
          min_realise_percentage?: number | null;
          min_realise_score?: number | null;
          prio?: number;
          referentiel?: Database['public']['Enums']['referentiel'];
        };
      };
      labellisation_calendrier: {
        Insert: {
          information: string;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Row: {
          information: string;
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Update: {
          information?: string;
          referentiel?: Database['public']['Enums']['referentiel'];
        };
      };
      labellisation_fichier_critere: {
        Insert: {
          description: string;
          etoile: '1' | '2' | '3' | '4' | '5';
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Row: {
          description: string;
          etoile: '1' | '2' | '3' | '4' | '5';
          referentiel: Database['public']['Enums']['referentiel'];
        };
        Update: {
          description?: string;
          etoile?: '1' | '2' | '3' | '4' | '5';
          referentiel?: Database['public']['Enums']['referentiel'];
        };
      };
      maintenance: {
        Insert: {
          begins_at: string;
          ends_at: string;
          id?: number;
        };
        Row: {
          begins_at: string;
          ends_at: string;
          id: number;
        };
        Update: {
          begins_at?: string;
          ends_at?: string;
          id?: number;
        };
      };
      partenaire_tag: {
        Insert: {
          collectivite_id: number;
          id?: number;
          nom: string;
        };
        Row: {
          collectivite_id: number;
          id: number;
          nom: string;
        };
        Update: {
          collectivite_id?: number;
          id?: number;
          nom?: string;
        };
      };
      personnalisation: {
        Insert: {
          action_id: string;
          description: string;
          titre: string;
        };
        Row: {
          action_id: string;
          description: string;
          titre: string;
        };
        Update: {
          action_id?: string;
          description?: string;
          titre?: string;
        };
      };
      personnalisation_consequence: {
        Insert: {
          collectivite_id: number;
          consequences: Json;
          modified_at?: string;
          payload_timestamp?: string | null;
        };
        Row: {
          collectivite_id: number;
          consequences: Json;
          modified_at: string;
          payload_timestamp: string | null;
        };
        Update: {
          collectivite_id?: number;
          consequences?: Json;
          modified_at?: string;
          payload_timestamp?: string | null;
        };
      };
      personnalisation_regle: {
        Insert: {
          action_id: string;
          description: string;
          formule: string;
          modified_at?: string;
          type: Database['public']['Enums']['regle_type'];
        };
        Row: {
          action_id: string;
          description: string;
          formule: string;
          modified_at: string;
          type: Database['public']['Enums']['regle_type'];
        };
        Update: {
          action_id?: string;
          description?: string;
          formule?: string;
          modified_at?: string;
          type?: Database['public']['Enums']['regle_type'];
        };
      };
      personnalisations_json: {
        Insert: {
          created_at?: string;
          questions: Json;
          regles: Json;
        };
        Row: {
          created_at: string;
          questions: Json;
          regles: Json;
        };
        Update: {
          created_at?: string;
          questions?: Json;
          regles?: Json;
        };
      };
      personne_tag: {
        Insert: {
          collectivite_id: number;
          id?: number;
          nom: string;
        };
        Row: {
          collectivite_id: number;
          id: number;
          nom: string;
        };
        Update: {
          collectivite_id?: number;
          id?: number;
          nom?: string;
        };
      };
      pre_audit_scores: {
        Insert: {
          audit_id: number;
          collectivite_id: number;
          modified_at: string;
          payload_timestamp?: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
          scores: Json;
        };
        Row: {
          audit_id: number;
          collectivite_id: number;
          modified_at: string;
          payload_timestamp: string | null;
          referentiel: Database['public']['Enums']['referentiel'];
          scores: Json;
        };
        Update: {
          audit_id?: number;
          collectivite_id?: number;
          modified_at?: string;
          payload_timestamp?: string | null;
          referentiel?: Database['public']['Enums']['referentiel'];
          scores?: Json;
        };
      };
      preuve_action: {
        Insert: {
          action_id: string;
          preuve_id: string;
        };
        Row: {
          action_id: string;
          preuve_id: string;
        };
        Update: {
          action_id?: string;
          preuve_id?: string;
        };
      };
      preuve_audit: {
        Insert: {
          audit_id: number;
          collectivite_id: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          audit_id: number;
          collectivite_id: number;
          commentaire: string;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          titre: string;
          url: string | null;
        };
        Update: {
          audit_id?: number;
          collectivite_id?: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
      };
      preuve_complementaire: {
        Insert: {
          action_id: string;
          collectivite_id: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          action_id: string;
          collectivite_id: number;
          commentaire: string;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          titre: string;
          url: string | null;
        };
        Update: {
          action_id?: string;
          collectivite_id?: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
      };
      preuve_labellisation: {
        Insert: {
          collectivite_id: number;
          commentaire?: string;
          demande_id: number;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          collectivite_id: number;
          commentaire: string;
          demande_id: number;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          titre: string;
          url: string | null;
        };
        Update: {
          collectivite_id?: number;
          commentaire?: string;
          demande_id?: number;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
      };
      preuve_rapport: {
        Insert: {
          collectivite_id: number;
          commentaire?: string;
          date: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          collectivite_id: number;
          commentaire: string;
          date: string;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          titre: string;
          url: string | null;
        };
        Update: {
          collectivite_id?: number;
          commentaire?: string;
          date?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          titre?: string;
          url?: string | null;
        };
      };
      preuve_reglementaire: {
        Insert: {
          collectivite_id: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          preuve_id: string;
          titre?: string;
          url?: string | null;
        };
        Row: {
          collectivite_id: number;
          commentaire: string;
          fichier_id: number | null;
          id: number;
          lien: Json | null;
          modified_at: string;
          modified_by: string;
          preuve_id: string;
          titre: string;
          url: string | null;
        };
        Update: {
          collectivite_id?: number;
          commentaire?: string;
          fichier_id?: number | null;
          id?: number;
          lien?: Json | null;
          modified_at?: string;
          modified_by?: string;
          preuve_id?: string;
          titre?: string;
          url?: string | null;
        };
      };
      preuve_reglementaire_definition: {
        Insert: {
          description: string;
          id: string;
          nom: string;
        };
        Row: {
          description: string;
          id: string;
          nom: string;
        };
        Update: {
          description?: string;
          id?: string;
          nom?: string;
        };
      };
      preuve_reglementaire_json: {
        Insert: {
          created_at?: string;
          preuves: Json;
        };
        Row: {
          created_at: string;
          preuves: Json;
        };
        Update: {
          created_at?: string;
          preuves?: Json;
        };
      };
      private_collectivite_membre: {
        Insert: {
          champ_intervention?:
            | Database['public']['Enums']['referentiel'][]
            | null;
          collectivite_id: number;
          created_at?: string;
          details_fonction?: string | null;
          fonction?: Database['public']['Enums']['membre_fonction'] | null;
          modified_at?: string;
          user_id: string;
        };
        Row: {
          champ_intervention:
            | Database['public']['Enums']['referentiel'][]
            | null;
          collectivite_id: number;
          created_at: string;
          details_fonction: string | null;
          fonction: Database['public']['Enums']['membre_fonction'] | null;
          modified_at: string;
          user_id: string;
        };
        Update: {
          champ_intervention?:
            | Database['public']['Enums']['referentiel'][]
            | null;
          collectivite_id?: number;
          created_at?: string;
          details_fonction?: string | null;
          fonction?: Database['public']['Enums']['membre_fonction'] | null;
          modified_at?: string;
          user_id?: string;
        };
      };
      private_utilisateur_droit: {
        Insert: {
          active: boolean;
          collectivite_id: number;
          created_at?: string;
          id?: number;
          invitation_id?: string | null;
          modified_at?: string;
          niveau_acces?: Database['public']['Enums']['niveau_acces'];
          user_id: string;
        };
        Row: {
          active: boolean;
          collectivite_id: number;
          created_at: string;
          id: number;
          invitation_id: string | null;
          modified_at: string;
          niveau_acces: Database['public']['Enums']['niveau_acces'];
          user_id: string;
        };
        Update: {
          active?: boolean;
          collectivite_id?: number;
          created_at?: string;
          id?: number;
          invitation_id?: string | null;
          modified_at?: string;
          niveau_acces?: Database['public']['Enums']['niveau_acces'];
          user_id?: string;
        };
      };
      question: {
        Insert: {
          description: string;
          formulation: string;
          id: string;
          ordonnancement?: number | null;
          thematique_id?: string | null;
          type: Database['public']['Enums']['question_type'];
          types_collectivites_concernees?:
            | Database['public']['Enums']['type_collectivite'][]
            | null;
        };
        Row: {
          description: string;
          formulation: string;
          id: string;
          ordonnancement: number | null;
          thematique_id: string | null;
          type: Database['public']['Enums']['question_type'];
          types_collectivites_concernees:
            | Database['public']['Enums']['type_collectivite'][]
            | null;
        };
        Update: {
          description?: string;
          formulation?: string;
          id?: string;
          ordonnancement?: number | null;
          thematique_id?: string | null;
          type?: Database['public']['Enums']['question_type'];
          types_collectivites_concernees?:
            | Database['public']['Enums']['type_collectivite'][]
            | null;
        };
      };
      question_action: {
        Insert: {
          action_id: string;
          question_id: string;
        };
        Row: {
          action_id: string;
          question_id: string;
        };
        Update: {
          action_id?: string;
          question_id?: string;
        };
      };
      question_choix: {
        Insert: {
          formulation?: string | null;
          id: string;
          ordonnancement?: number | null;
          question_id?: string | null;
        };
        Row: {
          formulation: string | null;
          id: string;
          ordonnancement: number | null;
          question_id: string | null;
        };
        Update: {
          formulation?: string | null;
          id?: string;
          ordonnancement?: number | null;
          question_id?: string | null;
        };
      };
      question_thematique: {
        Insert: {
          id: string;
          nom?: string | null;
        };
        Row: {
          id: string;
          nom: string | null;
        };
        Update: {
          id?: string;
          nom?: string | null;
        };
      };
      referentiel_json: {
        Insert: {
          children: Json;
          created_at?: string;
          definitions: Json;
        };
        Row: {
          children: Json;
          created_at: string;
          definitions: Json;
        };
        Update: {
          children?: Json;
          created_at?: string;
          definitions?: Json;
        };
      };
      reponse_binaire: {
        Insert: {
          collectivite_id: number;
          modified_at?: string;
          question_id: string;
          reponse?: boolean | null;
        };
        Row: {
          collectivite_id: number;
          modified_at: string;
          question_id: string;
          reponse: boolean | null;
        };
        Update: {
          collectivite_id?: number;
          modified_at?: string;
          question_id?: string;
          reponse?: boolean | null;
        };
      };
      reponse_choix: {
        Insert: {
          collectivite_id: number;
          modified_at?: string;
          question_id: string;
          reponse?: string | null;
        };
        Row: {
          collectivite_id: number;
          modified_at: string;
          question_id: string;
          reponse: string | null;
        };
        Update: {
          collectivite_id?: number;
          modified_at?: string;
          question_id?: string;
          reponse?: string | null;
        };
      };
      reponse_proportion: {
        Insert: {
          collectivite_id: number;
          modified_at?: string;
          question_id: string;
          reponse?: number | null;
        };
        Row: {
          collectivite_id: number;
          modified_at: string;
          question_id: string;
          reponse: number | null;
        };
        Update: {
          collectivite_id?: number;
          modified_at?: string;
          question_id?: string;
          reponse?: number | null;
        };
      };
      sous_thematique: {
        Insert: {
          id?: number;
          sous_thematique: string;
          thematique: string;
        };
        Row: {
          id: number;
          sous_thematique: string;
          thematique: string;
        };
        Update: {
          id?: number;
          sous_thematique?: string;
          thematique?: string;
        };
      };
      structure_tag: {
        Insert: {
          collectivite_id: number;
          id?: number;
          nom: string;
        };
        Row: {
          collectivite_id: number;
          id: number;
          nom: string;
        };
        Update: {
          collectivite_id?: number;
          id?: number;
          nom?: string;
        };
      };
      thematique: {
        Insert: {
          thematique: string;
        };
        Row: {
          thematique: string;
        };
        Update: {
          thematique?: string;
        };
      };
      type_tabular_score: {
        Insert: {
          action_id?: string | null;
          avancement?: Database['public']['Enums']['avancement'] | null;
          concerne?: boolean | null;
          desactive?: boolean | null;
          points_max_personnalises?: number | null;
          points_max_referentiel?: number | null;
          points_programmes?: number | null;
          points_realises?: number | null;
          points_restants?: number | null;
          referentiel?: Database['public']['Enums']['referentiel'] | null;
          score_non_renseigne?: number | null;
          score_pas_fait?: number | null;
          score_programme?: number | null;
          score_realise?: number | null;
          score_realise_plus_programme?: number | null;
        };
        Row: {
          action_id: string | null;
          avancement: Database['public']['Enums']['avancement'] | null;
          concerne: boolean | null;
          desactive: boolean | null;
          points_max_personnalises: number | null;
          points_max_referentiel: number | null;
          points_programmes: number | null;
          points_realises: number | null;
          points_restants: number | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          score_non_renseigne: number | null;
          score_pas_fait: number | null;
          score_programme: number | null;
          score_realise: number | null;
          score_realise_plus_programme: number | null;
        };
        Update: {
          action_id?: string | null;
          avancement?: Database['public']['Enums']['avancement'] | null;
          concerne?: boolean | null;
          desactive?: boolean | null;
          points_max_personnalises?: number | null;
          points_max_referentiel?: number | null;
          points_programmes?: number | null;
          points_realises?: number | null;
          points_restants?: number | null;
          referentiel?: Database['public']['Enums']['referentiel'] | null;
          score_non_renseigne?: number | null;
          score_pas_fait?: number | null;
          score_programme?: number | null;
          score_realise?: number | null;
          score_realise_plus_programme?: number | null;
        };
      };
      usage: {
        Insert: {
          action: Database['public']['Enums']['usage_action'];
          collectivite_id?: number | null;
          fonction: Database['public']['Enums']['usage_fonction'];
          page?: Database['public']['Enums']['visite_page'] | null;
          time?: string;
          user_id?: string | null;
        };
        Row: {
          action: Database['public']['Enums']['usage_action'];
          collectivite_id: number | null;
          fonction: Database['public']['Enums']['usage_fonction'];
          page: Database['public']['Enums']['visite_page'] | null;
          time: string;
          user_id: string | null;
        };
        Update: {
          action?: Database['public']['Enums']['usage_action'];
          collectivite_id?: number | null;
          fonction?: Database['public']['Enums']['usage_fonction'];
          page?: Database['public']['Enums']['visite_page'] | null;
          time?: string;
          user_id?: string | null;
        };
      };
      visite: {
        Insert: {
          collectivite_id?: number | null;
          onglet?: Database['public']['Enums']['visite_onglet'] | null;
          page: Database['public']['Enums']['visite_page'];
          tag?: Database['public']['Enums']['visite_tag'] | null;
          time?: string;
          user_id?: string | null;
        };
        Row: {
          collectivite_id: number | null;
          onglet: Database['public']['Enums']['visite_onglet'] | null;
          page: Database['public']['Enums']['visite_page'];
          tag: Database['public']['Enums']['visite_tag'] | null;
          time: string;
          user_id: string | null;
        };
        Update: {
          collectivite_id?: number | null;
          onglet?: Database['public']['Enums']['visite_onglet'] | null;
          page?: Database['public']['Enums']['visite_page'];
          tag?: Database['public']['Enums']['visite_tag'] | null;
          time?: string;
          user_id?: string | null;
        };
      };
    };
    Views: {
      action_audit_state: {
        Row: {
          action_id: string | null;
          audit_id: number | null;
          avis: string | null;
          collectivite_id: number | null;
          ordre_du_jour: boolean | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          state_id: number | null;
          statut: Database['public']['Enums']['audit_statut'] | null;
        };
      };
      action_children: {
        Row: {
          children: unknown[] | null;
          depth: number | null;
          id: string | null;
        };
      };
      action_definition_summary: {
        Row: {
          children: unknown[] | null;
          depth: number | null;
          description: string | null;
          have_contexte: boolean | null;
          have_exemples: boolean | null;
          have_perimetre_evaluation: boolean | null;
          have_preuve: boolean | null;
          have_questions: boolean | null;
          have_reduction_potentiel: boolean | null;
          have_ressources: boolean | null;
          id: string | null;
          identifiant: string | null;
          nom: string | null;
          phase: Database['public']['Enums']['action_categorie'] | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          type: Database['public']['Enums']['action_type'] | null;
        };
      };
      action_discussion_feed: {
        Row: {
          action_id: string | null;
          collectivite_id: number | null;
          commentaires: Json[] | null;
          created_at: string | null;
          created_by: string | null;
          id: number | null;
          modified_at: string | null;
          status:
            | Database['public']['Enums']['action_discussion_statut']
            | null;
        };
      };
      action_statuts: {
        Row: {
          action_id: string | null;
          ascendants: unknown[] | null;
          avancement: Database['public']['Enums']['avancement'] | null;
          avancement_descendants:
            | Database['public']['Enums']['avancement'][]
            | null;
          avancement_detaille: number[] | null;
          collectivite_id: number | null;
          depth: number | null;
          descendants: unknown[] | null;
          description: string | null;
          have_children: boolean | null;
          have_contexte: boolean | null;
          have_exemples: boolean | null;
          have_perimetre_evaluation: boolean | null;
          have_preuve: boolean | null;
          have_reduction_potentiel: boolean | null;
          have_ressources: boolean | null;
          identifiant: string | null;
          nom: string | null;
          non_concerne: boolean | null;
          phase: Database['public']['Enums']['action_categorie'] | null;
          points_max_personnalises: number | null;
          points_max_referentiel: number | null;
          points_programmes: number | null;
          points_realises: number | null;
          points_restants: number | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          score_non_renseigne: number | null;
          score_pas_fait: number | null;
          score_programme: number | null;
          score_realise: number | null;
          score_realise_plus_programme: number | null;
          type: Database['public']['Enums']['action_type'] | null;
        };
      };
      action_title: {
        Row: {
          children: unknown[] | null;
          id: string | null;
          identifiant: string | null;
          nom: string | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          type: Database['public']['Enums']['action_type'] | null;
        };
      };
      active_collectivite: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
        };
      };
      audit_en_cours: {
        Insert: {
          collectivite_id?: number | null;
          date_debut?: string | null;
          date_fin?: string | null;
          demande_id?: number | null;
          id?: number | null;
          referentiel?: Database['public']['Enums']['referentiel'] | null;
          valide?: boolean | null;
        };
        Row: {
          collectivite_id: number | null;
          date_debut: string | null;
          date_fin: string | null;
          demande_id: number | null;
          id: number | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          valide: boolean | null;
        };
        Update: {
          collectivite_id?: number | null;
          date_debut?: string | null;
          date_fin?: string | null;
          demande_id?: number | null;
          id?: number | null;
          referentiel?: Database['public']['Enums']['referentiel'] | null;
          valide?: boolean | null;
        };
      };
      auditeurs: {
        Row: {
          audit_id: number | null;
          collectivite_id: number | null;
          noms: Json | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      audits: {
        Row: {
          audit: unknown | null;
          collectivite_id: number | null;
          demande: unknown | null;
          is_cot: boolean | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      bibliotheque_fichier: {
        Row: {
          bucket_id: string | null;
          collectivite_id: number | null;
          file_id: string | null;
          filename: string | null;
          filesize: number | null;
          hash: string | null;
          id: number | null;
        };
      };
      business_action_children: {
        Row: {
          children: unknown[] | null;
          id: string | null;
          parent: string | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      business_action_statut: {
        Row: {
          action_id: string | null;
          avancement: Database['public']['Enums']['avancement'] | null;
          avancement_detaille: number[] | null;
          collectivite_id: number | null;
          concerne: boolean | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      business_reponse: {
        Row: {
          collectivite_id: number | null;
          reponses: Json[] | null;
        };
      };
      client_action_statut: {
        Insert: {
          action_id?: string | null;
          avancement?: Database['public']['Enums']['avancement'] | null;
          collectivite_id?: number | null;
          concerne?: boolean | null;
          modified_by?: string | null;
        };
        Row: {
          action_id: string | null;
          avancement: Database['public']['Enums']['avancement'] | null;
          collectivite_id: number | null;
          concerne: boolean | null;
          modified_by: string | null;
        };
        Update: {
          action_id?: string | null;
          avancement?: Database['public']['Enums']['avancement'] | null;
          collectivite_id?: number | null;
          concerne?: boolean | null;
          modified_by?: string | null;
        };
      };
      collectivite_carte_identite: {
        Row: {
          code_siren_insee: string | null;
          collectivite_id: number | null;
          departement_name: string | null;
          nom: string | null;
          population_source: string | null;
          population_totale: number | null;
          region_name: string | null;
          type_collectivite:
            | Database['public']['Enums']['type_collectivite']
            | null;
        };
      };
      collectivite_identite: {
        Row: {
          id: number | null;
          localisation: string[] | null;
          population: string[] | null;
          type: Database['public']['Enums']['type_collectivite'][] | null;
        };
      };
      collectivite_niveau_acces: {
        Row: {
          collectivite_id: number | null;
          est_auditeur: boolean | null;
          niveau_acces: Database['public']['Enums']['niveau_acces'] | null;
          nom: string | null;
        };
      };
      comparaison_scores_audit: {
        Row: {
          action_id: string | null;
          collectivite_id: number | null;
          courant: unknown | null;
          pre_audit: unknown | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      departement: {
        Insert: {
          code?: string | null;
          libelle?: string | null;
          region_code?: string | null;
        };
        Row: {
          code: string | null;
          libelle: string | null;
          region_code: string | null;
        };
        Update: {
          code?: string | null;
          libelle?: string | null;
          region_code?: string | null;
        };
      };
      fiche_action_personne_pilote: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
          tag_id: number | null;
          user_id: string | null;
        };
      };
      fiche_action_personne_referente: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
          tag_id: number | null;
          user_id: string | null;
        };
      };
      fiches_action: {
        Row: {
          actions: unknown[] | null;
          amelioration_continue: boolean | null;
          annexes: unknown[] | null;
          axes: unknown[] | null;
          budget_previsionnel: number | null;
          calendrier: string | null;
          cibles: Database['public']['Enums']['fiche_action_cibles'][] | null;
          collectivite_id: number | null;
          created_at: string | null;
          date_debut: string | null;
          date_fin_provisoire: string | null;
          description: string | null;
          financements: string | null;
          id: number | null;
          indicateurs: unknown[] | null;
          maj_termine: boolean | null;
          modified_at: string | null;
          modified_by: string | null;
          niveau_priorite:
            | Database['public']['Enums']['fiche_action_niveaux_priorite']
            | null;
          notes_complementaires: string | null;
          objectifs: string | null;
          partenaires: unknown[] | null;
          piliers_eci:
            | Database['public']['Enums']['fiche_action_piliers_eci'][]
            | null;
          pilotes: unknown[] | null;
          referents: unknown[] | null;
          ressources: string | null;
          resultats_attendus:
            | Database['public']['Enums']['fiche_action_resultats_attendus'][]
            | null;
          sous_thematiques: unknown[] | null;
          statut: Database['public']['Enums']['fiche_action_statuts'] | null;
          structures: unknown[] | null;
          thematiques: unknown[] | null;
          titre: string | null;
        };
      };
      historique: {
        Row: {
          action_id: string | null;
          action_identifiant: string | null;
          action_ids: unknown[] | null;
          action_nom: string | null;
          avancement: Database['public']['Enums']['avancement'] | null;
          avancement_detaille: number[] | null;
          collectivite_id: number | null;
          concerne: boolean | null;
          modified_at: string | null;
          modified_by_id: string | null;
          modified_by_nom: string | null;
          precision: string | null;
          previous_avancement: Database['public']['Enums']['avancement'] | null;
          previous_avancement_detaille: number[] | null;
          previous_concerne: boolean | null;
          previous_modified_at: string | null;
          previous_modified_by_id: string | null;
          previous_precision: string | null;
          previous_reponse: Json | null;
          question_formulation: string | null;
          question_id: string | null;
          question_type: Database['public']['Enums']['question_type'] | null;
          reponse: Json | null;
          tache_identifiant: string | null;
          tache_nom: string | null;
          thematique_id: string | null;
          thematique_nom: string | null;
          type: string | null;
        };
      };
      historique_utilisateur: {
        Row: {
          collectivite_id: number | null;
          modified_by_id: string | null;
          modified_by_nom: string | null;
        };
      };
      indicateurs_collectivite: {
        Row: {
          collectivite_id: number | null;
          description: string | null;
          indicateur_id: string | null;
          indicateur_personnalise_id: number | null;
          nom: string | null;
          unite: string | null;
        };
      };
      mes_collectivites: {
        Row: {
          collectivite_id: number | null;
          est_auditeur: boolean | null;
          niveau_acces: Database['public']['Enums']['niveau_acces'] | null;
          nom: string | null;
        };
      };
      named_collectivite: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
        };
      };
      ongoing_maintenance: {
        Row: {
          begins_at: string | null;
          ends_at: string | null;
          now: string | null;
        };
      };
      preuve: {
        Row: {
          action: Json | null;
          audit: Json | null;
          collectivite_id: number | null;
          commentaire: string | null;
          created_at: string | null;
          created_by: string | null;
          created_by_nom: string | null;
          demande: Json | null;
          fichier: Json | null;
          id: number | null;
          lien: Json | null;
          preuve_reglementaire: Json | null;
          preuve_type: Database['public']['Enums']['preuve_type'] | null;
          rapport: Json | null;
        };
      };
      question_display: {
        Row: {
          action_ids: unknown[] | null;
          choix: Json[] | null;
          collectivite_id: number | null;
          description: string | null;
          formulation: string | null;
          id: string | null;
          localisation: string[] | null;
          ordonnancement: number | null;
          population: string[] | null;
          thematique_id: string | null;
          thematique_nom: string | null;
          type: Database['public']['Enums']['question_type'] | null;
          types_collectivites_concernees:
            | Database['public']['Enums']['type_collectivite'][]
            | null;
        };
      };
      question_engine: {
        Row: {
          choix_ids: unknown[] | null;
          id: string | null;
          type: Database['public']['Enums']['question_type'] | null;
        };
      };
      question_thematique_completude: {
        Row: {
          collectivite_id: number | null;
          completude:
            | Database['public']['Enums']['thematique_completude']
            | null;
          id: string | null;
          nom: string | null;
          referentiels: Database['public']['Enums']['referentiel'][] | null;
        };
      };
      question_thematique_display: {
        Row: {
          id: string | null;
          nom: string | null;
          referentiels: Database['public']['Enums']['referentiel'][] | null;
        };
      };
      region: {
        Insert: {
          code?: string | null;
          libelle?: string | null;
        };
        Row: {
          code: string | null;
          libelle: string | null;
        };
        Update: {
          code?: string | null;
          libelle?: string | null;
        };
      };
      reponse_display: {
        Row: {
          collectivite_id: number | null;
          question_id: string | null;
          reponse: Json | null;
        };
      };
      retool_active_collectivite: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
        };
      };
      retool_completude: {
        Row: {
          code_siren_insee: string | null;
          collectivite_id: number | null;
          completude_cae: number | null;
          completude_eci: number | null;
          departement_name: string | null;
          nom: string | null;
          population_totale: number | null;
          region_name: string | null;
          type_collectivite:
            | Database['public']['Enums']['type_collectivite']
            | null;
        };
      };
      retool_completude_compute: {
        Row: {
          collectivite_id: number | null;
          completude_cae: number | null;
          completude_eci: number | null;
          nom: string | null;
        };
      };
      retool_labellisation: {
        Row: {
          annee: number | null;
          collectivite_id: number | null;
          collectivite_nom: string | null;
          etoiles: number | null;
          id: number | null;
          obtenue_le: string | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          score_programme: number | null;
          score_realise: number | null;
        };
      };
      retool_labellisation_demande: {
        Row: {
          collectivite_id: number | null;
          date: string | null;
          en_cours: boolean | null;
          etoiles: '1' | '2' | '3' | '4' | '5' | null;
          id: number | null;
          nom: string | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      retool_preuves: {
        Row: {
          action: string | null;
          collectivite_id: number | null;
          created_at: string | null;
          fichier: string | null;
          lien: string | null;
          nom: string | null;
          preuve_type: Database['public']['Enums']['preuve_type'] | null;
          referentiel: string | null;
        };
      };
      retool_score: {
        Row: {
          Avancement: string | null;
          Collectivité: string | null;
          Commentaire: string | null;
          'Commentaires fusionnés': string | null;
          Identifiant: string | null;
          'Modifié le': string | null;
          'Points potentiels': number | null;
          'Points programmés': number | null;
          'Points realisés': number | null;
          'Pourcentage non renseigné': number | null;
          'Pourcentage programmé': number | null;
          'Pourcentage réalisé': number | null;
          Titre: string | null;
          collectivite_id: number | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      retool_user_collectivites_list: {
        Row: {
          collectivites: string[] | null;
          creation: string | null;
          derniere_connexion: string | null;
          email: string | null;
          nb_collectivite: number | null;
          nom: string | null;
          prenom: string | null;
        };
      };
      retool_user_list: {
        Row: {
          active: boolean | null;
          champ_intervention:
            | Database['public']['Enums']['referentiel'][]
            | null;
          collectivite: string | null;
          collectivite_id: number | null;
          details_fonction: string | null;
          droit_id: number | null;
          email: string | null;
          fonction: Database['public']['Enums']['membre_fonction'] | null;
          niveau_acces: Database['public']['Enums']['niveau_acces'] | null;
          nom: string | null;
          prenom: string | null;
          telephone: string | null;
          user_id: string | null;
        };
      };
      stats_active_real_collectivites: {
        Row: {
          collectivite_id: number | null;
          nom: string | null;
        };
      };
      stats_carte_collectivite_active: {
        Row: {
          code_siren_insee: string | null;
          collectivite_id: number | null;
          departement_code: string | null;
          departement_name: string | null;
          geojson: Json | null;
          nature_collectivite: string | null;
          nom: string | null;
          population_totale: number | null;
          region_code: string | null;
          region_name: string | null;
          type_collectivite:
            | Database['public']['Enums']['type_collectivite']
            | null;
        };
      };
      stats_carte_epci_par_departement: {
        Row: {
          actives: number | null;
          geojson: Json | null;
          insee: string | null;
          libelle: string | null;
          total: number | null;
        };
      };
      stats_collectivite_actives_et_total_par_type: {
        Row: {
          actives: number | null;
          total: number | null;
          type_collectivite: string | null;
        };
      };
      stats_engagement_collectivite: {
        Row: {
          collectivite_id: number | null;
          cot: boolean | null;
          etoiles_cae: number | null;
          etoiles_eci: number | null;
        };
      };
      stats_evolution_collectivite_avec_minimum_fiches: {
        Row: {
          collectivites: number | null;
          mois: string | null;
        };
      };
      stats_evolution_indicateur_referentiel: {
        Row: {
          indicateurs: number | null;
          mois: string | null;
        };
      };
      stats_evolution_nombre_fiches: {
        Row: {
          fiches: number | null;
          mois: string | null;
        };
      };
      stats_evolution_nombre_utilisateur_par_collectivite: {
        Row: {
          maximum: number | null;
          median: number | null;
          mois: string | null;
          moyen: number | null;
        };
      };
      stats_evolution_resultat_indicateur_personnalise: {
        Row: {
          mois: string | null;
          resultats: number | null;
        };
      };
      stats_evolution_resultat_indicateur_referentiel: {
        Row: {
          mois: string | null;
          resultats: number | null;
        };
      };
      stats_evolution_total_activation_par_type: {
        Row: {
          mois: string | null;
          total: number | null;
          total_commune: number | null;
          total_epci: number | null;
          total_syndicat: number | null;
        };
      };
      stats_evolution_utilisateur: {
        Row: {
          mois: string | null;
          total_utilisateurs: number | null;
          utilisateurs: number | null;
        };
      };
      stats_labellisation_par_niveau: {
        Row: {
          etoiles: number | null;
          labellisations: number | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
        };
      };
      suivi_audit: {
        Row: {
          action_id: string | null;
          avis: string | null;
          collectivite_id: number | null;
          have_children: boolean | null;
          ordre_du_jour: boolean | null;
          ordres_du_jour: boolean[] | null;
          referentiel: Database['public']['Enums']['referentiel'] | null;
          statut: Database['public']['Enums']['audit_statut'] | null;
          statuts: Database['public']['Enums']['audit_statut'][] | null;
          type: Database['public']['Enums']['action_type'] | null;
        };
      };
    };
  };
}
