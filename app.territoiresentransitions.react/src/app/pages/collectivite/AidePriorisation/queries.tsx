import { boundariesToQueryFilter } from '@/app/app/pages/collectivite/AidePriorisation/boundariesToQueryFilter';
import { ActionReferentiel } from '@/app/app/pages/collectivite/ReferentielTable/useReferentiel';
import { supabaseClient } from '@/app/core-logic/api/supabase';
import { TActionStatutsRow } from '@/app/types/alias';
import { ITEM_ALL } from '@/ui';
import { filterToBoundaries, TFilters } from './filters';
import { percentBoundaries } from './FiltrePourcentage';

// un sous-ensemble des champs pour alimenter notre table
export type PriorisationRow = ActionReferentiel &
  Pick<
    TActionStatutsRow,
    | 'action_id'
    | 'phase'
    | 'score_realise'
    | 'score_programme'
    | 'points_restants'
  >;

export const getMaxDepth = (referentiel: string | null) =>
  referentiel === 'cae' ? 4 : 3;

// toutes les entrées d'un référentiel pour une collectivité et des filtres donnés
export const fetchRows = async (
  collectivite_id: number | null,
  referentiel: string | null,
  filters: TFilters
) => {
  const maxDepth = getMaxDepth(referentiel);

  // la requête
  const query = supabaseClient
    .from('action_statuts')
    .select('action_id,phase,score_realise,score_programme,points_restants')
    .match({ collectivite_id, referentiel, concerne: true, desactive: false })
    .gt('depth', 0);

  // applique les filtres
  const realise = getPercentFilter(filters, 'score_realise');
  const programme = getPercentFilter(filters, 'score_programme');
  const { phase } = filters;
  let phase_filter;
  if (phase?.length && !phase.includes(ITEM_ALL)) {
    phase_filter = `phase.in.(${phase})`;
  }
  const and = [`depth.eq.${maxDepth}`, realise, programme, phase_filter].filter(
    Boolean
  );
  if (and.length > 1) {
    query.or([`depth.lt.${maxDepth}`, `and(${and.join(',')})`].join(','));
  } else {
    query.lte('depth', maxDepth);
  }

  // attends les données
  const { error, data } = await query;

  if (error) {
    throw new Error(error.message);
  }

  const rows = data as PriorisationRow[];

  // décompte les sous-actions uniquement
  const count = rows.reduce(
    (sum, { depth }) => (depth === maxDepth ? sum : sum + 1),
    0
  );
  return { rows, count };
};

const getPercentFilter = (filters: TFilters, column: keyof TFilters) => {
  const qf = boundariesToQueryFilter(
    filterToBoundaries(filters[column], percentBoundaries),
    column
  );

  const or = qf.map((f) => 'and(' + f?.map((g) => `${g}`).join(',') + ')');
  return or.length ? 'or(' + or.join(',') + ')' : null;
};
