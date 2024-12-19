import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import {
  CreatePageParameters,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import slugify from 'slugify';
import ConfigurationService from '../../config/configuration.service';
import { CrispSession } from '../../crisp/models/get-crisp-session.response';

@Injectable()
export class NotionBugCreatorService {
  private readonly notion: Client;

  constructor(private configurationService: ConfigurationService) {
    this.notion = new Client({
      auth: configurationService.get('NOTION_TOKEN'),
    });
  }

  getNotionBugFromCrispSession(session: CrispSession): CreatePageParameters {
    return {
      icon: {
        type: 'external',
        external: {
          url: 'https://www.notion.so/icons/bug_red.svg',
        },
      },
      parent: {
        type: 'database_id',
        database_id: this.configurationService.get('NOTION_BUG_DATABASE_ID'),
      },
      properties: {
        Criticité: {
          type: 'select',
          select: {
            name: 'Bloquant',
          },
        },
        'Epic (Roadmap)': {
          type: 'relation',
          relation: [
            {
              id: this.configurationService.get('NOTION_BUG_EPIC_ID'),
            },
          ],
        },
        Statut: {
          type: 'status',
          status: {
            name: 'Backlog',
          },
        },
        Name: {
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content: session.meta.subject,
              },
            },
          ],
        },
      },
    };
  }

  slugifyTicketPropertyKey(propertyKey: string): string {
    if (propertyKey) {
      return slugify(propertyKey.toLowerCase(), {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
      });
    }
    return propertyKey;
  }

  async createBugFromCrispSession(session: CrispSession) {
    const database = await this.notion.databases.retrieve({
      database_id: this.configurationService.get('NOTION_BUG_DATABASE_ID'),
    });
    const propertyKeys = Object.keys(database.properties);
    propertyKeys.forEach((propertyKey) => {
      const slugifiedPropertyKey = this.slugifyTicketPropertyKey(propertyKey);
      console.log(slugifiedPropertyKey);
    });

    const notionBug = this.getNotionBugFromCrispSession(session);
    return this.notion.pages.create(notionBug) as Promise<PageObjectResponse>;
  }
}
