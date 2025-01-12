import classNames from 'classnames';
import { useState } from 'react';

import IndicateurChart from '@/app/app/pages/collectivite/Indicateurs/chart/IndicateurChart';
import { TIndicateurDefinition } from '@/app/app/pages/collectivite/Indicateurs/types';
import { useIndicateurValeurs } from '@/app/app/pages/collectivite/Indicateurs/useIndicateurValeurs';
import { getLeftLineChartMargin } from '@/app/ui/charts/Line/utils';
import { Button, Icon } from '@/ui';
import { DataSourceTooltip } from './DataSourceTooltip';
import { transformeValeurs } from './transformeValeurs';

type Props = {
  definition: TIndicateurDefinition;
  titre: string;
  fileName: string;
  rempli: boolean | null;
  source?: string;
  className?: string;
};

/**
 * Utiliser dans les pages indicateurs.
 * Permet notamment de télécharger le graphique.
 */
const IndicateurDetailChart = ({
  definition,
  rempli,
  source,
  titre,
  fileName,
  className,
}: Props) => {
  /** Gère l'affichage de la modale */
  const [isChartOpen, setIsChartOpen] = useState(false);

  // charge les valeurs à afficher dans le graphe
  const { data: valeursBrutes, isLoading: isLoadingValeurs } =
    useIndicateurValeurs({
      id: definition.id,
      importSource: source,
      autoRefresh: true,
    });

  // sépare les données objectifs/résultats
  const { valeurs, metadonnee } = transformeValeurs(valeursBrutes, source);
  const data = {
    unite: definition.unite,
    valeurs,
  };

  // Rempli ne peut pas être utilisé pour l'affichage car les objectifs ne sont pas pris en compte mais doivent quand même apparaître
  const hasValeurOrObjectif = valeurs.length > 0;

  return (
    <div
      data-test={`chart-${definition.id}`}
      className={classNames(
        'flex flex-col p-6 border border-grey-4 rounded-lg',
        className
      )}
    >
      <div className="flex justify-between gap-16 mb-6">
        <div
          className={classNames('font-bold text-primary-9', {
            'grow text-center': !hasValeurOrObjectif,
          })}
        >
          {titre}
        </div>
        {!!rempli && (
          <Button
            size="xs"
            variant="outlined"
            className="h-fit shrink-0"
            onClick={() => setIsChartOpen(true)}
          >
            Télécharger le graphique
          </Button>
        )}
      </div>

      <IndicateurChart
        className="min-h-[16rem]"
        isLoading={isLoadingValeurs}
        data={data}
        chartConfig={{
          theme: {
            axis: {
              ticks: {
                text: {
                  fontSize: 14,
                },
              },
            },
          },
          margin: {
            top: 16,
            right: 16,
            bottom: 48,
            left: getLeftLineChartMargin(data.valeurs) + 8,
          },
          legend: { isOpen: true },
        }}
        chartInfos={{
          modal: { isOpen: isChartOpen, setIsOpen: setIsChartOpen },
          fileName,
          title: titre,
        }}
      />
      {!!metadonnee && (
        <DataSourceTooltip metadonnee={metadonnee}>
          <Icon icon="information-line" className="text-primary" />
        </DataSourceTooltip>
      )}
      {!hasValeurOrObjectif && (
        <div className="mx-auto text-sm text-grey-7">
          Aucune valeur renseignée pour l’instant
        </div>
      )}
    </div>
  );
};

export default IndicateurDetailChart;
