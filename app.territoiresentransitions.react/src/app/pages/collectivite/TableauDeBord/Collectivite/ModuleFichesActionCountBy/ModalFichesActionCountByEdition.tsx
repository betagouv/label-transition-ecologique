import { useState } from 'react';
import { QueryKey, useQueryClient } from 'react-query';

import {
  Divider,
  Field,
  FormSection,
  Input,
  Modal,
  ModalFooterOKCancelWithSteps,
  ModalProps,
  Option,
  Select,
} from '@/ui';
import { cloneDeep } from 'es-toolkit';

import { modulesSave } from '@/api/plan-actions/dashboards/collectivite-dashboard';
import {
  ModuleFicheActionCountByInsert,
  ModuleFicheActionCountBySelect,
} from '@/api/plan-actions/dashboards/collectivite-dashboard/domain/module.schema';
import { supabaseClient } from '@/app/core-logic/api/supabase';
import {
  CountByPropertyEnumType,
  ficheActionForCountBySchema,
} from '@/domain/plans/fiches';
import { useCollectiviteId } from '../../../../../../core-logic/hooks/params';
import MenuFiltresToutesLesFichesAction from '../../../PlansActions/ToutesLesFichesAction/MenuFiltresToutesLesFichesAction';

enum ModalFichesActionCountByEditionStep {
  GENERAL_PARAMETERS = 1,
  FILTER = 2,
}

export const countByPropertyOptions: Option[] = Object.entries(
  ficheActionForCountBySchema.shape
).map(([key, value]) => ({
  value: key,
  label: value.description || key,
}));
console.log('entries', countByPropertyOptions);

const getNewModule = (
  collectiviteId: number
): ModuleFicheActionCountByInsert => {
  return {
    id: crypto.randomUUID(),
    titre: '',
    collectiviteId,
    type: 'fiche-action.count-by',
    options: {
      countByProperty: 'statut',
      filtre: {},
    },
  };
};

type Props = ModalProps & {
  module?: ModuleFicheActionCountBySelect;
  keysToInvalidate?: QueryKey[];
};
const ModalFichesActionCountByEdition = ({
  openState,
  module,
  keysToInvalidate,
}: Props) => {
  const queryClient = useQueryClient();
  const collectiviteId = useCollectiviteId();

  const [editionStep, setEditionStep] =
    useState<ModalFichesActionCountByEditionStep>(
      ModalFichesActionCountByEditionStep.GENERAL_PARAMETERS
    );

  const [moduleState, setModuleState] =
    useState<ModuleFicheActionCountByInsert>(
      cloneDeep(module) || getNewModule(collectiviteId || 0)
    );

  return (
    <Modal
      openState={openState}
      size="lg"
      title={
        module
          ? 'Modifier un module personnalisé'
          : 'Créer un module personnalisé'
      }
      render={() => {
        if (
          editionStep === ModalFichesActionCountByEditionStep.GENERAL_PARAMETERS
        ) {
          return (
            <>
              <FormSection
                title="Étape 1/2 : Paramétrez votre nouveau graphique circulaire"
                className="!grid-cols-1"
              >
                <Field title="Nom du module :" className="md:col-span-3">
                  <Input
                    placeholder="Ajouter un titre"
                    type="text"
                    value={moduleState.titre}
                    onChange={(evt) => {
                      setModuleState({
                        ...moduleState,
                        titre: evt.target.value,
                      });
                    }}
                  />
                </Field>

                <Field
                  title="Répartition des fiches action par :"
                  state="info"
                  message="Ce paramètre vous permet de choisir l’affichage selon lequel votre graphique sera trié."
                  className="md:col-span-3"
                >
                  <Select
                    placeholder="Sélectionner une valeur"
                    options={countByPropertyOptions}
                    values={moduleState.options.countByProperty}
                    onChange={(v) => {
                      if (v) {
                        setModuleState({
                          ...moduleState,
                          options: {
                            ...moduleState.options,
                            countByProperty:
                              v.toString() as CountByPropertyEnumType,
                          },
                        });
                      }
                    }}
                  />
                </Field>
              </FormSection>
              <Divider />
            </>
          );
        } else {
          return (
            <>
              <MenuFiltresToutesLesFichesAction
                title="Etape 2/2 : Choisissez les conditions applicables aux fiches actions"
                filters={moduleState.options.filtre}
                setFilters={(filtre) => {
                  setModuleState({
                    ...moduleState,
                    options: {
                      ...moduleState.options,
                      filtre: filtre,
                    },
                  });
                }}
              />
            </>
          );
        }
      }}
      renderFooter={({ close }) => (
        <ModalFooterOKCancelWithSteps
          stepsCount={2}
          currentStep={editionStep}
          onStepChange={(step) => setEditionStep(step)}
          btnCancelProps={{
            onClick: () => close(),
          }}
          btnOKProps={{
            children: module ? 'Modifier le module' : 'Ajouter le module',
            onClick: async () => {
              console.log('moduleState', moduleState);

              await modulesSave({
                dbClient: supabaseClient,
                module: moduleState,
              });

              keysToInvalidate?.forEach((key) =>
                queryClient.invalidateQueries(key)
              );
              close();
            },
          }}
        />
      )}
    />
  );
};

export default ModalFichesActionCountByEdition;
