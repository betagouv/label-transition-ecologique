import { pgEnum } from 'drizzle-orm/pg-core';
import { createEnumObject } from '../../common/models/enum.helpers';

export const MembreFonction = [
  'conseiller',
  'technique',
  'politique',
  'partenaire',
] as const;

export const MembreFonctionEnum = createEnumObject(MembreFonction);

export const membreFonctionEnum = pgEnum('membre_fonction', MembreFonction);