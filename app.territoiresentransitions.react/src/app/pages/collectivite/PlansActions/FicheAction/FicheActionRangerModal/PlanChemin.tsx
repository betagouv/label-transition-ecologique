import FilAriane from 'ui/shared/FilAriane';
import {
  generateFilArianeLinks,
  usePlanActionChemin,
} from '../../PlanAction/data/usePlanActionChemin';
import {TAxeRow} from '../data/types/alias';
import {FicheActionVueRow} from '../data/types/ficheActionVue';
import {useRemoveFicheFromAxe} from '../data/useRemoveFicheFromAxe';

type Props = {
  fiche: FicheActionVueRow;
  axe_id: number;
};

const PlanChemin = ({fiche, axe_id}: Props) => {
  const {data} = usePlanActionChemin(axe_id);

  const {mutate: removeFiche} = useRemoveFicheFromAxe();

  return (
    <div className="group flex items-center py-1 px-2 rounded-sm hover:bg-bf925">
      <div className="py-0.5">
        <FilAriane
          links={
            data
              ? generateFilArianeLinks({
                  collectiviteId: fiche.collectivite_id!,
                  chemin: data.chemin as TAxeRow[],
                  titreFiche: fiche.titre ?? 'Sans titre',
                  noLinks: true,
                })
              : []
          }
        />
      </div>
      <button
        className="rounded-full"
        onClick={() =>
          removeFiche({
            axe_id,
            fiche_id: fiche.id!,
          })
        }
      >
        <div className="fr-fi-delete-line invisible group-hover:visible scale-75" />
      </button>
    </div>
  );
};

export default PlanChemin;
