import { DateTime } from 'luxon';
import {
  CreateFicheActionType,
  FicheActionCiblesEnumType,
  piliersEciEnumType,
  FicheActionStatutsEnumType,
} from '../../../src/fiches/models/fiche-action.table';

export const ficheActionFixture: CreateFicheActionType = {
  id: 9999,
  titre: 'Test Fiche Action',
  description: 'patati',
  piliersEci: [piliersEciEnumType.APPROVISIONNEMENT_DURABLE],
  objectifs: 'Diminution des émissions de carbone',
  cibles: [
    FicheActionCiblesEnumType.GRAND_PUBLIC_ET_ASSOCIATIONS,
    FicheActionCiblesEnumType.AGENTS,
  ],
  ressources: 'Service digitaux',
  financements: '100 000€',
  budgetPrevisionnel: '35000',
  statut: FicheActionStatutsEnumType.EN_PAUSE,
  niveauPriorite: 'Moyen',
  dateDebut: null,
  dateFinProvisoire: null,
  ameliorationContinue: false,
  calendrier: 'Calendrier à préciser',
  notesComplementaires: '',
  majTermine: true,
  collectiviteId: 1,
  createdAt: DateTime.fromISO('2024-11-08T09:09:16Z').toJSDate(),
  modifiedBy: null,
  restreint: false,
  tempsDeMiseEnOeuvre: 1,
  participationCitoyenne: 'Participation',
  participationCitoyenneType: 'Concertation',
};