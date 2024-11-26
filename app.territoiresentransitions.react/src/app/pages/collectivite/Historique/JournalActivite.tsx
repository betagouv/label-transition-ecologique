import { useCollectiviteId } from 'core-logic/hooks/params';
import { THistoriqueProps } from './types';
import { HistoriqueListe } from './HistoriqueListe';
import { useHistoriqueItemListe } from './useHistoriqueItemListe';
import { TrackPageView } from '@tet/ui';

/**
 * Affiche le journal d'activité d'une collectivité
 */
export const JournalActivite = (props: THistoriqueProps) => {
  return (
    <main data-test="JournalActivite" className="fr-container mt-9 mb-16">
      <h1 className="text-center fr-mt-6w fr-mb-6w">Journal d'activité</h1>
      <hr />
      <HistoriqueListe {...props} />
    </main>
  );
};

const JournalActiviteConnected = () => {
  const collectivite_id = useCollectiviteId()!;
  const historique = useHistoriqueItemListe(collectivite_id);
  return (
    <>
      <TrackPageView
        pageName="app/parametres/historique"
        properties={{ collectivite_id }}
      />
      <JournalActivite {...historique} />;
    </>
  );
};

export default JournalActiviteConnected;
