import {useState} from 'react';

import {
  Checkbox,
  Field,
  FormSection,
  FormSectionGrid,
  Modal,
  ModalFooterOKCancel,
  ModalProps,
  SelectFilter,
} from '@tet/ui';
import {QueryKey} from 'react-query';
import PersonnesDropdown from 'ui/dropdownLists/PersonnesDropdown/PersonnesDropdown';
import {Filtre} from '@tet/api/dist/src/fiche_actions/fiche_resumes.list/domain/fetch_options.schema';
import {
  ficheActionNiveauPrioriteOptions,
  ficheActionStatutOptions,
} from 'app/pages/collectivite/PlansActions/FicheAction/data/options/listesStatiques';
import {TFicheActionNiveauxPriorite, TFicheActionStatuts} from 'types/alias';
import BadgeStatut from 'app/pages/collectivite/PlansActions/components/BadgeStatut';
import BadgePriorite from 'app/pages/collectivite/PlansActions/components/BadgePriorite';
import {
  getPilotesValues,
  getReferentsValues,
  splitPilotePersonnesAndUsers,
  splitReferentPersonnesAndUsers,
} from 'ui/dropdownLists/PersonnesDropdown/utils';
import ServicesPilotesDropdown from 'ui/dropdownLists/ServicesPilotesDropdown/ServicesPilotesDropdown';
import ThematiquesDropdown from 'ui/dropdownLists/ThematiquesDropdown/ThematiquesDropdown';
import FinanceursDropdown from 'ui/dropdownLists/FinanceursDropdown/FinanceursDropdown';

type Props = ModalProps & {
  filters: Filtre;
  setFilters: (filters: Filtre) => void;
  keysToInvalidate?: QueryKey[];
};

const ModalFiltresToutesLesFichesAction = ({
  openState,
  filters,
  setFilters,
  keysToInvalidate,
}: Props) => {
  const [filtreState, setFiltreState] = useState<Filtre>(filters);

  const pilotes = getPilotesValues(filtreState);
  const referents = getReferentsValues(filtreState);

  return (
    <Modal
      openState={openState}
      render={() => (
        <>
          <FormSection title="Nouveau filtre :" className="!grid-cols-1">
            <Field title="Pilote">
              <PersonnesDropdown
                values={pilotes}
                onChange={({personnes}) => {
                  setFiltreState({
                    ...filtreState,
                    ...splitPilotePersonnesAndUsers(personnes),
                  });
                }}
              />
            </Field>
            <Field title="Direction ou service pilote">
              <ServicesPilotesDropdown
                values={
                  filtreState.servicePiloteIds?.length
                    ? filtreState.servicePiloteIds
                    : undefined
                }
                onChange={({services}) => {
                  setFiltreState({...filtreState, servicePiloteIds: services});
                }}
              />
            </Field>
            <FormSectionGrid>
              <Field title="Statut de l'action">
                <SelectFilter
                  values={filtreState.statuts ?? undefined}
                  options={ficheActionStatutOptions}
                  onChange={({values}) => {
                    const {statuts, ...rest} = filtreState;
                    if (values) {
                      setFiltreState({
                        ...filtreState,
                        statuts: values as TFicheActionStatuts[],
                      });
                    } else {
                      setFiltreState(rest);
                    }
                  }}
                  customItem={item => (
                    <BadgeStatut statut={item.value as TFicheActionStatuts} />
                  )}
                />
              </Field>
              <Field title="Niveau de priorité">
                <SelectFilter
                  values={filtreState.priorites ?? undefined}
                  options={ficheActionNiveauPrioriteOptions}
                  onChange={({values}) => {
                    const {priorites, ...rest} = filtreState;
                    if (values) {
                      setFiltreState({
                        ...filtreState,
                        priorites: values as TFicheActionNiveauxPriorite[],
                      });
                    } else {
                      setFiltreState(rest);
                    }
                  }}
                  customItem={item => (
                    <BadgePriorite
                      priorite={item.value as TFicheActionNiveauxPriorite}
                    />
                  )}
                />
              </Field>
            </FormSectionGrid>
            <Field title="Thématique">
              <ThematiquesDropdown
                values={
                  filtreState.thematiqueIds &&
                  filtreState.thematiqueIds.length > 0
                    ? filtreState.thematiqueIds
                    : undefined
                }
                onChange={({thematiques}) =>
                  setFiltreState({
                    ...filtreState,
                    thematiqueIds: thematiques.map(t => t.id),
                  })
                }
              />
            </Field>
            <Field title="Financeur">
              <FinanceursDropdown
                values={
                  filtreState.financeurIds &&
                  filtreState.financeurIds.length > 0
                    ? filtreState.financeurIds
                    : undefined
                }
                onChange={({financeurs}) => {
                  setFiltreState({...filtreState, financeurIds: financeurs});
                }}
              />
            </Field>
          </FormSection>
          <Field title="Élu·e référent·e">
            <PersonnesDropdown
              values={referents}
              onChange={({personnes}) => {
                setFiltreState({
                  ...filtreState,
                  ...splitReferentPersonnesAndUsers(personnes),
                });
              }}
            />
          </Field>
          <Checkbox
            label="Budget renseigné"
            checked={filtreState.budgetPrevisionnel}
            onChange={() =>
              setFiltreState({
                ...filtreState,
                budgetPrevisionnel: !filtreState.budgetPrevisionnel,
              })
            }
          />
          <Checkbox
            label="Confidentialité"
            checked={filtreState.restreint}
            onChange={() =>
              setFiltreState({
                ...filtreState,
                restreint: !filtreState.restreint,
              })
            }
          />
          <Checkbox
            label="Indicateur(s) lié"
            checked={filtreState.hasIndicateurLies}
            onChange={() =>
              setFiltreState({
                ...filtreState,
                hasIndicateurLies: !filtreState.hasIndicateurLies,
              })
            }
          />
        </>
      )}
      renderFooter={({close}) => (
        <ModalFooterOKCancel
          btnCancelProps={{
            onClick: () => close(),
          }}
          btnOKProps={{
            onClick: () => {
              setFilters(filtreState);
              close();
            },
          }}
        />
      )}
    />
  );
};

export default ModalFiltresToutesLesFichesAction;