import { FicheAction } from '@/api/plan-actions';
import {
  Checkbox,
  Field,
  FormSectionGrid,
  Input,
  Modal,
  ModalFooterOKCancel,
  Textarea,
  useEventTracker,
} from '@tet/ui';
import { useCurrentCollectivite } from 'core-logic/hooks/useCurrentCollectivite';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import MiseEnOeuvreDropdown from 'ui/dropdownLists/ficheAction/MiseEnOeuvreDropdown/MiseEnOeuvreDropdown';
import PrioritesSelectDropdown from 'ui/dropdownLists/ficheAction/priorites/PrioritesSelectDropdown';
import StatutsSelectDropdown from 'ui/dropdownLists/ficheAction/statuts/StatutsSelectDropdown';
import { getIsoFormattedDate } from 'utils/formatUtils';

type ModalePlanningProps = {
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
  fiche: FicheAction;
  updateFiche: (fiche: FicheAction) => void;
};

const ModalePlanning = ({
  isOpen,
  setIsOpen,
  fiche,
  updateFiche,
}: ModalePlanningProps) => {
  const [editedFiche, setEditedFiche] = useState(fiche);
  const [isDateDebutError, setIsDateDebutError] = useState(false);
  const [isDateFinError, setIsDateFinError] = useState(false);

  const tracker = useEventTracker('app/fiche-action');
  const collectivite = useCurrentCollectivite();
  const collectiviteId = collectivite?.collectivite_id || null;

  useEffect(() => {
    if (isOpen) setEditedFiche(fiche);
  }, [isOpen]);

  const handleSave = () => {
    if (!_.isEqual(fiche, editedFiche)) {
      updateFiche(editedFiche);
    }
  };

  const dateDebutRef = useRef<HTMLInputElement>(null);
  const dateFinRef = useRef<HTMLInputElement>(null);

  return (
    <Modal
      openState={{ isOpen, setIsOpen }}
      title="Planning prévisionnel"
      size="lg"
      render={({ descriptionId }) => (
        <FormSectionGrid formSectionId={descriptionId}>
          {/* Date de début */}
          <Field
            title="Date de début"
            className="max-md:col-span-2"
            state={isDateDebutError ? 'error' : 'default'}
            message={
              isDateDebutError
                ? 'La date de début doit être antérieure à la date de fin prévisionnelle'
                : undefined
            }
          >
            <Input
              ref={dateDebutRef}
              type="date"
              state={isDateDebutError ? 'error' : 'default'}
              max={
                editedFiche.dateFinProvisoire
                  ? getIsoFormattedDate(editedFiche.dateFinProvisoire)
                  : undefined
              }
              value={
                editedFiche.dateDebut
                  ? getIsoFormattedDate(editedFiche.dateDebut)
                  : ''
              }
              onChange={(evt) => {
                if (
                  editedFiche.dateFinProvisoire &&
                  new Date(evt.target.value) >
                    new Date(editedFiche.dateFinProvisoire)
                ) {
                  setIsDateDebutError(true);
                } else setIsDateDebutError(false);

                setEditedFiche((prevState) => ({
                  ...prevState,
                  dateDebut:
                    evt.target.value.length !== 0 ? evt.target.value : null,
                }));
              }}
            />
          </Field>

          {/* Date de fin prévisionnelle */}
          <Field
            title="Date de fin prévisionnelle"
            className="max-md:col-span-2"
            state={isDateFinError ? 'error' : 'default'}
            message={
              isDateFinError
                ? 'La date de fin prévisionnelle doit être postérieure à la date de début'
                : undefined
            }
          >
            <Input
              ref={dateFinRef}
              type="date"
              state={isDateFinError ? 'error' : 'default'}
              min={
                editedFiche.dateDebut !== null
                  ? getIsoFormattedDate(editedFiche.dateDebut ?? '')
                  : undefined
              }
              title={
                editedFiche.ameliorationContinue
                  ? "Ce champ ne peut pas être modifié si l'action se répète tous les ans"
                  : undefined
              }
              disabled={editedFiche.ameliorationContinue ?? false}
              value={
                editedFiche.dateFinProvisoire
                  ? getIsoFormattedDate(editedFiche.dateFinProvisoire)
                  : ''
              }
              onChange={(evt) => {
                if (
                  editedFiche.dateDebut &&
                  new Date(evt.target.value) < new Date(editedFiche.dateDebut)
                ) {
                  setIsDateFinError(true);
                } else setIsDateFinError(false);

                setEditedFiche((prevState) => ({
                  ...prevState,
                  dateFinProvisoire:
                    evt.target.value.length !== 0 ? evt.target.value : null,
                }));
              }}
            />
          </Field>

          {/* Amélioration continue */}
          <div className="col-span-2 mb-2">
            <Checkbox
              label="L'action se répète tous les ans"
              message="Sans date de fin prévisionnelle"
              checked={editedFiche.ameliorationContinue ?? false}
              onChange={(evt) => {
                const isChecked = evt.target.checked;
                const dateFin = isChecked
                  ? null
                  : editedFiche.dateFinProvisoire;
                setEditedFiche((prevState) => ({
                  ...prevState,
                  ameliorationContinue: isChecked,
                  dateFinProvisoire: dateFin,
                }));
              }}
            />
          </div>

          {/* Temps de mise en oeuvre */}
          <Field title="Temps de mise en œuvre" className="col-span-2">
            <MiseEnOeuvreDropdown
              values={editedFiche.tempsDeMiseEnOeuvre}
              onChange={(tempsDeMiseEnOeuvre) =>
                setEditedFiche((prevState) => ({
                  ...prevState,
                  tempsDeMiseEnOeuvre: tempsDeMiseEnOeuvre ?? null,
                }))
              }
            />
          </Field>

          {/* Statut */}
          <Field title="Statut" className="max-md:col-span-2">
            <StatutsSelectDropdown
              values={editedFiche.statut}
              onChange={(statut) =>
                setEditedFiche((prevState) => ({
                  ...prevState,
                  statut: statut ?? null,
                }))
              }
            />
          </Field>

          {/* Niveau de priorité */}
          <Field title="Niveau de priorité" className="max-md:col-span-2">
            <PrioritesSelectDropdown
              values={editedFiche.niveauPriorite}
              onChange={(priorite) =>
                setEditedFiche((prevState) => ({
                  ...prevState,
                  niveauPriorite: priorite ?? null,
                }))
              }
            />
          </Field>

          {/* Justification du calendrier */}
          <Field
            title="Calendrier"
            hint="Si l’action est en pause ou abandonnée, expliquez pourquoi"
            className="col-span-2"
          >
            <Textarea
              className="min-h-[50px]"
              value={editedFiche.calendrier ?? ''}
              onChange={(evt) =>
                setEditedFiche((prevState) => ({
                  ...prevState,
                  calendrier: (evt.target as HTMLTextAreaElement).value,
                }))
              }
            />
          </Field>
        </FormSectionGrid>
      )}
      // Boutons pour valider / annuler les modifications
      renderFooter={({ close }) => (
        <ModalFooterOKCancel
          btnCancelProps={{ onClick: close }}
          btnOKProps={{
            disabled: isDateDebutError || isDateFinError,
            onClick: () => {
              collectiviteId &&
                tracker('validation_modale_planning_fa', {
                  collectivite_id: collectiviteId,
                });
              handleSave();
              close();
            },
          }}
        />
      )}
    />
  );
};

export default ModalePlanning;
