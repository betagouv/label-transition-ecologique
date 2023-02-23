import {CurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';

const fakeCurrentCollectiviteBase = {
  collectivite_id: 1,
  nom: 'Fake Collectivite',
};

export const fakeCurrentCollectiviteAdmin: CurrentCollectivite = {
  ...fakeCurrentCollectiviteBase,
  niveau_acces: 'admin',
  isAdmin: true,
  est_auditeur: false,
  readonly: false,
  acces_restreint: false,
};

export const fakeCurrentCollectiviteLecture: CurrentCollectivite = {
  ...fakeCurrentCollectiviteBase,
  niveau_acces: 'lecture',
  isAdmin: false,
  est_auditeur: false,
  readonly: true,
  acces_restreint: false,
};
