import { getTestRouter } from '../../../test/common/app-utils';
import { AuthenticatedUser } from './../../auth/models/auth.models';
import { getAuthUser } from '../../../test/auth/auth-utils';
import { inferProcedureInput } from '@trpc/server';
import { AppRouter, TrpcRouter } from '../../trpc/trpc.router';

type Input = inferProcedureInput<AppRouter['tags']['categories']['list']>;

describe('Route de lecture des tags catégories', () => {
  let router: TrpcRouter;
  let yoloDodoUser: AuthenticatedUser;

  beforeAll(async () => {
    router = await getTestRouter();
    yoloDodoUser = await getAuthUser();
  });

  test(`Test que la requête ne retourne que les tags personnalisés de la collectivité`, async () => {
    const caller = router.createCaller({ user: yoloDodoUser });

    const input: Input = {
      collectiviteId: 1,
      withPredefinedTags : false
    };
    const result = await caller.tags.categories.list(input);
    // Il n'y a pas de catégories propres à une collectivité dans le jeu de test
    expect(result.length).toBe(0);
  });

  test(`Test que la requête retourne tous les tags disponibles pour la collectivité`, async () => {
    const caller = router.createCaller({ user: yoloDodoUser });

    const input: Input = {
      collectiviteId: 1,
      withPredefinedTags : true
    };
    const result = await caller.tags.categories.list(input);
    expect(result.length).not.toBe(0);
  });
});