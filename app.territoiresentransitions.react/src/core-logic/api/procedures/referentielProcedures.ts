import {supabaseClient} from 'core-logic/api/supabase';
import {Referentiel} from 'types/litterals';
// eslint-disable-next-line node/no-extraneous-import
import {PostgrestFilterBuilder} from '@supabase/postgrest-js';
import {PostgrestResponse} from '@supabase/supabase-js';
import {ActionDefinitionSummary} from 'core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';

class RpcCache {
  cache: Record<string, PostgrestResponse<any>> = {};
  promises: Record<string, PostgrestFilterBuilder<any>> = {};
  clearCache() {
    this.cache = {};
  }

  private key = (fn: string, args: object | undefined): string =>
    `${fn}: ${JSON.stringify(args)}`;

  public async rpc(fn: string, args: object | undefined): Promise<any> {
    const key = this.key(fn, args);

    if (this.cache[key] !== undefined) {
      return this.cache[key];
    }

    if (this.promises[key] === undefined)
      this.promises[key] = supabaseClient.rpc(fn, args);
    const queryResponse = await this.promises[key];
    delete this.promises[key];

    this.cache[key] = queryResponse;

    return this.cache[key];
  }
}
const rpcCache = new RpcCache();

/**
 * Returns a view of a réferentiel down to the action level
 */
export const referentielDownToAction = async (
  referentiel: Referentiel
): Promise<ActionDefinitionSummary[]> => {
  const {data, error} = await rpcCache.rpc('referentiel_down_to_action', {
    referentiel,
  });

  if (error) {
    console.error(error);
    return [];
  }

  return data as ActionDefinitionSummary[];
};

/**
 * Returns a view of an action down to the tache level
 */
export const actionDownToTache = async (
  referentiel: Referentiel,
  identifiant: string
): Promise<ActionDefinitionSummary[]> => {
  const {data, error} = await rpcCache.rpc('action_down_to_tache', {
    referentiel: referentiel,
    identifiant: identifiant,
  });

  if (error) {
    console.error(error);
    return [];
  }

  return data as ActionDefinitionSummary[];
};

/**
 * Action Exemples
 * The exemples section contents
 */
export interface ActionExemples {
  id: string;
  exemples: string;
}

/**
 * Returns action exemples text
 */
export const actionExemples = async (id: string): Promise<ActionExemples> => {
  const {data, error} = await rpcCache.rpc('action_exemples', {
    id: id,
  });

  if (error) {
    console.error(error);
    return {id: id, exemples: ''};
  }

  return data as Object as ActionExemples;
};

/**
 * Action Ressources
 * The ressources section contents
 */
export interface ActionRessources {
  id: string;
  ressources: string;
}

/**
 * Returns action ressources text
 */
export const actionRessources = async (
  id: string
): Promise<ActionRessources> => {
  const {data, error} = await rpcCache.rpc('action_ressources', {
    id: id,
  });

  if (error) {
    console.error(error);
    return {id: id, ressources: ''};
  }

  return data as Object as ActionRessources;
};

/**
 * Action Contexte
 * The contexte section contents
 */
export interface ActionContexte {
  id: string;
  contexte: string;
}

/**
 * Returns action contexte text
 */
export const actionContexte = async (id: string): Promise<ActionContexte> => {
  const {data, error} = await rpcCache.rpc('action_contexte', {
    id: id,
  });

  if (error) {
    console.error(error);
    return {id: id, contexte: ''};
  }

  return data as Object as ActionContexte;
};
