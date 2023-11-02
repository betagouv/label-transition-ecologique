import {useState} from 'react';
import {useParams} from 'react-router-dom';

import HeaderTitle from 'ui/HeaderTitle';
import PlanActionHeader from './PlanActionHeader';
import PlanActionFooter from './PlanActionFooter';
import PlanActionFiltresAccordeon from './PlanActionFiltres/PlanActionFiltresAccordeon';
import Arborescence from './DragAndDropNestedContainers/Arborescence';

import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import {checkAxeHasFiche} from './data/utils';
import {usePlanAction} from './data/usePlanAction';
import {useEditAxe} from './data/useEditAxe';
import {PlanNode} from './data/types';

type PlanActionProps = {
  /** Axe racine du plan d'action (depth = 0) */
  plan: PlanNode;
  /** Axe utilisé pour toutes les actions, que ce soit l'axe racine ou inférieur */
  axe: PlanNode;
  /** La liste des axes liés à ce plan d'action */
  axes: PlanNode[];
};

export const PlanAction = ({plan, axe, axes}: PlanActionProps) => {
  const collectivite = useCurrentCollectivite();

  const {mutate: updateAxe} = useEditAxe(axe.id);

  const isReadonly = collectivite?.readonly ?? false;

  // Permet de différentier une page axe d'une page plan
  const isAxePage = axe.depth === 1;

  const axeHasFiche = checkAxeHasFiche(axe, axes);

  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div data-test={isAxePage ? 'PageAxe' : 'PlanAction'} className="w-full">
      {/** Titre page */}
      <HeaderTitle
        customClass={
          isAxePage ? {text: '!text-[1.75rem]'} : {text: '!text-[2rem]'}
        }
        titre={axe.nom}
        onUpdate={nom => updateAxe({...axe, nom})}
        isReadonly={isReadonly}
      />
      <div className="mx-auto px-10">
        {/** Header */}
        <PlanActionHeader
          collectivite_id={collectivite?.collectivite_id!}
          plan={plan}
          axe={axe}
          axes={axes}
          isAxePage={isAxePage}
          axeHasFiches={axeHasFiche}
          isReadonly={isReadonly}
        />
        {/**
         * Filtres
         * On vérifie si le plan ou l'axe contient des fiches pour afficher les filtres de fiche
         **/}
        {axeHasFiche && (
          <PlanActionFiltresAccordeon
            plan={plan}
            axe={axe}
            isAxePage={isAxePage}
            setIsFiltered={isFiltered => setIsFiltered(isFiltered)}
          />
        )}
        {/** Arboresence (fiches + sous-axes) */}
        {!isFiltered && (
          <Arborescence
            plan={plan}
            axe={axe}
            axes={axes}
            isAxePage={isAxePage}
            isReadonly={isReadonly}
          />
        )}
        {/** Footer */}
        <PlanActionFooter />
      </div>
    </div>
  );
};

/**
 * On récupère les params de l'URL afin de savoir si nous sommes dans une page plan ou page axe.
 * Le param `plan` nous permet de récupérer tous les axes du plan d'action, que l'on soit sur une page plan ou axe.
 * Le `plan` est toujours requis car on l'utilise dans les hooks et plus particulièrement les invalidations des clés react-query.
 */
const PlanActionConnected = () => {
  const {planUid} = useParams<{planUid: string}>();
  const {axeUid} = useParams<{axeUid?: string}>();

  const {data: allPlanNodes, isLoading: planLoading} = usePlanAction(
    parseInt(planUid)
  );

  const plan = allPlanNodes?.find(a => a?.depth === 0);

  const axe = allPlanNodes?.find(a => a.id.toString() === axeUid);

  return !planLoading && plan && allPlanNodes ? (
    <PlanAction plan={plan} axe={axe ?? plan} axes={allPlanNodes} />
  ) : (
    <div className="h-[6.75rem] w-full bg-indigo-700 xl:mr-6" />
  );
};

export default PlanActionConnected;
