import { extendApi, extendZodWithOpenApi } from '@anatine/zod-openapi';
import { z } from 'zod';
import { actionDefinitionSeulementIdObligatoireSchema } from './action-definition.table';
import {
  actionPointScoreSchema,
  ActionPointScoreType,
} from './action-point-score.dto';
import { actionScoreSchema, ActionScoreType } from './action-score.dto';
import { ActionType } from './action-type.enum';
import {
  referentielActionOrigineWithScoreSchema,
  ReferentielActionOrigineWithScoreType,
} from './referentiel-action-origine-with-score.dto';
extendZodWithOpenApi(z);

export type ReferentielActionWithScoreType = z.infer<
  typeof actionDefinitionSeulementIdObligatoireSchema
> & {
  level: number;
  actionType: ActionType;
  actionsOrigine?: ReferentielActionOrigineWithScoreType[];
  scoresOrigine?: Record<string, ActionPointScoreType>;
  tags?: string[]; // action catalogues include cae, eci but also biodiversite, eau
  scoresTag: Record<string, ActionPointScoreType>;
  actionsEnfant: ReferentielActionWithScoreType[];
  referentielsOrigine?: string[];
  score: ActionScoreType;
};

export const referentielActionAvecScoreDtoSchema: z.ZodType<ReferentielActionWithScoreType> =
  extendApi(
    actionDefinitionSeulementIdObligatoireSchema
      .extend({
        level: z.number(),
        actionType: z.nativeEnum(ActionType),
        referentielsOrigine: z.string().array().optional(),
        scoresOrigine: z.record(z.string(), actionPointScoreSchema).optional(),
        tags: z.string().array().optional(),
        scoresTag: z.record(z.string(), actionPointScoreSchema),
        actionsOrigine: referentielActionOrigineWithScoreSchema
          .array()
          .optional(),
        actionsEnfant: z.lazy(() =>
          referentielActionAvecScoreDtoSchema.array()
        ),
        score: actionScoreSchema,
      })
      .openapi({
        title: "Référentiel d'actions avec le score associé",
      })
  );