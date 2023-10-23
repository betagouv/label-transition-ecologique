import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import FichesLiees from '../PlansActions/FicheAction/FicheActionForm/FichesLiees';
import {FicheResume} from '../PlansActions/FicheAction/data/types';
import {
  useFichesActionLiees,
  useUpdateFichesActionLiees,
} from './useFichesActionLiees';
import {TIndicateurDefinition} from './types';

export type TFichesActionProps = {
  definition: TIndicateurDefinition;
};

/**
 * Affiche les fiches actions liées à un indicateur
 */
export const FichesActionLiees = (props: TFichesActionProps) => {
  const {definition} = props;
  const collectivite = useCurrentCollectivite();
  const {data: fiches} = useFichesActionLiees(definition);

  const {mutate: updateFichesActionLiees} =
    useUpdateFichesActionLiees(definition);
  const isReadonly = collectivite?.readonly ?? false;

  return (
    <FichesLiees
      ficheCouranteId={null}
      fiches={fiches}
      onSelect={(fiches_liees: FicheResume[]) =>
        updateFichesActionLiees({fiches, fiches_liees})
      }
      isReadonly={isReadonly}
    />
  );
};
