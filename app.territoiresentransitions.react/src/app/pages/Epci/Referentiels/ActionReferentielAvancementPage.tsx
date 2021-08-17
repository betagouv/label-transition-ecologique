import {lazy, Suspense} from 'react';
import {useParams} from 'react-router-dom';
import {overmind} from 'core-logic/overmind';
import {renderLoader} from 'utils';
import {useReferentielState} from 'core-logic/overmind/hooks';

const ActionReferentielAvancement = lazy(
  () => import('app/pages/Epci/Referentiels/ActionReferentielAvancement')
);

export const ActionReferentielAvancementPage = () => {
  useReferentielState();

  const {epciId, actionId, referentiel} = useParams<{
    epciId: string;
    actionId: string;
    referentiel: 'cae' | 'eci';
  }>();

  overmind.actions.epcis.setCurrentEpci(epciId);

  return (
    <Suspense fallback={renderLoader()}>
      <ActionReferentielAvancement
        actionId={actionId}
        displayProgressStat={referentiel === 'eci'}
      />
    </Suspense>
  );
};
