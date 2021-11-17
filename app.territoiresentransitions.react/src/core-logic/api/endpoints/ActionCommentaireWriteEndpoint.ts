import {DataLayerWriteEndpoint} from 'core-logic/api/dataLayerEndpoint';
import {ActionCommentaireWrite} from 'generated/dataLayer/action_commentaire_write';
import {PostgrestResponse} from '@supabase/supabase-js';

export class ActionCommentaireWriteEndpoint extends DataLayerWriteEndpoint<ActionCommentaireWrite> {
  readonly name = 'action_commentaire';

  async _write(
    commentaire: ActionCommentaireWrite
  ): Promise<PostgrestResponse<ActionCommentaireWrite>> {
    return this._table.upsert([commentaire]);
  }
}

export const actionCommentaireWriteEndpoint =
  new ActionCommentaireWriteEndpoint();
