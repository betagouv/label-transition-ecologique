import '@testing-library/jest-dom/extend-expect';
import {ActionStatutReadEndpoint} from 'core-logic/api/endpoints/ActionStatutReadEndpoint';
import {supabaseClient} from 'core-logic/api/supabase';
import {yuluCredentials} from 'test_utils/collectivites';

describe('Action-statut reading endpoint should retrieve data-layer default statuses', () => {
  it('Should not be able to read if not connected', async () => {
    const actionStatutReadEndpoint = new ActionStatutReadEndpoint([]);

    const results = await actionStatutReadEndpoint.getBy({
      collectivite_id: 1,
    });

    expect(results).toHaveLength(0);
  });

  it('Retrieves at least one status when collectivite_id is given (for any connected user)', async () => {
    const actionStatutReadEndpoint = new ActionStatutReadEndpoint([]);

    await supabaseClient.auth.signIn(yuluCredentials); // Yulu is connected but has no rights on collectivite #1

    const results = await actionStatutReadEndpoint.getBy({collectivite_id: 1});
    expect(actionStatutReadEndpoint.lastResponse?.status).toBe(200);
    expect(results.length).toBeGreaterThanOrEqual(1);
  });

  it('Retrieves status with basic avancement fait for collectivite 1 at cae_1.1.1.1.1 (for any connected user)', async () => {
    const actionStatutReadEndpoint = new ActionStatutReadEndpoint([]);

    await supabaseClient.auth.signIn(yuluCredentials); // Yulu is connected but has no rights on collectivite #1

    const results = await actionStatutReadEndpoint.getBy({
      collectivite_id: 1,
      action_id: 'cae_1.1.1.1.1',
    });
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]).toMatchObject({
      action_id: 'cae_1.1.1.1.1',
      collectivite_id: 1,
      avancement: 'fait',
    });
  });
  it('Retrieves status with detailed avancement (.2, .7, .1) for collectivite 1 at cae_1.1.1.1.2 (for any connected user)', async () => {
    const actionStatutReadEndpoint = new ActionStatutReadEndpoint([]);

    await supabaseClient.auth.signIn(yuluCredentials); // Yulu is connected but has no rights on collectivite #1

    const results = await actionStatutReadEndpoint.getBy({
      collectivite_id: 1,
      action_id: 'cae_1.1.1.1.2',
    });
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0]).toMatchObject({
      action_id: 'cae_1.1.1.1.2',
      collectivite_id: 1,
      avancement: 'detaille',
      avancement_detaille: [0.2, 0.7, 0.1],
    });
  });
});
