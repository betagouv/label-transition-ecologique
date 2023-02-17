// deno-lint-ignore-file

import {
  assertEquals,
  assertObjectMatch,
  assertExists,
} from 'https://deno.land/std/testing/asserts.ts';
import {supabase} from '../../lib/supabase.ts';
import {signIn, signOut} from '../../lib/auth.ts';
import {testReset} from '../../lib/rpcs/testReset.ts';
import {Database} from '../../lib/database.types.ts';
import {
  IndicateurGlobal,
} from '../../lib/types/fiche_action/indicateurGlobal.ts';
import {Personne} from '../../lib/types/fiche_action/personne.ts';
import {
  FicheActionVueInsert,
  FicheActionVueRow,
  FicheActionVueUpdate,
} from '../../lib/types/fiche_action/ficheActionVue.ts';
import {FinanceurMontant} from "../../lib/types/fiche_action/FinanceurMontant.ts";

Deno.test('Création fiches et plan actions', async () => {
  await testReset();
  await signIn('yolododo');

  // FICHE ACTION
  const fiche = {
    titre: 'fiche test',
    description: 'description test',
    piliers_eci: [
      'Écoconception' as Database['public']['Enums']['fiche_action_piliers_eci'],
      'Recyclage' as Database['public']['Enums']['fiche_action_piliers_eci'],
    ],
    collectivite_id: 1,
  } as Database['public']['Tables']['fiche_action']['Insert'];
  // Création fiche action
  const insertFiche = await supabase.from('fiche_action').
  upsert(fiche).
  select();
  assertEquals(insertFiche.data!.length, 1);
  assertObjectMatch(insertFiche.data![0], fiche);
  const fId = insertFiche.data![0].id;
  console.log(fId)

  // THEMATIQUES
  // Récupérer les thématiques
  const thematiques = await supabase.from('thematique').select();
  assertEquals(thematiques.data!.length, 10);
  // Ajout thématique à la fiche
  await supabase.rpc('ajouter_thematique',
      {'fiche_id': fId, thematique: thematiques.data![0].thematique});
  await supabase.rpc('ajouter_thematique',
      {'fiche_id': fId, thematique: thematiques.data![1].thematique});
  // Enlever thématique à la fiche
  await supabase.rpc('enlever_thematique',
      {'fiche_id': fId, thematique: thematiques.data![1].thematique});
  // Récupérer les sous-thématiques d'une thématique
  const sousThematiques = await supabase.from('sous_thematique').
  select().eq('thematique', thematiques.data![0].thematique);
  assertEquals(sousThematiques.data!.length, 13);
  // Ajout sous-thématique à la fiche
  await supabase.rpc('ajouter_sous_thematique',
      {'fiche_id': fId, thematique_id: sousThematiques.data![0].id});
  // Enlever sous-thématique à la fiche
  await supabase.rpc('enlever_sous_thematique',
      {'fiche_id': fId, thematique_id: sousThematiques.data![0].id});


  // PLAN ACTION
  // Création plan action et axe
  const planAction = {
    nom: 'Plan test ts',
    collectivite_id: 1,
    parent: null,
  } as Database['public']['Tables']['axe']['Insert'];
  const insertPlanAction = await supabase.from('axe').
  upsert(planAction).
  select();
  assertEquals(insertPlanAction.data!.length, 1);
  assertObjectMatch(insertPlanAction.data![0], planAction);
  const axe = {
    nom: 'Plan test ts enfant',
    collectivite_id: 1,
    parent: insertPlanAction.data![0].id,
  } as Database['public']['Tables']['axe']['Insert'];
  const insertAxe = await supabase.from('axe').upsert(axe).select();
  assertEquals(insertAxe.data!.length, 1);
  assertObjectMatch(insertAxe.data![0], axe);
  // Ajout fiche à l'axe
  await supabase.rpc('ajouter_fiche_action_dans_un_axe',
      {'fiche_id': fId, axe_id: insertAxe.data![0].id});
  // Enlever fiche d'un axe
  await supabase.rpc('enlever_fiche_action_d_un_axe',
      {'fiche_id': fId, axe_id: insertAxe.data![0].id});
  // Récupérer la liste d'indicateur possible pour la collectivité
  const plansActionCol = await supabase.rpc('plans_action_collectivite',
      {'collectivite_id': 1}).select();
  const plansActionColData = plansActionCol.data! as Database['public']['Tables']['axe']['Row'][];

  // PARTENAIRE
  const partenaire = {
    collectivite_id: 1,
    nom: 'partenaire test',
  } as Database['public']['Tables']['partenaire_tag']['Insert'];
  // Création et ajout partenaire à la fiche
  const insertPartenaire = await supabase.rpc('ajouter_partenaire',
      {'fiche_id': fId, 'partenaire': partenaire}).select();
  const partenaireSave = insertPartenaire.data! as unknown as Database['public']['Tables']['partenaire_tag']['Row'];
  // console.logpartenaireSave);
  assertObjectMatch(partenaireSave, partenaire);
  const lienPartenaire = await supabase.from('fiche_action_partenaire_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienPartenaire.data!.length, 1);
  // Récupérer les tags de la fiche
  const partTags = await supabase.from('fiche_action_partenaire_tag').
  select('partenaire_tag:partenaire_tag_id(*)').
  eq('fiche_id', fId);
  const partTagsData = partTags.data![0].partenaire_tag as Database['public']['Tables']['partenaire_tag']['Row'][];
  // Enlever partenaire de la fiche
  const enlever = await supabase.rpc('enlever_partenaire',
      {'fiche_id': fId, 'partenaire': partenaireSave});
  assertEquals(enlever.status, 200);
  const lienPartenaire2 = await supabase.from('fiche_action_partenaire_tag').
  select().
  eq('fiche_id', fId);
  // console.loglienPartenaire2);
  assertEquals(lienPartenaire2.data!.length, 0);

  // STRUCTURE
  const structure = {
    collectivite_id: 1,
    nom: 'structure test',
  } as Database['public']['Tables']['structure_tag']['Insert'];
  ;
  // Création et ajout structure à la fiche
  const insertStructure = await supabase.rpc('ajouter_structure',
      {'fiche_id': fId, 'structure': structure}).select();
  assertObjectMatch(insertStructure.data!, structure);
  const lienStructure1 = await supabase.from('fiche_action_structure_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienStructure1.data!.length, 1);
  // Enlever structure de la fiche
  await supabase.rpc('enlever_structure',
      {'fiche_id': fId, 'structure': insertStructure.data!});
  const lienStructure2 = await supabase.from('fiche_action_structure_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienStructure2.data!.length, 0);

  // PILOTE
  const piloteTag = {collectivite_id: 1, nom: 'pilote test'} as Personne;
  const piloteUtilisateur = {
    collectivite_id: 1,
    nom: 'pilote test2',
    user_id: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
  } as Personne;
  // Création et ajout tag pilote à la fiche
  const insertPiloteTag = await supabase.rpc('ajouter_pilote',
      {'fiche_id': fId, 'pilote': piloteTag}).select();
  assertObjectMatch(insertPiloteTag.data!, piloteTag);
  // Création et ajout utilisateur pilote
  await supabase.rpc('ajouter_pilote',
      {'fiche_id': fId, 'pilote': piloteUtilisateur});
  // Enlever pilote
  await supabase.rpc('enlever_pilote',
      {'fiche_id': fId, 'pilote': insertPiloteTag.data!});

  // REFERENT
  const referentTag = {collectivite_id: 1, nom: 'referent test'} as Personne;
  const referentUtilisateur = {
    collectivite_id: 1,
    nom: 'referent test2',
    user_id: '17440546-f389-4d4f-bfdb-b0c94a1bd0f9',
  } as Personne;
  // Création et ajout tag referent à la fiche
  const insertReferentTag = await supabase.rpc('ajouter_referent',
      {'fiche_id': fId, 'referent': referentTag}).select();
  assertObjectMatch(insertReferentTag.data!, referentTag);
  // Création et ajout utilisateur referent
  await supabase.rpc('ajouter_referent',
      {'fiche_id': fId, 'referent': referentUtilisateur});
  // Enlever referent
  await supabase.rpc('enlever_referent',
      {'fiche_id': fId, 'referent': insertReferentTag.data!});

  // Récupérer la liste de personnes possible pour la collectivité
  const personnesCol = await supabase.rpc('personnes_collectivite',
      {'collectivite_id': 1}).select();
  const personnesColData = personnesCol.data! as Personne[];

  // ANNEXE
  // TODO pas testé
  const annexe = {collectivite_id: 1} as Database['public']['Tables']['annexe']['Insert'];
  // Creation et ajout annexe à la fiche
  const insertAnnexe = await supabase.rpc('ajouter_annexe',
      {'fiche_id': fId, 'annexe': annexe}).select();
  // Enlever annexe à la fiche
  await supabase.rpc('enlever_annexe',
      {'fiche_id': fId, 'annexe': insertAnnexe.data!, 'supprimer': false});

  // ACTION
  // Ajout action à la fiche
  await supabase.rpc('ajouter_action',
      {'fiche_id': fId, 'action_id': 'eci_2.2'});
  // Enlever action à la fiche
  await supabase.rpc('enlever_action',
      {'fiche_id': fId, 'action_id': 'eci_2.2'});

  // INDICATEUR
  // Ajout indicateur à la fiche
  const indicateur = {indicateur_id: 'eci_5'} as IndicateurGlobal;
  const indicateurPerso = {indicateur_personnalise_id: 1} as IndicateurGlobal;
  await supabase.rpc('ajouter_indicateur',
      {'fiche_id': fId, 'indicateur': indicateur});
  await supabase.rpc('ajouter_indicateur',
      {'fiche_id': fId, 'indicateur': indicateurPerso});
  // Enlever un indicateur à la fiche
  await supabase.rpc('enlever_indicateur',
      {'fiche_id': fId, 'indicateur': indicateur});
  // Récupérer la liste d'indicateur possible pour la collectivité
  const indicateursCol = await supabase.from('indicateurs_collectivite')
      .select().or('collectivite_id.is.null, collectivite_id.eq.1');
  const indicateursColData = indicateursCol.data! as IndicateurGlobal[];

  // SERVICE
  const service = {
    collectivite_id: 1,
    nom: 'service test',
  } as Database['public']['Tables']['service_tag']['Insert'];
  ;
  // Création et ajout service à la fiche
  const insertService = await supabase.rpc('ajouter_service',
      {'fiche_id': fId, 'service': service}).select();
  assertObjectMatch(insertService.data!, service);
  const lienService1 = await supabase.from('fiche_action_service_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienService1.data!.length, 1);
  // Enlever service de la fiche
  await supabase.rpc('enlever_service',
      {'fiche_id': fId, 'service': insertService.data!});
  const lienService2 = await supabase.from('fiche_action_service_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienService2.data!.length, 0);

  // FINANCEUR
  const financeur = {
    collectivite_id: 1,
    nom: 'financeur test',
  } as Database['public']['Tables']['financeur_tag']['Insert'];
  const financeur_montant = {
    montant_ttc: 10,
    financeur_tag : financeur
  } as FinanceurMontant
  // Création et ajout service à la fiche
  const insertFinanceur = await supabase.rpc('ajouter_financeur',
      {'fiche_id': fId, 'financeur': service}).select();
  console.log('insert ' +insertFinanceur.data!);
  console.log('compare ' +financeur_montant);
  assertObjectMatch(insertFinanceur.data!, financeur_montant);
  const lienFinanceur1 = await supabase.from('fiche_action_service_tag').
  select().
  eq('fiche_id', fId);
  assertEquals(lienFinanceur1.data!.length, 1);

  // Appeler la vue listant les fiches actions
  const vue = await supabase.from('fiches_action').select().eq('id', fId);
  assertExists(vue.data);
  // console.logvue.data!);
  // Récupérer les types liés dans la vue
  const fichesVue: FicheActionVueRow = vue.data![0] as FicheActionVueRow;
  const thematiquesVue = vue.data![0].thematiques! as Database['public']['Tables']['thematique']['Row'][];
  const sousThematiquesVue = vue.data![0].sous_thematiques! as Database['public']['Tables']['sous_thematique']['Row'][];
  const partenairesVue = vue.data![0].partenaires! as Database['public']['Tables']['partenaire_tag']['Row'][];
  const structuresVue = vue.data![0].structures! as Database['public']['Tables']['structure_tag']['Row'][];
  const pilotesVue = vue.data![0].pilotes! as Personne[];
  const referentsVue = vue.data![0].referents! as Personne[];
  const indicateursVue = vue.data![0].indicateurs! as IndicateurGlobal[];
  const annexesVue = vue.data![0].annexes! as Database['public']['Tables']['action_relation']['Row'][];
  const actionVue = vue.data![0].actions! as Database['public']['Tables']['annexe']['Row'][];
  const axesVue = vue.data![0].actions! as Database['public']['Tables']['axe']['Row'][];
  const servicesVue = vue.data![0].actions! as Database['public']['Tables']['service_tag']['Row'][];
  const financeursVue = vue.data![0].indicateurs! as FinanceurMontant[];
  // console.log(thematiquesVue);

  // Appeler la vue donnant l'ensemble d'un plan action
  const planentier = await supabase.rpc('plan_action',
      {'id': insertPlanAction.data![0].id}).select();
  assertExists(planentier.data);
  // console.log(planentier!);

  // Insérer dans la vue
  const ficheVue = {
    id: fId,
    titre: 'fiche test',
    description: 'description test',
    piliers_eci: [
      'Écoconception' as Database['public']['Enums']['fiche_action_piliers_eci'],
    ],
    objectifs: 'verif',
    resultats_attendus: [
      'Sensibilisation' as Database['public']['Enums']['fiche_action_resultats_attendus'],
    ],
    cibles: [
      'Grand public et associations' as Database['public']['Enums']['fiche_action_cibles'],
    ],
    ressources: null,
    financements: null,
    budget_previsionnel: null,
    statut: 'En cours' as Database['public']['Enums']['fiche_action_statuts'],
    niveau_priorite: 'Bas' as Database['public']['Enums']['fiche_action_niveaux_priorite'],
    date_debut: null,
    date_fin_provisoire: null,
    amelioration_continue: null,
    calendrier: null,
    notes_complementaires: null,
    maj_termine: null,
    collectivite_id: 1,
    thematiques: thematiquesVue,
    sous_thematiques: sousThematiquesVue,
    partenaires: partenairesVue,
    structures: [
      {
        collectivite_id: 1,
        nom: 'structure test test',
      } as Database['public']['Tables']['structure_tag']['Insert'],
    ],
    pilotes: pilotesVue,
    referents: referentsVue,
    annexes: annexesVue,
    axes: axesVue,
    actions: actionVue,
    indicateurs: indicateursVue,
    services : servicesVue,
    financeurs : financeursVue
  } as FicheActionVueUpdate;

  // Utilise `as never`, l'upsert dans les vues n'étant pas prévu par la lib Supabase.
  const check = await supabase.from('fiches_action').update(ficheVue as never).select();
  console.log(check.data!);
  const checkVue = await supabase.from('fiches_action').select().eq('id', fId);
  // console.log(checkVue.data![0]);
  // console.logcheckVue.status);
  const objectiVerif: string = checkVue.data![0].objectifs as string;
  // assertEquals(objectiVerif, 'verif');
  // assertEquals(checkVue.data![0].structures!.length, 1);
  await signOut();
});

Deno.test('Création d\'une fiche en utilisant la vue', async () => {
  await testReset();
  await signIn('yolododo');

  // Une fiche dans les données de test
  const selectResponse1 = await supabase.from('fiches_action').
  select().
  eq('collectivite_id', 1);
  assertExists(selectResponse1.data);
  assertEquals(13, selectResponse1.data.length);

  // La fiche est insérée et est renvoyée avec un id
  const insertResponse =
      await supabase.from('fiches_action').
      insert({'collectivite_id': 2} as never).
      select();
  assertExists(insertResponse.data);
  assertExists(insertResponse.data[0]['id']);

  // La fiche est présente dans la vue.
  const selectResponse2 = await supabase.from('fiches_action').
  select().
  eq('collectivite_id', 2);
  assertExists(selectResponse2.data);
  assertEquals(1, selectResponse2.data.length);

  await signOut();
});

Deno.test('Suppression d\'une fiche', async () => {
  await testReset();
  await signIn('yolododo');

  // Une fiche dans les données de test
  const selectResponse1 = await supabase.from('fiches_action').
  select().
  eq('collectivite_id', 1);
  assertExists(selectResponse1.data);
  assertEquals(13, selectResponse1.data.length);

  const id = selectResponse1.data[0]['id'];
  assertExists(id);

  const deleteResponse = await supabase.from('fiche_action').
  delete().
  eq('id', id);
  assertEquals(204, deleteResponse.status);

  const selectResponse2 = await supabase.from('fiches_action').
  select().
  eq('collectivite_id', 2);
  assertExists(selectResponse2.data);
  assertEquals(0, selectResponse2.data.length);

  await signOut();
});

Deno.test('Vue personne pilote', async () => {
  await testReset();
  await signIn('yolododo');

  // Une fiche dans les données de test
  const selectResponse1 = await supabase.from('fiche_action_personne_pilote').
  select().
  eq('collectivite_id', 1);
  assertExists(selectResponse1.data);
  assertEquals(6, selectResponse1.data.length);

  await signOut();
});

Deno.test('Vue personne référente', async () => {
  await testReset();
  await signIn('yolododo');

  // Une fiche dans les données de test
  const selectResponse1 = await supabase.from('fiche_action_personne_referente').
  select().
  eq('collectivite_id', 1);
  assertExists(selectResponse1.data);
  assertEquals(6, selectResponse1.data.length);

  await signOut();
});

Deno.test('Plan d\'action' , async () => {
  await testReset();
  await signIn('yolododo');

  // Une fiche dans les données de test
  const selectResponse1 = await supabase.rpc('plan_action', {'id': 1});
  assertExists(selectResponse1.data);
  console.log(selectResponse1)

  await signOut();
});
Deno.test('Plan d\'actions d\'une collectivité' , async () => {
  await testReset();
  await signIn('yolododo');

  // La liste des axes sans parents qui sont donc des plans.
  const selectResponse1 = await supabase.from('axe').select().eq('collectivite_id', 1).is('parent', null);
  assertExists(selectResponse1.data);
  console.log(selectResponse1)

  await signOut();
});
