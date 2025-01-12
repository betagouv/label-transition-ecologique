import { dbAdmin } from '@/api/tests/supabase';
import { expect } from 'vitest';
import { ModuleInsert } from '../domain/module.schema';

export const moduleNew: ModuleInsert = {
  id: crypto.randomUUID(),
  collectiviteId: 1,
  titre: 'Mon module personnalisé',
  slug: 'suivi-plan-actions',
  type: 'plan-action.list',
  options: {
    filtre: {
      // utilisateurPiloteIds: ['17440546-f389-4d4f-bfdb-b0c94a1bd0f9'],
    },
  },
};

export async function resetModules(params: { collectiviteId: number }) {
  // Supprime les modules existants
  await dbAdmin
    .from('tableau_de_bord_module')
    .delete()
    .eq('collectivite_id', params.collectiviteId)
    .is('user_id', null);

  const { data } = await dbAdmin
    .from('tableau_de_bord_module')
    .select('*')
    .is('user_id', null);

  expect(data).toHaveLength(0);
}
