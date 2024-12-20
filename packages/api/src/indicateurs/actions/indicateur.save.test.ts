import { TagInsert, Thematique } from '@/backend/shared';
import { beforeAll, describe, expect, test } from 'vitest';
import { Personne } from '../../collectivites/shared/domain/personne.schema';
import { FicheResume } from '../../plan-actions/domain/fiche-action.schema';
import { Action } from '../../referentiel/domain/action.schema';
import { signIn, signOut } from '../../tests/auth';
import { dbAdmin, supabase } from '../../tests/supabase';
import { testReset } from '../../tests/testReset';
import { IndicateurDefinitionInsert } from '../domain/definition.schema';
import { Valeur } from '../domain/valeur.schema';
import {
  selectIndicateurActions,
  selectIndicateurCategoriesUtilisateur,
  selectIndicateurDefinition,
  selectIndicateurFiches,
  selectIndicateurPilotes,
  selectIndicateurServicesId,
  selectIndicateurThematiquesId,
  selectIndicateurValeur,
  selectIndicateurValeurs,
} from './indicateur.fetch';
import {
  insertIndicateurDefinition,
  updateIndicateurDefinition,
  upsertActions,
  upsertCategoriesUtilisateur,
  upsertFiches,
  upsertIndicateurValeur,
  upsertPilotes,
  upsertServices,
  upsertThematiques,
  upsertValeursUtilisateurAvecSource,
} from './indicateur.save';

beforeAll(async () => {
  await signIn('yolododo');
  await testReset();

  return async () => {
    await signOut();
  };
});

describe('Test indicateur.save', async () => {
  const { data: predefini } = await dbAdmin
    .from('indicateur_definition')
    .select('id')
    .not('collectivite_id', 'is', null)
    .limit(1)
    .single();

  if (!predefini) {
    expect.fail();
  }

  test('Test updateIndicateurDefinition', async () => {
    // Modification indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const defToUpdate = JSON.parse(JSON.stringify(def));
    defToUpdate.commentaire = 'test nouveau com';
    defToUpdate.description = 'test nouvel des';

    await updateIndicateurDefinition(supabase, defToUpdate, 1);
    const newDef = await selectIndicateurDefinition(supabase, predefini.id, 1);

    if (!newDef) {
      expect.fail();
    }

    expect(def.commentaire).not.eq(newDef.commentaire);
    expect(def.description).not.eq(newDef.description);

    // Modification indicateur prédéfini
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail();
    }

    const def2ToUpdate = JSON.parse(JSON.stringify(def2));
    def2ToUpdate.commentaire = 'test nouveau com';
    def2ToUpdate.description = 'test nouvel des';

    await updateIndicateurDefinition(supabase, def2ToUpdate, 1);
    const newDef2 = await selectIndicateurDefinition(supabase, 1, 1);

    if (!newDef2) {
      expect.fail();
    }

    expect(def2.commentaire).not.eq(newDef2.commentaire);
    expect(def2.description).eq(newDef2.description); // Ne peut pas modifier la description d'un indicateur prédéfini
  });

  test('Test insertIndicateurDefinition', async () => {
    const def: IndicateurDefinitionInsert = {
      titre: 'test',
      collectiviteId: 1,
      thematiques: [{ id: 1, nom: '' }],
    };

    const newId = await insertIndicateurDefinition(supabase, def);
    if (!newId) {
      expect.fail();
    }

    const data = await selectIndicateurDefinition(supabase, newId, 1);
    expect(data).not.toBeNull();
    expect(data?.thematiques?.[0].id).eq(1);
  });

  test('Test upsertIndicateurValeur', async () => {
    const valeur: Valeur = {
      collectiviteId: 1,
      indicateurId: 1,
      resultat: 1.3,
      objectif: 2,
      resultatCommentaire: 'test',
      annee: 2022,
    };
    // Ajout valeur
    const newId = await upsertIndicateurValeur(supabase, valeur);

    if (!newId) {
      expect.fail('Id de la valeur non retourné');
    }

    const data = await selectIndicateurValeur(supabase, newId);
    if (!data) {
      expect.fail();
    }

    data.objectif = 2.3;

    // Modification valeur
    await upsertIndicateurValeur(supabase, data);
    const result = await selectIndicateurValeur(supabase, newId);
    if (!result) {
      expect.fail();
    }

    expect(result.objectif).eq(2.3);
    expect(data.id).eq(result.id);
  });

  test('Test upsertThematiques', async () => {
    // Ajout thématique sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const them: Thematique[] = [
      {
        id: 1,
        nom: 'test',
      },
    ];

    await upsertThematiques(supabase, def.id, def.estPerso, them);
    const data = await selectIndicateurThematiquesId(supabase, predefini.id);
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    // Enlève thématique sur indicateur personnalisé
    await upsertThematiques(supabase, def.id, def.estPerso, []);
    const data2 = await selectIndicateurThematiquesId(supabase, predefini.id);
    expect(data2).not.toBeNull();
    expect(data2).toHaveLength(0);
    // Ajout thématique sur indicateur prédéfini (pas possible)
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail();
    }

    await upsertThematiques(supabase, def2.id, def2.estPerso, them);
    const data3 = await selectIndicateurThematiquesId(supabase, 1);
    expect(data3).not.toBeNull();
    expect(data3).toHaveLength(0);
  });

  test('Test upsertServices', async () => {
    // Données
    const { data: service } = await dbAdmin
      .from('service_tag')
      .insert({ nom: 'serv2', collectivite_id: 2 })
      .select()
      .limit(1)
      .single();

    if (!service) {
      expect.fail();
    }

    await dbAdmin.from('indicateur_service_tag').insert({
      indicateur_id: 1,
      service_tag_id: service.id,
      collectivite_id: 2,
    });

    // Ajout service inexistant sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const tags: TagInsert[] = [
      {
        nom: 'test',
        collectiviteId: 1,
      },
    ];
    await upsertServices(supabase, def.id, 1, tags);
    const data = await selectIndicateurServicesId(supabase, predefini.id, 1);
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    // Ajout service existant sur indicateur personnalisé
    tags[0].id = data[0];
    tags.push({ nom: '', collectiviteId: 1, id: 1 });
    await upsertServices(supabase, def.id, 1, tags);
    const data2 = await selectIndicateurServicesId(supabase, predefini.id, 1);
    expect(data2).not.toBeNull();
    expect(data2).toHaveLength(2);
    // Enlève services sur indicateur personnalisé
    await upsertServices(supabase, def.id, 1, []);
    const data3 = await selectIndicateurServicesId(supabase, predefini.id, 1);
    expect(data3).not.toBeNull();
    expect(data3).toHaveLength(0);
    // Ajout services sur indicateur prédéfini
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail();
    }

    await upsertServices(supabase, def2.id, 1, tags);
    const data4 = await selectIndicateurServicesId(supabase, 1, 1);
    expect(data4).not.toBeNull();
    expect(data4).toHaveLength(2);
    // Enlève services sur indicateur prédéfini
    await upsertServices(supabase, def2.id, 1, []);
    const data5 = await selectIndicateurServicesId(supabase, 1, 1);
    expect(data5).not.toBeNull();
    expect(data5).toHaveLength(0);
    // Vérifie qu'on supprime pas les services des autres collectivités
    const data6 = await selectIndicateurServicesId(supabase, 1, 2);
    expect(data6).not.toBeNull();
    expect(data6).toHaveLength(1);
  });

  test('Test upsertCategoriesUtilisateur', async () => {
    // Données
    const { data: categorie } = await dbAdmin
      .from('categorie_tag')
      .insert({ nom: 'testCat', collectivite_id: 1 })
      .select()
      .limit(1)
      .single();

    if (!categorie) {
      expect.fail();
    }

    const catId = categorie.id;
    const { data: categorie2 } = await dbAdmin
      .from('categorie_tag')
      .insert({ nom: 'cat2', collectivite_id: 2 })
      .select()
      .single();

    if (!categorie2) {
      expect.fail();
    }

    await dbAdmin
      .from('indicateur_categorie_tag')
      .insert({ indicateur_id: 1, categorie_tag_id: categorie2.id });

    // Ajout catégorie inexistant sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const tags: TagInsert[] = [
      {
        nom: 'test',
        collectiviteId: 1,
      },
    ];
    await upsertCategoriesUtilisateur(supabase, def, 1, tags);
    const data = await selectIndicateurCategoriesUtilisateur(
      supabase,
      predefini.id,
      1
    );
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    // Ajout catégorie existant sur indicateur personnalisé
    tags[0].id = data[0];
    tags.push({ nom: '', collectiviteId: 1, id: catId });
    await upsertCategoriesUtilisateur(supabase, def, 1, tags);
    const data2 = await selectIndicateurCategoriesUtilisateur(
      supabase,
      predefini.id,
      1
    );
    expect(data2).not.toBeNull();
    expect(data2).toHaveLength(2);
    // Enlève catégorie sur indicateur personnalisé
    await upsertCategoriesUtilisateur(supabase, def, 1, []);
    const data3 = await selectIndicateurCategoriesUtilisateur(
      supabase,
      predefini.id,
      1
    );
    expect(data3).not.toBeNull();
    expect(data3).toHaveLength(0);
    // Ajout catégorie sur indicateur prédéfini
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail();
    }

    await upsertCategoriesUtilisateur(supabase, def2, 1, tags);
    const data4 = await selectIndicateurCategoriesUtilisateur(supabase, 1, 1);
    expect(data4).not.toBeNull();
    expect(data4).toHaveLength(2);
    // Enlève catégorie sur indicateur prédéfini
    await upsertCategoriesUtilisateur(supabase, def2, 1, []);
    const data5 = await selectIndicateurCategoriesUtilisateur(supabase, 1, 1);
    expect(data5).not.toBeNull();
    expect(data5).toHaveLength(0);
    // Vérifie qu'on a pas supprimé les catégories d'une autre collectivité sur le même indicateur
    const data6 = await selectIndicateurCategoriesUtilisateur(supabase, 1, 2);
    expect(data6).not.toBeNull();
    expect(data6).toHaveLength(1);
  });

  test('Test upsertPilotes', async () => {
    // Données
    const { data: pil } = await dbAdmin
      .from('personne_tag')
      .insert({ nom: 'pil2', collectivite_id: 2 })
      .select()
      .single();

    if (!pil) {
      expect.fail();
    }

    await dbAdmin.from('indicateur_pilote').insert({
      indicateur_id: 1,
      tag_id: pil.id,
      collectivite_id: 2,
    });

    // Ajout pilote inexistant sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail('Indicateur personnalisé non trouvé');
    }

    const tags: Personne[] = [
      {
        nom: 'test',
        tagId: null,
        userId: null,
        collectiviteId: 1,
      },
    ];
    await upsertPilotes(supabase, def.id, 1, tags);
    const data = await selectIndicateurPilotes(supabase, predefini.id, 1);
    expect(data).not.toBeNull();
    expect(data).not.toHaveLength(0);
    // Ajout pilote existant sur indicateur personnalisé
    tags[0] = data[0];
    tags.push({ tagId: 1, collectiviteId: 1 });
    tags.push({
      userId: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
      collectiviteId: 1,
    });
    await upsertPilotes(supabase, def.id, 1, tags);
    const data2 = await selectIndicateurPilotes(supabase, predefini.id, 1);
    expect(data2).not.toBeNull();
    expect(data2).toHaveLength(3);
    // Enlève pilote sur indicateur personnalisé
    await upsertPilotes(supabase, def.id, 1, []);
    const data3 = await selectIndicateurPilotes(supabase, predefini.id, 1);
    expect(data3).not.toBeNull();
    expect(data3).toHaveLength(0);

    // Ajout pilote sur indicateur prédéfini
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail('Indicateur personnalisé non trouvé');
    }

    tags[0].idTablePassage = null;
    await upsertPilotes(supabase, def2.id, 1, tags);
    const data4 = await selectIndicateurPilotes(supabase, 1, 1);
    expect(data4).not.toBeNull();
    expect(data4).toHaveLength(3);
    // Enlève pilote sur indicateur prédéfini
    await upsertPilotes(supabase, def2.id, 1, []);
    const data5 = await selectIndicateurPilotes(supabase, 1, 1);
    expect(data5).not.toBeNull();
    expect(data5).toHaveLength(0);
    // Vérifie que les pilotes des autres collectivités n'ont pas été supprimés
    const data6 = await selectIndicateurPilotes(supabase, 1, 2);
    expect(data6).not.toBeNull();
    expect(data6).toHaveLength(1);
  });

  test('Test upsertFiches', async () => {
    const { data: fiche } = await dbAdmin
      .from('fiche_action')
      .insert({ titre: 'test2', collectivite_id: 2 })
      .select();

    if (!fiche) {
      expect.fail();
    }

    await dbAdmin
      .from('fiche_action_indicateur')
      .insert({ fiche_id: fiche[0].id, indicateur_id: 1 });

    // Ajoute fiche sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const fr: FicheResume[] = [
      {
        ameliorationContinue: false,
        collectiviteId: 1,
        dateFinProvisoire: '2020-01-01',
        id: 1,
        modifiedAt: '2020-01-01',
        niveauPriorite: 'Bas',
        pilotes: [],
        services: [],
        plans: [],
        restreint: false,
        statut: 'En cours',
        titre: 'test',
      },
    ];
    await upsertFiches(
      supabase,
      def.id,
      1,
      fr.map((f) => f.id)
    );
    const data = await selectIndicateurFiches(supabase, predefini.id, 1);
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    // Enlève fiche sur indicateur personnalisé
    await upsertFiches(supabase, def.id, 1, []);
    const data3 = await selectIndicateurFiches(supabase, predefini.id, 1);
    expect(data3).not.toBeNull();
    expect(data3).toHaveLength(0);
    // Ajout fiche sur indicateur prédéfini
    const def2 = await selectIndicateurDefinition(supabase, 1, 1);
    if (!def2) {
      expect.fail();
    }

    await upsertFiches(
      supabase,
      def2.id,
      1,
      fr?.map((f) => f.id)
    );
    const data4 = await selectIndicateurFiches(supabase, 1, 1);
    expect(data4).not.toBeNull();
    expect(data4).toHaveLength(1);
    // Enlève fiche sur indicateur prédéfini
    await upsertFiches(supabase, def2.id, 1, []);
    const data5 = await selectIndicateurFiches(supabase, 1, 1);
    expect(data5).not.toBeNull();
    expect(data5).toHaveLength(0);
    // Vérifie que les fiches des autres collectivités n'ont pas été supprimés
    const data6 = await selectIndicateurFiches(supabase, 1, 2);
    expect(data6).not.toBeNull();
    expect(data6).toHaveLength(1);
  });

  test('Test upsertActions', async () => {
    // Ajout action sur indicateur personnalisé
    const def = await selectIndicateurDefinition(supabase, predefini.id, 1);
    if (!def) {
      expect.fail();
    }

    const act: Action[] = [
      {
        parent: null,
        id: 'eci',
        referentiel: 'eci',
      },
    ];
    await upsertActions(supabase, def, act);
    const data = await selectIndicateurActions(supabase, predefini.id);
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    // Enlève action indicateur personnalisé
    await upsertActions(supabase, def, []);
    const data2 = await selectIndicateurActions(supabase, predefini.id);
    expect(data2).not.toBeNull();
    expect(data2).toHaveLength(0);
  });

  test('Test upsertValeursUtilisateurAvecSource', async () => {
    // On signout pour pouvoir bypasser les RLS en mode dbAdmin
    // (sinon le dbAdmin ne fonctionne pas)
    await signOut();
    await testReset();

    // Ajout valeur utilisateur
    const { data: val } = await dbAdmin
      .from('indicateur_valeur')
      .insert({
        indicateur_id: 1,
        date_valeur: '2025-01-01',
        collectivite_id: 1,
        resultat: 1.5,
      })
      .select('id')
      .limit(1)
      .single();

    if (!val) {
      expect.fail();
    }

    // Ajout valeur import
    const { data: meta, error } = await dbAdmin
      .from('indicateur_source_metadonnee')
      .upsert({
        source_id: 'citepa',
        date_version: new Date().toLocaleDateString('sv-SE'),
      })
      .select('id')
      .limit(1)
      .single();

    if (!meta) {
      expect.fail(error.message);
    }

    await dbAdmin.from('indicateur_valeur').insert({
      indicateur_id: 1,
      date_valeur: '2025-01-01',
      collectivite_id: 1,
      resultat: 1.8,
      metadonnee_id: meta.id,
    });

    await dbAdmin.from('indicateur_valeur').insert({
      indicateur_id: 1,
      date_valeur: '2026-01-01',
      collectivite_id: 1,
      resultat: 2,
      metadonnee_id: meta.id,
    });

    const args = {
      dbClient: supabase,
      indicateurId: 1,
      collectiviteId: 1,
      source: {
        id: 'citepa',
        libelle: 'CITEPA',
        dateVersion: '2026-01-01',
        methodologie: 'méthodologie...',
      },
      appliquerResultat: false,
      appliquerObjectif: true,
      ecraserResultat: true,
      ecraserObjectif: true,
    };

    await signIn('yolododo');

    // Test que le résultat n'a pas été appliqué
    await upsertValeursUtilisateurAvecSource(args);
    const data1 = await selectIndicateurValeur(supabase, val.id);
    expect(data1).not.toBeNull();
    expect(data1?.resultat).eq(1.5);
    const d1 = await selectIndicateurValeurs(supabase, 1, 1, null);
    expect(d1).toHaveLength(1);

    // Test que le résultat n'a pas été écrasé
    args.appliquerResultat = true;
    args.ecraserResultat = false;
    await upsertValeursUtilisateurAvecSource(args);
    const data2 = await selectIndicateurValeur(supabase, val.id);
    expect(data2).not.toBeNull();
    expect(data2?.resultat).eq(1.5);
    const d2 = await selectIndicateurValeurs(supabase, 1, 1, null);
    expect(d2).toHaveLength(2);

    // Test que le résultat a bien été appliqué
    const idNewValeur = d2.filter((d) => d.id !== val.id)![0].id as number;
    await dbAdmin.from('indicateur_valeur').delete().eq('id', idNewValeur);

    const d3bis = await selectIndicateurValeurs(supabase, 1, 1, null);
    expect(d3bis).toHaveLength(1);

    args.ecraserResultat = true;
    await upsertValeursUtilisateurAvecSource(args);
    const data = await selectIndicateurValeur(supabase, val.id);
    expect(data).not.toBeNull();
    expect(data?.resultat).eq(1.8);
    const d3 = await selectIndicateurValeurs(supabase, 1, 1, null);
    expect(d3).toHaveLength(2);
  });
});
