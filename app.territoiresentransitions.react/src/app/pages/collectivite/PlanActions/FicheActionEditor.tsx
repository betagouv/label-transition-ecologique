import {useHistory, useParams} from 'react-router-dom';
import {useFiche} from 'core-logic/hooks/fiches';
import {FicheActionStorable} from 'storables/FicheActionStorable';
import {
  FicheActionForm,
  FicheActionFormData,
  PlanCategorieSelection,
} from 'app/pages/collectivite/PlanActions/Forms/FicheActionForm';
import {FicheActionInterface} from 'generated/models/fiche_action';
import {getFicheActionStoreForEpci} from 'core-logic/api/hybridStores';
import {updatePlansOnFicheSave} from 'core-logic/commands/plans';
import {useState} from 'react';

/**
 * This is the main component of FicheActionPage, use to show a fiche.
 */
const FicheActionEditor = () => {
  const {epciId, ficheUid} = useParams<{epciId: string; ficheUid: string}>();
  const [planCategories, setPlanCategories] = useState<
    PlanCategorieSelection[]
  >([]);
  const ficheActionStore = getFicheActionStoreForEpci(epciId);
  const ficheStorableId = FicheActionStorable.buildId(epciId, ficheUid);
  const history = useHistory();
  const fiche = useFiche(ficheStorableId, epciId);

  const saveFiche = async (fiche: FicheActionInterface) => {
    await ficheActionStore.store(new FicheActionStorable(fiche));
  };

  const save = async (data: FicheActionFormData) => {
    await saveFiche(data);
    await updatePlansOnFicheSave(data);
    history.push(`/collectivite/${epciId}/plan_actions`);
  };

  return (
    <main className="fr-container pt-8">
      <h1>Ma fiche action</h1>
      {fiche && (
        <FicheActionForm
          fiche={fiche}
          planCategories={planCategories}
          onSave={save}
        />
      )}
      {!fiche && <h2>Aucune fiche trouvée</h2>}
    </main>
  );
};

export default FicheActionEditor;
