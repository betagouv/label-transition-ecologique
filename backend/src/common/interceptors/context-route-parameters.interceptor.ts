import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ContextStore } from '../services/context.service';

@Injectable()
export class ContextRouteParametersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    ContextStore.autoSetContextFromPayload(req.params);
    ContextStore.autoSetContextFromPayload(req.query);

    return next.handle();
  }
}
