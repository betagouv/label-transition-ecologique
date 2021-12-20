import React, {useState} from 'react';
import * as Yup from 'yup';
import {Field, Form, Formik, useFormikContext} from 'formik';
import LabeledTextField from 'ui/forms/LabeledTextField';
import {ActionsField} from 'app/pages/collectivite/PlanActions/Forms/ActionsField';
import {IndicateursField} from 'app/pages/collectivite/PlanActions/Forms/IndicateursField';
import {IndicateursPersonnalisesField} from 'app/pages/collectivite/PlanActions/Forms/IndicateursPersonnalisesField';
import {ActionReferentielAvancementCard} from 'ui/referentiels';
import {actions} from 'generated/data/referentiels';
import {IndicateurPersonnaliseStorable} from 'storables/IndicateurPersonnaliseStorable';
import {Spacer} from 'ui/shared';
import {IndicateurPersonnaliseCreationDialog} from 'app/pages/collectivite/Indicateurs/IndicateurPersonnaliseCreationDialog';
import {AvancementRadioField} from 'app/pages/collectivite/PlanActions/Forms/AvancementRadioField';
import {searchActionById} from 'utils/actions';
import {PlanCategoriesSelectionField} from 'app/pages/collectivite/PlanActions/Forms/PlanCategoriesSelectionField';
import {IndicateurPersonnaliseCard} from 'app/pages/collectivite/Indicateurs/IndicateurPersonnaliseCard';
import {IndicateurReferentielCard} from 'app/pages/collectivite/Indicateurs/IndicateurReferentielCard';
import {FicheActionWrite} from 'generated/dataLayer/fiche_action_write';
import {FicheActionRead} from 'generated/dataLayer/fiche_action_read';
import {IndicateurReferentiel} from 'generated/models';

/**
 * Stores both plan and category uid, represents the user's selection of a
 * category in a plan. The category is optional as a fiche can be
 * uncategorized inside a plan.
 */
export interface PlanCategorieSelection {
  categorieUid?: string;
  planUid: string;
}

/**
 * Represent the user's categories selection as a fiche can belong to many
 * plans.
 */
export interface planCategorieSelections {
  planCategories: PlanCategorieSelection[];
}

/**
 * Join categories data with fiche data as the form data that will be saved.
 */
export type FicheActionFormData = planCategorieSelections & FicheActionWrite;

type FicheActionFormProps = {
  fiche: FicheActionWrite;
  planCategories: PlanCategorieSelection[];
  onSave: (data: FicheActionFormData) => void;
};

type FormState = 'ready' | 'saving';

/**
 * Prevents enter key submitting the form.
 */
function onKeyDown(event: React.KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}

const LinkedActionsReferentielCards = () => {
  const {values} = useFormikContext<FicheActionRead>();
  const linkedActions = values.action_ids.map(
    actionId => searchActionById(actionId, actions)!
  );

  return (
    <div>
      {linkedActions.map(action => (
        <ActionReferentielAvancementCard
          key={action.id}
          action={action}
          displayProgressStat={false}
          displayAddFicheActionButton={false}
        />
      ))}
    </div>
  );
};

const LinkedIndicateurCards = () => {
  const {values} = useFormikContext<FicheActionRead>();
  // todo use indicateur repo
  const linkedIndicateurs: IndicateurReferentiel[] = [];
  return (
    <div>
      {linkedIndicateurs.map(indicateur => {
        if (indicateur)
          return (
            <IndicateurReferentielCard
              indicateur={indicateur}
              key={indicateur.uid}
            />
          );
        return <i>indicateur manquant</i>;
      })}
    </div>
  );
};

const LinkedIndicateurPersonnaliseCards = () => {
  // todo fetch indicateurs personnalisés
  const indicateurPersonnalises: IndicateurPersonnaliseStorable[] = [];

  const {values} = useFormikContext<FicheActionRead>();
  const linkedIndicateursPersonnalises = values.indicateur_personnalise_ids.map(
    // todo search in indicateurPersonnalises for matches with fiche indicateur_personnalise_ids
    indicateurId => indicateurPersonnalises.find(indicateur => true)
  );

  return (
    <div className="flex flex-col justify-between mt-6">
      {linkedIndicateursPersonnalises.map(indicateur => {
        if (indicateur)
          return (
            <IndicateurPersonnaliseCard
              indicateur={indicateur}
              key={indicateur.uid}
            />
          );
        return <></>;
      })}
    </div>
  );
};

/**
 * Used to edit a fiche.
 *
 * This form have two usages:
 * - edition via FicheActionEditor
 * - creation via FicheActionCreator
 *
 * @param props used to pass the data.
 */
export const FicheActionForm = (props: FicheActionFormProps) => {
  const [state, setState] = useState<FormState>('ready');

  const validation = Yup.object({
    // collectivite_id: Yup.string().max(36).required(),
    uid: Yup.string().max(36).required(),
    numerotation: Yup.string().max(36),
    avancement: Yup.string().max(36).required(),
    en_retard: Yup.boolean().required(),
    action_ids: Yup.array(),
    indicateur_ids: Yup.array(),
    titre: Yup.string()
      .max(300, 'Ce champ doit faire au maximum 300 caractères')
      .required('Champ requis'),
    description: Yup.string(),
    budget_global: Yup.number()
      .transform(
        (value, originalValue) => (/\s/.test(originalValue) ? NaN : value) // disallow whitespaces
      )
      .typeError('Ce champ ne doit comporter que des chiffres sans espaces'),
    personne_referente: Yup.string().max(
      100,
      'Ce champ doit faire au maximum 100 caractères'
    ),
    structure_pilote: Yup.string().max(
      300,
      'Ce champ doit faire au maximum 300 caractères'
    ),
    partenaires: Yup.string().max(
      300,
      'Ce champ doit faire au maximum 300 caractères'
    ),
    elu_referent: Yup.string().max(
      300,
      'Ce champ doit faire au maximum 300 caractères'
    ),
    commentaire: Yup.string(),
    // date_debut: Yup.date(),
    // date_fin: Yup.date(),
    indicateur_personnalise_ids: Yup.array(),
    planCategories: Yup.array().min(
      1,
      "Une fiche doit être rattachée à au moins un plan d'action."
    ),
  });

  const save = (data: FicheActionFormData) => {
    if (state !== 'ready') return;
    setState('saving');
    props.onSave(data);
  };

  return (
    <Formik<FicheActionFormData>
      initialValues={{
        ...props.fiche,
        planCategories: props.planCategories,
      }}
      // validationSchema={validation}
      onSubmit={save}
    >
      {() => (
        <Form onKeyDown={onKeyDown}>
          <div className="max-w-2xl">
            <Field
              name="numerotation"
              label="Numérotation de l'action"
              hint="ex: 1.2.3, A.1.a, 1.1 permet le classement"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="titre"
              label="Titre *"
              hint="Champ requis"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="planCategories"
              label="Plans d'actions"
              ficheUid={props.fiche.uid}
              component={PlanCategoriesSelectionField}
            />

            <Spacer />

            <Field
              name="description"
              label="Description"
              type="area"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="avancement"
              label="Avancement"
              component={AvancementRadioField}
            />

            <Spacer />

            <label>
              <Field type="checkbox" name="en_retard" />
              <span className="ml-2">Action en retard</span>
            </label>
            <Spacer />

            <Field
              name="structure_pilote"
              label="Structure pilote"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="personne_referente"
              label="Personne référente"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="elu_referent"
              label="Élu référent"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="partenaires"
              label="Partenaires"
              component={LabeledTextField}
            />
            <Spacer />

            <Field
              name="budget_global"
              label="Budget global"
              hint="Ce champ ne doit comporter que des chiffres sans espaces"
              component={LabeledTextField}
            />
            <Spacer />

            <fieldset className="flex flex-row">
              <div className="flex flex-col mr-5">
                <label className="fr-label mb-2" htmlFor="fiche_create_debut">
                  Date de début
                </label>
                <Field
                  name="date_debut"
                  type="date"
                  className="fr-input bg-beige p-3 border-b-2 border-gray-500"
                />
              </div>

              <div className="flex flex-col mr-5">
                <label className="fr-label mb-2" htmlFor="fiche_create_debut">
                  Date de fin
                </label>
                <Field
                  name="date_fin"
                  type="date"
                  className="fr-input bg-beige p-3 border-b-2 border-gray-500"
                />
              </div>
            </fieldset>
            <Spacer />
          </div>

          <Field
            name="action_ids"
            label="Actions des référentiels liées"
            component={ActionsField}
          />
          <LinkedActionsReferentielCards />

          <Spacer />

          <Field
            name="indicateur_ids"
            label="Indicateurs des référentiels liés"
            component={IndicateursField}
          />
          <LinkedIndicateurCards />

          <Spacer />

          <Field
            name="indicateur_personnalise_ids"
            label="Indicateurs personnalisés liés"
            component={IndicateursPersonnalisesField}
          />

          <Spacer size={2} />

          <IndicateurPersonnaliseCreationDialog buttonClasses="fr-btn--secondary" />

          <LinkedIndicateurPersonnaliseCards />

          <div className="flex flex-row-reverse mb-12">
            {state === 'ready' && (
              <button className="fr-btn" type="submit">
                Enregistrer
              </button>
            )}
            {state === 'saving' && (
              <button className="fr-btn" type="submit" disabled>
                Enregistrement en cours...
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
