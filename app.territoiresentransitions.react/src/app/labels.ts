import * as R from 'ramda';
import type {Avancement, FicheActionAvancement, Referentiel} from 'types';

// Define all labels from app
export const referentielToName: Record<Referentiel, string> = {
  cae: 'Climat Air Énergie',
  eci: 'Économie Circulaire',
};

export const avancementLabels: Omit<Record<Avancement, string>, ''> = {
  non_concernee: 'Non concernée',
  pas_faite: 'Pas faite',
  programmee: 'Prévue',
  en_cours: 'En cours',
  faite: 'Faite',
};

export const ficheActionAvancementLabels: Record<
  FicheActionAvancement,
  string
> = R.omit(['non_concernee', 'programmee'], avancementLabels);

export const epciCard_AxisShortLabel: Record<string, string> = {
  economie_circulaire__1: '1 - Stratégie globale',
  economie_circulaire__2:
    '2 - Services de réduction, collecte et valorisation des déchets',
  economie_circulaire__3: "3 - Autres piliers de l'économie circulaire",
  economie_circulaire__4: '4 - Outils financiers du changement de comportement',
  economie_circulaire__5: '5 - Coopération et engagement',
};
