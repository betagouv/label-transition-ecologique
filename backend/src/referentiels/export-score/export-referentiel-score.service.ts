/**
 *
 */

import { Injectable, Logger } from '@nestjs/common';
import { Row, Workbook } from 'exceljs';
import { NextFunction, Response } from 'express';
import { SimplePreuveDto } from '../../collectivites/documents/models/preuve.dto';
import * as Utils from '../../utils/excel/export-excel.utils';
import {
  ActionAvancementEnum,
  ActionAvancementEnumType,
} from '../models/action-statut.table';
import { ActionType } from '../models/action-type.enum';
import { GetReferentielScoresResponseType } from '../models/get-referentiel-scores.response';
import { GetScoreSnapshotRequestType } from '../models/get-score-snapshot.request';
import { ReferentielActionWithScoreType } from '../models/referentiel-action-avec-score.dto';
import { ReferentielType } from '../models/referentiel.enum';
import ReferentielsScoringSnapshotsService from '../services/referentiels-scoring-snapshots.service';
import ReferentielsScoringService from '../services/referentiels-scoring.service';
import ReferentielsService from '../services/referentiels.service';

@Injectable()
export default class ExportReferentielScoreService {
  private readonly logger = new Logger(ExportReferentielScoreService.name);

  // index (base 1) de toutes les colonnes
  private readonly COL_INDEX = {
    arbo: 1,
    intitule: 2,
    phase: 3,
    points_max_referentiel: 4,
    points_max_personnalises: 5,
    points_realises: 6,
    score_realise: 7,
    points_programmes: 8,
    score_programme: 9,
    statut: 10,
    commentaires: 11,
    docs: 12,
  };

  // libellés de toutes les colonnes
  private readonly COLUMN_LABELS = [
    '', // identifiant action
    '', // intitulé action
    'Phase',
    'Potentiel max',
    'Potentiel collectivité',
    'Points réalisés',
    '% réalisé',
    'Points programmés',
    '% programmé',
    'statut',
    "Champs de précision de l'état d'avancement",
    'Documents liés',
  ];

  private readonly AVANCEMENT_TO_LABEL: Record<
    ActionAvancementEnumType | 'non_concerne',
    string
  > = {
    [ActionAvancementEnum.NON_RENSEIGNE]: 'Non renseigné',
    [ActionAvancementEnum.FAIT]: 'Fait',
    [ActionAvancementEnum.PAS_FAIT]: 'Pas fait',
    [ActionAvancementEnum.DETAILLE]: 'Détaillé',
    [ActionAvancementEnum.PROGRAMME]: 'Programmé',
    non_concerne: 'Non concerné',
  };

  private readonly TOTAL_LABEL = 'Total';
  private readonly EXPORT_DATE_LABEL = "Date d'export";
  private readonly EXPORT_TITLE = 'Export référentiel';
  private readonly EXPORT_SUBTITLE = 'Évaluation dans la plateforme';

  constructor(
    private readonly referentielService: ReferentielsService,
    private readonly referentielsScoringService: ReferentielsScoringService,
    private readonly referentielsScoringSnapshotsService: ReferentielsScoringSnapshotsService
  ) {}

  // couleurs de fond des lignes par axe et sous-axe
  BG_COLORS: Record<number, string[]> = {
    1: ['f7caac', 'fbe4d5'],
    2: ['9bc1e5', 'bdd7ee'],
    3: ['70ae47', 'a9d08e'],
    4: ['fdd966', 'fee699'],
    5: ['8ea9db', 'b5c6e7'],
    6: ['9f5fce', 'bc8fdd'],
  };

  // couleur de fond ligne sous-sous-axe
  BG_COLOR3 = 'bfbfbf'; // niveau 3
  BG_COLOR4 = 'd8d8d8'; // niveau 4 (CAE seulement)

  // détermine la couleur de fond d'une ligne en fonction de la profondeur dans l'arbo
  getActionRowColor = (
    actionScore: ReferentielActionWithScoreType,
    referentielId: ReferentielType
  ): string | null => {
    if (actionScore) {
      const depth = actionScore.actionId
        ? this.referentielService.getLevelFromActionId(actionScore.actionId)
        : 0;
      if (depth === 3) return this.BG_COLOR3;
      if (depth === 4 && referentielId === ReferentielType.CAE) {
        return this.BG_COLOR4;
      }

      const axe = this.referentielService.getAxeFromActionId(
        actionScore.actionId!
      );
      const colors = this.BG_COLORS[axe];
      if (colors && depth <= colors.length) {
        return colors[depth - 1];
      }
    }
    return null;
  };

  /** applique le formatage numérique aux colonnes points/scores à partir de l'index (base 1) donné */
  setScoreFormats(row: Row, colIndex: number) {
    Utils.setCellNumFormat(row.getCell(colIndex));
    Utils.setCellNumFormat(row.getCell(colIndex + 1));
    Utils.setCellNumFormat(row.getCell(colIndex + 2), Utils.FORMAT_PERCENT);
    Utils.setCellNumFormat(row.getCell(colIndex + 3));
    Utils.setCellNumFormat(row.getCell(colIndex + 4), Utils.FORMAT_PERCENT);
    row.getCell(colIndex + 5).style.alignment = Utils.ALIGN_CENTER;
  }

  formatActionStatut(
    actionScore: ReferentielActionWithScoreType | undefined,
    parentActionScore: ReferentielActionWithScoreType | undefined
  ): string {
    // pas de statut si les données ne sont pas disponibles ou que l'item n'est ni une sous-action ni une tâche
    if (
      !actionScore ||
      (actionScore.actionType !== ActionType.SOUS_ACTION &&
        actionScore.actionType !== ActionType.TACHE)
    ) {
      return '';
    }

    // affiche "non concerné" pour un item ayant ce statut ou étant désactivé
    const { concerne, desactive, avancement } = actionScore.score;
    if (!concerne || desactive) {
      return 'Non concerné';
    }

    // pour éviter d'afficher "non renseigné" pour une tâche sans statut mais ayant un statut à la sous-action
    if (
      (actionScore.actionType === ActionType.TACHE &&
        !actionScore.score.avancement &&
        parentActionScore &&
        parentActionScore?.score?.avancement !== 'non_renseigne' &&
        parentActionScore?.score?.avancement !== 'detaille') ||
      !parentActionScore?.score?.concerne
    ) {
      return '';
    }

    // pour éviter d'afficher "non renseigné" pour une sous-action dont au moins une tâche est renseignée
    const hasChildrenAvancement = actionScore.actionsEnfant?.some(
      (actionScoreEnfant) =>
        actionScoreEnfant.score?.avancement &&
        actionScoreEnfant.score?.avancement !== 'non_renseigne'
    );
    if (
      actionScore.actionType === ActionType.SOUS_ACTION &&
      !actionScore.score.avancement &&
      hasChildrenAvancement
    ) {
      return this.AVANCEMENT_TO_LABEL['detaille'];
    }

    // affiche "non renseigné" si l'avancement n'est pas renseigné
    if (!avancement || !this.AVANCEMENT_TO_LABEL[avancement!]) {
      return this.AVANCEMENT_TO_LABEL['non_renseigne'];
    }

    // affiche le libellé correspondant à l'avancement
    return this.AVANCEMENT_TO_LABEL[avancement!];
  }

  formatPreuves(preuves?: SimplePreuveDto[]): string | undefined {
    return preuves
      ?.map((p) => p?.url || p?.filename || null)
      .filter((s) => !!s)
      .join('\n');
  }

  getActionScoreRowValues(
    actionScore: ReferentielActionWithScoreType,
    parentActionScore: ReferentielActionWithScoreType | undefined,
    rowValues: {
      actionScore: ReferentielActionWithScoreType;
      values: (string | number | null | undefined)[];
    }[] = []
  ): {
    actionScore: ReferentielActionWithScoreType;
    values: (string | number | null | undefined)[];
  }[] {
    const values = [
      // id
      actionScore.actionType === ActionType.REFERENTIEL
        ? this.TOTAL_LABEL
        : actionScore.identifiant,
      // intitulé
      actionScore.actionType === ActionType.REFERENTIEL ? '' : actionScore?.nom,
      // phase
      Utils.capitalize(actionScore?.categorie),

      // points max réf.
      actionScore.score.pointReferentiel,

      // score et statut
      actionScore.score.pointPotentiel,
      actionScore.score.pointFait,
      actionScore.score.pointFait ||
        0 / (actionScore.score.pointPotentiel || 1),
      actionScore.score.pointProgramme,
      actionScore.score.pointProgramme ||
        0 / (actionScore.score.pointPotentiel || 1),
      this.formatActionStatut(actionScore, parentActionScore),

      // commentaires et documents,
      actionScore.score.explication || '',
      this.formatPreuves(actionScore.preuves) || '',
    ];

    // Referentiel actions est mis en dernier
    if (actionScore.actionType !== ActionType.REFERENTIEL) {
      rowValues.push({ actionScore, values: values });
    }

    // ajoute les sous-actions
    actionScore.actionsEnfant?.forEach((actionEnfantScore) => {
      this.getActionScoreRowValues(actionEnfantScore, actionScore, rowValues);
    });

    if (actionScore.actionType === ActionType.REFERENTIEL) {
      rowValues.push({ actionScore, values: values });
    }

    return rowValues;
  }

  async exportReferentielScore(
    referentielScore: GetReferentielScoresResponseType
  ) {
    // crée le classeur et la feuille de calcul
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(
      `${this.EXPORT_TITLE} ${referentielScore.referentielId.toUpperCase()}`
    );

    // ajoute les colonnes avec une largeur par défaut et quelques exceptions
    worksheet.columns = new Array(this.COL_INDEX.docs + 1).fill({
      width: 12,
    });
    worksheet.getColumn(this.COL_INDEX.intitule).width = 50;
    worksheet.getColumn(this.COL_INDEX.commentaires).width = 50;
    worksheet.getColumn(this.COL_INDEX.docs).width = 50;

    // génère les lignes d'en-tête
    const headerRows = [
      [referentielScore.collectiviteInfo!.nom],
      [this.EXPORT_DATE_LABEL, new Date()],
      // 2 lignes vides
      [],
      [],
      // en-tête du tableau de données
      [
        ...Utils.makeEmptyCells(this.COL_INDEX.points_max_referentiel),
        this.EXPORT_SUBTITLE,
      ],
      this.COLUMN_LABELS,
    ];

    // Get flat list of actions
    const dataRows = this.getActionScoreRowValues(
      referentielScore.scores,
      undefined
    );
    const dataRowValues = dataRows.map((r) => r.values);
    worksheet.addRows([...headerRows, ...dataRowValues]);

    // index des lignes
    const rowIndex = {
      // index des 2 lignes d'en-tête du tableau
      tableHeader1: headerRows.length - 1,
      tableHeader2: headerRows.length,
      // index de la 1ère ligne de données
      dataStart: headerRows.length + 1,
    };

    // fusionne certaines cellules
    worksheet.mergeCells('A1:B1'); // nom de la collectivité
    // 1ère ligne d'en-tête des scores
    worksheet.mergeCells(
      rowIndex.tableHeader1,
      this.COL_INDEX.points_max_personnalises,
      rowIndex.tableHeader1,
      this.COL_INDEX.statut
    );

    // ajoute des styles à certaines colonnes et cellules
    worksheet.getColumn(this.COL_INDEX.intitule).alignment =
      Utils.ALIGN_LEFT_WRAP;
    worksheet.getColumn(this.COL_INDEX.commentaires).alignment =
      Utils.ALIGN_LEFT_WRAP;
    worksheet.getColumn(this.COL_INDEX.docs).alignment = Utils.ALIGN_LEFT_WRAP;
    worksheet.getColumn(this.COL_INDEX.points_max_referentiel).font =
      Utils.ITALIC;
    if (this.COL_INDEX.phase) {
      worksheet.getColumn(this.COL_INDEX.phase).alignment = Utils.ALIGN_CENTER;
    }
    worksheet.getCell('A1').fill = Utils.FILL.grey;
    worksheet.getCell('B2').fill = Utils.FILL.yellow;
    worksheet.getCell('B3').numFmt = 'dd/mm/yyyy';
    worksheet.getCell(
      rowIndex.tableHeader1,
      this.COL_INDEX.points_max_personnalises
    ).style = Utils.HEADING1;
    Utils.setCellsStyle(
      worksheet,
      rowIndex.tableHeader2,
      this.COL_INDEX.arbo,
      this.COL_INDEX.docs,
      Utils.HEADING2
    );
    Utils.setCellsStyle(
      worksheet,
      rowIndex.tableHeader2,
      this.COL_INDEX.points_max_personnalises,
      this.COL_INDEX.commentaires - 1,
      Utils.HEADING_SCORES
    );
    worksheet.getCell(
      rowIndex.tableHeader2,
      this.COL_INDEX.points_max_referentiel
    ).font = { bold: true, italic: true };
    worksheet.getCell(
      rowIndex.tableHeader2,
      this.COL_INDEX.points_max_personnalises
    ).border.left = Utils.BORDER_MEDIUM;
    worksheet.getCell(
      rowIndex.tableHeader2,
      this.COL_INDEX.statut
    ).border.right = Utils.BORDER_MEDIUM;

    // applique les styles aux lignes de données
    dataRows.forEach(({ actionScore }, index) => {
      const r = rowIndex.dataStart + index;
      const row = worksheet.getRow(r);

      if (actionScore.actionType === ActionType.REFERENTIEL) {
        // ligne "total"
        Utils.setCellsStyle(
          worksheet,
          r,
          this.COL_INDEX.arbo,
          this.COL_INDEX.docs,
          {
            font: Utils.BOLD,
          }
        );
      } else {
        // niveau de profondeur (case plier/déplier)
        const depth = this.referentielService.getLevelFromActionId(
          actionScore.actionId!
        );
        if (depth && depth > 1) {
          row.outlineLevel = depth;
        }

        // couleur de fond
        const color = this.getActionRowColor(
          actionScore,
          referentielScore.referentielId
        );
        if (color) {
          row.fill = Utils.makeSolidFill(color);
        }
      }

      // formatage numérique des points/scores
      Utils.setCellNumFormat(
        row.getCell(this.COL_INDEX.points_max_personnalises - 1)
      );
      this.setScoreFormats(row, this.COL_INDEX.points_max_personnalises);
    });

    // exporte le fichier modifié
    return workbook.xlsx.writeBuffer();
  }

  async getReferentielScoreSnapshot(
    collectiviteId: number,
    referentielId: ReferentielType,
    snapshotRef: string,
    forceRecalculScoreCourant?: boolean
  ) {
    if (
      snapshotRef ===
      ReferentielsScoringSnapshotsService.SCORE_COURANT_SNAPSHOT_REF
    ) {
      return this.referentielsScoringService.getOrCreateCurrentScore(
        collectiviteId,
        referentielId,
        forceRecalculScoreCourant
      );
    } else {
      return this.referentielsScoringSnapshotsService.get(
        collectiviteId,
        referentielId,
        snapshotRef
      ) as Promise<GetReferentielScoresResponseType>;
    }
  }

  getExportFileName(referentielScore: GetReferentielScoresResponseType) {
    const filename = `Export_${referentielScore.referentielId?.toUpperCase()}_${
      referentielScore.collectiviteInfo?.nom
    }_${referentielScore.date.substring(0, 10)}.xlsx`;
    return filename;
  }

  async sendExportReferentielScore(
    collectiviteId: number,
    referentielId: ReferentielType,
    snapshotRef: string,
    parameters: GetScoreSnapshotRequestType,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    this.logger.log(
      `Export du score du référentiel ${referentielId} pour la collectivité ${collectiviteId} et le snapshot ${snapshotRef} (parameters: ${JSON.stringify(
        parameters
      )})`
    );

    try {
      const referentielScore = await this.getReferentielScoreSnapshot(
        collectiviteId,
        referentielId,
        snapshotRef,
        parameters.forceRecalculScoreCourant
      );

      const buffer = await this.exportReferentielScore(referentielScore);
      // send buffer

      res.attachment(this.getExportFileName(referentielScore).normalize('NFD'));
      res.set('Access-Control-Expose-Headers', 'Content-Disposition');

      // Send the workbook.
      res.send(buffer);
    } catch (error) {
      next(error);
    }
  }
}