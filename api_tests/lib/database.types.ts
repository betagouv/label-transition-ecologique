export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  labellisation: {
    Tables: {
      action_audit_state: {
        Row: {
          action_id: string
          audit_id: number | null
          avis: string
          collectivite_id: number
          id: number
          modified_at: string
          modified_by: string
          ordre_du_jour: boolean
          statut: Database["public"]["Enums"]["audit_statut"]
        }
        Insert: {
          action_id: string
          audit_id?: number | null
          avis?: string
          collectivite_id: number
          id?: number
          modified_at?: string
          modified_by?: string
          ordre_du_jour?: boolean
          statut?: Database["public"]["Enums"]["audit_statut"]
        }
        Update: {
          action_id?: string
          audit_id?: number | null
          avis?: string
          collectivite_id?: number
          id?: number
          modified_at?: string
          modified_by?: string
          ordre_du_jour?: boolean
          statut?: Database["public"]["Enums"]["audit_statut"]
        }
        Relationships: [
          {
            foreignKeyName: "action_audit_state_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "action_audit_state"
            referencedColumns: ["audit_id"]
          },
          {
            foreignKeyName: "action_audit_state_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit_en_cours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_audit_state_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      audit: {
        Row: {
          collectivite_id: number
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide: boolean
        }
        Insert: {
          collectivite_id: number
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide?: boolean
        }
        Update: {
          collectivite_id?: number
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number
          referentiel?: Database["public"]["Enums"]["referentiel"]
          valide?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "demande"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "retool_labellisation_demande"
            referencedColumns: ["id"]
          }
        ]
      }
      bibliotheque_fichier: {
        Row: {
          collectivite_id: number | null
          filename: string | null
          hash: string | null
          id: number
        }
        Insert: {
          collectivite_id?: number | null
          filename?: string | null
          hash?: string | null
          id?: number
        }
        Update: {
          collectivite_id?: number | null
          filename?: string | null
          hash?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      demande: {
        Row: {
          collectivite_id: number
          date: string
          demandeur: string | null
          en_cours: boolean
          envoyee_le: string | null
          etoiles: Database["labellisation"]["Enums"]["etoile"] | null
          id: number
          modified_at: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          sujet: Database["labellisation"]["Enums"]["sujet_demande"]
        }
        Insert: {
          collectivite_id: number
          date?: string
          demandeur?: string | null
          en_cours?: boolean
          envoyee_le?: string | null
          etoiles?: Database["labellisation"]["Enums"]["etoile"] | null
          id?: number
          modified_at?: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          sujet?: Database["labellisation"]["Enums"]["sujet_demande"]
        }
        Update: {
          collectivite_id?: number
          date?: string
          demandeur?: string | null
          en_cours?: boolean
          envoyee_le?: string | null
          etoiles?: Database["labellisation"]["Enums"]["etoile"] | null
          id?: number
          modified_at?: string | null
          referentiel?: Database["public"]["Enums"]["referentiel"]
          sujet?: Database["labellisation"]["Enums"]["sujet_demande"]
        }
        Relationships: [
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_demandeur_fkey"
            columns: ["demandeur"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      etoile_meta: {
        Row: {
          etoile: Database["labellisation"]["Enums"]["etoile"]
          long_label: string
          min_realise_percentage: number
          min_realise_score: number | null
          prochaine_etoile: Database["labellisation"]["Enums"]["etoile"] | null
          short_label: string
        }
        Insert: {
          etoile: Database["labellisation"]["Enums"]["etoile"]
          long_label: string
          min_realise_percentage: number
          min_realise_score?: number | null
          prochaine_etoile?: Database["labellisation"]["Enums"]["etoile"] | null
          short_label: string
        }
        Update: {
          etoile?: Database["labellisation"]["Enums"]["etoile"]
          long_label?: string
          min_realise_percentage?: number
          min_realise_score?: number | null
          prochaine_etoile?: Database["labellisation"]["Enums"]["etoile"] | null
          short_label?: string
        }
        Relationships: []
      }
      preuve_base: {
        Row: {
          collectivite_id: number
          commentaire: string
          fichier_id: number | null
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          collectivite_id: number
          commentaire?: string
          fichier_id?: number | null
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          fichier_id?: number | null
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_base_fichier_id_fkey"
            columns: ["fichier_id"]
            referencedRelation: "bibliotheque_fichier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_base_fichier_id_fkey"
            columns: ["fichier_id"]
            referencedRelation: "bibliotheque_fichier_snippet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_base_fichier_id_fkey"
            columns: ["fichier_id"]
            referencedRelation: "bibliotheque_fichier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_base_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      action_snippet: {
        Row: {
          action_id: string | null
          collectivite_id: number | null
          snippet: Json | null
        }
        Relationships: []
      }
      bibliotheque_fichier_snippet: {
        Row: {
          id: number | null
          snippet: Json | null
        }
        Relationships: []
      }
      export_score_audit: {
        Row: {
          collectivite: string | null
          cot: boolean | null
          date_cloture_cae: string | null
          date_cloture_eci: string | null
          points_cae: number | null
          points_eci: number | null
          programme_cae: number | null
          programme_eci: number | null
          realise_cae: number | null
          realise_eci: number | null
          region: string | null
          signataire: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      active_audit: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: {
          collectivite_id: number
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide: boolean
        }
      }
      audit_evaluation_payload: {
        Args: {
          audit: unknown
          pre_audit: boolean
        }
        Returns: Record<string, unknown>
      }
      audit_personnalisation_payload: {
        Args: {
          audit_id: number
          pre_audit: boolean
          scores_table: string
        }
        Returns: Json
      }
      critere_action: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          etoiles: Database["labellisation"]["Enums"]["etoile"]
          action_id: unknown
          formulation: string
          score_realise: number
          min_score_realise: number
          score_programme: number
          min_score_programme: number
          atteint: boolean
          prio: number
        }[]
      }
      critere_fichier: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          preuve_nombre: number
          atteint: boolean
        }[]
      }
      critere_score_global: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          etoile_objectif: Database["labellisation"]["Enums"]["etoile"]
          score_a_realiser: number
          score_fait: number
          atteint: boolean
        }[]
      }
      current_audit: {
        Args: {
          col: number
          ref: Database["public"]["Enums"]["referentiel"]
        }
        Returns: {
          collectivite_id: number
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide: boolean
        }
      }
      etoiles: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          etoile_labellise: Database["labellisation"]["Enums"]["etoile"]
          prochaine_etoile_labellisation: Database["labellisation"]["Enums"]["etoile"]
          etoile_score_possible: Database["labellisation"]["Enums"]["etoile"]
          etoile_objectif: Database["labellisation"]["Enums"]["etoile"]
        }[]
      }
      evaluate_audit_statuts: {
        Args: {
          audit_id: number
          pre_audit: boolean
          scores_table: string
        }
        Returns: number
      }
      json_action_statuts_at: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          date_at: string
        }
        Returns: Json
      }
      json_reponses_at: {
        Args: {
          collectivite_id: number
          date_at: string
        }
        Returns: Json
      }
      referentiel_score: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          score_fait: number
          score_programme: number
          completude: number
          complet: boolean
        }[]
      }
      upsert_preuves_reglementaire: {
        Args: {
          preuves: Json
        }
        Returns: undefined
      }
    }
    Enums: {
      etoile: "1" | "2" | "3" | "4" | "5"
      sujet_demande: "labellisation" | "labellisation_cot" | "cot"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      abstract_any_indicateur_value: {
        Row: {
          annee: number
          modified_at: string
          valeur: number | null
        }
        Insert: {
          annee: number
          modified_at?: string
          valeur?: number | null
        }
        Update: {
          annee?: number
          modified_at?: string
          valeur?: number | null
        }
        Relationships: []
      }
      abstract_modified_at: {
        Row: {
          modified_at: string
        }
        Insert: {
          modified_at?: string
        }
        Update: {
          modified_at?: string
        }
        Relationships: []
      }
      action_commentaire: {
        Row: {
          action_id: string
          collectivite_id: number
          commentaire: string
          modified_at: string
          modified_by: string
        }
        Insert: {
          action_id: string
          collectivite_id: number
          commentaire: string
          modified_at?: string
          modified_by?: string
        }
        Update: {
          action_id?: string
          collectivite_id?: number
          commentaire?: string
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_commentaire_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_commentaire_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      action_computed_points: {
        Row: {
          action_id: string
          modified_at: string
          value: number
        }
        Insert: {
          action_id: string
          modified_at?: string
          value: number
        }
        Update: {
          action_id?: string
          modified_at?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "action_computed_points_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      action_definition: {
        Row: {
          action_id: string
          categorie: Database["public"]["Enums"]["action_categorie"] | null
          contexte: string
          description: string
          exemples: string
          identifiant: string
          modified_at: string
          nom: string
          perimetre_evaluation: string
          points: number | null
          pourcentage: number | null
          preuve: string | null
          reduction_potentiel: string
          referentiel: Database["public"]["Enums"]["referentiel"]
          ressources: string
        }
        Insert: {
          action_id: string
          categorie?: Database["public"]["Enums"]["action_categorie"] | null
          contexte: string
          description: string
          exemples: string
          identifiant: string
          modified_at?: string
          nom: string
          perimetre_evaluation: string
          points?: number | null
          pourcentage?: number | null
          preuve?: string | null
          reduction_potentiel: string
          referentiel: Database["public"]["Enums"]["referentiel"]
          ressources: string
        }
        Update: {
          action_id?: string
          categorie?: Database["public"]["Enums"]["action_categorie"] | null
          contexte?: string
          description?: string
          exemples?: string
          identifiant?: string
          modified_at?: string
          nom?: string
          perimetre_evaluation?: string
          points?: number | null
          pourcentage?: number | null
          preuve?: string | null
          reduction_potentiel?: string
          referentiel?: Database["public"]["Enums"]["referentiel"]
          ressources?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_definition_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      action_discussion: {
        Row: {
          action_id: string
          collectivite_id: number
          created_at: string
          created_by: string
          id: number
          modified_at: string
          status: Database["public"]["Enums"]["action_discussion_statut"]
        }
        Insert: {
          action_id: string
          collectivite_id: number
          created_at?: string
          created_by?: string
          id?: number
          modified_at?: string
          status?: Database["public"]["Enums"]["action_discussion_statut"]
        }
        Update: {
          action_id?: string
          collectivite_id?: number
          created_at?: string
          created_by?: string
          id?: number
          modified_at?: string
          status?: Database["public"]["Enums"]["action_discussion_statut"]
        }
        Relationships: [
          {
            foreignKeyName: "action_discussion_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      action_discussion_commentaire: {
        Row: {
          created_at: string
          created_by: string
          discussion_id: number
          id: number
          message: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          discussion_id: number
          id?: number
          message: string
        }
        Update: {
          created_at?: string
          created_by?: string
          discussion_id?: number
          id?: number
          message?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_discussion_commentaire_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_commentaire_discussion_id_fkey"
            columns: ["discussion_id"]
            referencedRelation: "action_discussion"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_commentaire_discussion_id_fkey"
            columns: ["discussion_id"]
            referencedRelation: "action_discussion_feed"
            referencedColumns: ["id"]
          }
        ]
      }
      action_relation: {
        Row: {
          id: string
          parent: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Insert: {
          id: string
          parent?: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Update: {
          id?: string
          parent?: string | null
          referentiel?: Database["public"]["Enums"]["referentiel"]
        }
        Relationships: [
          {
            foreignKeyName: "action_relation_parent_fkey"
            columns: ["parent"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      action_statut: {
        Row: {
          action_id: string
          avancement: Database["public"]["Enums"]["avancement"]
          avancement_detaille: number[] | null
          collectivite_id: number
          concerne: boolean
          modified_at: string
          modified_by: string
        }
        Insert: {
          action_id: string
          avancement: Database["public"]["Enums"]["avancement"]
          avancement_detaille?: number[] | null
          collectivite_id: number
          concerne: boolean
          modified_at?: string
          modified_by?: string
        }
        Update: {
          action_id?: string
          avancement?: Database["public"]["Enums"]["avancement"]
          avancement_detaille?: number[] | null
          collectivite_id?: number
          concerne?: boolean
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_statut_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      annexe: {
        Row: {
          collectivite_id: number
          commentaire: string
          fiche_id: number
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          collectivite_id: number
          commentaire?: string
          fiche_id: number
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          fiche_id?: number
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          }
        ]
      }
      audit_auditeur: {
        Row: {
          audit_id: number
          auditeur: string
          created_at: string | null
        }
        Insert: {
          audit_id: number
          auditeur: string
          created_at?: string | null
        }
        Update: {
          audit_id?: number
          auditeur?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_auditeur_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_auditeur_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "action_audit_state"
            referencedColumns: ["audit_id"]
          },
          {
            foreignKeyName: "audit_auditeur_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_auditeur_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit_en_cours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_auditeur_auditeur_fkey"
            columns: ["auditeur"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      axe: {
        Row: {
          collectivite_id: number
          created_at: string
          id: number
          modified_at: string
          modified_by: string | null
          nom: string | null
          parent: number | null
          plan: number | null
          type: number | null
        }
        Insert: {
          collectivite_id: number
          created_at?: string
          id?: number
          modified_at?: string
          modified_by?: string | null
          nom?: string | null
          parent?: number | null
          plan?: number | null
          type?: number | null
        }
        Update: {
          collectivite_id?: number
          created_at?: string
          id?: number
          modified_at?: string
          modified_by?: string | null
          nom?: string | null
          parent?: number | null
          plan?: number | null
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_parent_fkey"
            columns: ["parent"]
            referencedRelation: "axe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_parent_fkey"
            columns: ["parent"]
            referencedRelation: "plan_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_parent_fkey"
            columns: ["parent"]
            referencedRelation: "plan_action_profondeur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_plan_fkey"
            columns: ["plan"]
            referencedRelation: "axe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_plan_fkey"
            columns: ["plan"]
            referencedRelation: "plan_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_plan_fkey"
            columns: ["plan"]
            referencedRelation: "plan_action_profondeur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_type_fkey"
            columns: ["type"]
            referencedRelation: "plan_action_type"
            referencedColumns: ["id"]
          }
        ]
      }
      client_scores: {
        Row: {
          collectivite_id: number
          modified_at: string
          payload_timestamp: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Insert: {
          collectivite_id: number
          modified_at: string
          payload_timestamp?: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          payload_timestamp?: string | null
          referentiel?: Database["public"]["Enums"]["referentiel"]
          scores?: Json
        }
        Relationships: [
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      client_scores_update: {
        Row: {
          collectivite_id: number
          modified_at: string
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Insert: {
          collectivite_id: number
          modified_at: string
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          referentiel?: Database["public"]["Enums"]["referentiel"]
        }
        Relationships: [
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "client_scores_update_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      collectivite: {
        Row: {
          access_restreint: boolean
          created_at: string
          id: number
          modified_at: string
        }
        Insert: {
          access_restreint?: boolean
          created_at?: string
          id?: number
          modified_at?: string
        }
        Update: {
          access_restreint?: boolean
          created_at?: string
          id?: number
          modified_at?: string
        }
        Relationships: []
      }
      collectivite_bucket: {
        Row: {
          bucket_id: string
          collectivite_id: number
        }
        Insert: {
          bucket_id: string
          collectivite_id: number
        }
        Update: {
          bucket_id?: string
          collectivite_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "collectivite_bucket_bucket_id_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_bucket_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      collectivite_test: {
        Row: {
          collectivite_id: number | null
          id: number
          nom: string
        }
        Insert: {
          collectivite_id?: number | null
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number | null
          id?: number
          nom?: string
        }
        Relationships: [
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "collectivite_test_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      commune: {
        Row: {
          code: string
          collectivite_id: number | null
          id: number
          nom: string
        }
        Insert: {
          code: string
          collectivite_id?: number | null
          id?: number
          nom: string
        }
        Update: {
          code?: string
          collectivite_id?: number | null
          id?: number
          nom?: string
        }
        Relationships: [
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "commune_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      confidentialite_crud: {
        Row: {
          c: Database["public"]["Enums"]["confidentialite_option_crud"]
          d: Database["public"]["Enums"]["confidentialite_option_crud"]
          nom_element: string
          profil: Database["public"]["Enums"]["confidentialite_profil"]
          r: Database["public"]["Enums"]["confidentialite_option_crud"]
          type_element: Database["public"]["Enums"]["confidentialite_type_element"]
          u: Database["public"]["Enums"]["confidentialite_option_crud"]
        }
        Insert: {
          c: Database["public"]["Enums"]["confidentialite_option_crud"]
          d: Database["public"]["Enums"]["confidentialite_option_crud"]
          nom_element: string
          profil: Database["public"]["Enums"]["confidentialite_profil"]
          r: Database["public"]["Enums"]["confidentialite_option_crud"]
          type_element: Database["public"]["Enums"]["confidentialite_type_element"]
          u: Database["public"]["Enums"]["confidentialite_option_crud"]
        }
        Update: {
          c?: Database["public"]["Enums"]["confidentialite_option_crud"]
          d?: Database["public"]["Enums"]["confidentialite_option_crud"]
          nom_element?: string
          profil?: Database["public"]["Enums"]["confidentialite_profil"]
          r?: Database["public"]["Enums"]["confidentialite_option_crud"]
          type_element?: Database["public"]["Enums"]["confidentialite_type_element"]
          u?: Database["public"]["Enums"]["confidentialite_option_crud"]
        }
        Relationships: []
      }
      cot: {
        Row: {
          actif: boolean
          collectivite_id: number
          signataire: number | null
        }
        Insert: {
          actif: boolean
          collectivite_id: number
          signataire?: number | null
        }
        Update: {
          actif?: boolean
          collectivite_id?: number
          signataire?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "cot_signataire_fkey"
            columns: ["signataire"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      dcp: {
        Row: {
          cgu_acceptees_le: string | null
          created_at: string
          deleted: boolean
          email: string
          limited: boolean
          modified_at: string
          nom: string
          prenom: string
          telephone: string | null
          user_id: string
        }
        Insert: {
          cgu_acceptees_le?: string | null
          created_at?: string
          deleted?: boolean
          email: string
          limited?: boolean
          modified_at?: string
          nom: string
          prenom: string
          telephone?: string | null
          user_id: string
        }
        Update: {
          cgu_acceptees_le?: string | null
          created_at?: string
          deleted?: boolean
          email?: string
          limited?: boolean
          modified_at?: string
          nom?: string
          prenom?: string
          telephone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dcp_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      epci: {
        Row: {
          collectivite_id: number | null
          id: number
          nature: Database["public"]["Enums"]["nature"]
          nom: string
          siren: string
        }
        Insert: {
          collectivite_id?: number | null
          id?: number
          nature: Database["public"]["Enums"]["nature"]
          nom: string
          siren: string
        }
        Update: {
          collectivite_id?: number | null
          id?: number
          nature?: Database["public"]["Enums"]["nature"]
          nom?: string
          siren?: string
        }
        Relationships: [
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "epci_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      fiche_action: {
        Row: {
          amelioration_continue: boolean | null
          budget_previsionnel: number | null
          calendrier: string | null
          cibles: Database["public"]["Enums"]["fiche_action_cibles"][] | null
          collectivite_id: number
          created_at: string
          date_debut: string | null
          date_fin_provisoire: string | null
          description: string | null
          financements: string | null
          id: number
          maj_termine: boolean | null
          modified_at: string
          modified_by: string | null
          niveau_priorite:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          notes_complementaires: string | null
          objectifs: string | null
          piliers_eci:
            | Database["public"]["Enums"]["fiche_action_piliers_eci"][]
            | null
          ressources: string | null
          restreint: boolean | null
          resultats_attendus:
            | Database["public"]["Enums"]["fiche_action_resultats_attendus"][]
            | null
          statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre: string | null
        }
        Insert: {
          amelioration_continue?: boolean | null
          budget_previsionnel?: number | null
          calendrier?: string | null
          cibles?: Database["public"]["Enums"]["fiche_action_cibles"][] | null
          collectivite_id: number
          created_at?: string
          date_debut?: string | null
          date_fin_provisoire?: string | null
          description?: string | null
          financements?: string | null
          id?: number
          maj_termine?: boolean | null
          modified_at?: string
          modified_by?: string | null
          niveau_priorite?:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          notes_complementaires?: string | null
          objectifs?: string | null
          piliers_eci?:
            | Database["public"]["Enums"]["fiche_action_piliers_eci"][]
            | null
          ressources?: string | null
          restreint?: boolean | null
          resultats_attendus?:
            | Database["public"]["Enums"]["fiche_action_resultats_attendus"][]
            | null
          statut?: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre?: string | null
        }
        Update: {
          amelioration_continue?: boolean | null
          budget_previsionnel?: number | null
          calendrier?: string | null
          cibles?: Database["public"]["Enums"]["fiche_action_cibles"][] | null
          collectivite_id?: number
          created_at?: string
          date_debut?: string | null
          date_fin_provisoire?: string | null
          description?: string | null
          financements?: string | null
          id?: number
          maj_termine?: boolean | null
          modified_at?: string
          modified_by?: string | null
          niveau_priorite?:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          notes_complementaires?: string | null
          objectifs?: string | null
          piliers_eci?:
            | Database["public"]["Enums"]["fiche_action_piliers_eci"][]
            | null
          ressources?: string | null
          restreint?: boolean | null
          resultats_attendus?:
            | Database["public"]["Enums"]["fiche_action_resultats_attendus"][]
            | null
          statut?: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_action: {
        Row: {
          action_id: string
          fiche_id: number
        }
        Insert: {
          action_id: string
          fiche_id: number
        }
        Update: {
          action_id?: string
          fiche_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_action_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_action_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_action_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_action_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_action_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_action_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_axe: {
        Row: {
          axe_id: number
          fiche_id: number
        }
        Insert: {
          axe_id: number
          fiche_id: number
        }
        Update: {
          axe_id?: number
          fiche_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_axe_axe_id_fkey"
            columns: ["axe_id"]
            referencedRelation: "axe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_axe_id_fkey"
            columns: ["axe_id"]
            referencedRelation: "plan_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_axe_id_fkey"
            columns: ["axe_id"]
            referencedRelation: "plan_action_profondeur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_axe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_financeur_tag: {
        Row: {
          fiche_id: number
          financeur_tag_id: number
          id: number
          montant_ttc: number | null
        }
        Insert: {
          fiche_id: number
          financeur_tag_id: number
          id?: number
          montant_ttc?: number | null
        }
        Update: {
          fiche_id?: number
          financeur_tag_id?: number
          id?: number
          montant_ttc?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_financeur_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_financeur_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_financeur_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_financeur_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_financeur_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_financeur_tag_financeur_tag_id_fkey"
            columns: ["financeur_tag_id"]
            referencedRelation: "financeur_tag"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_import_csv: {
        Row: {
          amelioration_continue: string | null
          axe: string | null
          budget: string | null
          calendrier: string | null
          cibles: string | null
          collectivite_id: string | null
          date_debut: string | null
          date_fin: string | null
          description: string | null
          elu_referent: string | null
          financements: string | null
          financeur_deux: string | null
          financeur_trois: string | null
          financeur_un: string | null
          montant_deux: string | null
          montant_trois: string | null
          montant_un: string | null
          moyens: string | null
          notes: string | null
          num_action: string | null
          objectifs: string | null
          partenaires: string | null
          personne_referente: string | null
          plan_nom: string | null
          priorite: string | null
          resultats_attendus: string | null
          service: string | null
          sous_axe: string | null
          sous_sous_axe: string | null
          statut: string | null
          structure_pilote: string | null
          titre: string | null
        }
        Insert: {
          amelioration_continue?: string | null
          axe?: string | null
          budget?: string | null
          calendrier?: string | null
          cibles?: string | null
          collectivite_id?: string | null
          date_debut?: string | null
          date_fin?: string | null
          description?: string | null
          elu_referent?: string | null
          financements?: string | null
          financeur_deux?: string | null
          financeur_trois?: string | null
          financeur_un?: string | null
          montant_deux?: string | null
          montant_trois?: string | null
          montant_un?: string | null
          moyens?: string | null
          notes?: string | null
          num_action?: string | null
          objectifs?: string | null
          partenaires?: string | null
          personne_referente?: string | null
          plan_nom?: string | null
          priorite?: string | null
          resultats_attendus?: string | null
          service?: string | null
          sous_axe?: string | null
          sous_sous_axe?: string | null
          statut?: string | null
          structure_pilote?: string | null
          titre?: string | null
        }
        Update: {
          amelioration_continue?: string | null
          axe?: string | null
          budget?: string | null
          calendrier?: string | null
          cibles?: string | null
          collectivite_id?: string | null
          date_debut?: string | null
          date_fin?: string | null
          description?: string | null
          elu_referent?: string | null
          financements?: string | null
          financeur_deux?: string | null
          financeur_trois?: string | null
          financeur_un?: string | null
          montant_deux?: string | null
          montant_trois?: string | null
          montant_un?: string | null
          moyens?: string | null
          notes?: string | null
          num_action?: string | null
          objectifs?: string | null
          partenaires?: string | null
          personne_referente?: string | null
          plan_nom?: string | null
          priorite?: string | null
          resultats_attendus?: string | null
          service?: string | null
          sous_axe?: string | null
          sous_sous_axe?: string | null
          statut?: string | null
          structure_pilote?: string | null
          titre?: string | null
        }
        Relationships: []
      }
      fiche_action_indicateur: {
        Row: {
          fiche_id: number
          indicateur_id: string | null
          indicateur_personnalise_id: number | null
        }
        Insert: {
          fiche_id: number
          indicateur_id?: string | null
          indicateur_personnalise_id?: number | null
        }
        Update: {
          fiche_id?: number
          indicateur_id?: string | null
          indicateur_personnalise_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_indicateur_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_indicateur_indicateur_personnalise_id_fkey"
            columns: ["indicateur_personnalise_id"]
            referencedRelation: "indicateur_personnalise_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_lien: {
        Row: {
          fiche_deux: number
          fiche_une: number
        }
        Insert: {
          fiche_deux: number
          fiche_une: number
        }
        Update: {
          fiche_deux?: number
          fiche_une?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_lien_fiche_deux_fkey"
            columns: ["fiche_deux"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_deux_fkey"
            columns: ["fiche_deux"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_deux_fkey"
            columns: ["fiche_deux"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_deux_fkey"
            columns: ["fiche_deux"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_deux_fkey"
            columns: ["fiche_deux"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_une_fkey"
            columns: ["fiche_une"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_une_fkey"
            columns: ["fiche_une"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_une_fkey"
            columns: ["fiche_une"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_une_fkey"
            columns: ["fiche_une"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_lien_fiche_une_fkey"
            columns: ["fiche_une"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_partenaire_tag: {
        Row: {
          fiche_id: number
          partenaire_tag_id: number
        }
        Insert: {
          fiche_id: number
          partenaire_tag_id: number
        }
        Update: {
          fiche_id?: number
          partenaire_tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_partenaire_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_partenaire_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_partenaire_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_partenaire_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_partenaire_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_partenaire_tag_partenaire_tag_id_fkey"
            columns: ["partenaire_tag_id"]
            referencedRelation: "partenaire_tag"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_pilote: {
        Row: {
          fiche_id: number
          tag_id: number | null
          user_id: string | null
        }
        Insert: {
          fiche_id: number
          tag_id?: number | null
          user_id?: string | null
        }
        Update: {
          fiche_id?: number
          tag_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_pilote_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "personne_tag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_pilote_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_referent: {
        Row: {
          fiche_id: number
          tag_id: number | null
          user_id: string | null
        }
        Insert: {
          fiche_id: number
          tag_id?: number | null
          user_id?: string | null
        }
        Update: {
          fiche_id?: number
          tag_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_referent_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "personne_tag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_referent_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_service_tag: {
        Row: {
          fiche_id: number
          service_tag_id: number
        }
        Insert: {
          fiche_id: number
          service_tag_id: number
        }
        Update: {
          fiche_id?: number
          service_tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_service_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_service_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_service_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_service_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_service_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_service_tag_service_tag_id_fkey"
            columns: ["service_tag_id"]
            referencedRelation: "service_tag"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_sous_thematique: {
        Row: {
          fiche_id: number
          thematique_id: number
        }
        Insert: {
          fiche_id: number
          thematique_id: number
        }
        Update: {
          fiche_id?: number
          thematique_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_sous_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_sous_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_sous_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_sous_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_sous_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_sous_thematique_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "sous_thematique"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_structure_tag: {
        Row: {
          fiche_id: number
          structure_tag_id: number
        }
        Insert: {
          fiche_id: number
          structure_tag_id: number
        }
        Update: {
          fiche_id?: number
          structure_tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_structure_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_structure_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_structure_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_structure_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_structure_tag_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_structure_tag_structure_tag_id_fkey"
            columns: ["structure_tag_id"]
            referencedRelation: "structure_tag"
            referencedColumns: ["id"]
          }
        ]
      }
      fiche_action_thematique: {
        Row: {
          fiche_id: number
          thematique: string
        }
        Insert: {
          fiche_id: number
          thematique: string
        }
        Update: {
          fiche_id?: number
          thematique?: string
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_thematique_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_thematique_thematique_fkey"
            columns: ["thematique"]
            referencedRelation: "thematique"
            referencedColumns: ["thematique"]
          }
        ]
      }
      filtre_intervalle: {
        Row: {
          id: string
          intervalle: unknown
          libelle: string
          type: Database["public"]["Enums"]["collectivite_filtre_type"]
        }
        Insert: {
          id: string
          intervalle: unknown
          libelle: string
          type: Database["public"]["Enums"]["collectivite_filtre_type"]
        }
        Update: {
          id?: string
          intervalle?: unknown
          libelle?: string
          type?: Database["public"]["Enums"]["collectivite_filtre_type"]
        }
        Relationships: []
      }
      financeur_tag: {
        Row: {
          collectivite_id: number
          id: number
          nom: string
        }
        Insert: {
          collectivite_id: number
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number
          id?: number
          nom?: string
        }
        Relationships: []
      }
      indicateur_action: {
        Row: {
          action_id: string
          indicateur_id: string
          modified_at: string
        }
        Insert: {
          action_id: string
          indicateur_id: string
          modified_at?: string
        }
        Update: {
          action_id?: string
          indicateur_id?: string
          modified_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_action_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_action_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_definition: {
        Row: {
          description: string
          id: string
          identifiant: string | null
          modified_at: string
          nom: string
          parent: string | null
          participation_score: boolean
          programmes: Database["public"]["Enums"]["indicateur_programme"][]
          sans_valeur: boolean
          selection: boolean
          source: string | null
          thematiques: Database["public"]["Enums"]["indicateur_thematique"][]
          titre_long: string
          type:
            | Database["public"]["Enums"]["indicateur_referentiel_type"]
            | null
          unite: string
          valeur_indicateur: string | null
        }
        Insert: {
          description: string
          id: string
          identifiant?: string | null
          modified_at?: string
          nom: string
          parent?: string | null
          participation_score?: boolean
          programmes?: Database["public"]["Enums"]["indicateur_programme"][]
          sans_valeur?: boolean
          selection?: boolean
          source?: string | null
          thematiques?: Database["public"]["Enums"]["indicateur_thematique"][]
          titre_long?: string
          type?:
            | Database["public"]["Enums"]["indicateur_referentiel_type"]
            | null
          unite: string
          valeur_indicateur?: string | null
        }
        Update: {
          description?: string
          id?: string
          identifiant?: string | null
          modified_at?: string
          nom?: string
          parent?: string | null
          participation_score?: boolean
          programmes?: Database["public"]["Enums"]["indicateur_programme"][]
          sans_valeur?: boolean
          selection?: boolean
          source?: string | null
          thematiques?: Database["public"]["Enums"]["indicateur_thematique"][]
          titre_long?: string
          type?:
            | Database["public"]["Enums"]["indicateur_referentiel_type"]
            | null
          unite?: string
          valeur_indicateur?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_definition_valeur_indicateur_fkey"
            columns: ["valeur_indicateur"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_objectif: {
        Row: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at: string
          valeur: number | null
        }
        Insert: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at?: string
          valeur?: number | null
        }
        Update: {
          annee?: number
          collectivite_id?: number
          indicateur_id?: string
          modified_at?: string
          valeur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_objectif_commentaire: {
        Row: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: string
          modified_at: string
          modified_by: string
        }
        Insert: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: string
          modified_at: string
          modified_by: string
        }
        Update: {
          annee?: number
          collectivite_id?: number
          commentaire?: string
          indicateur_id?: string
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_objectif_commentaire_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_parent: {
        Row: {
          id: number
          nom: string
          numero: string
        }
        Insert: {
          id?: number
          nom: string
          numero: string
        }
        Update: {
          id?: number
          nom?: string
          numero?: string
        }
        Relationships: []
      }
      indicateur_perso_objectif_commentaire: {
        Row: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: number
          modified_at: string
          modified_by: string
        }
        Insert: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: number
          modified_at: string
          modified_by: string
        }
        Update: {
          annee?: number
          collectivite_id?: number
          commentaire?: string
          indicateur_id?: number
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_personnalise_definition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_objectif_commentaire_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_perso_resultat_commentaire: {
        Row: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: number
          modified_at: string
          modified_by: string
        }
        Insert: {
          annee: number
          collectivite_id: number
          commentaire: string
          indicateur_id: number
          modified_at: string
          modified_by: string
        }
        Update: {
          annee?: number
          collectivite_id?: number
          commentaire?: string
          indicateur_id?: number
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_personnalise_definition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_perso_resultat_commentaire_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_personnalise_definition: {
        Row: {
          collectivite_id: number
          commentaire: string
          description: string
          id: number
          modified_at: string
          modified_by: string
          titre: string
          unite: string
        }
        Insert: {
          collectivite_id: number
          commentaire: string
          description: string
          id?: number
          modified_at?: string
          modified_by?: string
          titre: string
          unite: string
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          description?: string
          id?: number
          modified_at?: string
          modified_by?: string
          titre?: string
          unite?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_definition_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_personnalise_objectif: {
        Row: {
          annee: number
          collectivite_id: number
          indicateur_id: number
          modified_at: string
          valeur: number | null
        }
        Insert: {
          annee: number
          collectivite_id: number
          indicateur_id: number
          modified_at?: string
          valeur?: number | null
        }
        Update: {
          annee?: number
          collectivite_id?: number
          indicateur_id?: number
          modified_at?: string
          valeur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_objectif_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_personnalise_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_personnalise_resultat: {
        Row: {
          annee: number
          collectivite_id: number
          indicateur_id: number
          modified_at: string
          valeur: number | null
        }
        Insert: {
          annee: number
          collectivite_id: number
          indicateur_id: number
          modified_at?: string
          valeur?: number | null
        }
        Update: {
          annee?: number
          collectivite_id?: number
          indicateur_id?: number
          modified_at?: string
          valeur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_personnalise_resultat_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_personnalise_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_resultat: {
        Row: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at: string
          valeur: number | null
        }
        Insert: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at?: string
          valeur?: number | null
        }
        Update: {
          annee?: number
          collectivite_id?: number
          indicateur_id?: string
          modified_at?: string
          valeur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_resultat_commentaire: {
        Row: {
          annee: number | null
          collectivite_id: number
          commentaire: string
          indicateur_id: string
          modified_at: string
          modified_by: string
        }
        Insert: {
          annee?: number | null
          collectivite_id: number
          commentaire: string
          indicateur_id: string
          modified_at?: string
          modified_by?: string
        }
        Update: {
          annee?: number | null
          collectivite_id?: number
          commentaire?: string
          indicateur_id?: string
          modified_at?: string
          modified_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_commentaire_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_resultat_import: {
        Row: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at: string
          source: string
          valeur: number
        }
        Insert: {
          annee: number
          collectivite_id: number
          indicateur_id: string
          modified_at: string
          source: string
          valeur: number
        }
        Update: {
          annee?: number
          collectivite_id?: number
          indicateur_id?: string
          modified_at?: string
          source?: string
          valeur?: number
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_import_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateur_terristory_json: {
        Row: {
          created_at: string
          indicateurs: Json
        }
        Insert: {
          created_at?: string
          indicateurs: Json
        }
        Update: {
          created_at?: string
          indicateurs?: Json
        }
        Relationships: []
      }
      indicateur_thematique_nom: {
        Row: {
          id: Database["public"]["Enums"]["indicateur_thematique"]
          nom: string
        }
        Insert: {
          id: Database["public"]["Enums"]["indicateur_thematique"]
          nom: string
        }
        Update: {
          id?: Database["public"]["Enums"]["indicateur_thematique"]
          nom?: string
        }
        Relationships: []
      }
      indicateurs_json: {
        Row: {
          created_at: string
          indicateurs: Json
        }
        Insert: {
          created_at?: string
          indicateurs: Json
        }
        Update: {
          created_at?: string
          indicateurs?: Json
        }
        Relationships: []
      }
      justification: {
        Row: {
          collectivite_id: number
          modified_at: string
          modified_by: string
          question_id: string
          texte: string
        }
        Insert: {
          collectivite_id: number
          modified_at: string
          modified_by?: string
          question_id: string
          texte: string
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          modified_by?: string
          question_id?: string
          texte?: string
        }
        Relationships: [
          {
            foreignKeyName: "justification_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          }
        ]
      }
      justification_ajustement: {
        Row: {
          action_id: string
          collectivite_id: number
          modified_at: string
          modified_by: string
          texte: string
        }
        Insert: {
          action_id: string
          collectivite_id: number
          modified_at: string
          modified_by?: string
          texte: string
        }
        Update: {
          action_id?: string
          collectivite_id?: number
          modified_at?: string
          modified_by?: string
          texte?: string
        }
        Relationships: [
          {
            foreignKeyName: "justification_ajustement_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "justification_ajustement_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      labellisation: {
        Row: {
          annee: number | null
          collectivite_id: number | null
          etoiles: number
          id: number
          obtenue_le: string
          referentiel: Database["public"]["Enums"]["referentiel"]
          score_programme: number | null
          score_realise: number | null
        }
        Insert: {
          annee?: number | null
          collectivite_id?: number | null
          etoiles: number
          id?: number
          obtenue_le: string
          referentiel: Database["public"]["Enums"]["referentiel"]
          score_programme?: number | null
          score_realise?: number | null
        }
        Update: {
          annee?: number | null
          collectivite_id?: number | null
          etoiles?: number
          id?: number
          obtenue_le?: string
          referentiel?: Database["public"]["Enums"]["referentiel"]
          score_programme?: number | null
          score_realise?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      labellisation_action_critere: {
        Row: {
          action_id: string
          etoile: Database["labellisation"]["Enums"]["etoile"]
          formulation: string
          min_programme_percentage: number | null
          min_programme_score: number | null
          min_realise_percentage: number | null
          min_realise_score: number | null
          prio: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Insert: {
          action_id: string
          etoile: Database["labellisation"]["Enums"]["etoile"]
          formulation: string
          min_programme_percentage?: number | null
          min_programme_score?: number | null
          min_realise_percentage?: number | null
          min_realise_score?: number | null
          prio: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Update: {
          action_id?: string
          etoile?: Database["labellisation"]["Enums"]["etoile"]
          formulation?: string
          min_programme_percentage?: number | null
          min_programme_score?: number | null
          min_realise_percentage?: number | null
          min_realise_score?: number | null
          prio?: number
          referentiel?: Database["public"]["Enums"]["referentiel"]
        }
        Relationships: [
          {
            foreignKeyName: "labellisation_action_critere_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      labellisation_calendrier: {
        Row: {
          information: string
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Insert: {
          information: string
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Update: {
          information?: string
          referentiel?: Database["public"]["Enums"]["referentiel"]
        }
        Relationships: []
      }
      labellisation_fichier_critere: {
        Row: {
          description: string
          etoile: Database["labellisation"]["Enums"]["etoile"]
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Insert: {
          description: string
          etoile: Database["labellisation"]["Enums"]["etoile"]
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Update: {
          description?: string
          etoile?: Database["labellisation"]["Enums"]["etoile"]
          referentiel?: Database["public"]["Enums"]["referentiel"]
        }
        Relationships: []
      }
      maintenance: {
        Row: {
          begins_at: string
          ends_at: string
          id: number
        }
        Insert: {
          begins_at: string
          ends_at: string
          id?: number
        }
        Update: {
          begins_at?: string
          ends_at?: string
          id?: number
        }
        Relationships: []
      }
      partenaire_tag: {
        Row: {
          collectivite_id: number
          id: number
          nom: string
        }
        Insert: {
          collectivite_id: number
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number
          id?: number
          nom?: string
        }
        Relationships: []
      }
      personnalisation: {
        Row: {
          action_id: string
          description: string
          titre: string
        }
        Insert: {
          action_id: string
          description: string
          titre: string
        }
        Update: {
          action_id?: string
          description?: string
          titre?: string
        }
        Relationships: [
          {
            foreignKeyName: "personnalisation_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      personnalisation_consequence: {
        Row: {
          collectivite_id: number
          consequences: Json
          modified_at: string
          payload_timestamp: string | null
        }
        Insert: {
          collectivite_id: number
          consequences: Json
          modified_at?: string
          payload_timestamp?: string | null
        }
        Update: {
          collectivite_id?: number
          consequences?: Json
          modified_at?: string
          payload_timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "personnalisation_consequence_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      personnalisation_regle: {
        Row: {
          action_id: string
          description: string
          formule: string
          modified_at: string
          type: Database["public"]["Enums"]["regle_type"]
        }
        Insert: {
          action_id: string
          description: string
          formule: string
          modified_at?: string
          type: Database["public"]["Enums"]["regle_type"]
        }
        Update: {
          action_id?: string
          description?: string
          formule?: string
          modified_at?: string
          type?: Database["public"]["Enums"]["regle_type"]
        }
        Relationships: [
          {
            foreignKeyName: "personnalisation_regle_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "personnalisation"
            referencedColumns: ["action_id"]
          }
        ]
      }
      personnalisations_json: {
        Row: {
          created_at: string
          questions: Json
          regles: Json
        }
        Insert: {
          created_at?: string
          questions: Json
          regles: Json
        }
        Update: {
          created_at?: string
          questions?: Json
          regles?: Json
        }
        Relationships: []
      }
      personne_tag: {
        Row: {
          collectivite_id: number
          id: number
          nom: string
        }
        Insert: {
          collectivite_id: number
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number
          id?: number
          nom?: string
        }
        Relationships: []
      }
      plan_action_type: {
        Row: {
          categorie: string
          detail: string | null
          id: number
          type: string
        }
        Insert: {
          categorie: string
          detail?: string | null
          id?: number
          type: string
        }
        Update: {
          categorie?: string
          detail?: string | null
          id?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_action_type_categorie_fkey"
            columns: ["categorie"]
            referencedRelation: "plan_action_type_categorie"
            referencedColumns: ["categorie"]
          }
        ]
      }
      plan_action_type_categorie: {
        Row: {
          categorie: string
        }
        Insert: {
          categorie: string
        }
        Update: {
          categorie?: string
        }
        Relationships: []
      }
      post_audit_scores: {
        Row: {
          audit_id: number
          collectivite_id: number
          modified_at: string
          payload_timestamp: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Insert: {
          audit_id: number
          collectivite_id: number
          modified_at: string
          payload_timestamp?: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Update: {
          audit_id?: number
          collectivite_id?: number
          modified_at?: string
          payload_timestamp?: string | null
          referentiel?: Database["public"]["Enums"]["referentiel"]
          scores?: Json
        }
        Relationships: [
          {
            foreignKeyName: "post_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "action_audit_state"
            referencedColumns: ["audit_id"]
          },
          {
            foreignKeyName: "post_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit_en_cours"
            referencedColumns: ["id"]
          }
        ]
      }
      pre_audit_scores: {
        Row: {
          audit_id: number
          collectivite_id: number
          modified_at: string
          payload_timestamp: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Insert: {
          audit_id: number
          collectivite_id: number
          modified_at: string
          payload_timestamp?: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          scores: Json
        }
        Update: {
          audit_id?: number
          collectivite_id?: number
          modified_at?: string
          payload_timestamp?: string | null
          referentiel?: Database["public"]["Enums"]["referentiel"]
          scores?: Json
        }
        Relationships: [
          {
            foreignKeyName: "pre_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "action_audit_state"
            referencedColumns: ["audit_id"]
          },
          {
            foreignKeyName: "pre_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_audit_scores_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit_en_cours"
            referencedColumns: ["id"]
          }
        ]
      }
      preuve_action: {
        Row: {
          action_id: string
          preuve_id: string
        }
        Insert: {
          action_id: string
          preuve_id: string
        }
        Update: {
          action_id?: string
          preuve_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "preuve_action_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_action_preuve_id_fkey"
            columns: ["preuve_id"]
            referencedRelation: "preuve_reglementaire_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      preuve_audit: {
        Row: {
          audit_id: number
          collectivite_id: number
          commentaire: string
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          audit_id: number
          collectivite_id: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          audit_id?: number
          collectivite_id?: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_audit_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_audit_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "action_audit_state"
            referencedColumns: ["audit_id"]
          },
          {
            foreignKeyName: "preuve_audit_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_audit_audit_id_fkey"
            columns: ["audit_id"]
            referencedRelation: "audit_en_cours"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      preuve_complementaire: {
        Row: {
          action_id: string
          collectivite_id: number
          commentaire: string
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          action_id: string
          collectivite_id: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          action_id?: string
          collectivite_id?: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_complementaire_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          }
        ]
      }
      preuve_labellisation: {
        Row: {
          collectivite_id: number
          commentaire: string
          demande_id: number
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          collectivite_id: number
          commentaire?: string
          demande_id: number
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          demande_id?: number
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_labellisation_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "demande"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_labellisation_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "retool_labellisation_demande"
            referencedColumns: ["id"]
          }
        ]
      }
      preuve_rapport: {
        Row: {
          collectivite_id: number
          commentaire: string
          date: string
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          titre: string
          url: string | null
        }
        Insert: {
          collectivite_id: number
          commentaire?: string
          date: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          date?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      preuve_reglementaire: {
        Row: {
          collectivite_id: number
          commentaire: string
          fichier_id: number | null
          id: number
          lien: Json | null
          modified_at: string
          modified_by: string
          preuve_id: string
          titre: string
          url: string | null
        }
        Insert: {
          collectivite_id: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          preuve_id: string
          titre?: string
          url?: string | null
        }
        Update: {
          collectivite_id?: number
          commentaire?: string
          fichier_id?: number | null
          id?: number
          lien?: Json | null
          modified_at?: string
          modified_by?: string
          preuve_id?: string
          titre?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_collectivite_id"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "preuve_reglementaire_preuve_id_fkey"
            columns: ["preuve_id"]
            referencedRelation: "preuve_reglementaire_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      preuve_reglementaire_definition: {
        Row: {
          description: string
          id: string
          nom: string
        }
        Insert: {
          description: string
          id: string
          nom: string
        }
        Update: {
          description?: string
          id?: string
          nom?: string
        }
        Relationships: []
      }
      preuve_reglementaire_json: {
        Row: {
          created_at: string
          preuves: Json
        }
        Insert: {
          created_at?: string
          preuves: Json
        }
        Update: {
          created_at?: string
          preuves?: Json
        }
        Relationships: []
      }
      private_collectivite_membre: {
        Row: {
          champ_intervention:
            | Database["public"]["Enums"]["referentiel"][]
            | null
          collectivite_id: number
          created_at: string
          details_fonction: string | null
          fonction: Database["public"]["Enums"]["membre_fonction"] | null
          modified_at: string
          user_id: string
        }
        Insert: {
          champ_intervention?:
            | Database["public"]["Enums"]["referentiel"][]
            | null
          collectivite_id: number
          created_at?: string
          details_fonction?: string | null
          fonction?: Database["public"]["Enums"]["membre_fonction"] | null
          modified_at?: string
          user_id: string
        }
        Update: {
          champ_intervention?:
            | Database["public"]["Enums"]["referentiel"][]
            | null
          collectivite_id?: number
          created_at?: string
          details_fonction?: string | null
          fonction?: Database["public"]["Enums"]["membre_fonction"] | null
          modified_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_collectivite_membre_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      private_utilisateur_droit: {
        Row: {
          active: boolean
          collectivite_id: number
          created_at: string
          id: number
          invitation_id: string | null
          modified_at: string
          niveau_acces: Database["public"]["Enums"]["niveau_acces"]
          user_id: string
        }
        Insert: {
          active: boolean
          collectivite_id: number
          created_at?: string
          id?: number
          invitation_id?: string | null
          modified_at?: string
          niveau_acces?: Database["public"]["Enums"]["niveau_acces"]
          user_id: string
        }
        Update: {
          active?: boolean
          collectivite_id?: number
          created_at?: string
          id?: number
          invitation_id?: string | null
          modified_at?: string
          niveau_acces?: Database["public"]["Enums"]["niveau_acces"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_invitation_id_fkey"
            columns: ["invitation_id"]
            referencedRelation: "invitation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      question: {
        Row: {
          description: string
          formulation: string
          id: string
          ordonnancement: number | null
          thematique_id: string | null
          type: Database["public"]["Enums"]["question_type"]
          types_collectivites_concernees:
            | Database["public"]["Enums"]["type_collectivite"][]
            | null
        }
        Insert: {
          description: string
          formulation: string
          id: string
          ordonnancement?: number | null
          thematique_id?: string | null
          type: Database["public"]["Enums"]["question_type"]
          types_collectivites_concernees?:
            | Database["public"]["Enums"]["type_collectivite"][]
            | null
        }
        Update: {
          description?: string
          formulation?: string
          id?: string
          ordonnancement?: number | null
          thematique_id?: string | null
          type?: Database["public"]["Enums"]["question_type"]
          types_collectivites_concernees?:
            | Database["public"]["Enums"]["type_collectivite"][]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique_display"
            referencedColumns: ["id"]
          }
        ]
      }
      question_action: {
        Row: {
          action_id: string
          question_id: string
        }
        Insert: {
          action_id: string
          question_id: string
        }
        Update: {
          action_id?: string
          question_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_action_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_action_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_action_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_action_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          }
        ]
      }
      question_choix: {
        Row: {
          formulation: string | null
          id: string
          ordonnancement: number | null
          question_id: string | null
        }
        Insert: {
          formulation?: string | null
          id: string
          ordonnancement?: number | null
          question_id?: string | null
        }
        Update: {
          formulation?: string | null
          id?: string
          ordonnancement?: number | null
          question_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "question_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          }
        ]
      }
      question_thematique: {
        Row: {
          id: string
          nom: string | null
        }
        Insert: {
          id: string
          nom?: string | null
        }
        Update: {
          id?: string
          nom?: string | null
        }
        Relationships: []
      }
      referentiel_json: {
        Row: {
          children: Json
          created_at: string
          definitions: Json
        }
        Insert: {
          children: Json
          created_at?: string
          definitions: Json
        }
        Update: {
          children?: Json
          created_at?: string
          definitions?: Json
        }
        Relationships: []
      }
      reponse_binaire: {
        Row: {
          collectivite_id: number
          modified_at: string
          question_id: string
          reponse: boolean | null
        }
        Insert: {
          collectivite_id: number
          modified_at?: string
          question_id: string
          reponse?: boolean | null
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          question_id?: string
          reponse?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_binaire_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_binaire_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_binaire_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          }
        ]
      }
      reponse_choix: {
        Row: {
          collectivite_id: number
          modified_at: string
          question_id: string
          reponse: string | null
        }
        Insert: {
          collectivite_id: number
          modified_at?: string
          question_id: string
          reponse?: string | null
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          question_id?: string
          reponse?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_reponse_fkey"
            columns: ["reponse"]
            referencedRelation: "question_choix"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_choix_reponse_fkey"
            columns: ["reponse"]
            referencedRelation: "report_choix"
            referencedColumns: ["id"]
          }
        ]
      }
      reponse_proportion: {
        Row: {
          collectivite_id: number
          modified_at: string
          question_id: string
          reponse: number | null
        }
        Insert: {
          collectivite_id: number
          modified_at?: string
          question_id: string
          reponse?: number | null
        }
        Update: {
          collectivite_id?: number
          modified_at?: string
          question_id?: string
          reponse?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "reponse_proportion_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_proportion_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "question_display"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reponse_proportion_question_id_fkey"
            columns: ["question_id"]
            referencedRelation: "report_question"
            referencedColumns: ["id"]
          }
        ]
      }
      service_tag: {
        Row: {
          collectivite_id: number
          id: number
          nom: string
        }
        Insert: {
          collectivite_id: number
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number
          id?: number
          nom?: string
        }
        Relationships: []
      }
      site_contact: {
        Row: {
          email: string
          formulaire: Json
          modified_at: string
        }
        Insert: {
          email: string
          formulaire: Json
          modified_at?: string
        }
        Update: {
          email?: string
          formulaire?: Json
          modified_at?: string
        }
        Relationships: []
      }
      sous_thematique: {
        Row: {
          id: number
          sous_thematique: string
          thematique: string
        }
        Insert: {
          id?: number
          sous_thematique: string
          thematique: string
        }
        Update: {
          id?: number
          sous_thematique?: string
          thematique?: string
        }
        Relationships: []
      }
      structure_tag: {
        Row: {
          collectivite_id: number
          id: number
          nom: string
        }
        Insert: {
          collectivite_id: number
          id?: number
          nom: string
        }
        Update: {
          collectivite_id?: number
          id?: number
          nom?: string
        }
        Relationships: []
      }
      thematique: {
        Row: {
          thematique: string
        }
        Insert: {
          thematique: string
        }
        Update: {
          thematique?: string
        }
        Relationships: []
      }
      type_tabular_score: {
        Row: {
          action_id: string | null
          avancement: Database["public"]["Enums"]["avancement"] | null
          concerne: boolean | null
          desactive: boolean | null
          points_max_personnalises: number | null
          points_max_referentiel: number | null
          points_programmes: number | null
          points_realises: number | null
          points_restants: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          score_non_renseigne: number | null
          score_pas_fait: number | null
          score_programme: number | null
          score_realise: number | null
          score_realise_plus_programme: number | null
        }
        Insert: {
          action_id?: string | null
          avancement?: Database["public"]["Enums"]["avancement"] | null
          concerne?: boolean | null
          desactive?: boolean | null
          points_max_personnalises?: number | null
          points_max_referentiel?: number | null
          points_programmes?: number | null
          points_realises?: number | null
          points_restants?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          score_non_renseigne?: number | null
          score_pas_fait?: number | null
          score_programme?: number | null
          score_realise?: number | null
          score_realise_plus_programme?: number | null
        }
        Update: {
          action_id?: string | null
          avancement?: Database["public"]["Enums"]["avancement"] | null
          concerne?: boolean | null
          desactive?: boolean | null
          points_max_personnalises?: number | null
          points_max_referentiel?: number | null
          points_programmes?: number | null
          points_realises?: number | null
          points_restants?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          score_non_renseigne?: number | null
          score_pas_fait?: number | null
          score_programme?: number | null
          score_realise?: number | null
          score_realise_plus_programme?: number | null
        }
        Relationships: []
      }
      usage: {
        Row: {
          action: Database["public"]["Enums"]["usage_action"]
          collectivite_id: number | null
          fonction: Database["public"]["Enums"]["usage_fonction"]
          page: Database["public"]["Enums"]["visite_page"] | null
          time: string
          user_id: string | null
        }
        Insert: {
          action: Database["public"]["Enums"]["usage_action"]
          collectivite_id?: number | null
          fonction: Database["public"]["Enums"]["usage_fonction"]
          page?: Database["public"]["Enums"]["visite_page"] | null
          time?: string
          user_id?: string | null
        }
        Update: {
          action?: Database["public"]["Enums"]["usage_action"]
          collectivite_id?: number | null
          fonction?: Database["public"]["Enums"]["usage_fonction"]
          page?: Database["public"]["Enums"]["visite_page"] | null
          time?: string
          user_id?: string | null
        }
        Relationships: []
      }
      utilisateur_support: {
        Row: {
          support: boolean
          user_id: string
        }
        Insert: {
          support?: boolean
          user_id: string
        }
        Update: {
          support?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "utilisateur_support_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "dcp"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_support_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_support_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "crm_personnes"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_support_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "dcp_display"
            referencedColumns: ["user_id"]
          }
        ]
      }
      utilisateur_verifie: {
        Row: {
          user_id: string
          verifie: boolean
        }
        Insert: {
          user_id: string
          verifie?: boolean
        }
        Update: {
          user_id?: string
          verifie?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "utilisateur_verifie_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "dcp"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_verifie_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_verifie_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "crm_personnes"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "utilisateur_verifie_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "dcp_display"
            referencedColumns: ["user_id"]
          }
        ]
      }
      visite: {
        Row: {
          collectivite_id: number | null
          onglet: Database["public"]["Enums"]["visite_onglet"] | null
          page: Database["public"]["Enums"]["visite_page"]
          tag: Database["public"]["Enums"]["visite_tag"] | null
          time: string
          user_id: string | null
        }
        Insert: {
          collectivite_id?: number | null
          onglet?: Database["public"]["Enums"]["visite_onglet"] | null
          page: Database["public"]["Enums"]["visite_page"]
          tag?: Database["public"]["Enums"]["visite_tag"] | null
          time?: string
          user_id?: string | null
        }
        Update: {
          collectivite_id?: number | null
          onglet?: Database["public"]["Enums"]["visite_onglet"] | null
          page?: Database["public"]["Enums"]["visite_page"]
          tag?: Database["public"]["Enums"]["visite_tag"] | null
          time?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      action_audit_state: {
        Row: {
          action_id: string | null
          audit_id: number | null
          avis: string | null
          collectivite_id: number | null
          ordre_du_jour: boolean | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          state_id: number | null
          statut: Database["public"]["Enums"]["audit_statut"] | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      action_children: {
        Row: {
          children: unknown[] | null
          depth: number | null
          id: string | null
        }
        Relationships: []
      }
      action_definition_summary: {
        Row: {
          children: unknown[] | null
          depth: number | null
          description: string | null
          have_contexte: boolean | null
          have_exemples: boolean | null
          have_perimetre_evaluation: boolean | null
          have_preuve: boolean | null
          have_questions: boolean | null
          have_reduction_potentiel: boolean | null
          have_ressources: boolean | null
          id: string | null
          identifiant: string | null
          nom: string | null
          phase: Database["public"]["Enums"]["action_categorie"] | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }
        Relationships: []
      }
      action_discussion_feed: {
        Row: {
          action_id: string | null
          collectivite_id: number | null
          commentaires: Json[] | null
          created_at: string | null
          created_by: string | null
          id: number | null
          modified_at: string | null
          status: Database["public"]["Enums"]["action_discussion_statut"] | null
        }
        Relationships: [
          {
            foreignKeyName: "action_discussion_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_discussion_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      action_referentiel: {
        Row: {
          action_id: string | null
          ascendants: unknown[] | null
          depth: number | null
          descendants: unknown[] | null
          description: string | null
          have_children: boolean | null
          have_contexte: boolean | null
          have_exemples: boolean | null
          have_perimetre_evaluation: boolean | null
          have_preuve: boolean | null
          have_reduction_potentiel: boolean | null
          have_ressources: boolean | null
          identifiant: string | null
          leaves: unknown[] | null
          nom: string | null
          phase: Database["public"]["Enums"]["action_categorie"] | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }
        Relationships: []
      }
      action_statuts: {
        Row: {
          action_id: string | null
          ascendants: unknown[] | null
          avancement: Database["public"]["Enums"]["avancement"] | null
          avancement_descendants:
            | Database["public"]["Enums"]["avancement"][]
            | null
          avancement_detaille: number[] | null
          collectivite_id: number | null
          concerne: boolean | null
          depth: number | null
          desactive: boolean | null
          descendants: unknown[] | null
          description: string | null
          have_children: boolean | null
          have_contexte: boolean | null
          have_exemples: boolean | null
          have_perimetre_evaluation: boolean | null
          have_preuve: boolean | null
          have_reduction_potentiel: boolean | null
          have_ressources: boolean | null
          identifiant: string | null
          nom: string | null
          non_concerne: boolean | null
          phase: Database["public"]["Enums"]["action_categorie"] | null
          points_max_personnalises: number | null
          points_max_referentiel: number | null
          points_programmes: number | null
          points_realises: number | null
          points_restants: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          score_non_renseigne: number | null
          score_pas_fait: number | null
          score_programme: number | null
          score_realise: number | null
          score_realise_plus_programme: number | null
          type: Database["public"]["Enums"]["action_type"] | null
        }
        Relationships: []
      }
      action_title: {
        Row: {
          children: unknown[] | null
          id: string | null
          identifiant: string | null
          nom: string | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }
        Relationships: []
      }
      active_collectivite: {
        Row: {
          collectivite_id: number | null
          nom: string | null
        }
        Relationships: []
      }
      audit: {
        Row: {
          collectivite_id: number | null
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          valide: boolean | null
        }
        Insert: {
          collectivite_id?: number | null
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          valide?: boolean | null
        }
        Update: {
          collectivite_id?: number | null
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          valide?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "demande"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "retool_labellisation_demande"
            referencedColumns: ["id"]
          }
        ]
      }
      audit_en_cours: {
        Row: {
          collectivite_id: number | null
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          valide: boolean | null
        }
        Insert: {
          collectivite_id?: number | null
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          valide?: boolean | null
        }
        Update: {
          collectivite_id?: number | null
          date_debut?: string | null
          date_fin?: string | null
          demande_id?: number | null
          id?: number | null
          referentiel?: Database["public"]["Enums"]["referentiel"] | null
          valide?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "demande"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_demande_id_fkey"
            columns: ["demande_id"]
            referencedRelation: "retool_labellisation_demande"
            referencedColumns: ["id"]
          }
        ]
      }
      auditeurs: {
        Row: {
          audit_id: number | null
          collectivite_id: number | null
          noms: Json | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
        }
        Relationships: []
      }
      audits: {
        Row: {
          audit: unknown | null
          collectivite_id: number | null
          demande: unknown | null
          is_cot: boolean | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
        }
        Relationships: []
      }
      axe_descendants: {
        Row: {
          axe_id: number | null
          depth: number | null
          descendants: number[] | null
          parents: number[] | null
        }
        Relationships: []
      }
      bibliotheque_annexe: {
        Row: {
          collectivite_id: number | null
          commentaire: string | null
          created_at: string | null
          created_by: string | null
          created_by_nom: string | null
          fiche_id: number | null
          fichier: Json | null
          id: number | null
          lien: Json | null
          plan_ids: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiche_resume"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "annexe_fiche_id_fkey"
            columns: ["fiche_id"]
            referencedRelation: "fiches_action"
            referencedColumns: ["id"]
          }
        ]
      }
      bibliotheque_fichier: {
        Row: {
          bucket_id: string | null
          collectivite_id: number | null
          file_id: string | null
          filename: string | null
          filesize: number | null
          hash: string | null
          id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "bibliotheque_fichier_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
      client_action_statut: {
        Row: {
          action_id: string | null
          avancement: Database["public"]["Enums"]["avancement"] | null
          collectivite_id: number | null
          concerne: boolean | null
          modified_by: string | null
        }
        Insert: {
          action_id?: string | null
          avancement?: Database["public"]["Enums"]["avancement"] | null
          collectivite_id?: number | null
          concerne?: boolean | null
          modified_by?: string | null
        }
        Update: {
          action_id?: string | null
          avancement?: Database["public"]["Enums"]["avancement"] | null
          collectivite_id?: number | null
          concerne?: boolean | null
          modified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "action_statut_action_id_fkey"
            columns: ["action_id"]
            referencedRelation: "action_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "action_statut_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      collectivite_card: {
        Row: {
          code_siren_insee: string | null
          collectivite_id: number | null
          completude_cae: number | null
          completude_cae_intervalle: string | null
          completude_eci: number | null
          completude_eci_intervalle: string | null
          completude_intervalles: string[] | null
          completude_max: number | null
          completude_min: number | null
          departement_code: string | null
          etoiles_all: number[] | null
          etoiles_cae: number | null
          etoiles_eci: number | null
          fait_cae_intervalle: string | null
          fait_eci_intervalle: string | null
          fait_intervalles: string[] | null
          nom: string | null
          population: number | null
          population_intervalle: string | null
          region_code: string | null
          score_fait_cae: number | null
          score_fait_eci: number | null
          score_fait_max: number | null
          score_fait_min: number | null
          score_fait_sum: number | null
          score_programme_cae: number | null
          score_programme_eci: number | null
          score_programme_max: number | null
          score_programme_sum: number | null
          type_collectivite:
            | Database["public"]["Enums"]["filterable_type_collectivite"]
            | null
        }
        Relationships: []
      }
      collectivite_carte_identite: {
        Row: {
          code_siren_insee: string | null
          collectivite_id: number | null
          departement_name: string | null
          is_cot: boolean | null
          nom: string | null
          population_source: string | null
          population_totale: number | null
          region_name: string | null
          type_collectivite:
            | Database["public"]["Enums"]["type_collectivite"]
            | null
        }
        Relationships: []
      }
      collectivite_identite: {
        Row: {
          id: number | null
          localisation: string[] | null
          population: string[] | null
          type: Database["public"]["Enums"]["type_collectivite"][] | null
        }
        Relationships: []
      }
      collectivite_niveau_acces: {
        Row: {
          access_restreint: boolean | null
          collectivite_id: number | null
          est_auditeur: boolean | null
          niveau_acces: Database["public"]["Enums"]["niveau_acces"] | null
          nom: string | null
        }
        Relationships: []
      }
      comparaison_scores_audit: {
        Row: {
          action_id: string | null
          collectivite_id: number | null
          courant: Database["public"]["CompositeTypes"]["tabular_score"] | null
          pre_audit:
            | Database["public"]["CompositeTypes"]["tabular_score"]
            | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
        }
        Relationships: []
      }
      confidentialite_cle_primaire_compose: {
        Row: {
          table_name: unknown | null
        }
        Relationships: []
      }
      confidentialite_fonctions_a_tester: {
        Row: {
          element: unknown | null
        }
        Relationships: []
      }
      confidentialite_fonctions_parametres: {
        Row: {
          colonne: unknown | null
          element: unknown | null
          type: unknown | null
        }
        Relationships: []
      }
      confidentialite_tables_a_tester: {
        Row: {
          element: unknown | null
        }
        Relationships: []
      }
      confidentialite_tables_colonnes: {
        Row: {
          colonne: unknown | null
          element: unknown | null
          type: unknown | null
        }
        Relationships: []
      }
      confidentialite_types_enum: {
        Row: {
          enum_nom: string | null
          type_nom: unknown | null
        }
        Relationships: []
      }
      confidentialite_vues_a_tester: {
        Row: {
          c: string | null
          d: string | null
          element: unknown | null
          u: string | null
        }
        Relationships: []
      }
      confidentialite_vues_colonnes: {
        Row: {
          colonne: unknown | null
          element: unknown | null
          type: unknown | null
        }
        Relationships: []
      }
      crm_collectivites: {
        Row: {
          code_siren_insee: string | null
          collectivite_id: number | null
          cot: boolean | null
          departement_code: string | null
          departement_name: string | null
          key: string | null
          nature_collectivite: string | null
          nom: string | null
          population_totale: number | null
          region_code: string | null
          region_name: string | null
          type_collectivite:
            | Database["public"]["Enums"]["type_collectivite"]
            | null
        }
        Relationships: []
      }
      crm_droits: {
        Row: {
          champ_intervention: string | null
          collectivite_id: number | null
          collectivite_key: string | null
          details_fonction: string | null
          fonction: Database["public"]["Enums"]["membre_fonction"] | null
          key: string | null
          niveau_acces: Database["public"]["Enums"]["niveau_acces"] | null
          user_id: string | null
          user_key: string | null
        }
        Relationships: [
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      crm_labellisations: {
        Row: {
          annee: number | null
          collectivite_key: string | null
          etoiles: number | null
          id: number | null
          obtenue_le: string | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          score_programme: number | null
          score_realise: number | null
        }
        Relationships: []
      }
      crm_personnes: {
        Row: {
          email: string | null
          key: string | null
          nom: string | null
          prenom: string | null
          telephone: string | null
          user_id: string | null
        }
        Insert: {
          email?: never
          key?: never
          nom?: never
          prenom?: never
          telephone?: never
          user_id?: string | null
        }
        Update: {
          email?: never
          key?: never
          nom?: never
          prenom?: never
          telephone?: never
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dcp_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      crm_usages: {
        Row: {
          collectivite_id: number | null
          completude_cae: number | null
          completude_eci: number | null
          fiches: number | null
          fiches_action_referentiel: number | null
          fiches_fiche_liee: number | null
          fiches_indicateur: number | null
          fiches_initiees: number | null
          fiches_mod_1mois: number | null
          fiches_mod_3mois: number | null
          fiches_mod_6mois: number | null
          fiches_pilotage: number | null
          indicateurs_perso: number | null
          key: string | null
          plans: number | null
          premier_rattachement: string | null
          resultats_indicateurs: number | null
          resultats_indicateurs_perso: number | null
        }
        Relationships: []
      }
      departement: {
        Row: {
          code: string | null
          libelle: string | null
          region_code: string | null
        }
        Insert: {
          code?: string | null
          libelle?: string | null
          region_code?: string | null
        }
        Update: {
          code?: string | null
          libelle?: string | null
          region_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "departement_region_code_fkey"
            columns: ["region_code"]
            referencedRelation: "region"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "departement_region_code_fkey"
            columns: ["region_code"]
            referencedRelation: "region"
            referencedColumns: ["code"]
          }
        ]
      }
      export_score_audit: {
        Row: {
          collectivite: string | null
          cot: boolean | null
          date_cloture_cae: string | null
          date_cloture_eci: string | null
          points_cae: number | null
          points_eci: number | null
          programme_cae: number | null
          programme_eci: number | null
          realise_cae: number | null
          realise_eci: number | null
          region: string | null
          signataire: string | null
        }
        Relationships: []
      }
      fiche_action_personne_pilote: {
        Row: {
          collectivite_id: number | null
          nom: string | null
          tag_id: number | null
          user_id: string | null
        }
        Relationships: []
      }
      fiche_action_personne_referente: {
        Row: {
          collectivite_id: number | null
          nom: string | null
          tag_id: number | null
          user_id: string | null
        }
        Relationships: []
      }
      fiche_resume: {
        Row: {
          collectivite_id: number | null
          date_fin_provisoire: string | null
          id: number | null
          modified_at: string | null
          niveau_priorite:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
          plans: unknown[] | null
          restreint: boolean | null
          statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      fiches_action: {
        Row: {
          actions: unknown[] | null
          amelioration_continue: boolean | null
          axes: unknown[] | null
          budget_previsionnel: number | null
          calendrier: string | null
          cibles: Database["public"]["Enums"]["fiche_action_cibles"][] | null
          collectivite_id: number | null
          created_at: string | null
          date_debut: string | null
          date_fin_provisoire: string | null
          description: string | null
          fiches_liees: unknown[] | null
          financements: string | null
          financeurs:
            | Database["public"]["CompositeTypes"]["financeur_montant"][]
            | null
          id: number | null
          indicateurs:
            | Database["public"]["CompositeTypes"]["indicateur_generique"][]
            | null
          maj_termine: boolean | null
          modified_at: string | null
          modified_by: string | null
          niveau_priorite:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          notes_complementaires: string | null
          objectifs: string | null
          partenaires: unknown[] | null
          piliers_eci:
            | Database["public"]["Enums"]["fiche_action_piliers_eci"][]
            | null
          pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
          referents: Database["public"]["CompositeTypes"]["personne"][] | null
          ressources: string | null
          restreint: boolean | null
          resultats_attendus:
            | Database["public"]["Enums"]["fiche_action_resultats_attendus"][]
            | null
          services: unknown[] | null
          sous_thematiques: unknown[] | null
          statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
          structures: unknown[] | null
          thematiques: unknown[] | null
          titre: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "fiche_action_modified_by_fkey"
            columns: ["modified_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      fiches_liees_par_fiche: {
        Row: {
          fiche_id: number | null
          fiche_liee_id: number | null
        }
        Relationships: []
      }
      historique: {
        Row: {
          action_id: string | null
          action_identifiant: string | null
          action_ids: unknown[] | null
          action_nom: string | null
          avancement: Database["public"]["Enums"]["avancement"] | null
          avancement_detaille: number[] | null
          collectivite_id: number | null
          concerne: boolean | null
          justification: string | null
          modified_at: string | null
          modified_by_id: string | null
          modified_by_nom: string | null
          precision: string | null
          previous_avancement: Database["public"]["Enums"]["avancement"] | null
          previous_avancement_detaille: number[] | null
          previous_concerne: boolean | null
          previous_justification: string | null
          previous_modified_at: string | null
          previous_modified_by_id: string | null
          previous_precision: string | null
          previous_reponse: Json | null
          question_formulation: string | null
          question_id: string | null
          question_type: Database["public"]["Enums"]["question_type"] | null
          reponse: Json | null
          tache_identifiant: string | null
          tache_nom: string | null
          thematique_id: string | null
          thematique_nom: string | null
          type: string | null
        }
        Relationships: []
      }
      historique_utilisateur: {
        Row: {
          collectivite_id: number | null
          modified_by_id: string | null
          modified_by_nom: string | null
        }
        Relationships: []
      }
      indicateur_rempli: {
        Row: {
          collectivite_id: number | null
          indicateur_id: string | null
          perso_id: number | null
          rempli: boolean | null
        }
        Relationships: []
      }
      indicateur_summary: {
        Row: {
          collectivite_id: number | null
          indicateur_id: string | null
          programmes:
            | Database["public"]["Enums"]["indicateur_programme"][]
            | null
          resultats: number | null
        }
        Relationships: [
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "indicateur_resultat_indicateur_id_fkey"
            columns: ["indicateur_id"]
            referencedRelation: "indicateur_definition"
            referencedColumns: ["id"]
          }
        ]
      }
      indicateurs: {
        Row: {
          annee: number | null
          collectivite_id: number | null
          commentaire: string | null
          indicateur_id: string | null
          indicateur_perso_id: number | null
          source: string | null
          type: Database["public"]["Enums"]["indicateur_valeur_type"] | null
          valeur: number | null
        }
        Relationships: []
      }
      indicateurs_collectivite: {
        Row: {
          collectivite_id: number | null
          description: string | null
          indicateur_id: string | null
          indicateur_personnalise_id: number | null
          nom: string | null
          programmes:
            | Database["public"]["Enums"]["indicateur_programme"][]
            | null
          unite: string | null
        }
        Relationships: []
      }
      mes_collectivites: {
        Row: {
          access_restreint: boolean | null
          collectivite_id: number | null
          est_auditeur: boolean | null
          niveau_acces: Database["public"]["Enums"]["niveau_acces"] | null
          nom: string | null
        }
        Relationships: [
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      named_collectivite: {
        Row: {
          collectivite_id: number | null
          nom: string | null
        }
        Relationships: []
      }
      ongoing_maintenance: {
        Row: {
          begins_at: string | null
          ends_at: string | null
          now: string | null
        }
        Relationships: []
      }
      pg_all_foreign_keys: {
        Row: {
          fk_columns: unknown[] | null
          fk_constraint_name: unknown | null
          fk_schema_name: unknown | null
          fk_table_name: unknown | null
          fk_table_oid: unknown | null
          is_deferrable: boolean | null
          is_deferred: boolean | null
          match_type: string | null
          on_delete: string | null
          on_update: string | null
          pk_columns: unknown[] | null
          pk_constraint_name: unknown | null
          pk_index_name: unknown | null
          pk_schema_name: unknown | null
          pk_table_name: unknown | null
          pk_table_oid: unknown | null
        }
        Relationships: []
      }
      plan_action: {
        Row: {
          collectivite_id: number | null
          id: number | null
          plan: Json | null
        }
        Insert: {
          collectivite_id?: number | null
          id?: number | null
          plan?: never
        }
        Update: {
          collectivite_id?: number | null
          id?: number | null
          plan?: never
        }
        Relationships: [
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      plan_action_chemin: {
        Row: {
          axe_id: number | null
          chemin: unknown[] | null
          collectivite_id: number | null
          plan_id: number | null
        }
        Relationships: []
      }
      plan_action_profondeur: {
        Row: {
          collectivite_id: number | null
          id: number | null
          plan: Json | null
        }
        Insert: {
          collectivite_id?: number | null
          id?: number | null
          plan?: never
        }
        Update: {
          collectivite_id?: number | null
          id?: number | null
          plan?: never
        }
        Relationships: [
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "axe_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      preuve: {
        Row: {
          action: Json | null
          audit: Json | null
          collectivite_id: number | null
          commentaire: string | null
          created_at: string | null
          created_by: string | null
          created_by_nom: string | null
          demande: Json | null
          fichier: Json | null
          id: number | null
          lien: Json | null
          preuve_reglementaire: Json | null
          preuve_type: Database["public"]["Enums"]["preuve_type"] | null
          rapport: Json | null
        }
        Relationships: []
      }
      question_display: {
        Row: {
          action_ids: unknown[] | null
          choix: Json[] | null
          collectivite_id: number | null
          description: string | null
          formulation: string | null
          id: string | null
          localisation: string[] | null
          ordonnancement: number | null
          population: string[] | null
          thematique_id: string | null
          thematique_nom: string | null
          type: Database["public"]["Enums"]["question_type"] | null
          types_collectivites_concernees:
            | Database["public"]["Enums"]["type_collectivite"][]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "question_thematique_id_fkey"
            columns: ["thematique_id"]
            referencedRelation: "question_thematique_display"
            referencedColumns: ["id"]
          }
        ]
      }
      question_thematique_completude: {
        Row: {
          collectivite_id: number | null
          completude:
            | Database["public"]["Enums"]["thematique_completude"]
            | null
          id: string | null
          nom: string | null
          referentiels: Database["public"]["Enums"]["referentiel"][] | null
        }
        Relationships: []
      }
      question_thematique_display: {
        Row: {
          id: string | null
          nom: string | null
          referentiels: Database["public"]["Enums"]["referentiel"][] | null
        }
        Relationships: []
      }
      region: {
        Row: {
          code: string | null
          libelle: string | null
        }
        Insert: {
          code?: string | null
          libelle?: string | null
        }
        Update: {
          code?: string | null
          libelle?: string | null
        }
        Relationships: []
      }
      reponse_display: {
        Row: {
          collectivite_id: number | null
          justification: string | null
          question_id: string | null
          reponse: Json | null
        }
        Relationships: []
      }
      retool_active_collectivite: {
        Row: {
          collectivite_id: number | null
          nom: string | null
        }
        Relationships: []
      }
      retool_audit: {
        Row: {
          collectivite_id: number | null
          date_attribution: string | null
          date_debut: string | null
          date_fin: string | null
          envoyee_le: string | null
          nom: string | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type_audit: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "audit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      retool_completude: {
        Row: {
          code_siren_insee: string | null
          collectivite_id: number | null
          completude_cae: number | null
          completude_eci: number | null
          departement_name: string | null
          nom: string | null
          population_totale: number | null
          region_name: string | null
          type_collectivite:
            | Database["public"]["Enums"]["type_collectivite"]
            | null
        }
        Relationships: []
      }
      retool_completude_compute: {
        Row: {
          collectivite_id: number | null
          completude_cae: number | null
          completude_eci: number | null
          nom: string | null
        }
        Relationships: []
      }
      retool_labellisation: {
        Row: {
          annee: number | null
          collectivite_id: number | null
          collectivite_nom: string | null
          etoiles: number | null
          id: number | null
          obtenue_le: string | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          score_programme: number | null
          score_realise: number | null
        }
        Relationships: [
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "labellisation_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      retool_labellisation_demande: {
        Row: {
          collectivite_id: number | null
          date: string | null
          demandeur_email: string | null
          demandeur_fonction:
            | Database["public"]["Enums"]["membre_fonction"]
            | null
          demandeur_nom: string | null
          demandeur_prenom: string | null
          en_cours: boolean | null
          envoyee_le: string | null
          etoiles: Database["labellisation"]["Enums"]["etoile"] | null
          id: number | null
          modified_at: string | null
          nom: string | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          sujet: Database["labellisation"]["Enums"]["sujet_demande"] | null
        }
        Relationships: [
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "demande_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          }
        ]
      }
      retool_plan_action_hebdo: {
        Row: {
          collectivite_id: number | null
          contributeurs: string[] | null
          date_range: string | null
          day: string | null
          nb_fiches: number | null
          nb_plans: number | null
          nom: string | null
        }
        Relationships: []
      }
      retool_plan_action_premier_usage: {
        Row: {
          collectivite_id: number | null
          created_at: string | null
          email: string | null
          fiche: boolean | null
          nom: string | null
        }
        Relationships: []
      }
      retool_plan_action_usage: {
        Row: {
          collectivite_id: number | null
          derniere_modif: string | null
          nb_fiches: number | null
          nb_plans: number | null
          nb_utilisateurs: string | null
          nom: string | null
        }
        Relationships: []
      }
      retool_preuves: {
        Row: {
          action: string | null
          collectivite_id: number | null
          created_at: string | null
          fichier: string | null
          lien: string | null
          nom: string | null
          preuve_type: Database["public"]["Enums"]["preuve_type"] | null
          referentiel: string | null
        }
        Relationships: []
      }
      retool_score: {
        Row: {
          Avancement: string | null
          Collectivité: string | null
          collectivite_id: number | null
          Commentaire: string | null
          "Commentaires fusionnés": string | null
          Identifiant: string | null
          "Modifié le": string | null
          "Points potentiels": number | null
          "Points programmés": number | null
          "Points realisés": number | null
          "Pourcentage non renseigné": number | null
          "Pourcentage programmé": number | null
          "Pourcentage réalisé": number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          Titre: string | null
        }
        Relationships: []
      }
      retool_user_collectivites_list: {
        Row: {
          collectivites: string[] | null
          creation: string | null
          derniere_connexion: string | null
          email: string | null
          nb_collectivite: number | null
          nom: string | null
          prenom: string | null
        }
        Relationships: []
      }
      retool_user_list: {
        Row: {
          active: boolean | null
          champ_intervention:
            | Database["public"]["Enums"]["referentiel"][]
            | null
          collectivite: string | null
          collectivite_id: number | null
          details_fonction: string | null
          droit_id: number | null
          email: string | null
          fonction: Database["public"]["Enums"]["membre_fonction"] | null
          niveau_acces: Database["public"]["Enums"]["niveau_acces"] | null
          nom: string | null
          prenom: string | null
          telephone: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_membre_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivites_crm"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "late_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_snippet"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "action_statuts"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "auditeurs"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "audits"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_card"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_carte_identite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_identite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_niveau_acces"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "comparaison_scores_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "named_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_display"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "question_thematique_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_active_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_completude_compute"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_hebdo"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_premier_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_plan_action_usage"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "retool_score"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "site_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_active_real_collectivites"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "stats_locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "suivi_audit"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "carte_collectivite_active"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_action_statut"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_labellisation"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_plan_action"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_referentiel"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "collectivite_utilisateur"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "crm_usages"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_engagement_collectivite"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "locales_pourcentage_completude"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "rattachement"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_indicateur_resultat"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_binaire"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_choix"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_reponse_proportion"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_collectivite_id_fkey"
            columns: ["collectivite_id"]
            referencedRelation: "report_scores"
            referencedColumns: ["collectivite_id"]
          },
          {
            foreignKeyName: "private_utilisateur_droit_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      site_labellisation: {
        Row: {
          active: boolean | null
          cae_etoiles: number | null
          cae_obtenue_le: string | null
          cae_score_programme: number | null
          cae_score_realise: number | null
          code_siren_insee: string | null
          collectivite_id: number | null
          cot: boolean | null
          departement_code: string | null
          departement_name: string | null
          eci_etoiles: number | null
          eci_obtenue_le: string | null
          eci_score_programme: number | null
          eci_score_realise: number | null
          engagee: boolean | null
          labellisee: boolean | null
          nature_collectivite: string | null
          nom: string | null
          population_totale: number | null
          region_code: string | null
          region_name: string | null
          type_collectivite:
            | Database["public"]["Enums"]["type_collectivite"]
            | null
        }
        Relationships: []
      }
      site_region: {
        Row: {
          insee: string | null
          libelle: string | null
        }
        Insert: {
          insee?: string | null
          libelle?: string | null
        }
        Update: {
          insee?: string | null
          libelle?: string | null
        }
        Relationships: []
      }
      stats_active_real_collectivites: {
        Row: {
          collectivite_id: number | null
          nom: string | null
        }
        Relationships: []
      }
      stats_carte_collectivite_active: {
        Row: {
          code_siren_insee: string | null
          collectivite_id: number | null
          departement_code: string | null
          departement_name: string | null
          geojson: Json | null
          nature_collectivite: string | null
          nom: string | null
          population_totale: number | null
          region_code: string | null
          region_name: string | null
          type_collectivite:
            | Database["public"]["Enums"]["type_collectivite"]
            | null
        }
        Relationships: []
      }
      stats_carte_epci_par_departement: {
        Row: {
          actives: number | null
          geojson: Json | null
          insee: string | null
          libelle: string | null
          total: number | null
        }
        Relationships: []
      }
      stats_collectivite_actives_et_total_par_type: {
        Row: {
          actives: number | null
          total: number | null
          type_collectivite: string | null
        }
        Relationships: []
      }
      stats_evolution_collectivite_avec_minimum_fiches: {
        Row: {
          collectivites: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_evolution_indicateur_referentiel: {
        Row: {
          indicateurs: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_evolution_nombre_fiches: {
        Row: {
          fiches: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_evolution_nombre_utilisateur_par_collectivite: {
        Row: {
          maximum: number | null
          median: number | null
          mois: string | null
          moyen: number | null
        }
        Relationships: []
      }
      stats_evolution_resultat_indicateur_personnalise: {
        Row: {
          mois: string | null
          resultats: number | null
        }
        Relationships: []
      }
      stats_evolution_resultat_indicateur_referentiel: {
        Row: {
          mois: string | null
          resultats: number | null
        }
        Relationships: []
      }
      stats_evolution_total_activation_par_type: {
        Row: {
          mois: string | null
          total: number | null
          total_commune: number | null
          total_epci: number | null
          total_syndicat: number | null
        }
        Relationships: []
      }
      stats_evolution_utilisateur: {
        Row: {
          mois: string | null
          total_utilisateurs: number | null
          utilisateurs: number | null
        }
        Relationships: []
      }
      stats_labellisation_par_niveau: {
        Row: {
          etoiles: number | null
          labellisations: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
        }
        Relationships: []
      }
      stats_locales_collectivite_actives_et_total_par_type: {
        Row: {
          actives: number | null
          code_departement: string | null
          code_region: string | null
          total: number | null
          typologie: string | null
        }
        Relationships: []
      }
      stats_locales_engagement_collectivite: {
        Row: {
          code_departement: string | null
          code_region: string | null
          collectivite_id: number | null
          cot: boolean | null
          etoiles_cae: number | null
          etoiles_eci: number | null
        }
        Relationships: []
      }
      stats_locales_evolution_collectivite_avec_indicateur: {
        Row: {
          code_departement: string | null
          code_region: string | null
          collectivites: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_collectivite_avec_minimum_fiches: {
        Row: {
          code_departement: string | null
          code_region: string | null
          collectivites: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_indicateur_referentiel: {
        Row: {
          code_departement: string | null
          code_region: string | null
          indicateurs: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_nombre_fiches: {
        Row: {
          code_departement: string | null
          code_region: string | null
          fiches: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_nombre_utilisateur_par_collectivite: {
        Row: {
          code_departement: string | null
          code_region: string | null
          maximum: number | null
          median: number | null
          mois: string | null
          moyen: number | null
        }
        Relationships: []
      }
      stats_locales_evolution_resultat_indicateur_personnalise: {
        Row: {
          code_departement: string | null
          code_region: string | null
          indicateurs: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_resultat_indicateur_referentiel: {
        Row: {
          code_departement: string | null
          code_region: string | null
          indicateurs: number | null
          mois: string | null
        }
        Relationships: []
      }
      stats_locales_evolution_total_activation: {
        Row: {
          code_departement: string | null
          code_region: string | null
          mois: string | null
          total: number | null
          total_commune: number | null
          total_epci: number | null
          total_syndicat: number | null
        }
        Relationships: []
      }
      stats_locales_evolution_utilisateur: {
        Row: {
          code_departement: string | null
          code_region: string | null
          mois: string | null
          total_utilisateurs: number | null
          utilisateurs: number | null
        }
        Relationships: []
      }
      stats_locales_labellisation_par_niveau: {
        Row: {
          code_departement: string | null
          code_region: string | null
          etoiles: number | null
          labellisations: number | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
        }
        Relationships: []
      }
      stats_locales_tranche_completude: {
        Row: {
          cae: number | null
          code_departement: string | null
          code_region: string | null
          eci: number | null
          lower_bound: number | null
          upper_bound: number | null
        }
        Relationships: []
      }
      stats_rattachements: {
        Row: {
          count: number | null
          cumulated_count: number | null
          date: string | null
        }
        Relationships: []
      }
      stats_tranche_completude: {
        Row: {
          bucket: string | null
          cae: number | null
          eci: number | null
          lower_bound: number | null
          upper_bound: number | null
        }
        Relationships: []
      }
      stats_unique_active_collectivite: {
        Row: {
          count: number | null
          cumulated_count: number | null
          date: string | null
        }
        Relationships: []
      }
      stats_unique_active_users: {
        Row: {
          count: number | null
          cumulated_count: number | null
          date: string | null
        }
        Relationships: []
      }
      suivi_audit: {
        Row: {
          action_id: string | null
          avis: string | null
          collectivite_id: number | null
          have_children: boolean | null
          ordre_du_jour: boolean | null
          ordres_du_jour: boolean[] | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          statut: Database["public"]["Enums"]["audit_statut"] | null
          statuts: Database["public"]["Enums"]["audit_statut"][] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }
        Relationships: []
      }
      tap_funky: {
        Row: {
          args: string | null
          is_definer: boolean | null
          is_strict: boolean | null
          is_visible: boolean | null
          kind: unknown | null
          langoid: unknown | null
          name: unknown | null
          oid: unknown | null
          owner: unknown | null
          returns: string | null
          returns_set: boolean | null
          schema: unknown | null
          volatility: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _cleanup: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      _contract_on: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      _currtest: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      _db_privs: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      _definer: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _dexists: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _expand_context: {
        Args: {
          "": string
        }
        Returns: string
      }
      _expand_on: {
        Args: {
          "": string
        }
        Returns: string
      }
      _expand_vol: {
        Args: {
          "": string
        }
        Returns: string
      }
      _ext_exists: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _extensions:
        | {
            Args: {
              "": unknown
            }
            Returns: unknown[]
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: unknown[]
          }
      _funkargs: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      _get: {
        Args: {
          "": string
        }
        Returns: number
      }
      _get_db_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_dtype: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      _get_language_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_latest: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      _get_note:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": number
            }
            Returns: string
          }
      _get_opclass_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_rel_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_schema_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_tablespace_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _get_type_owner: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _got_func: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _grolist: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _has_group: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _has_role: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _has_user: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _inherited: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _is_schema: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _is_super: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _is_trusted: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _is_verbose: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      _lang: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _opc_exists: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _parts: {
        Args: {
          "": unknown
        }
        Returns: unknown[]
      }
      _pg_sv_type_array: {
        Args: {
          "": unknown[]
        }
        Returns: unknown
      }
      _prokind: {
        Args: {
          p_oid: unknown
        }
        Returns: unknown
      }
      _query: {
        Args: {
          "": string
        }
        Returns: string
      }
      _refine_vol: {
        Args: {
          "": string
        }
        Returns: string
      }
      _relexists: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _returns: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      _strict: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      _table_privs: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      _temptypes: {
        Args: {
          "": string
        }
        Returns: string
      }
      _todo: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      _vol: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      accepter_cgu: {
        Args: Record<PropertyKey, never>
        Returns: {
          cgu_acceptees_le: string | null
          created_at: string
          deleted: boolean
          email: string
          limited: boolean
          modified_at: string
          nom: string
          prenom: string
          telephone: string | null
          user_id: string
        }
      }
      action_contexte: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      action_down_to_tache: {
        Args: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          identifiant: string
        }
        Returns: {
          children: unknown[] | null
          depth: number | null
          description: string | null
          have_contexte: boolean | null
          have_exemples: boolean | null
          have_perimetre_evaluation: boolean | null
          have_preuve: boolean | null
          have_questions: boolean | null
          have_reduction_potentiel: boolean | null
          have_ressources: boolean | null
          id: string | null
          identifiant: string | null
          nom: string | null
          phase: Database["public"]["Enums"]["action_categorie"] | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }[]
      }
      action_exemples: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      action_perimetre_evaluation: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      action_preuve: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      action_reduction_potentiel: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      action_ressources: {
        Args: {
          id: unknown
        }
        Returns: Record<string, unknown>
      }
      add_bibliotheque_fichier: {
        Args: {
          collectivite_id: number
          hash: string
          filename: string
        }
        Returns: {
          bucket_id: string | null
          collectivite_id: number | null
          file_id: string | null
          filename: string | null
          filesize: number | null
          hash: string | null
          id: number | null
        }
      }
      add_compression_policy: {
        Args: {
          hypertable: unknown
          compress_after: unknown
          if_not_exists?: boolean
          schedule_interval?: unknown
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_continuous_aggregate_policy: {
        Args: {
          continuous_aggregate: unknown
          start_offset: unknown
          end_offset: unknown
          schedule_interval: unknown
          if_not_exists?: boolean
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_data_node: {
        Args: {
          node_name: unknown
          host: string
          database?: unknown
          port?: number
          if_not_exists?: boolean
          bootstrap?: boolean
          password?: string
        }
        Returns: {
          node_name: unknown
          host: string
          port: number
          database: unknown
          node_created: boolean
          database_created: boolean
          extension_created: boolean
        }[]
      }
      add_dimension: {
        Args: {
          hypertable: unknown
          column_name: unknown
          number_partitions?: number
          chunk_time_interval?: unknown
          partitioning_func?: unknown
          if_not_exists?: boolean
        }
        Returns: {
          dimension_id: number
          schema_name: unknown
          table_name: unknown
          column_name: unknown
          created: boolean
        }[]
      }
      add_job: {
        Args: {
          proc: unknown
          schedule_interval: unknown
          config?: Json
          initial_start?: string
          scheduled?: boolean
          check_config?: unknown
          fixed_schedule?: boolean
          timezone?: string
        }
        Returns: number
      }
      add_reorder_policy: {
        Args: {
          hypertable: unknown
          index_name: unknown
          if_not_exists?: boolean
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_retention_policy: {
        Args: {
          relation: unknown
          drop_after: unknown
          if_not_exists?: boolean
          schedule_interval?: unknown
          initial_start?: string
          timezone?: string
        }
        Returns: number
      }
      add_user: {
        Args: {
          collectivite_id: number
          email: string
          niveau: Database["public"]["Enums"]["niveau_acces"]
        }
        Returns: Json
      }
      ajouter_fiche_action_dans_un_axe: {
        Args: {
          fiche_id: number
          axe_id: number
        }
        Returns: undefined
      }
      alter_data_node: {
        Args: {
          node_name: unknown
          host?: string
          database?: unknown
          port?: number
          available?: boolean
        }
        Returns: {
          node_name: unknown
          host: string
          port: number
          database: unknown
          available: boolean
        }[]
      }
      alter_job: {
        Args: {
          job_id: number
          schedule_interval?: unknown
          max_runtime?: unknown
          max_retries?: number
          retry_period?: unknown
          scheduled?: boolean
          config?: Json
          next_start?: string
          if_exists?: boolean
          check_config?: unknown
        }
        Returns: {
          job_id: number
          schedule_interval: unknown
          max_runtime: unknown
          max_retries: number
          retry_period: unknown
          scheduled: boolean
          config: Json
          next_start: string
          check_config: string
        }[]
      }
      approximate_row_count: {
        Args: {
          relation: unknown
        }
        Returns: number
      }
      attach_data_node: {
        Args: {
          node_name: unknown
          hypertable: unknown
          if_not_attached?: boolean
          repartition?: boolean
        }
        Returns: {
          hypertable_id: number
          node_hypertable_id: number
          node_name: unknown
        }[]
      }
      attach_tablespace: {
        Args: {
          tablespace: unknown
          hypertable: unknown
          if_not_attached?: boolean
        }
        Returns: undefined
      }
      can: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      can_read_acces_restreint: {
        Args: {
          collectivite_id: number
        }
        Returns: boolean
      }
      casts_are: {
        Args: {
          "": string[]
        }
        Returns: string
      }
      chunk_compression_stats: {
        Args: {
          hypertable: unknown
        }
        Returns: {
          chunk_schema: unknown
          chunk_name: unknown
          compression_status: string
          before_compression_table_bytes: number
          before_compression_index_bytes: number
          before_compression_toast_bytes: number
          before_compression_total_bytes: number
          after_compression_table_bytes: number
          after_compression_index_bytes: number
          after_compression_toast_bytes: number
          after_compression_total_bytes: number
          node_name: unknown
        }[]
      }
      chunks_detailed_size: {
        Args: {
          hypertable: unknown
        }
        Returns: {
          chunk_schema: unknown
          chunk_name: unknown
          table_bytes: number
          index_bytes: number
          toast_bytes: number
          total_bytes: number
          node_name: unknown
        }[]
      }
      claim_collectivite: {
        Args: {
          id: number
        }
        Returns: Json
      }
      col_is_null:
        | {
            Args: {
              schema_name: unknown
              table_name: unknown
              column_name: unknown
              description?: string
            }
            Returns: string
          }
        | {
            Args: {
              table_name: unknown
              column_name: unknown
              description?: string
            }
            Returns: string
          }
      col_not_null:
        | {
            Args: {
              table_name: unknown
              column_name: unknown
              description?: string
            }
            Returns: string
          }
        | {
            Args: {
              schema_name: unknown
              table_name: unknown
              column_name: unknown
              description?: string
            }
            Returns: string
          }
      collect_tap:
        | {
            Args: Record<PropertyKey, never>
            Returns: string
          }
        | {
            Args: {
              "": string[]
            }
            Returns: string
          }
      collectivite_membres: {
        Args: {
          id: number
        }
        Returns: {
          user_id: string
          prenom: string
          nom: string
          email: string
          telephone: string
          niveau_acces: Database["public"]["Enums"]["niveau_acces"]
          fonction: Database["public"]["Enums"]["membre_fonction"]
          details_fonction: string
          champ_intervention: Database["public"]["Enums"]["referentiel"][]
        }[]
      }
      compress_chunk: {
        Args: {
          uncompressed_chunk: unknown
          if_not_compressed?: boolean
        }
        Returns: unknown
      }
      confidentialite_init_test: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      consume_invitation: {
        Args: {
          id: string
        }
        Returns: undefined
      }
      create_distributed_hypertable: {
        Args: {
          relation: unknown
          time_column_name: unknown
          partitioning_column?: unknown
          number_partitions?: number
          associated_schema_name?: unknown
          associated_table_prefix?: unknown
          chunk_time_interval?: unknown
          create_default_indexes?: boolean
          if_not_exists?: boolean
          partitioning_func?: unknown
          migrate_data?: boolean
          chunk_target_size?: string
          chunk_sizing_func?: unknown
          time_partitioning_func?: unknown
          replication_factor?: number
          data_nodes?: unknown[]
        }
        Returns: {
          hypertable_id: number
          schema_name: unknown
          table_name: unknown
          created: boolean
        }[]
      }
      create_distributed_restore_point: {
        Args: {
          name: string
        }
        Returns: {
          node_name: unknown
          node_type: string
          restore_point: unknown
        }[]
      }
      create_fiche: {
        Args: {
          collectivite_id: number
          axe_id?: number
          action_id?: unknown
          indicateur_referentiel_id?: unknown
          indicateur_personnalise_id?: number
        }
        Returns: {
          collectivite_id: number | null
          date_fin_provisoire: string | null
          id: number | null
          modified_at: string | null
          niveau_priorite:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
          plans: unknown[] | null
          restreint: boolean | null
          statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre: string | null
        }
      }
      create_hypertable: {
        Args: {
          relation: unknown
          time_column_name: unknown
          partitioning_column?: unknown
          number_partitions?: number
          associated_schema_name?: unknown
          associated_table_prefix?: unknown
          chunk_time_interval?: unknown
          create_default_indexes?: boolean
          if_not_exists?: boolean
          partitioning_func?: unknown
          migrate_data?: boolean
          chunk_target_size?: string
          chunk_sizing_func?: unknown
          time_partitioning_func?: unknown
          replication_factor?: number
          data_nodes?: unknown[]
          distributed?: boolean
        }
        Returns: {
          hypertable_id: number
          schema_name: unknown
          table_name: unknown
          created: boolean
        }[]
      }
      decompress_chunk: {
        Args: {
          uncompressed_chunk: unknown
          if_compressed?: boolean
        }
        Returns: unknown
      }
      delete_axe_all: {
        Args: {
          axe_id: number
        }
        Returns: undefined
      }
      delete_data_node: {
        Args: {
          node_name: unknown
          if_exists?: boolean
          force?: boolean
          repartition?: boolean
          drop_database?: boolean
        }
        Returns: boolean
      }
      delete_job: {
        Args: {
          job_id: number
        }
        Returns: undefined
      }
      deplacer_fiche_action_dans_un_axe: {
        Args: {
          fiche_id: number
          old_axe_id: number
          new_axe_id: number
        }
        Returns: undefined
      }
      detach_data_node: {
        Args: {
          node_name: unknown
          hypertable?: unknown
          if_attached?: boolean
          force?: boolean
          repartition?: boolean
          drop_remote_data?: boolean
        }
        Returns: number
      }
      detach_tablespace: {
        Args: {
          tablespace: unknown
          hypertable?: unknown
          if_attached?: boolean
        }
        Returns: number
      }
      detach_tablespaces: {
        Args: {
          hypertable: unknown
        }
        Returns: number
      }
      diag:
        | {
            Args: {
              msg: string
            }
            Returns: string
          }
        | {
            Args: {
              msg: unknown
            }
            Returns: string
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string
          }
      diag_test_name: {
        Args: {
          "": string
        }
        Returns: string
      }
      do_tap:
        | {
            Args: {
              "": unknown
            }
            Returns: string[]
          }
        | {
            Args: {
              "": string
            }
            Returns: string[]
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string[]
          }
      domains_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      drop_chunks: {
        Args: {
          relation: unknown
          older_than?: unknown
          newer_than?: unknown
          verbose?: boolean
        }
        Returns: string[]
      }
      enlever_fiche_action_d_un_axe: {
        Args: {
          fiche_id: number
          axe_id: number
        }
        Returns: undefined
      }
      enums_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      est_auditeur: {
        Args: {
          collectivite: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: boolean
      }
      est_auditeur_action: {
        Args: {
          collectivite_id: number
          action_id: unknown
        }
        Returns: boolean
      }
      est_auditeur_audit: {
        Args: {
          audit_id: number
        }
        Returns: boolean
      }
      est_auditeur_demande: {
        Args: {
          demande_id: number
        }
        Returns: boolean
      }
      est_auditeur_discussion: {
        Args: {
          discussion_id: number
        }
        Returns: boolean
      }
      est_support: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      est_verifie: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      extensions_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      fail:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string
          }
      fiche_resume:
        | {
            Args: {
              fiche_action_action: unknown
            }
            Returns: {
              collectivite_id: number | null
              date_fin_provisoire: string | null
              id: number | null
              modified_at: string | null
              niveau_priorite:
                | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
                | null
              pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
              plans: unknown[] | null
              restreint: boolean | null
              statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
              titre: string | null
            }[]
          }
        | {
            Args: {
              fiche_action_indicateur: unknown
            }
            Returns: {
              collectivite_id: number | null
              date_fin_provisoire: string | null
              id: number | null
              modified_at: string | null
              niveau_priorite:
                | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
                | null
              pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
              plans: unknown[] | null
              restreint: boolean | null
              statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
              titre: string | null
            }[]
          }
      filter_fiches_action: {
        Args: {
          collectivite_id: number
          sans_plan?: boolean
          axes_id?: number[]
          sans_pilote?: boolean
          pilotes?: Database["public"]["CompositeTypes"]["personne"][]
          sans_referent?: boolean
          referents?: Database["public"]["CompositeTypes"]["personne"][]
          sans_niveau?: boolean
          niveaux_priorite?: Database["public"]["Enums"]["fiche_action_niveaux_priorite"][]
          sans_statut?: boolean
          statuts?: Database["public"]["Enums"]["fiche_action_statuts"][]
          sans_thematique?: boolean
          thematiques?: unknown[]
          sans_sous_thematique?: boolean
          sous_thematiques?: unknown[]
          sans_budget?: boolean
          budget_min?: number
          budget_max?: number
          sans_date?: boolean
          date_debut?: string
          date_fin?: string
          echeance?: Database["public"]["Enums"]["fiche_action_echeances"]
          limit?: number
        }
        Returns: {
          collectivite_id: number | null
          date_fin_provisoire: string | null
          id: number | null
          modified_at: string | null
          niveau_priorite:
            | Database["public"]["Enums"]["fiche_action_niveaux_priorite"]
            | null
          pilotes: Database["public"]["CompositeTypes"]["personne"][] | null
          plans: unknown[] | null
          restreint: boolean | null
          statut: Database["public"]["Enums"]["fiche_action_statuts"] | null
          titre: string | null
        }[]
      }
      findfuncs: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      finish: {
        Args: {
          exception_on_failure?: boolean
        }
        Returns: string[]
      }
      flat_axes: {
        Args: {
          axe_id: number
          max_depth?: number
        }
        Returns: Database["public"]["CompositeTypes"]["flat_axe_node"][]
      }
      foreign_tables_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      functions_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      gbt_bit_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_bool_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_bool_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_bpchar_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_bytea_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_cash_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_cash_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_date_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_date_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_enum_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_enum_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_float4_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_float4_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_float8_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_float8_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_inet_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int2_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int2_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int4_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int4_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int8_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_int8_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_intv_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_intv_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_intv_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_macad_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_macad_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_macad8_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_macad8_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_numeric_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_oid_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_oid_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_text_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_time_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_time_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_timetz_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_ts_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_ts_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_tstz_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_uuid_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_uuid_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_var_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbt_var_fetch: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey_var_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey_var_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey16_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey16_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey2_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey2_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey32_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey32_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey4_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey4_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey8_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gbtreekey8_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      geojson:
        | {
            Args: {
              site_labellisation: unknown
            }
            Returns: Json[]
          }
        | {
            Args: {
              site_region: unknown
            }
            Returns: Json[]
          }
      get_telemetry_report: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      groups_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      has_check: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_composite: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_domain: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_enum: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_extension: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_fk: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_foreign_table: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_function: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_group: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_inherited_tables: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_language: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_materialized_view: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_opclass: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_pk: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_relation: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_role: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_schema: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_sequence: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_table: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_tablespace: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_type: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_unique: {
        Args: {
          "": string
        }
        Returns: string
      }
      has_user: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      has_view: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_composite: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_domain: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_enum: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_extension: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_fk: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_foreign_table: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_function: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_group: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_inherited_tables: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_language: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_materialized_view: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_opclass: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_pk: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_relation: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_role: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_schema: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_sequence: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_table: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_tablespace: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_type: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_user: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hasnt_view: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      have_admin_acces: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      have_discussion_admin_acces: {
        Args: {
          discussion_id: number
        }
        Returns: boolean
      }
      have_discussion_edition_acces: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      have_discussion_lecture_acces: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      have_edition_acces: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      have_lecture_acces: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      hypertable_compression_stats: {
        Args: {
          hypertable: unknown
        }
        Returns: {
          total_chunks: number
          number_compressed_chunks: number
          before_compression_table_bytes: number
          before_compression_index_bytes: number
          before_compression_toast_bytes: number
          before_compression_total_bytes: number
          after_compression_table_bytes: number
          after_compression_index_bytes: number
          after_compression_toast_bytes: number
          after_compression_total_bytes: number
          node_name: unknown
        }[]
      }
      hypertable_detailed_size: {
        Args: {
          hypertable: unknown
        }
        Returns: {
          table_bytes: number
          index_bytes: number
          toast_bytes: number
          total_bytes: number
          node_name: unknown
        }[]
      }
      hypertable_index_size: {
        Args: {
          index_name: unknown
        }
        Returns: number
      }
      hypertable_size: {
        Args: {
          hypertable: unknown
        }
        Returns: number
      }
      in_todo: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      index_is_primary: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      index_is_unique: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      interpolate:
        | {
            Args: {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
            Returns: number
          }
        | {
            Args: {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
            Returns: number
          }
        | {
            Args: {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
            Returns: number
          }
        | {
            Args: {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
            Returns: number
          }
        | {
            Args: {
              value: number
              prev?: Record<string, unknown>
              next?: Record<string, unknown>
            }
            Returns: number
          }
      is_aggregate: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_any_role_on: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      is_authenticated: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_bucket_writer: {
        Args: {
          id: string
        }
        Returns: boolean
      }
      is_clustered: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_definer: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_empty: {
        Args: {
          "": string
        }
        Returns: string
      }
      is_normal_function: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_partitioned: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_procedure: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_referent_of: {
        Args: {
          id: number
        }
        Returns: boolean
      }
      is_service_role: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_strict: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_superuser: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      is_window: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_aggregate: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_definer: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_empty: {
        Args: {
          "": string
        }
        Returns: string
      }
      isnt_normal_function: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_partitioned: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_procedure: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_strict: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_superuser: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      isnt_window: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      json_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      jsonb_matches_schema: {
        Args: {
          schema: Json
          instance: Json
        }
        Returns: boolean
      }
      labellisation_cloturer_audit: {
        Args: {
          audit_id: number
          date_fin?: string
        }
        Returns: {
          collectivite_id: number
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide: boolean
        }
      }
      labellisation_commencer_audit: {
        Args: {
          audit_id: number
          date_debut?: string
        }
        Returns: {
          collectivite_id: number
          date_debut: string | null
          date_fin: string | null
          demande_id: number | null
          id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          valide: boolean
        }
      }
      labellisation_demande: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: {
          collectivite_id: number
          date: string
          demandeur: string | null
          en_cours: boolean
          envoyee_le: string | null
          etoiles: Database["labellisation"]["Enums"]["etoile"] | null
          id: number
          modified_at: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          sujet: Database["labellisation"]["Enums"]["sujet_demande"]
        }
      }
      labellisation_parcours: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          referentiel: Database["public"]["Enums"]["referentiel"]
          etoiles: Database["labellisation"]["Enums"]["etoile"]
          completude_ok: boolean
          critere_score: Json
          criteres_action: Json
          rempli: boolean
          calendrier: string
          demande: Json
          labellisation: Json
          audit: Json
        }[]
      }
      labellisation_peut_commencer_audit: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: boolean
      }
      labellisation_submit_demande: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          sujet: Database["labellisation"]["Enums"]["sujet_demande"]
          etoiles?: Database["labellisation"]["Enums"]["etoile"]
        }
        Returns: {
          collectivite_id: number
          date: string
          demandeur: string | null
          en_cours: boolean
          envoyee_le: string | null
          etoiles: Database["labellisation"]["Enums"]["etoile"] | null
          id: number
          modified_at: string | null
          referentiel: Database["public"]["Enums"]["referentiel"]
          sujet: Database["labellisation"]["Enums"]["sujet_demande"]
        }
      }
      language_is_trusted: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      languages_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      lives_ok: {
        Args: {
          "": string
        }
        Returns: string
      }
      locf: {
        Args: {
          value: unknown
          prev?: unknown
          treat_null_as_missing?: boolean
        }
        Returns: unknown
      }
      materialized_views_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      move_chunk: {
        Args: {
          chunk: unknown
          destination_tablespace: unknown
          index_destination_tablespace?: unknown
          reorder_index?: unknown
          verbose?: boolean
        }
        Returns: undefined
      }
      naturalsort: {
        Args: {
          text: string
        }
        Returns: string
      }
      navigation_plans: {
        Args: {
          collectivite_id: number
        }
        Returns: Database["public"]["CompositeTypes"]["flat_axe_node"][]
      }
      no_plan: {
        Args: Record<PropertyKey, never>
        Returns: boolean[]
      }
      num_failed: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      ok: {
        Args: {
          "": boolean
        }
        Returns: string
      }
      opclasses_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      operators_are: {
        Args: {
          "": string[]
        }
        Returns: string
      }
      os_name: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      pass:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string
          }
      personnes_collectivite: {
        Args: {
          collectivite_id: number
        }
        Returns: Database["public"]["CompositeTypes"]["personne"][]
      }
      peut_lire_la_fiche: {
        Args: {
          fiche_id: number
        }
        Returns: boolean
      }
      peut_modifier_la_fiche: {
        Args: {
          fiche_id: number
        }
        Returns: boolean
      }
      pg_version: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      pg_version_num: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      pgtap_version: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      plan: {
        Args: {
          "": number
        }
        Returns: string
      }
      plan_action: {
        Args: {
          id: number
        }
        Returns: Json
      }
      plan_action_export: {
        Args: {
          id: number
        }
        Returns: Database["public"]["CompositeTypes"]["fiche_action_export"][]
      }
      plan_action_profondeur: {
        Args: {
          id: number
          profondeur: number
        }
        Returns: Json
      }
      plan_action_tableau_de_bord: {
        Args: {
          collectivite_id: number
          plan_id?: number
          sans_plan?: boolean
        }
        Returns: Database["public"]["CompositeTypes"]["plan_action_tableau_de_bord"]
      }
      plans_action_collectivite: {
        Args: {
          collectivite_id: number
        }
        Returns: {
          collectivite_id: number
          created_at: string
          id: number
          modified_at: string
          modified_by: string | null
          nom: string | null
          parent: number | null
          plan: number | null
          type: number | null
        }[]
      }
      preuve_count: {
        Args: {
          collectivite_id: number
          action_id: unknown
        }
        Returns: number
      }
      referent_contacts: {
        Args: {
          id: number
        }
        Returns: {
          prenom: string
          nom: string
          email: string
        }[]
      }
      referentiel_down_to_action: {
        Args: {
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: {
          children: unknown[] | null
          depth: number | null
          description: string | null
          have_contexte: boolean | null
          have_exemples: boolean | null
          have_perimetre_evaluation: boolean | null
          have_preuve: boolean | null
          have_questions: boolean | null
          have_reduction_potentiel: boolean | null
          have_ressources: boolean | null
          id: string | null
          identifiant: string | null
          nom: string | null
          phase: Database["public"]["Enums"]["action_categorie"] | null
          referentiel: Database["public"]["Enums"]["referentiel"] | null
          type: Database["public"]["Enums"]["action_type"] | null
        }[]
      }
      remove_compression_policy: {
        Args: {
          hypertable: unknown
          if_exists?: boolean
        }
        Returns: boolean
      }
      remove_continuous_aggregate_policy: {
        Args: {
          continuous_aggregate: unknown
          if_not_exists?: boolean
          if_exists?: boolean
        }
        Returns: undefined
      }
      remove_membre_from_collectivite: {
        Args: {
          collectivite_id: number
          email: string
        }
        Returns: Json
      }
      remove_reorder_policy: {
        Args: {
          hypertable: unknown
          if_exists?: boolean
        }
        Returns: undefined
      }
      remove_retention_policy: {
        Args: {
          relation: unknown
          if_exists?: boolean
        }
        Returns: undefined
      }
      reorder_chunk: {
        Args: {
          chunk: unknown
          index?: unknown
          verbose?: boolean
        }
        Returns: undefined
      }
      restreindre_plan: {
        Args: {
          plan_id: number
          restreindre: boolean
        }
        Returns: undefined
      }
      retool_user_list: {
        Args: Record<PropertyKey, never>
        Returns: {
          droit_id: number
          nom: string
          prenom: string
          email: string
          collectivite: string
        }[]
      }
      roles_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      runtests:
        | {
            Args: {
              "": unknown
            }
            Returns: string[]
          }
        | {
            Args: {
              "": string
            }
            Returns: string[]
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: string[]
          }
      save_reponse: {
        Args: {
          json: Json
        }
        Returns: undefined
      }
      schemas_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      sequences_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      set_adaptive_chunking: {
        Args: {
          hypertable: unknown
          chunk_target_size: string
        }
        Returns: Record<string, unknown>
      }
      set_chunk_time_interval: {
        Args: {
          hypertable: unknown
          chunk_time_interval: unknown
          dimension_name?: unknown
        }
        Returns: undefined
      }
      set_integer_now_func: {
        Args: {
          hypertable: unknown
          integer_now_func: unknown
          replace_if_exists?: boolean
        }
        Returns: undefined
      }
      set_number_partitions: {
        Args: {
          hypertable: unknown
          number_partitions: number
          dimension_name?: unknown
        }
        Returns: undefined
      }
      set_replication_factor: {
        Args: {
          hypertable: unknown
          replication_factor: number
        }
        Returns: undefined
      }
      show_chunks: {
        Args: {
          relation: unknown
          older_than?: unknown
          newer_than?: unknown
        }
        Returns: unknown[]
      }
      show_tablespaces: {
        Args: {
          hypertable: unknown
        }
        Returns: unknown[]
      }
      skip:
        | {
            Args: {
              why: string
              how_many: number
            }
            Returns: string
          }
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": number
            }
            Returns: string
          }
      tables_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      tablespaces_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      teapot: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      test_add_random_user: {
        Args: {
          collectivite_id: number
          niveau: Database["public"]["Enums"]["niveau_acces"]
          cgu_acceptees?: boolean
        }
        Returns: Record<string, unknown>
      }
      test_attach_user: {
        Args: {
          user_id: string
          collectivite_id: number
          niveau: Database["public"]["Enums"]["niveau_acces"]
        }
        Returns: undefined
      }
      test_changer_acces_restreint_collectivite: {
        Args: {
          collectivite_id: number
          access_restreint: boolean
        }
        Returns: undefined
      }
      test_clear_history: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_create_collectivite: {
        Args: {
          nom: string
        }
        Returns: {
          collectivite_id: number | null
          id: number
          nom: string
        }
      }
      test_create_user: {
        Args: {
          user_id: string
          prenom: string
          nom: string
          email: string
        }
        Returns: undefined
      }
      test_disable_fake_score_generation: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_enable_fake_score_generation: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_fulfill: {
        Args: {
          collectivite_id: number
          etoile: Database["labellisation"]["Enums"]["etoile"]
        }
        Returns: undefined
      }
      test_generate_fake_scores: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
          statuts: unknown[]
        }
        Returns: Json
      }
      test_max_fulfill: {
        Args: {
          collectivite_id: number
          referentiel: Database["public"]["Enums"]["referentiel"]
        }
        Returns: undefined
      }
      test_remove_user: {
        Args: {
          email: string
        }
        Returns: undefined
      }
      test_reset: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_action_statut_and_desc: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_audit: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_discussion_et_commentaires: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_droits: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_indicateurs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_membres: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_plan_action: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_preuves: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_reponse: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_scores: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_reset_users: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      test_set_auditeur: {
        Args: {
          demande_id: number
          user_id: string
          audit_en_cours?: boolean
        }
        Returns: {
          audit_id: number
          auditeur: string
          created_at: string | null
        }
      }
      test_set_cot: {
        Args: {
          collectivite_id: number
          actif: boolean
        }
        Returns: {
          actif: boolean
          collectivite_id: number
          signataire: number | null
        }
      }
      test_write_scores: {
        Args: {
          collectivite_id: number
          scores?: unknown[]
        }
        Returns: undefined
      }
      throws_ok: {
        Args: {
          "": string
        }
        Returns: string
      }
      time_bucket:
        | {
            Args: {
              bucket_width: unknown
              ts: string
              offset: unknown
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              offset: unknown
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              origin: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              origin: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              origin: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              offset: unknown
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              timezone: string
              origin?: string
              offset?: unknown
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: number
              ts: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
              offset: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
              offset: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
              offset: number
            }
            Returns: number
          }
      time_bucket_gapfill:
        | {
            Args: {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: number
              ts: number
              start?: number
              finish?: number
            }
            Returns: number
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              start?: string
              finish?: string
            }
            Returns: string
          }
        | {
            Args: {
              bucket_width: unknown
              ts: string
              timezone: string
              start?: string
              finish?: string
            }
            Returns: string
          }
      timescaledb_fdw_handler: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      timescaledb_post_restore: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      timescaledb_pre_restore: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      todo:
        | {
            Args: {
              how_many: number
            }
            Returns: boolean[]
          }
        | {
            Args: {
              why: string
              how_many: number
            }
            Returns: boolean[]
          }
        | {
            Args: {
              how_many: number
              why: string
            }
            Returns: boolean[]
          }
        | {
            Args: {
              why: string
            }
            Returns: boolean[]
          }
      todo_end: {
        Args: Record<PropertyKey, never>
        Returns: boolean[]
      }
      todo_start:
        | {
            Args: {
              "": string
            }
            Returns: boolean[]
          }
        | {
            Args: Record<PropertyKey, never>
            Returns: boolean[]
          }
      types_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      unaccent: {
        Args: {
          "": string
        }
        Returns: string
      }
      unaccent_init: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      update_bibliotheque_fichier_filename: {
        Args: {
          collectivite_id: number
          hash: string
          filename: string
        }
        Returns: undefined
      }
      update_collectivite_membre_champ_intervention: {
        Args: {
          collectivite_id: number
          membre_id: string
          champ_intervention: Database["public"]["Enums"]["referentiel"][]
        }
        Returns: Json
      }
      update_collectivite_membre_details_fonction: {
        Args: {
          collectivite_id: number
          membre_id: string
          details_fonction: string
        }
        Returns: Json
      }
      update_collectivite_membre_fonction: {
        Args: {
          collectivite_id: number
          membre_id: string
          fonction: Database["public"]["Enums"]["membre_fonction"]
        }
        Returns: Json
      }
      update_collectivite_membre_niveau_acces: {
        Args: {
          collectivite_id: number
          membre_id: string
          niveau_acces: Database["public"]["Enums"]["niveau_acces"]
        }
        Returns: Json
      }
      upsert_axe: {
        Args: {
          nom: string
          collectivite_id: number
          parent: number
        }
        Returns: number
      }
      users_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
      views_are: {
        Args: {
          "": unknown[]
        }
        Returns: string
      }
    }
    Enums: {
      action_categorie: "bases" | "mise en œuvre" | "effets"
      action_discussion_statut: "ouvert" | "ferme"
      action_type:
        | "referentiel"
        | "axe"
        | "sous-axe"
        | "action"
        | "sous-action"
        | "tache"
      audit_statut: "non_audite" | "en_cours" | "audite"
      avancement:
        | "fait"
        | "pas_fait"
        | "programme"
        | "non_renseigne"
        | "detaille"
      collectivite_filtre_type: "population" | "score" | "remplissage"
      confidentialite_option_crud: "oui" | "non" | "restreint" | "soi"
      confidentialite_profil:
        | "public"
        | "connecte"
        | "verifie"
        | "support"
        | "lecture"
        | "edition"
        | "admin"
        | "auditeur"
      confidentialite_type_element: "table" | "vue" | "fonction"
      fiche_action_cibles:
        | "Grand public et associations"
        | "Public Scolaire"
        | "Autres collectivités du territoire"
        | "Acteurs économiques"
        | "Acteurs économiques du secteur primaire"
        | "Acteurs économiques du secteur secondaire"
        | "Acteurs économiques du secteur tertiaire"
        | "Partenaires"
        | "Collectivité elle-même"
        | "Elus locaux"
        | "Agents"
      fiche_action_echeances:
        | "Action en amélioration continue"
        | "Sans échéance"
        | "Échéance dépassée"
        | "Échéance dans moins de trois mois"
        | "Échéance entre trois mois et 1 an"
        | "Échéance dans plus d’un an"
      fiche_action_niveaux_priorite: "Élevé" | "Moyen" | "Bas"
      fiche_action_piliers_eci:
        | "Approvisionnement durable"
        | "Écoconception"
        | "Écologie industrielle (et territoriale)"
        | "Économie de la fonctionnalité"
        | "Consommation responsable"
        | "Allongement de la durée d’usage"
        | "Recyclage"
      fiche_action_resultats_attendus:
        | "Adaptation au changement climatique"
        | "Allongement de la durée d’usage"
        | "Amélioration de la qualité de vie"
        | "Développement des énergies renouvelables"
        | "Efficacité énergétique"
        | "Préservation de la biodiversité"
        | "Réduction des consommations énergétiques"
        | "Réduction des déchets"
        | "Réduction des émissions de gaz à effet de serre"
        | "Réduction des polluants atmosphériques"
        | "Sobriété énergétique"
      fiche_action_statuts:
        | "À venir"
        | "En cours"
        | "Réalisé"
        | "En pause"
        | "Abandonné"
      filterable_type_collectivite:
        | "commune"
        | "syndicat"
        | "CU"
        | "CC"
        | "POLEM"
        | "METRO"
        | "CA"
        | "EPT"
        | "PETR"
      indicateur_group: "cae" | "crte" | "eci"
      indicateur_programme: "clef" | "eci" | "cae" | "pcaet" | "crte"
      indicateur_referentiel_type: "resultat" | "impact"
      indicateur_thematique:
        | "eci_dechets"
        | "energie_et_climat"
        | "indicateur_thematique"
        | "agri_alim"
        | "urbanisme_et_amenagement"
        | "mobilite_et_transport"
        | "nature_environnement_air"
        | "eau_assainissement"
        | "strategie_orga_interne"
        | "activites_economiques"
        | "solidarite_lien_social"
      indicateur_valeur_type: "resultat" | "objectif" | "import"
      membre_fonction:
        | "referent"
        | "conseiller"
        | "technique"
        | "politique"
        | "partenaire"
      nature:
        | "SMF"
        | "CU"
        | "CC"
        | "SIVOM"
        | "POLEM"
        | "METRO"
        | "SMO"
        | "CA"
        | "EPT"
        | "SIVU"
        | "PETR"
      niveau_acces: "admin" | "edition" | "lecture"
      preuve_type:
        | "complementaire"
        | "reglementaire"
        | "labellisation"
        | "audit"
        | "rapport"
      question_type: "choix" | "binaire" | "proportion"
      referentiel: "eci" | "cae"
      regle_type: "score" | "desactivation" | "reduction"
      role_name: "agent" | "referent" | "conseiller" | "auditeur" | "aucun"
      thematique_completude: "complete" | "a_completer"
      type_collectivite: "EPCI" | "commune" | "syndicat"
      usage_action:
        | "clic"
        | "vue"
        | "telechargement"
        | "saisie"
        | "selection"
        | "agrandissement"
        | "ouverture"
        | "fermeture"
      usage_fonction:
        | "aide"
        | "preuve"
        | "graphique"
        | "decrocher_les_etoiles"
        | "rejoindre_une_collectivite"
        | "collectivite_carte"
        | "pagination"
        | "filtre"
        | "recherche"
        | "filtre_region"
        | "filtre_departement"
        | "filtre_type"
        | "filtre_population"
        | "filtre_referentiel"
        | "filtre_niveau"
        | "filtre_remplissage"
        | "annulation"
        | "modele_import"
        | "cta_plan"
        | "cta_indicateur"
        | "cta_labellisation"
        | "cta_plan_creation"
        | "cta_plan_maj"
        | "cta_edl_commencer"
        | "cta_edl_personnaliser"
        | "navigation_laterale"
        | "panneau_lateral"
        | "export_xlsx"
        | "export_docx"
      visite_onglet:
        | "progression"
        | "priorisation"
        | "detail"
        | "suivi"
        | "preuve"
        | "indicateur"
        | "historique"
        | "comparaison"
        | "critere"
        | "informations"
        | "commentaires"
      visite_page:
        | "autre"
        | "signin"
        | "signup"
        | "recover"
        | "recover_landing"
        | "mon_compte"
        | "mes_collectivites"
        | "rejoindre"
        | "toutes_collectivites"
        | "tableau_de_bord"
        | "referentiel"
        | "indicateur"
        | "action"
        | "labellisation"
        | "personnalisation"
        | "membre"
        | "bibliotheque"
        | "historique"
        | "plan"
        | "fiche"
        | "plan_axe"
        | "fiches_non_classees"
        | "synthese_plans"
        | "nouveau_plan"
        | "nouveau_plan_import"
        | "nouveau_plan_creation"
        | "indicateurs"
      visite_tag:
        | "cae"
        | "eci"
        | "crte"
        | "referentiel"
        | "thematique"
        | "personnalise"
        | "clef"
        | "tous"
        | "statuts"
        | "pilotes"
        | "referents"
        | "priorites"
        | "echeances"
    }
    CompositeTypes: {
      fiche_action_export: {
        axe_id: number
        axe_nom: string
        axe_path: unknown
        fiche: Json
      }
      financeur_montant: {
        financeur_tag: unknown
        montant_ttc: number
        id: number
      }
      flat_axe_node: {
        id: number
        nom: string
        fiches: unknown
        ancestors: unknown
        depth: number
        sort_path: string
      }
      graphique_tranche: {
        id: string
        value: number
      }
      indicateur_generique: {
        indicateur_id: unknown
        indicateur_personnalise_id: number
        nom: string
        description: string
        unite: string
      }
      personne: {
        nom: string
        collectivite_id: number
        tag_id: number
        user_id: string
      }
      plan_action_tableau_de_bord: {
        collectivite_id: number
        plan_id: number
        statuts: unknown
        pilotes: unknown
        referents: unknown
        priorites: unknown
        echeances: unknown
      }
      tabular_score: {
        referentiel: Database["public"]["Enums"]["referentiel"]
        action_id: unknown
        score_realise: number
        score_programme: number
        score_realise_plus_programme: number
        score_pas_fait: number
        score_non_renseigne: number
        points_restants: number
        points_realises: number
        points_programmes: number
        points_max_personnalises: number
        points_max_referentiel: number
        avancement: Database["public"]["Enums"]["avancement"]
        concerne: boolean
        desactive: boolean
      }
    }
  }
}

