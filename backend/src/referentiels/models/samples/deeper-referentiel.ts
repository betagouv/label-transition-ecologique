import { ActionType } from '../action-type.enum';
import { ReferentielActionType } from '../referentiel-action.dto';

export const deeperReferentiel: ReferentielActionType = {
  actionId: 'eci',
  points: 100,
  level: 0,
  actionType: ActionType.REFERENTIEL,
  actionsEnfant: [
    {
      actionId: 'eci_1',
      points: 30,
      level: 1,
      actionType: ActionType.ACTION,
      actionsEnfant: [
        {
          actionId: 'eci_1.1',
          points: 10,
          level: 2,
          actionType: ActionType.SOUS_ACTION,
          actionsEnfant: [],
        },
        {
          actionId: 'eci_1.2',
          points: 20,
          level: 2,
          actionType: ActionType.SOUS_ACTION,
          actionsEnfant: [],
        },
      ],
    },
    {
      actionId: 'eci_2',
      points: 70,
      level: 1,
      actionType: ActionType.ACTION,
      actionsEnfant: [
        {
          actionId: 'eci_2.0',
          points: 0,
          level: 2,
          actionType: ActionType.SOUS_ACTION,
          actionsEnfant: [],
        },
        {
          actionId: 'eci_2.1',
          points: 65,
          level: 2,
          actionType: ActionType.SOUS_ACTION,
          actionsEnfant: [
            {
              actionId: 'eci_2.1.0',
              points: 0,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
            {
              actionId: 'eci_2.1.1',
              points: 40,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
            {
              actionId: 'eci_2.1.2',
              points: 25,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
          ],
        },
        {
          actionId: 'eci_2.2',
          points: 5,
          level: 2,
          actionType: ActionType.SOUS_ACTION,
          actionsEnfant: [
            {
              actionId: 'eci_2.2.1',
              points: 2,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
            {
              actionId: 'eci_2.2.2',
              points: 1.5,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
            {
              actionId: 'eci_2.2.3',
              points: 1.5,
              level: 3,
              actionType: ActionType.TACHE,
              actionsEnfant: [],
            },
          ],
        },
      ],
    },
  ],
};