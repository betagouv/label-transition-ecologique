import {Database} from 'types/database.types';
import Modal, {RenderProps} from 'ui/shared/floating-ui/Modal';
import PreuveDoc from 'ui/shared/preuves/Bibliotheque/PreuveDoc';
import {AddRapportButton} from './AddRapportButton';
import {useRapportAudit} from './useAudit';

type TAuditRow = Database['public']['Tables']['audit']['Row'];
export type TValiderAuditProps = {
  audit: TAuditRow;
  onValidate: (audit?: TAuditRow) => void;
};

/**
 * Affiche le bouton permettant d'ouvrir la modale de validation d'un audit
 */
export const ValiderAudit = (props: TValiderAuditProps) => (
  <Modal
    size="lg"
    disableDismiss
    render={modalProps => <ValiderAuditModal {...modalProps} {...props} />}
  >
    <button className="fr-btn">Valider l'audit</button>
  </Modal>
);

const auditSansLabellisation =
  "Suite à cette validation, et après vérification par l'équipe Territoires en Transitions, un nouveau cycle va démarrer avec le score validé par l'audit.";
const auditLabellisation =
  'Suite à cette validation, plus aucune modification ne sera possible dans le cadre de l’audit et le secrétariat de la Commission nationale du label (CNL) sera notifié pour réceptionner le dossier de candidature complet et le transmettre aux membres de la CNL.';

/**
 * Affiche la modale de validation d'un audit
 */
export const ValiderAuditModal = (props: RenderProps & TValiderAuditProps) => {
  const {audit, close, onValidate} = props;
  const {id: audit_id, demande_id} = audit;

  // on peut valider seulement si le rapport a été attaché à l'audit
  const rapport = useRapportAudit(audit_id);
  const canValidate = Boolean(rapport);

  return (
    <div>
      <h4>Valider l'audit</h4>
      <p>
        Pour clôturer l’audit, merci de joindre votre rapport définitif
        (disponible dans la bibliothèque de documents et visible par les membres
        de la communauté).
      </p>
      <AddRapportButton audit_id={audit_id} />
      {rapport ? <PreuveDoc preuve={rapport} readonly /> : null}
      <p className="fr-mt-4w">
        {demande_id ? auditLabellisation : auditSansLabellisation}
      </p>
      <div className="flex">
        <button
          className="fr-btn fr-btn--sm fr-mr-2w"
          onClick={() => {
            onValidate(audit);
            close();
          }}
          disabled={!canValidate}
        >
          Valider l'audit
        </button>
        <button
          className="fr-btn fr-btn--sm fr-btn--secondary"
          onClick={() => close()}
        >
          Annuler
        </button>
      </div>
    </div>
  );
};
