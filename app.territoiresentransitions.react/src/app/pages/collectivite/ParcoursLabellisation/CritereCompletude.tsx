import { TLabellisationParcours } from '@/app/app/pages/collectivite/ParcoursLabellisation/types';
import {
  makeCollectiviteReferentielUrl,
  ReferentielParamOption,
} from '@/app/app/paths';
import { CritereRempli } from './CritereRempli';

export type TCritereScoreProps = {
  collectiviteId: number;
  parcours: TLabellisationParcours;
};

/**
 * Affiche le critère lié au remplissage du référentiel
 */
export const CritereCompletude = (props: TCritereScoreProps) => {
  const { collectiviteId, parcours } = props;
  const { completude_ok, referentiel } = parcours;
  const referentielId = referentiel as ReferentielParamOption;

  return (
    <>
      <li className="fr-mb-1w">Renseigner tous les statuts du référentiel</li>
      {completude_ok ? (
        <CritereRempli />
      ) : (
        <a
          className="fr-link fr-link--icon-right fr-fi-arrow-right-line fr-mb-2w"
          target="_blank"
          href={makeCollectiviteReferentielUrl({
            collectiviteId,
            referentielId,
            referentielVue: 'detail',
          })}
          rel="noreferrer"
        >
          Mettre à jour
        </a>
      )}
    </>
  );
};
