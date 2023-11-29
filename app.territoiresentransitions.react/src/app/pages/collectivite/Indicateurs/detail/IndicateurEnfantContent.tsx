import {TIndicateurPredefini} from '../types';
import FormField from 'ui/shared/form/FormField';
import {Spacer} from 'ui/dividers/Spacer';
import {ActionsLieesCards} from '../../PlansActions/FicheAction/FicheActionForm/ActionsLieesCards';
import IndicateurChart from '../charts/IndicateurChart';
import {FichesActionLiees} from '../FichesActionLiees';
import {IndicateurValuesTabs} from './IndicateurValuesTabs';
import {IndicateurInfoLiees} from './IndicateurInfoLiees';

/** Affiche le contenu du détail d'un indicateur enfant */
export const IndicateurEnfantContent = ({
  definition,
  actionsLieesCommunes,
}: {
  definition: TIndicateurPredefini;
  actionsLieesCommunes: string[];
}) => {
  // charge les actions liées à l'indicateur
  const actionsLiees = definition.action_ids?.filter(
    action_id => !actionsLieesCommunes.includes(action_id)
  );

  return (
    <div className="p-6">
      <IndicateurChart
        className="fr-mb-3w"
        variant="zoomed"
        definition={definition}
      />
      <IndicateurValuesTabs definition={definition} />
      {
        /** actions liées */
        actionsLiees?.length ? (
          <FormField
            className="fr-mt-4w"
            label={
              actionsLiees.length > 1
                ? 'Actions référentiel liées'
                : 'Action référentiel liée'
            }
          >
            <ActionsLieesCards actions={actionsLiees} />
          </FormField>
        ) : (
          <Spacer size={3} />
        )
      }
      <IndicateurInfoLiees definition={definition} />
      <FichesActionLiees definition={definition} />
    </div>
  );
};
