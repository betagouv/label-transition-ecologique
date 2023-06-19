import {ReferentielParamOption} from 'app/paths';
import {TableOptions} from 'react-table';
import {ProgressionRow} from '../EtatDesLieux/Synthese/data/useProgressionReferentiel';
import {useRepartitionPhases} from '../EtatDesLieux/Synthese/data/useRepartitionPhases';
import ProgressionParPhase from '../EtatDesLieux/Synthese/ProgressionParPhase';
import ProgressionReferentiel from '../EtatDesLieux/Synthese/ProgressionReferentiel';

type EtatDesLieuxGraphsProps = {
  referentiel: ReferentielParamOption;
  displayEtatDesLieux: boolean;
  progressionScore: Pick<
    TableOptions<ProgressionRow>,
    'data' | 'getRowId' | 'getSubRows' | 'autoResetExpanded'
  >;
  className?: string;
};

/**
 * Affichage des graphiques sous les cartes "état des lieux"
 */

const EtatDesLieuxGraphs = ({
  referentiel,
  displayEtatDesLieux,
  progressionScore,
  className,
}: EtatDesLieuxGraphsProps): JSX.Element => {
  const repartitionPhases = useRepartitionPhases(referentiel);

  return displayEtatDesLieux ? (
    <div className={`flex flex-col gap-6 ${className}`}>
      <ProgressionReferentiel
        score={progressionScore}
        referentiel={referentiel}
        customStyle={{
          boxShadow: '0px 2px 16px 0px #0063CB0A, 0px 4px 6px 0px #0063CB0F',
          border: 'none',
          borderRadius: '8px',
        }}
      />
      <ProgressionReferentiel
        score={progressionScore}
        referentiel={referentiel}
        percentage
        customStyle={{
          boxShadow: '0px 2px 16px 0px #0063CB0A, 0px 4px 6px 0px #0063CB0F',
          border: 'none',
          borderRadius: '8px',
        }}
      />
      <ProgressionParPhase
        repartitionPhases={repartitionPhases}
        referentiel={referentiel}
        customStyle={{
          boxShadow: '0px 2px 16px 0px #0063CB0A, 0px 4px 6px 0px #0063CB0F',
          border: 'none',
          borderRadius: '8px',
        }}
      />
    </div>
  ) : (
    <div className={`${className}`}></div>
  );
};

export default EtatDesLieuxGraphs;
