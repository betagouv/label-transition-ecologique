import { getAuthToken, getTestApp } from '@/backend/test';
import { INestApplication } from '@nestjs/common';
import { Workbook } from 'exceljs';
import { default as request } from 'supertest';

describe('Indicateurs', () => {
  let app: INestApplication;
  let yoloDodoToken: string;

  beforeAll(async () => {
    app = await getTestApp();
    yoloDodoToken = await getAuthToken();
  });

  afterAll(async () => {
    await app.close();
  });

  test('Exporte un indicateur au format XLSX', async () => {
    const indicateurId = 177; // cae_8

    const response = await request(app.getHttpServer())
      .post('/indicateurs/xlsx')
      .set('Authorization', `Bearer ${yoloDodoToken}`)
      .send({ collectiviteId: 1, indicateurIds: [indicateurId] })
      .expect(201)
      .responseType('blob');

    const fileName = decodeURI(
      response.headers['content-disposition']
        .split('filename=')[1]
        .split(';')[0]
        .split('"')[1]
    );

    const body = response.body as Buffer;
    // décommenter pour écrire le fichier (et vérifier son contenu manuellement)
    // writeFileSync(fileName, body);

    expect(fileName).toMatch(
      /^Ambérieu-en-Bugey - cae_8 - Rénovation énergétique des logements - \d{4}-\d{2}-\d{2}.*\.xlsx$/
    );
    // poids approximitatif du fichier attendu car la date de génération peut le faire un peu varier
    expect(body.byteLength).toBeGreaterThanOrEqual(6700);
    expect(body.byteLength).toBeLessThanOrEqual(6800);

    // crée le classeur et vérifie le contenu de la 2ème ligne de la 1ère feuille
    const wb = new Workbook();
    await wb.xlsx.load(body);
    const ws = wb.getWorksheet(1);
    expect(ws).toBeDefined();
    const row = ws?.getRow(2);
    expect(row?.values).toEqual([
      undefined, // index des colonnes à partir de 1
      'cae_8',
      'Rénovation énergétique des logements',
      'Mes objectifs',
      'nombre logements rénovés/100 logements existants',
      21,
      13,
    ]);
  });
});