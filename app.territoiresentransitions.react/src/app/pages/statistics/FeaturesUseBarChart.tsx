import {useMemo} from 'react';
import {Bar} from 'react-chartjs-2';
import type {ChartData, TooltipItem} from 'chart.js';
import {FunctionnalitiesUsageProportion} from 'core-logic/api/statisticsApiEndpoints';

const keyToLabel: Record<string, string> = {
  // on ajoute des espaces au 1er libellé pour avoir un libellé par ligne dans la légende!
  cae_statuses_avg: 'Remplissage statuts CAE'.padEnd(54, ' '),

  eci_statuses_avg: 'Remplissage statuts ECI',
  indicateur_referentiel_avg:
    'Remplissage des indicateurs (CAE ou ECI confondus)',
  indicateur_personnalise_avg: 'Remplissage des indicateurs personnalisés',
};

const KEYS = [
  'cae_statuses_avg',
  'eci_statuses_avg',
  'indicateur_referentiel_avg',
  'indicateur_personnalise_avg',
];

const COLORS = ['#C15627', '#E9AB11', '#55A1E3', '#55A874'];

export type TFeaturesUseBarChartProps = {
  widthPx: number;
  proportions: FunctionnalitiesUsageProportion;
};

const getChartData = (
  proportions: FunctionnalitiesUsageProportion
): ChartData => {
  return {
    labels: [''],
    datasets: KEYS.map((key, index) => ({
      label: keyToLabel[key],
      backgroundColor: COLORS[index],
      data: [proportions[key] * 100],
    })),
  };
};

export const FeaturesUseBarChart = (props: TFeaturesUseBarChartProps) => {
  const {widthPx, proportions} = props;
  const data: ChartData = useMemo(
    () => getChartData(proportions),
    [proportions]
  );

  return (
    <div style={{width: widthPx, marginLeft: 0}}>
      <div className="font-semibold text-center text-md">
        Pourcentage des collectivités actives qui utilisent les fonctionnalités
      </div>
      <Bar
        className="p-5"
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
              align: 'start',
              fullSize: false,
            },
            tooltip: {
              callbacks: {
                label: ({raw, dataset}: TooltipItem<'line'>) => {
                  return `${dataset.label.trim()} : ${(raw as number).toFixed(
                    2
                  )} %`;
                },
              },
            },
          },
          scales: {
            x: {
              title: {display: false},
            },
            y: {
              title: {display: true, text: 'Pourcentage'},
              min: 0,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
};
