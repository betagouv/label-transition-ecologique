import {Tab, Tabs, useActiveTab} from 'ui/shared/Tabs';
import ToggleButton from 'ui/shared/designSystem/ToggleButton';
import DSTetTooltip from 'ui/shared/floating-ui/DSTetTooltip';
import {TIndicateurDefinition} from '../types';
import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import {IndicateurValuesTable} from './IndicateurValuesTable';
import {SOURCE_COLLECTIVITE} from './useImportSources';
import {useToggleIndicateurConfidentiel} from './useToggleIndicateurConfidentiel';
import {useIndicateurInfoLiees} from './useIndicateurInfoLiees';

/** Affiche les onglets résultats/objectifs */
export const IndicateurValuesTabs = ({
  definition,
  importSource,
}: {
  definition: TIndicateurDefinition;
  importSource?: string;
}) => {
  const {activeTab, onChangeTab} = useActiveTab();
  const collectivite = useCurrentCollectivite();
  const isReadonly = !collectivite || collectivite.readonly;
  const {mutate: toggleIndicateurConfidentiel, isLoading} =
    useToggleIndicateurConfidentiel(definition);
  const {data} = useIndicateurInfoLiees(definition);
  const {confidentiel} = data || {};

  return (
    <>
      {!isReadonly && (
        <DSTetTooltip
          label={() => (
            <p>
              Si le mode privé est activé, le résultat le plus récent n'est plus
              consultable par les personnes n’étant pas membres de votre
              collectivité. Seuls les autres résultats restent accessibles pour
              tous les utilisateurs et la valeur privée reste consultable par
              l’ADEME et le service support de la plateforme.
            </p>
          )}
        >
          <ToggleButton
            className="my-10"
            description="Résultat récent en mode privé"
            isChecked={confidentiel}
            disabled={isLoading}
            onClick={() => toggleIndicateurConfidentiel(confidentiel || false)}
          />
        </DSTetTooltip>
      )}
      <Tabs defaultActiveTab={activeTab} onChange={onChangeTab}>
        <Tab label="Résultats" icon="checkbox">
          {activeTab === 0 && (
            <IndicateurValuesTable
              definition={definition}
              type="resultat"
              isReadonly={isReadonly}
              importSource={importSource}
              confidentiel={confidentiel}
            />
          )}
        </Tab>
        {!importSource || importSource === SOURCE_COLLECTIVITE ? (
          <Tab label="Objectifs" icon="calendar-2">
            {activeTab === 1 && (
              <IndicateurValuesTable
                definition={definition}
                type="objectif"
                isReadonly={isReadonly}
              />
            )}
          </Tab>
        ) : null}
      </Tabs>
    </>
  );
};
