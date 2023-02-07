import Dialog from '@material-ui/core/Dialog';
import {useState} from 'react';
import {CloseDialogButton} from 'ui/shared/CloseDialogButton';
import {TSujetDemande} from './types';
import {useEnvoiDemande} from './useEnvoiDemande';
import {
  TDemandeLabellisationModalProps,
  submittedAutresEtoiles,
} from './DemandeLabellisationModal';

/**
 * Affiche la modale de sélection du type d'audit souhaité et d'envoie de la
 * demande d'audit
 */
export const DemandeAuditModal = (props: TDemandeLabellisationModalProps) => {
  const {isLoading, envoiDemande} = useEnvoiDemande();
  const {parcoursLabellisation, opened, setOpened} = props;
  const {parcours, status, labellisable} = parcoursLabellisation;
  const {collectivite_id, referentiel, etoiles} = parcours || {};
  const [sujet, setSujet] = useState<TSujetDemande | null>(
    !labellisable ? 'cot' : null
  );
  const onClose = () => setOpened(false);

  if (!collectivite_id || !referentiel) {
    return null;
  }

  return (
    <Dialog
      data-test="DemandeAuditModal"
      open={opened}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <div className="p-7 flex flex-col">
        <CloseDialogButton setOpened={setOpened} />
        <h3>Demander un audit</h3>
        <div className="w-full">
          {isLoading ? 'Envoi en cours...' : null}
          {status === 'demande_envoyee' ? (
            <div className="fr-alert fr-alert--success">
              {submittedAutresEtoiles}
            </div>
          ) : null}
          {status === 'non_demandee' && !isLoading ? (
            <fieldset className="fr-fieldset">
              <legend className="fr-fieldset__legend fr-text--regular">
                Quel type d’audit souhaitez-vous demander ?
              </legend>
              <div className="fr-radio-group fr-radio-group--sm fr-mb-4w">
                <RadioButton value="cot" sujet={sujet} setSujet={setSujet}>
                  Audit COT <b>sans</b> labellisation
                </RadioButton>
                <RadioButton
                  disabled={!labellisable}
                  value="labellisation_cot"
                  sujet={sujet}
                  setSujet={setSujet}
                >
                  Audit COT <b>avec</b> labellisation
                </RadioButton>
                <RadioButton
                  disabled={!labellisable}
                  value="labellisation"
                  sujet={sujet}
                  setSujet={setSujet}
                >
                  Audit <b>de</b> labellisation
                </RadioButton>
              </div>
              <button
                className="fr-btn"
                data-test="EnvoyerDemandeBtn"
                disabled={!sujet}
                onClick={() =>
                  sujet &&
                  envoiDemande({
                    collectivite_id,
                    etoiles: etoiles || null,
                    referentiel,
                    sujet,
                  })
                }
              >
                Envoyer ma demande
              </button>
              <button
                className="fr-btn fr-btn--secondary fr-ml-4w"
                onClick={onClose}
              >
                Annuler
              </button>
            </fieldset>
          ) : null}
        </div>
      </div>
    </Dialog>
  );
};

const RadioButton = ({
  disabled,
  value,
  children,
  sujet,
  setSujet,
}: {
  disabled?: boolean;
  value: TSujetDemande;
  children: React.ReactNode;
  sujet: TSujetDemande | null;
  setSujet: (value: TSujetDemande) => void;
}) => (
  <>
    <input
      type="radio"
      id={value}
      disabled={disabled}
      value={value}
      checked={sujet === value}
      onChange={() => setSujet(value)}
    />
    <label className="fr-label" htmlFor={value}>
      <span>{children}</span>
    </label>
  </>
);
