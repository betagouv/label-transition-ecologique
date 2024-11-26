import { useCollectiviteId } from 'core-logic/hooks/params';
import { useAuth, UserData } from 'core-logic/api/auth/AuthProvider';
import {
  CurrentCollectivite,
  useCurrentCollectivite,
} from 'core-logic/hooks/useCurrentCollectivite';
import { useUpdateCollectiviteMembre } from 'app/pages/collectivite/Users/useUpdateCollectiviteMembre';
import {
  PAGE_SIZE,
  useCollectiviteMembres,
} from 'app/pages/collectivite/Users/useCollectiviteMembres';
import { useRemoveFromCollectivite } from 'app/pages/collectivite/Users/useRemoveFromCollectivite';
import {
  Membre,
  TRemoveFromCollectivite,
  TUpdateMembre,
} from 'app/pages/collectivite/Users/types';
import MembreListTable from 'app/pages/collectivite/Users/components/MembreListTable';
import { useAddUserToCollectivite } from 'app/pages/collectivite/Users/useAddUserToCollectivite';
import { Button, Modal, Pagination, TrackPageView } from '@tet/ui';
import { Invite } from 'app/pages/collectivite/Users/components/Invite';
import { useBaseToast } from 'core-logic/hooks/useBaseToast';
import { useEffect, useState } from 'react';
import { useSendInvitation } from 'app/pages/collectivite/Users/useSendInvitation';

export type MembresProps = {
  membres: Membre[];
  collectivite: CurrentCollectivite;
  isLoading: boolean;
  currentUser: UserData;
  updateMembre: TUpdateMembre;
  removeFromCollectivite: TRemoveFromCollectivite;
};

/**
 * Affiche la page listant les utilisateurs attachés à une collectivité
 * et le formulaire permettant d'envoyer des liens d'invitation
 */
export const Membres = ({
  membres,
  collectivite,
  isLoading,
  currentUser,
  updateMembre,
  removeFromCollectivite,
}: MembresProps) => {
  const { niveau_acces } = collectivite;
  const canInvite = niveau_acces === 'admin' || niveau_acces === 'edition';
  const { data, mutate: addUser } = useAddUserToCollectivite(
    collectivite,
    currentUser
  );
  const { data: sendData, mutate: sendInvitation } = useSendInvitation(
    collectivite,
    currentUser
  );
  const { setToast, renderToast } = useBaseToast();

  // affichage des notifications après l'ajout ou l'envoi de l'invitation
  useEffect(() => {
    if (!data) return;
    if (data.added) {
      setToast(
        'success',
        'Nouveau membre ajouté avec succès à la collectivité !'
      );
    } else if (data.invitationId) {
      setToast('success', mailSentMessage(collectivite, data));
    } else if (data.error) {
      setToast('info', data.error);
    }
  }, [data?.added, data?.error]);

  // affichage de la notification après le renvoi d'une invitation
  useEffect(() => {
    if (sendData?.sent) {
      setToast('success', mailSentMessage(collectivite, sendData));
    } else if (sendData?.error) {
      setToast('error', sendData.error);
    }
  }, [sendData?.sent, sendData?.email, sendData?.error]);

  return (
    <>
      <TrackPageView
        pageName="app/parametres/membres"
        properties={{ collectivite_id: collectivite.collectivite_id }}
      />
      <main data-test="Users" className="fr-container mt-9 mb-16">
        <h1 className="mb-10 lg:mb-14 lg:text-center flex flex-row justify-between">
          Gestion des membres
          {canInvite && (
            <Modal
              title="Inviter un membre"
              render={({ close }) => (
                <Invite
                  niveauAcces={niveau_acces}
                  onCancel={close}
                  onSubmit={(data) => {
                    addUser(data);
                    close();
                  }}
                />
              )}
            >
              <Button data-test="invite">Inviter un membre</Button>
            </Modal>
          )}
        </h1>

        <MembreListTable
          currentUserId={currentUser.id}
          currentUserAccess={
            collectivite.niveau_acces ? collectivite.niveau_acces : 'lecture'
          }
          membres={membres}
          isLoading={isLoading}
          updateMembre={updateMembre}
          removeFromCollectivite={removeFromCollectivite}
          sendInvitation={sendInvitation}
        />
        {renderToast()}
      </main>
    </>
  );
};

// formate le message affiché après l'envoi d'un email
const mailSentMessage = (
  collectivite: CurrentCollectivite,
  data: { email: string }
): string =>
  `L'invitation à rejoindre la collectivité ${collectivite.nom} a bien été envoyée à ${data.email}`;

const MembresConnected = () => {
  const auth = useAuth();
  const user = auth.user;
  const collectivite_id = useCollectiviteId();
  const collectivite = useCurrentCollectivite();

  const [page, setPage] = useState(1);
  const { data, isLoading } = useCollectiviteMembres(page);
  const { updateMembre } = useUpdateCollectiviteMembre();
  const { removeFromCollectivite } = useRemoveFromCollectivite();

  if (!user?.id || !collectivite_id || !collectivite) return null;

  const { membres, count } = data;

  return (
    <>
      <Membres
        currentUser={user}
        membres={membres}
        collectivite={collectivite}
        updateMembre={updateMembre}
        removeFromCollectivite={removeFromCollectivite}
        isLoading={isLoading}
      />
      <Pagination
        className="self-center"
        selectedPage={page}
        nbOfElements={count}
        maxElementsPerPage={PAGE_SIZE}
        idToScrollTo="app-header"
        onChange={setPage}
      />
    </>
  );
};

export default MembresConnected;
