import { createZodDto } from '@anatine/zod-nestjs';
import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AllowPublicAccess } from '../../auth/decorators/allow-public-access.decorator';
import { versionResponseSchema } from '../models/version.models';

/**
 * Création des classes de réponse à partir du schema pour générer automatiquement la documentation OpenAPI
 */
@ApiTags('Application')
export class VersionResponseClass extends createZodDto(versionResponseSchema) {}

@Controller()
export class VersionController {
  @AllowPublicAccess()
  @Get('version')
  @ApiOkResponse({
    type: VersionResponseClass,
    description:
      'Informations de version (commit, version, environnement, date de déploiement, date du commit)',
  })
  async getVersion() {
    return {
      commit: process.env.GIT_COMMIT_SHORT_SHA,
      version: process.env.APPLICATION_VERSION,
      environment: process.env.ENV_NAME,
      deploy_time: process.env.DEPLOYMENT_TIMESTAMP,
      commit_time: process.env.GIT_COMMIT_TIMESTAMP,
    };
  }
}
