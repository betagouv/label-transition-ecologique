import {
  axeTable,
  ficheActionPartenaireTagTable,
  ficheActionServiceTagTable,
  ficheActionTable,
  SANS_STATUT_FICHE_ACTION_SYNTHESE_KEY,
} from '@/backend/plans/fiches';
import { GetFichesActionFilterRequestType } from '@/backend/plans/fiches/shared/fetch-fiches-filter.request';
import { DatabaseService } from '@/backend/utils';
import {
  CountByRecordGeneralType,
  CountByRecordType,
  CountByResponseType,
} from '@/backend/utils/count-by.dto';
import { getModifiedSinceDate } from '@/backend/utils/modified-since.enum';
import { Injectable, Logger } from '@nestjs/common';
import {
  and,
  arrayOverlaps,
  count,
  eq,
  getTableColumns,
  gte,
  or,
  sql,
  SQL,
  SQLWrapper,
} from 'drizzle-orm';
import { PgColumn } from 'drizzle-orm/pg-core';
import { ficheActionAxeTable } from '../shared/models/fiche-action-axe.table';
import { ficheActionPiloteTable } from '../shared/models/fiche-action-pilote.table';
import { FicheActionWithRelationsType } from '../shared/models/fiche-action-with-relations.dto';
import { CountByPropertyEnumType } from './count-by-property-options.enum';

@Injectable()
export class CountByService {
  private readonly logger = new Logger(CountByService.name);

  private readonly FICHE_ACTION_PARTENAIRE_TAGS_QUERY_ALIAS =
    'ficheActionPartenaireTags';
  private readonly FICHE_ACTION_PARTENAIRE_TAGS_QUERY_FIELD =
    'partenaire_tag_ids';

  constructor(private readonly databaseService: DatabaseService) {}

  getNullValue(countByProperty: CountByPropertyEnumType) {
    switch (countByProperty) {
      case 'statut':
        return SANS_STATUT_FICHE_ACTION_SYNTHESE_KEY;
      default:
        return 'null';
    }
  }

  fillCountByMapWithFiche(
    fiche: FicheActionWithRelationsType,
    countByProperty: CountByPropertyEnumType,
    countByMap: CountByRecordGeneralType
  ) {
    const nullValue = this.getNullValue(countByProperty);
    if (countByProperty === 'statut') {
      const valueKey = fiche[countByProperty] || nullValue;
      if (!countByMap[valueKey]) {
        countByMap[valueKey] = {
          valeur: valueKey,
          count: 0,
        };
      }
      countByMap[valueKey].count++;
    }
  }

  async countByProperty(
    collectiviteId: number,
    countByProperty: CountByPropertyEnumType,
    filter: GetFichesActionFilterRequestType
  ) {
    this.logger.log(
      `Calcul du count by ${countByProperty} des fiches action pour la collectivité ${collectiviteId}: filtre ${JSON.stringify(
        filter
      )}`
    );

    // Fiches are limited in number, it's easier to count using typescript code rather than SQL
    const fiches = await this.getFichesAction(collectiviteId, filter);

    const countByResponse: CountByResponseType = {
      countByProperty,
      total: fiches.length,
      countByResult: {},
    };

    fiches.forEach((fiche) => {
      this.fillCountByMapWithFiche(
        fiche,
        countByProperty,
        countByResponse.countByResult
      );
    });

    /*
    const countByResult: CountByRecordType<Value> = {};
    const result = await this.countBy(
      ficheActionTable.statut,
      conditions,
      listeValeurs,
      SANS_STATUT_FICHE_ACTION_SYNTHESE_KEY
    );*/

    return countByResponse;
  }

  private getFicheActionPartenaireTagsQuery() {
    return this.databaseService.db
      .select({
        fiche_id: ficheActionPartenaireTagTable.ficheId,
        partenaire_tag_ids: sql<
          number[]
        >`array_agg(${ficheActionPartenaireTagTable.partenaireTagId})`.as(
          this.FICHE_ACTION_PARTENAIRE_TAGS_QUERY_FIELD
        ),
      })
      .from(ficheActionPartenaireTagTable)
      .groupBy(ficheActionPartenaireTagTable.ficheId)
      .as(this.FICHE_ACTION_PARTENAIRE_TAGS_QUERY_ALIAS);
  }

  private getFicheActionAxesQuery() {
    return this.databaseService.db
      .select({
        fiche_id: ficheActionAxeTable.ficheId,
        axe_ids: sql<number[]>`array_agg(${ficheActionAxeTable.axeId})`.as(
          'axe_ids'
        ),
        plan_ids: sql<number[]>`array_agg(${axeTable.plan})`.as('plan_ids'),
      })
      .from(ficheActionAxeTable)
      .leftJoin(axeTable, eq(axeTable.id, ficheActionAxeTable.axeId))
      .groupBy(ficheActionAxeTable.ficheId)
      .as('ficheActionAxes');
  }

  private getFicheActionServiceTagsQuery() {
    return this.databaseService.db
      .select({
        fiche_id: ficheActionServiceTagTable.ficheId,
        service_tag_ids: sql<
          number[]
        >`array_agg(${ficheActionServiceTagTable.serviceTagId})`.as(
          'service_tag_ids'
        ),
      })
      .from(ficheActionServiceTagTable)
      .groupBy(ficheActionServiceTagTable.ficheId)
      .as('ficheActionServiceTag');
  }

  private getFicheActionPilotesQuery() {
    return this.databaseService.db
      .select({
        fiche_id: ficheActionPiloteTable.ficheId,
        pilote_user_ids: sql<
          number[]
        >`array_remove(array_agg(${ficheActionPiloteTable.userId}), NULL)`.as(
          'pilote_user_ids'
        ),
        pilote_tag_ids: sql<
          number[]
        >`array_remove(array_agg(${ficheActionPiloteTable.tagId}), NULL)`.as(
          'pilote_tag_ids'
        ),
      })
      .from(ficheActionPiloteTable)
      .groupBy(ficheActionPiloteTable.ficheId)
      .as('ficheActionPilotes');
  }

  async getFichesAction(
    collectiviteId: number,
    filter: GetFichesActionFilterRequestType
  ): Promise<FicheActionWithRelationsType[]> {
    this.logger.log(
      `Récupération des fiches action pour la collectivité ${collectiviteId}: filtre ${JSON.stringify(
        filter
      )}`
    );

    const ficheActionPartenaireTags = this.getFicheActionPartenaireTagsQuery();
    const ficheActionPilotes = this.getFicheActionPilotesQuery();
    const ficheActionServiceTags = this.getFicheActionServiceTagsQuery();
    const ficheActionAxes = this.getFicheActionAxesQuery();

    const conditions = this.getConditions(collectiviteId, filter);

    const fichesActionQuery = this.databaseService.db
      .select({
        ...getTableColumns(ficheActionTable),
        partenaireTagIds: ficheActionPartenaireTags.partenaire_tag_ids,
        piloteTagIds: ficheActionPilotes.pilote_tag_ids,
        piloteUserIds: ficheActionPilotes.pilote_user_ids,
        serviceTagIds: ficheActionServiceTags.service_tag_ids,
        axeIds: ficheActionAxes.axe_ids,
        planIds: ficheActionAxes.plan_ids,
      })
      .from(ficheActionTable)
      .leftJoin(
        ficheActionPartenaireTags,
        eq(ficheActionPartenaireTags.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionPilotes,
        eq(ficheActionPilotes.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionServiceTags,
        eq(ficheActionServiceTags.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionAxes,
        eq(ficheActionAxes.fiche_id, ficheActionTable.id)
      )
      .where(and(...conditions));

    return await fichesActionQuery;
  }

  private getConditions(
    collectiviteId: number,
    filter: GetFichesActionFilterRequestType
  ): (SQLWrapper | SQL)[] {
    const conditions: (SQLWrapper | SQL)[] = [
      eq(ficheActionTable.collectiviteId, collectiviteId),
    ];
    if (filter.cibles?.length) {
      conditions.push(arrayOverlaps(ficheActionTable.cibles, filter.cibles));
    }
    if (filter.modified_since) {
      const modifiedSinceDate = getModifiedSinceDate(filter.modified_since);
      conditions.push(gte(ficheActionTable.modifiedAt, modifiedSinceDate));
    }
    if (filter.modified_after) {
      conditions.push(gte(ficheActionTable.modifiedAt, filter.modified_after));
    }
    if (filter.partenaire_tag_ids?.length) {
      // Vraiment étrange, probable bug de drizzle, on le peut pas lui donner le tableau directement
      const sqlNumberArray = `{${filter.partenaire_tag_ids.join(',')}}`;
      conditions.push(
        arrayOverlaps(sql`partenaire_tag_ids`, sql`${sqlNumberArray}`)
      );
    }
    if (filter.service_tag_ids?.length) {
      // Vraiment étrange, probable bug de drizzle, on le peut pas lui donner le tableau directement
      const sqlNumberArray = `{${filter.service_tag_ids.join(',')}}`;
      conditions.push(
        arrayOverlaps(sql`service_tag_ids`, sql`${sqlNumberArray}`)
      );
    }
    if (filter.plan_ids?.length) {
      // Vraiment étrange, probable bug de drizzle, on le peut pas lui donner le tableau directement
      const sqlNumberArray = `{${filter.plan_ids.join(',')}}`;
      conditions.push(arrayOverlaps(sql`plan_ids`, sql`${sqlNumberArray}`));
    }

    const piloteConditions: (SQLWrapper | SQL)[] = [];
    if (filter.pilote_user_ids?.length) {
      const sqlNumberArray = `{${filter.pilote_user_ids.join(',')}}`;
      piloteConditions.push(
        arrayOverlaps(sql`pilote_user_ids`, sql`${sqlNumberArray}`)
      );
    }
    if (filter.pilote_tag_ids?.length) {
      const sqlNumberArray = `{${filter.pilote_tag_ids.join(',')}}`;
      piloteConditions.push(
        arrayOverlaps(sql`pilote_tag_ids`, sql`${sqlNumberArray}`)
      );
    }
    if (piloteConditions.length) {
      if (piloteConditions.length === 1) {
        conditions.push(piloteConditions[0]);
      } else {
        conditions.push(or(...piloteConditions)!);
      }
    }

    return conditions;
  }

  private async countBy<Value extends string, NullValue extends string>(
    propriete: PgColumn,
    conditions: (SQLWrapper | SQL)[],
    values: readonly Value[],
    nullValue?: NullValue
  ) {
    const ficheActionPartenaireTags = this.getFicheActionPartenaireTagsQuery();
    const ficheActionPilotes = this.getFicheActionPilotesQuery();
    const ficheActionServiceTags = this.getFicheActionServiceTagsQuery();
    const ficheActionAxes = this.getFicheActionAxesQuery();

    const listeValeurs: Array<Value | NullValue> = [
      ...new Set([...values, ...(nullValue ? [nullValue] : [])]),
    ];

    const fichesActionSyntheseQuery = this.databaseService.db
      .select({
        valeur: propriete,
        count: count(),
      })
      .from(ficheActionTable)
      .leftJoin(
        ficheActionPartenaireTags,
        eq(ficheActionPartenaireTags.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionPilotes,
        eq(ficheActionPilotes.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionServiceTags,
        eq(ficheActionServiceTags.fiche_id, ficheActionTable.id)
      )
      .leftJoin(
        ficheActionAxes,
        eq(ficheActionAxes.fiche_id, ficheActionTable.id)
      )
      .where(and(...conditions))
      .groupBy(propriete);
    const fichesActionSynthese = await fichesActionSyntheseQuery;

    const synthese = {} as CountByRecordType<Value | NullValue>;
    if (listeValeurs) {
      listeValeurs.forEach((valeur) => {
        synthese[valeur] = {
          valeur: valeur,
          count: 0,
        };
      });
    }
    fichesActionSynthese.forEach((syntheseRow) => {
      synthese[syntheseRow.valeur || nullValue] = {
        valeur: syntheseRow.valeur || nullValue,
        count: syntheseRow.count,
      };
    });

    return synthese;
  }
}
