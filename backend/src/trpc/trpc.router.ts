import { INestApplication, Injectable, Logger } from '@nestjs/common';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import SupabaseService from '../common/services/supabase.service';
import { TrajectoiresRouter } from '../indicateurs/routers/trajectoires.router';
import { createContext, TrpcService } from './trpc.service';
import { CountByStatutRouter } from '../fiches/count-by-statut/count-by-statut.router';

@Injectable()
export class TrpcRouter {
  private readonly logger = new Logger(TrpcRouter.name);

  constructor(
    private readonly trpc: TrpcService,
    private readonly supabase: SupabaseService,
    private readonly trajectoiresRouter: TrajectoiresRouter,
    private readonly countByStatutRouter: CountByStatutRouter
  ) {}

  appRouter = this.trpc.router({
    indicateurs: {
      trajectoires: this.trajectoiresRouter.router,
    },
    plans: {
      fiches: {
        ...this.countByStatutRouter.router,
      },
    },
  });

  createCaller = this.trpc.createCallerFactory(this.appRouter);

  async applyMiddleware(app: INestApplication) {
    this.logger.log(`Applying trpc middleware`);
    app.use(
      `/trpc`,
      createExpressMiddleware({
        router: this.appRouter,
        createContext: (opts) => createContext(this.supabase.client, opts),
      })
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];