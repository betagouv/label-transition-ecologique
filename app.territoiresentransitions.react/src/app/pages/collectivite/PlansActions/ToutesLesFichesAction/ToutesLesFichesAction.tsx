import { Filtre } from '@/api/plan-actions/fiche-resumes.list/domain/fetch-options.schema';
import { useCreateFicheAction } from '@/app/pages/collectivite/PlansActions/FicheAction/data/useCreateFicheAction';
import { Button, ButtonMenu } from '@/ui';
import { OpenState } from '@/ui/utils/types';
import FichesActionListe from 'app/pages/collectivite/PlansActions/ToutesLesFichesAction/FichesActionListe';
import MenuFiltresToutesLesFichesAction from 'app/pages/collectivite/PlansActions/ToutesLesFichesAction/MenuFiltresToutesLesFichesAction';
import { makeCollectiviteToutesLesFichesUrl } from 'app/paths';
import { useSearchParams } from 'core-logic/hooks/query';
import { useCurrentCollectivite } from 'core-logic/hooks/useCurrentCollectivite';

/** Paramètres d'URL possibles pour les filtres de fiches action */
export type FicheActionParam =
  | 's'
  | 'prio'
  | 'ms'
  | 'text'
  | 'bp'
  | 'r'
  | 'il'
  | 'fa'
  | 'pa'
  | 'ra'
  | 'up'
  | 'pp'
  | 'ur'
  | 'pt'
  | 'pr'
  | 'sp'
  | 'sv'
  | 't'
  | 'f'
  | 'c'
  | 'dd'
  | 'df'
  | 'ac'
  | 'p'
  | 'lfa'
  | 'sort'
  | 'ssp'
  | 'sssp'
  | 'sss';

// TODO: implémenter les filtres "sans" (ex. "sans_pilote")
export const nameToparams: Record<
  keyof Filtre | 'sort' | 'page',
  FicheActionParam
> = {
  statuts: 's',
  priorites: 'prio',
  modifiedSince: 'ms',
  texteNomOuDescription: 'text',
  budgetPrevisionnel: 'bp',
  restreint: 'r',
  hasIndicateurLies: 'il',
  planActionIds: 'pa',
  ficheActionIds: 'fa',
  referentielActionIds: 'ra',
  linkedFicheActionIds: 'lfa',
  utilisateurPiloteIds: 'up',
  personnePiloteIds: 'pp',
  utilisateurReferentIds: 'ur',
  partenaireIds: 'pt',
  personneReferenteIds: 'pr',
  structurePiloteIds: 'sp',
  servicePiloteIds: 'sv',
  thematiqueIds: 't',
  financeurIds: 'f',
  cibles: 'c',
  dateDebut: 'dd',
  dateFin: 'df',
  ameliorationContinue: 'ac',
  page: 'p',
  sort: 'sort',
  sansPilote: 'ssp',
  sansServicePilote: 'sssp',
  sansStatut: 'sss',
};

/** Page de listing de toutes les fiches actions de la collectivité */
const ToutesLesFichesAction = () => {
  const collectivite = useCurrentCollectivite();

  const isReadonly = collectivite?.readonly ?? false;

  const [filterParams, setFilterParams] = useSearchParams<Filtre>(
    makeCollectiviteToutesLesFichesUrl({
      collectiviteId: collectivite?.collectivite_id!,
    }),
    {},
    nameToparams
  );

  const filters = convertParamsToFilters(filterParams);

  const { mutate: createFicheAction } = useCreateFicheAction();

  return (
    <div className="min-h-[44rem] flex flex-col gap-8">
      <div className="flex justify-between max-sm:flex-col gap-y-4">
        <h2 className="mb-0">Toutes les actions</h2>
        {!isReadonly && (
          <Button size="sm" onClick={() => createFicheAction()}>
            Créer une fiche d’action
          </Button>
        )}
      </div>
      <FichesActionListe
        filtres={filters}
        resetFilters={() => setFilterParams({})}
        sortSettings={{
          defaultSort: 'titre',
        }}
        settings={(openState: OpenState) => (
          <ButtonMenu
            openState={openState}
            variant="outlined"
            icon="equalizer-line"
            size="sm"
            text="Filtrer"
          >
            <MenuFiltresToutesLesFichesAction
              filters={filters}
              setFilters={(filters) => setFilterParams(filters)}
            />
          </ButtonMenu>
        )}
        enableGroupedActions={!isReadonly}
      />
    </div>
  );
};

export default ToutesLesFichesAction;

/** Converti les paramètres d'URL en filtres */
const convertParamsToFilters = (paramFilters: Filtre) => {
  if (paramFilters.modifiedSince && Array.isArray(paramFilters.modifiedSince)) {
    paramFilters.modifiedSince = paramFilters.modifiedSince[0];
  }
  if (paramFilters.dateDebut && Array.isArray(paramFilters.dateDebut)) {
    paramFilters.dateDebut = paramFilters.dateDebut[0];
  }
  if (paramFilters.dateFin && Array.isArray(paramFilters.dateFin)) {
    paramFilters.dateFin = paramFilters.dateFin[0];
  }
  return paramFilters;
};
