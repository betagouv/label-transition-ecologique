/* eslint-disable react/no-unescaped-entities */
'use client';

import {createContext, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {
  ActionImpactFourchetteBudgetaire,
  ActionImpactTempsMiseEnOeuvre,
  ActionImpactThematique,
  Panier,
} from '@tet/api';
import {panierAPI, supabase} from 'src/clientAPI';
import {OngletName, useEventTracker, useOngletTracker} from '@tet/ui';
import {User} from '@supabase/supabase-js';
import {useCollectiviteContext} from 'providers/collectivite';
import ListeActions from '@components/ListeActions';
import PanierActions from '@components/PanierActions';
import {usePanierContext} from 'providers/panier';

type PanierRealtimeProps = {
  panier: Panier;
  budgets: ActionImpactFourchetteBudgetaire[];
  durees: ActionImpactTempsMiseEnOeuvre[];
  thematiques: ActionImpactThematique[];
};

/**
 * Le contexte qui permet de récupérer l'utilisateur
 *
 * Si l'utilisateur est `null` on considère qu'il n'est pas connecté.
 */
export const UserContext = createContext<User | null>(null);

/**
 * La partie client du Panier d'Action à Impact
 *
 * @param panier Le panier passé par la partie server side.
 * @param budgets La liste des budgets pour le filtrage
 * @param thematiques La liste des thematiques pour le filtrage
 * @constructor
 */
const PanierRealtime = ({
  panier,
  budgets,
  durees,
  thematiques,
}: PanierRealtimeProps) => {
  const [currentTab, setCurrentTab] = useState<OngletName>('selection');
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const {setCollectiviteId} = useCollectiviteContext();
  const {setPanier} = usePanierContext();

  const tracker = useEventTracker('panier', currentTab);
  const ongletTracker = useOngletTracker('panier');

  useEffect(() => {
    setPanier(panier);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panier.latest_update, setPanier]);

  useEffect(() => {
    setCollectiviteId(panier.collectivite_preset);
  }, [panier.collectivite_preset, setCollectiviteId]);

  useEffect(() => {
    const channel = panierAPI.listenToPanierUpdates(panier.id, router.refresh);
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) setUser(session.user);
    });
    // todo: restoreAuthTokens(supabase);

    return () => {
      // @ts-ignore
      supabase.removeChannel(channel);
    };
  }, [router, panier.id]);

  const handleToggleSelected = async (actionId: number, selected: boolean) => {
    if (selected) {
      await panierAPI.addActionToPanier(actionId, panier.id);
      await tracker('ajout', {
        collectivite_preset: panier.collectivite_preset,
        panier_id: panier.id,
        action_id: actionId,
      });
      router.refresh();
    } else {
      await panierAPI.removeActionFromPanier(actionId, panier.id);
      await tracker('retrait', {
        collectivite_preset: panier.collectivite_preset,
        panier_id: panier.id,
        action_id: actionId,
      });
      router.refresh();
    }
  };

  const handleUpdateStatus = async (
    actionId: number,
    statusId: string | null
  ) => {
    await panierAPI.setActionStatut(actionId, panier.id, statusId);
    await tracker('statut', {
      collectivite_preset: panier.collectivite_preset,
      panier_id: panier.id,
      action_id: actionId,
      category_id: statusId,
    });
    router.refresh();
  };

  const handleChangeTab = async (tab: OngletName) => {
    setCurrentTab(tab);
    await ongletTracker(tab, {
      collectivite_preset: panier.collectivite_preset,
      panier_id: panier.id,
    });
  };

  return (
    <UserContext.Provider value={user}>
      <div className="grow flex max-lg:flex-col gap-8 max-lg:mb-6 min-h-[101vh]">
        <div className="lg:w-3/5 xl:w-2/3 py-12 max-lg:pb-2 flex flex-col">
          <h1>
            Initiez{' '}
            <span className="text-secondary-1">des actions impactantes</span> et
            valorisez le chemin déjà parcouru
          </h1>
          <p className="text-grey-9 text-lg font-medium mt-8 mb-12">
            Ajoutez les actions à votre panier. Vous pouvez aussi les classer en
            fonction de leur état d'avancement.
          </p>
          <ListeActions
            actionsListe={panier.states}
            onToggleSelected={handleToggleSelected}
            onUpdateStatus={handleUpdateStatus}
            onChangeTab={handleChangeTab}
            {...{budgets, durees, thematiques}}
          />
        </div>

        <PanierActions
          actionsListe={panier.contenu}
          budgets={budgets}
          onToggleSelected={handleToggleSelected}
        />
      </div>
    </UserContext.Provider>
  );
};

export default PanierRealtime;