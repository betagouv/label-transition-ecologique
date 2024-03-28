import {useRouteMatch} from 'react-router-dom';
import {supabaseClient} from 'core-logic/api/supabase';
import {invitationIdParam, invitationLandingPath} from 'app/paths';

// extrait l'id d'invitation de l'url si il est présent
export const useInvitationState = () => {
  const match = useRouteMatch<{[invitationIdParam]: string}>(
    invitationLandingPath
  );
  const invitationId = match?.params?.[invitationIdParam] || null;
  if (!invitationId) return {invitationId};

  const params = new URLSearchParams(document.location.search);
  return {invitationId, consume: params.get('consume')};
};

export const acceptAgentInvitation = async (
  invitation_id: string
): Promise<boolean> => {
  const {error} = await supabaseClient.rpc('consume_invitation', {
    id: invitation_id,
  });
  return error === null;
};
