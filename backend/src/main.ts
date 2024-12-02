// WARNING: Do this import first
import './common/services/sentry.service';
// Other imports
import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ContextRouteParametersInterceptor } from './common/interceptors/context-route-parameters.interceptor';
import { CustomZodValidationPipe } from './common/pipetransforms/custom-zod-validation.pipe';
import { withContext } from './common/services/context.service';
import { CustomLogger } from './common/services/custom-logger.service';
import { initApplicationCredentials } from './common/services/gcloud.helper';
import { TrpcRouter } from './trpc/trpc.router';

const port = process.env.PORT || 8080;

async function bootstrap() {
  initApplicationCredentials();

  const app = await NestFactory.create(AppModule);
  const logger = new CustomLogger({
    messageKey: process.env.NODE_ENV === 'production' ? 'message' : 'msg',
    level: 'info',
    formatters:
      process.env.NODE_ENV === 'production'
        ? {
            level: (label, number) => {
              // Compliant with https://opentelemetry.io/docs/specs/otel/logs/data-model/
              return {
                severity_number: number,
                severity_text: label,
              };
            },
          }
        : undefined,
    transport:
      process.env.NODE_ENV === 'production'
        ? undefined // Default configuration to console in json
        : {
            target: 'pino-pretty',
            options: {
              singleLine: true,
              colorize: true,
            },
          },
  });
  logger.log(`Launching NestJS app on port ${port}`);
  app.useLogger(logger);
  app.use(withContext);
  app.useGlobalInterceptors(new ContextRouteParametersInterceptor());

  const { httpAdapter } = app.get(HttpAdapterHost);

  app.enableCors();

  app.useGlobalPipes(new CustomZodValidationPipe());

  // Seulement une v1 pour l'instant
  app.setGlobalPrefix('api/v1', {
    exclude: ['version'],
  });

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const config = new DocumentBuilder()
    .setTitle('Api Territoires en Transitions')
    .setVersion(process.env.APPLICATION_VERSION || 'dev')
    .build();
  patchNestjsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs/v1', app, document);

  // Configure tRPC
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  await app.listen(port);
}

bootstrap();
