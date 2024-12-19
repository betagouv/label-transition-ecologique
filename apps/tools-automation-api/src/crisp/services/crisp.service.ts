import { Injectable, Logger } from '@nestjs/common';
import Crisp from 'crisp-api';
import ConfigurationService from '../../config/configuration.service';
import { NotionBugCreatorService } from '../../notion/notion-bug-creator/notion-bug-creator.service';
import { CrispEventRequest } from '../models/crisp-event.request';
import { CrispSessionEventDataDto } from '../models/crisp-session-event-data.dto';
import { CrispSession } from '../models/get-crisp-session.response';

@Injectable()
export class CrispService {
  private readonly logger = new Logger(CrispService.name);
  private readonly crispClient: Crisp;

  constructor(
    private readonly notionBugCreatorService: NotionBugCreatorService,
    private readonly configurationService: ConfigurationService
  ) {
    this.crispClient = new Crisp();
    this.crispClient.authenticateTier(
      'plugin',
      configurationService.get('CRISP_TOKEN_IDENTIFIER'),
      configurationService.get('CRISP_TOKEN_KEY')
    );
  }
  /*
  getCrispClient() {
    if (!this.crispClient) {
      
    }
    return
  }*/

  async handleSessionChange(body: CrispEventRequest<CrispSessionEventDataDto>) {
    const sessionId = body.data.session_id;
    const websiteId = body.website_id || body.data.website_id;
    this.logger.log(
      `Handling session change for session ${sessionId} on website ${websiteId}: ${JSON.stringify(
        body.data?.data
      )}`
    );

    const session: CrispSession =
      await this.crispClient.website.getConversation(websiteId, sessionId);

    const bugResponse =
      await this.notionBugCreatorService.createBugFromCrispSession(session);

    await this.crispClient.website.updateConversationMetas(
      websiteId,
      sessionId,
      {
        data: {
          'ticket-url': bugResponse.url || bugResponse.id,
        },
      }
    );

    return bugResponse;
  }
}
