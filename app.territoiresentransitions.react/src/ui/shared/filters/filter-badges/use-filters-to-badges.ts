import { useQuery } from 'react-query';

import { filtreValuesFetch } from '@/api/collectivites/shared/data-access/filtre-values.fetch';
import { FetchFiltre as FiltreIndicateurs } from '@/api/indicateurs';
import { Filtre as FiltreFicheActions } from '@/api/plan-actions/fiche-resumes.list';
import { supabaseClient } from '@/api/utils/supabase-client';
import { useCollectiviteId } from 'core-logic/hooks/params';

import {
  FiltreRessourceLiees,
  FiltreValues,
} from '@/api/collectivites/shared/domain/filtre-ressource-liees.schema';
import { generateTitle } from '@/app/pages/collectivite/PlansActions/FicheAction/data/utils';
import { getCategorieLabel } from 'ui/dropdownLists/indicateur/utils';

/**
 * Types de tous les filtres passables au hook `useFiltersToBadges`.
 *
 * Compléter les props si besoin de plus de filtres venant d'autres domaines.
 * Attention à ce que les nouveaux filtres soient compatibles avec ceux de `filtreValuesFetch`
 */
export type BadgeFilters = FiltreIndicateurs & FiltreFicheActions;

/** Override les valeurs des badges retournées */
export type CustomFilterBadges = Partial<
  Record<keyof FinalFilters, string | undefined | false>
>;

// On exclut les filtres de ressources liées car ce sont uniquement des ids
// et on les remplace par les valeurs correspondantes de FiltreValues.
type FinalFilters = Omit<BadgeFilters, keyof FiltreRessourceLiees> &
  FiltreValues;

type Args = {
  filters: BadgeFilters;
  /** Permet d'override les valeurs des badges retournées */
  customValues?: CustomFilterBadges;
};

/** Transforme les filtres en string associées à afficher dans les badges. */
export const useFiltersToBadges = ({ filters, customValues }: Args) => {
  const collectiviteId = useCollectiviteId();

  // On nettoie les valeurs vides de l'objet customValues.
  // Permet de ne pas avoir à le faire dans les composants utilisant le hook.
  customValues &&
    Object.entries(customValues).forEach(([key, value]) => {
      if (!value) {
        delete customValues[key as keyof CustomFilterBadges];
      }
    });

  return useQuery(['filter_badges', filters, customValues], async () => {
    if (!collectiviteId) {
      throw new Error('Aucune collectivité associée');
    }

    /** Valeurs des filtres pour les champs où l'on ne connait que les ids */
    const { data } = await filtreValuesFetch({
      dbClient: supabaseClient,
      collectiviteId,
      filtre: filters,
    });

    // Merge les valeurs reçues avec les filtres donnés au hook
    // ex: planActions devient accessible après avoir récuper les valeurs depuis planActionIds.
    const mergedFilters: FinalFilters = { ...data, ...filters };

    // clés à retirer des valeurs données par défaut
    const overrideKeys = customValues && Object.keys(customValues);
    // On retire les clés des filtres à override afin de boucler et donner le texte par défaut correspondant à chaque type
    const mergedFiltersKeys = Object.keys(mergedFilters).filter(
      (key) => !overrideKeys?.includes(key)
    ) as Array<keyof FinalFilters>;

    // Initialisation du tableau des différents filtres sélectionnés retourné par le hook
    const badgeValues: string[] = [];

    // Pilotes et référents sont traités à part car ils peuvent provenir de plusieurs types (utilisateur, personne)
    const pilotes: string[] = [];
    const referents: string[] = [];

    // On boucle sur les clés afin de pouvoir donner le texte correspondant à chaque filtre
    mergedFiltersKeys.forEach((key) => {
      /** Communs */
      if (key === 'utilisateurPilotes') {
        const users = mergedFilters[key]?.map(
          (user) => `${user.prenom} ${user.nom}`
        );
        users && pilotes.push(...users);
      } else if (key === 'personnePilotes') {
        const personnes = mergedFilters[key]?.map((tag) => tag.nom);
        personnes && pilotes.push(...personnes);
      } else if (key === 'utilisateurReferents') {
        const users = mergedFilters[key]?.map(
          (user) => `${user.prenom} ${user.nom}`
        );
        users && referents.push(...users);
      } else if (key === 'personneReferentes') {
        const personnes = mergedFilters[key]?.map((tag) => tag.nom);
        personnes && referents.push(...personnes);
      } else if (key === 'servicePilotes') {
        badgeValues.push(
          `Direction ou service pilote : ${mergedFilters[key]
            ?.map((service) => service.nom)
            .join(', ')}`
        );
      } else if (key === 'thematiques') {
        badgeValues.push(
          `Thématique : ${mergedFilters[key]
            ?.map((thematique) => thematique.nom)
            .join(', ')}`
        );
      } else if (key === 'financeurs') {
        badgeValues.push(
          `Financeur : ${mergedFilters[key]?.map((i) => i.nom).join(', ')}`
        );
      } else if (key === 'partenaires') {
        badgeValues.push(
          `Partenaire : ${mergedFilters[key]?.map((i) => i.nom).join(', ')}`
        );
      } else if (key === 'structurePilotes') {
        badgeValues.push(
          `Structure : ${mergedFilters[key]?.map((i) => i.nom).join(', ')}`
        );
      } else if (key === 'planActions') {
        badgeValues.push(
          `Plan d'action : ${mergedFilters[key]
            ?.map((plan) => generateTitle(plan.nom))
            .join(', ')}`
        );
      } else if (key === 'modifiedSince') {
        badgeValues.push(
          `Sur les ${mergedFilters[key]?.match(/\d+/)?.[0]} derniers jours`
        );

        /** Indicateurs */
      } else if (key === 'categorieNoms') {
        badgeValues.push(
          `Catégorie : ${mergedFilters[key]
            ?.map((nom) => getCategorieLabel(nom))
            .join(', ')}`
        );
      } else if (key === 'estComplet') {
        badgeValues.push(
          `Complétion : ${mergedFilters[key] ? 'Complet' : 'Incomplet'}`
        );
      } else if (key === 'participationScore') {
        mergedFilters[key] && badgeValues.push('Participe au score CAE');
      } else if (key === 'estPerso') {
        mergedFilters[key] && badgeValues.push('Indicateur personnalisé');
      } else if (key === 'estConfidentiel') {
        mergedFilters[key] && badgeValues.push('Indicateur privé');
      } else if (key === 'hasOpenData') {
        mergedFilters[key] && badgeValues.push('Données Open Data');

        /** Fiches action */
      } else if (key === 'budgetPrevisionnel') {
        mergedFilters[key] && badgeValues.push('Budget renseigné');
      } else if (key === 'restreint') {
        mergedFilters[key] && badgeValues.push('Confidentialité');
      } else if (key === 'hasIndicateurLies') {
        mergedFilters[key] && badgeValues.push('Indicateur(s) associé(s)');
      } else if (key === 'ameliorationContinue') {
        mergedFilters[key] && badgeValues.push('Se répète tous les ans');
      } else if (key === 'priorites') {
        badgeValues.push(`Priorité : ${mergedFilters[key]?.join(', ')}`);
      } else if (key === 'statuts') {
        badgeValues.push(`Statut : ${mergedFilters[key]?.join(', ')}`);
      } else if (key === 'cibles') {
        badgeValues.push(`Cible : ${mergedFilters[key]?.join(', ')}`);
      } else if (key === 'dateDebut') {
        badgeValues.push(`Date de début : ${mergedFilters[key]}`);
      } else if (key === 'dateFin') {
        badgeValues.push(`Date de fin prévisionnelle : ${mergedFilters[key]}`);
      }
    });

    // Ajout des pilotes et réferents si présents
    if (pilotes.length > 0) {
      badgeValues.push(`Personne pilote : ${pilotes.join(', ')}`);
    }

    if (referents.length > 0) {
      badgeValues.push(`Élu·e référent·e : ${referents.join(', ')}`);
    }

    // On ajoute les valeurs à override si elles existent
    if (customValues) {
      Object.values(customValues).forEach((value) => {
        value && badgeValues.unshift(value);
      });
    }

    if (badgeValues.length === 0) {
      return;
    }

    return badgeValues;
  });
};