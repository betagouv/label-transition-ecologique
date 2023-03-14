import React from 'react';
import {ChartHead, ChartTitle} from './headings';
import TrancheCompletude, {useTrancheCompletude} from './TrancheCompletude';

type EtatDesLieuxProps = {
  region?: string;
  department?: string;
};

export function EtatDesLieux({
  region = '',
  department = '',
}: EtatDesLieuxProps) {
  const {data} = useTrancheCompletude(region, department);
  if (!data) return null;

  const {inities, termines, presqueTermines} = data;

  return (
    <>
      <ChartHead>
        États des lieux réalisés, ventilés par taux de progression
        <br />
        {inities} états des lieux initiés, dont {presqueTermines} réalisés à
        plus de 80% et {termines} terminés (100%)
      </ChartHead>
      <div className="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
        <div className="fr-col-xs-12 fr-col-sm-12 fr-col-md-5 fr-col-lg-5 fr-responsive-img">
          <ChartTitle>Climat Air Énergie</ChartTitle>
          <TrancheCompletude
            referentiel="cae"
            region={region}
            department={department}
          />
        </div>
        <div className="fr-col-xs-12 fr-col-sm-12 fr-col-md-5 fr-col-lg-5 fr-responsive-img">
          <ChartTitle>Économie circulaire</ChartTitle>
          <TrancheCompletude
            referentiel="eci"
            region={region}
            department={department}
          />
        </div>
      </div>
    </>
  );
}
