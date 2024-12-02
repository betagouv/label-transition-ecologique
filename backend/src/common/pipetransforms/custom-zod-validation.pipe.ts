import {
  ZodValidationPipe,
  ZodValidationPipeOptions,
} from '@anatine/zod-nestjs';
import {
  ArgumentMetadata,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { ContextStore } from '../services/context.service';

@Injectable()
export class CustomZodValidationPipe implements PipeTransform {
  private readonly zodValidationPipe: ZodValidationPipe;

  constructor(@Optional() options?: ZodValidationPipeOptions) {
    this.zodValidationPipe = new ZodValidationPipe(options);
  }

  public transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const transformedValue = this.zodValidationPipe.transform(value, metadata);
    if (transformedValue) {
      ContextStore.autoSetContextFromPayload(transformedValue);
    }

    return transformedValue;
  }
}
