import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { JSZipGeneratorOptions } from 'jszip';
import * as XlsxTemplate from 'xlsx-template';
import { SupabaseJwtPayload } from '../../auth/models/auth.models';
import { EpciType } from '../../collectivites/models/collectivite.models';
import { CollectiviteRequestType } from '../../collectivites/models/collectivite.request';
import { BackendConfigurationType } from '../../common/models/backend-configuration.models';
import BackendConfigurationService from '../../common/services/backend-configuration.service';
import SheetService from '../../spreadsheets/services/sheet.service';
import {
  DonneesCalculTrajectoireARemplirType,
  ModeleTrajectoireTelechargementRequestType,
  VerificationDonneesSNBCStatus,
} from '../models/calcultrajectoire.models';
import TrajectoiresDataService from './trajectoires-data.service';

@Injectable()
export default class TrajectoiresXlsxService {
  private readonly logger = new Logger(TrajectoiresXlsxService.name);

  private xlsxModeleBuffer: Buffer | null = null;
  private xlsxVideBuffer: Buffer | null = null;
  private readonly backendConfiguration: BackendConfigurationType;

  constructor(
    backendConfigurationService: BackendConfigurationService,
    private readonly sheetService: SheetService,
    private readonly trajectoiresDataService: TrajectoiresDataService,
  ) {
    this.backendConfiguration =
      backendConfigurationService.getBackendConfiguration();
    this.initXlsxBuffers();
  }

  getIdentifiantXlsxCalcul() {
    return this.backendConfiguration.TRAJECTOIRE_SNBC_XLSX_ID;
  }

  getNomFichierTrajectoire(epci: EpciType) {
    return `Trajectoire SNBC - ${epci.siren} - ${epci.nom}`;
  }

  async downloadModeleTrajectoireSnbc(
    request: ModeleTrajectoireTelechargementRequestType,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!this.getIdentifiantXlsxCalcul()) {
        throw new InternalServerErrorException(
          "L'identifiant du Xlsx pour le calcul des trajectoires SNBC est manquant",
        );
      }

      await this.initXlsxBuffers(request.force_recuperation_xlsx);
      const nomFichier = await this.sheetService.getFileName(
        this.getIdentifiantXlsxCalcul(),
      );

      // Set the output file name.
      res.attachment(nomFichier);
      res.set('Access-Control-Expose-Headers', 'Content-Disposition');

      // Send the workbook.
      res.send(this.xlsxVideBuffer);
    } catch (error) {
      next(error);
    }
  }

  async initXlsxBuffers(forceRecuperation?: boolean) {
    if (!this.xlsxModeleBuffer || forceRecuperation) {
      this.logger.log(
        `Récupération des données du fichier Xlsx de calcul ${this.getIdentifiantXlsxCalcul()} (force: ${forceRecuperation})`,
      );
      this.xlsxModeleBuffer = await this.sheetService.getFileData(
        this.getIdentifiantXlsxCalcul(),
      );

      if (this.xlsxModeleBuffer) {
        this.logger.log(`Création du buffer sans données du fichier Xlsx`);
        const nouveauBuffer = Buffer.from(this.xlsxModeleBuffer);
        this.xlsxVideBuffer = await this.generationXlsxDonneesSubstituees(
          nouveauBuffer,
          { siren: null },
          null,
        );
      } else {
        // Null in test
        this.logger.warn(`Le fichier Xlsx de calcul n'a pas été trouvé`);
      }
    }
  }

  async getXlsxModeleBuffer(): Promise<Buffer> {
    if (!this.xlsxModeleBuffer) {
      this.logger.log(`Récupération du buffer du fichier Xlsx de calcul`);
      await this.initXlsxBuffers();
    } else {
      this.logger.log(
        `Utilisation du buffer du fichier Xlsx de calcul déjà chargé`,
      );
    }
    return Buffer.from(this.xlsxModeleBuffer!);
  }

  getXlsxCleSubstitution(identifiantsReferentiel: string[]): string {
    return identifiantsReferentiel.join('-').replace(/\./g, '_');
  }

  async generationXlsxDonneesSubstituees(
    xlsxBuffer: Buffer,
    siren: {
      siren: number | null;
    },
    valeurIndicateurs: DonneesCalculTrajectoireARemplirType | null,
  ): Promise<Buffer> {
    // Utilisation de xlsx-template car:
    // https://github.com/SheetJS/sheetjs/issues/347: sheetjs does not keep style
    // https://github.com/exceljs/exceljs: fails to read the file
    // https://github.com/dtjohnson/xlsx-populate: pas de typage et ecriture semble corrompre le fichier

    // Create a template
    this.logger.log(`Création du XlsxTemplate`);
    const template = new XlsxTemplate(xlsxBuffer);

    this.logger.log(`Substitution du Siren`);
    const sirenSheetName =
      this.trajectoiresDataService.SNBC_SIREN_CELLULE.split('!')[0];
    template.substitute(sirenSheetName, siren);

    this.logger.log(`Substitution des valeurs des indicateurs`);
    const emissionsGesSequestrationConsommationsSheetName =
      this.trajectoiresDataService.SNBC_EMISSIONS_GES_CELLULES.split('!')[0];

    const emissionGesSequestrationConsommationsSubstitionValeurs: any = {};
    this.trajectoiresDataService.SNBC_EMISSIONS_GES_IDENTIFIANTS_REFERENTIEL.forEach(
      (identifiants) => {
        const cleSubstitution = this.getXlsxCleSubstitution(identifiants);
        emissionGesSequestrationConsommationsSubstitionValeurs[
          cleSubstitution
        ] = 0;
      },
    );
    this.trajectoiresDataService.SNBC_SEQUESTRATION_IDENTIFIANTS_REFERENTIEL.forEach(
      (identifiants) => {
        const cleSubstitution = this.getXlsxCleSubstitution(identifiants);
        emissionGesSequestrationConsommationsSubstitionValeurs[
          cleSubstitution
        ] = 0;
      },
    );
    this.trajectoiresDataService.SNBC_CONSOMMATIONS_IDENTIFIANTS_REFERENTIEL.forEach(
      (identifiants) => {
        const cleSubstitution = this.getXlsxCleSubstitution(identifiants);
        emissionGesSequestrationConsommationsSubstitionValeurs[
          cleSubstitution
        ] = 0;
      },
    );
    valeurIndicateurs?.emissions_ges.valeurs.forEach((valeur) => {
      const cleSubstitution = this.getXlsxCleSubstitution(
        valeur.identifiants_referentiel,
      );
      emissionGesSequestrationConsommationsSubstitionValeurs[cleSubstitution] =
        (valeur.valeur || 0) / 1000;
    });
    valeurIndicateurs?.sequestrations.valeurs.forEach((valeur) => {
      const cleSubstitution = this.getXlsxCleSubstitution(
        valeur.identifiants_referentiel,
      );
      emissionGesSequestrationConsommationsSubstitionValeurs[cleSubstitution] =
        ((valeur.valeur || 0) * -1) / 1000;
    });
    valeurIndicateurs?.consommations_finales.valeurs.forEach((valeur) => {
      const cleSubstitution = this.getXlsxCleSubstitution(
        valeur.identifiants_referentiel,
      );
      emissionGesSequestrationConsommationsSubstitionValeurs[cleSubstitution] =
        valeur.valeur || 0;
    });
    template.substitute(
      emissionsGesSequestrationConsommationsSheetName,
      emissionGesSequestrationConsommationsSubstitionValeurs,
    );

    const zipOptions: JSZipGeneratorOptions = {
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 2,
      },
      mimeType:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };

    this.logger.log(`Génération du buffer de fichier Xlsx`);
    const generatedData = template.generate(zipOptions as any);
    return generatedData;
  }

  async downloadTrajectoireSnbc(
    request: CollectiviteRequestType,
    tokenInfo: SupabaseJwtPayload,
    res: Response,
    next: NextFunction,
  ) {
    try {
      if (!this.getIdentifiantXlsxCalcul()) {
        throw new InternalServerErrorException(
          "L'identifiant du Xlsx pour le calcul des trajectoires SNBC est manquant",
        );
      }

      const resultatVerification =
        await this.trajectoiresDataService.verificationDonneesSnbc(
          request,
          tokenInfo,
          undefined,
          true,
        );

      if (
        resultatVerification.status ===
          VerificationDonneesSNBCStatus.COMMUNE_NON_SUPPORTEE ||
        !resultatVerification.epci
      ) {
        throw new UnprocessableEntityException(
          `Le calcul de trajectoire SNBC peut uniquement être effectué pour un EPCI.`,
        );
      } else if (
        resultatVerification.status ===
          VerificationDonneesSNBCStatus.DONNEES_MANQUANTES ||
        !resultatVerification.donnees_entree
      ) {
        const identifiantsReferentielManquants = [
          ...(resultatVerification.donnees_entree?.emissions_ges
            .identifiants_referentiel_manquants || []),
          ...(resultatVerification.donnees_entree?.consommations_finales
            .identifiants_referentiel_manquants || []),
        ];
        throw new UnprocessableEntityException(
          `Les indicateurs suivants n'ont pas de valeur pour l'année 2015 ou avec une interpolation possible : ${identifiantsReferentielManquants.join(', ')}, impossible de calculer la trajectoire SNBC.`,
        );
      }
      const epci = resultatVerification.epci;
      const nomFichier = this.getNomFichierTrajectoire(epci);

      this.logger.log(
        `Récupération des données du fichier ${this.getIdentifiantXlsxCalcul()}`,
      );
      const xlsxBuffer = await this.getXlsxModeleBuffer();

      const sirenData = {
        siren: parseInt(epci.siren),
      };

      const generatedData = await this.generationXlsxDonneesSubstituees(
        xlsxBuffer,
        sirenData,
        resultatVerification.donnees_entree,
      );

      this.logger.log(`Renvoi du fichier Xlsx généré`);
      // Send the workbook.
      res.attachment(`${nomFichier}.xlsx`.normalize('NFD'));
      res.set('Access-Control-Expose-Headers', 'Content-Disposition');
      res.send(generatedData);
    } catch (error) {
      next(error);
    }
  }
}