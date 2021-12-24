import type {ChartData, ChartDataset} from 'chart.js';
import {AnyIndicateurRepository} from 'core-logic/api/repositories/AnyIndicateurRepository';
import {useCollectiviteId} from 'core-logic/hooks';
import {useAnyIndicateurValuesForAllYears} from 'core-logic/hooks/indicateur_values';
import {AnyIndicateurValueRead} from 'generated/dataLayer/any_indicateur_value_write';
import {Line} from 'react-chartjs-2';
import {Spacer} from 'ui/shared';

const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({length}, (_, i) => start + i);
};

const getDataset = (
  yearRange: number[],
  indicateurValues: AnyIndicateurValueRead[],
  label: string,
  color: string,
  kwargs?: Partial<ChartDataset>
): ChartDataset => {
  const data = yearRange.map(year => {
    const valuesForYear = indicateurValues.find(
      values => values.annee === year
    );
    return valuesForYear ? valuesForYear.valeur : NaN;
  });
  const datastet = {
    label,
    data,
    fill: false,
    backgroundColor: color,
    borderColor: color,
    strokeColor: color,
    borderWidth: 2,
    pointRadius: 2,
    pointHoverRadius: 3,
    tension: 0.2,
    spanGaps: true,
    ...kwargs,
  };

  return datastet;
};

const AnyIndicateurLineChart = (props: {
  indicateurId: string | number;
  unit: string;
  title: string;
  resultatRepo: AnyIndicateurRepository;
  objectifRepo: AnyIndicateurRepository;
}) => {
  const collectiviteId = useCollectiviteId()!;

  const resultatValues = useAnyIndicateurValuesForAllYears({
    collectiviteId,
    indicateurId: props.indicateurId,
    repo: props.resultatRepo,
  });
  const objectifValues = useAnyIndicateurValuesForAllYears({
    collectiviteId,
    indicateurId: props.indicateurId,
    repo: props.objectifRepo,
  });

  if (!resultatValues.length && !objectifValues.length)
    return <>Aucune donnée n'est renseignée.</>;

  const sortedResultatValuesYears = resultatValues
    .map(value => value.annee)
    .sort();
  const sortedObjectifValuesYears = objectifValues
    .map(value => value.annee)
    .sort();

  const firstYear = Math.min(
    sortedResultatValuesYears.length ? sortedResultatValuesYears[0] : Infinity,
    sortedObjectifValuesYears.length ? sortedObjectifValuesYears[0] : Infinity
  );
  const lastYear = Math.max(
    sortedResultatValuesYears.length
      ? sortedResultatValuesYears[sortedResultatValuesYears.length - 1]
      : -1,
    sortedObjectifValuesYears.length
      ? sortedObjectifValuesYears[sortedObjectifValuesYears.length - 1]
      : -1
  );

  const yearRange = range(firstYear, lastYear);
  const labels = yearRange.map(year => year.toString());

  const data: ChartData = {
    labels,
    datasets: [
      getDataset(yearRange, resultatValues, 'Résultats', '#000091'),
      getDataset(yearRange, objectifValues, 'Objectifs', '#6a6a6a', {
        borderDash: [2, 3],
      }),
    ],
  };
  const canvasId = `chart-${props.indicateurId}`;
  return (
    <div>
      <div className="w-2/3 h-72 pb-7">
        <div className="sm text-center font-bold ">{props.title}</div>
        <Line
          id={canvasId}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                display: true,
                labels: {
                  boxHeight: 0,
                },
              },
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: props.unit,
                },
              },
            },
          }}
        />
      </div>
      <Spacer />
      <a
        className="fr-btn fr-btn--secondary ml-7 mt-7"
        id="download"
        download={`${props.title}.png`}
        href=""
        onClick={() => {
          const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
          if (canvas) {
            (document.getElementById('download') as HTMLLinkElement).href =
              canvas.toDataURL();
          }
        }}
      >
        Télécharger le graphique en .png
      </a>
    </div>
  );
};

export const AnyIndicateurLineChartExpandable = (props: {
  title: string;
  unite: string;
  indicateurId: string | number;
  resultatRepo: AnyIndicateurRepository;
  objectifRepo: AnyIndicateurRepository;
}) => (
  <div className="CrossExpandPanel">
    <details open>
      <summary className="title">Graphique</summary>
      <AnyIndicateurLineChart
        indicateurId={props.indicateurId}
        unit={props.unite}
        title={props.title}
        resultatRepo={props.resultatRepo}
        objectifRepo={props.objectifRepo}
      />
    </details>
  </div>
);
