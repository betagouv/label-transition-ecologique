import { Injectable } from '@nestjs/common';
import { TrpcService } from '../../trpc/trpc.service';
import {
  UpdateActionStatutService,
  upsertActionStatutRequestSchema,
} from './update-action-statut.service';

@Injectable()
export class UpdateActionStatutRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly service: UpdateActionStatutService
  ) {}

  router = this.trpc.router({
    updateStatut: this.trpc.authedProcedure
      .input(upsertActionStatutRequestSchema)
      .query(({ input, ctx }) => {
        return this.service.upsertActionStatut(input, ctx.user);
      }),
  });
}