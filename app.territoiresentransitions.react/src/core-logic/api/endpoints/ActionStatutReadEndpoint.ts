import {DataLayerReadEndpoint} from 'core-logic/api/dataLayerEndpoint';
import {ActionStatutRead} from 'generated/dataLayer/action_statut_read';
import {PostgrestResponse} from '@supabase/supabase-js';

export interface StatutGetParams {
  collectivite_id: number;
  action_id?: string;
}

class ActionStatutReadEndpoint extends DataLayerReadEndpoint<
  ActionStatutRead,
  StatutGetParams
> {
  readonly name = 'action_statut';

  async _read(
    getParams: StatutGetParams
  ): Promise<PostgrestResponse<ActionStatutRead>> {
    if (getParams.action_id)
      return this._table
        .eq('collectivite_id', getParams.collectivite_id)
        .eq('action_id', getParams.action_id);
    return this._table.eq('collectivite_id', getParams.collectivite_id);
  }
}

export const actionStatutReadEndpoint = new ActionStatutReadEndpoint();
