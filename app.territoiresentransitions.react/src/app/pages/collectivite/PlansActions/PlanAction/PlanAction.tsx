import {useRef} from 'react';
import {useParams} from 'react-router-dom';

import PlanActionHeader from './PlanActionHeader';
import PlanActionAxe from './PlanActionAxe';
import PictoLeaf from 'ui/pictogrammes/PictoLeaf';
import {AxeActions} from './AxeActions';
import FicheActionCard from '../FicheAction/FicheActionCard';

import {makeCollectivitePlanActionFicheUrl} from 'app/paths';
import {usePlanAction} from './data/usePlanAction';
import {useEditAxe} from './data/useEditAxe';
import {TPlanAction} from './data/types/PlanAction';
import TextareaControlled from 'ui/shared/form/TextareaControlled';
import PlanActionFooter from './PlanActionFooter';
import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import PlanActionFiltres from './PlanActionFiltres/PlanActionFiltres';
import {useFichesActionFiltresListe} from '../FicheAction/data/useFichesActionFiltresListe';
import {checkAxeHasFiche} from './data/utils';

type PlanActionProps = {
  plan: TPlanAction;
};

export const PlanAction = ({plan}: PlanActionProps) => {
  const collectivite = useCurrentCollectivite();

  const isReadonly = collectivite?.readonly ?? false;

  const {mutate: updatePlan} = useEditAxe(plan.axe.id);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {items: fichesActionsListe, ...ficheFilters} =
    useFichesActionFiltresListe(plan.axe.id);

  const handleEditButtonClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const displaySousAxe = (axe: TPlanAction) => (
    <PlanActionAxe
      key={axe.axe.id}
      planActionGlobal={plan}
      axe={axe}
      displayAxe={displaySousAxe}
      isReadonly={isReadonly}
    />
  );

  return (
    <div className="w-full">
      <div className="bg-indigo-400">
        <h4 className="group max-w-4xl flex items-center mx-auto m-0 py-8 px-10 text-white">
          <TextareaControlled
            ref={inputRef}
            className="w-full placeholder:text-white focus:placeholder:text-gray-200 disabled:text-white !outline-none !resize-none !text-2xl"
            initialValue={plan.axe.nom}
            placeholder={'Sans titre'}
            onBlur={e =>
              e.target.value &&
              e.target.value.length > 0 &&
              e.target.value !== plan.axe.nom &&
              updatePlan({id: plan.axe.id, nom: e.target.value})
            }
            disabled={isReadonly}
          />
          {!isReadonly && (
            <button
              className="fr-fi-edit-line group-hover:block hidden w-8 h-8"
              onClick={handleEditButtonClick}
            />
          )}
        </h4>
      </div>
      <div className="max-w-4xl mx-auto px-10">
        <PlanActionHeader
          plan={plan}
          collectivite_id={collectivite?.collectivite_id!}
        />
        {/** On vérifie si le plan contient des fiches pour afficher les filtres de fiche */}
        {checkAxeHasFiche(plan) && (
          <PlanActionFiltres
            itemsNumber={ficheFilters.total}
            initialFilters={ficheFilters.initialFilters}
            filters={ficheFilters.filters}
            setFilters={ficheFilters.setFilters}
          />
        )}
        {/** Si il y a d'autres filtres activés en plus de la collectivite et le plan,
         alors on affiche les fiches filtrées, sinon le plan d'action */}
        {Object.keys(ficheFilters.filters).length > 2 ? (
          fichesActionsListe.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {fichesActionsListe.map(fiche => (
                <FicheActionCard
                  key={fiche.id}
                  ficheAction={fiche}
                  link={makeCollectivitePlanActionFicheUrl({
                    collectiviteId: collectivite!.collectivite_id!,
                    planActionUid: plan.axe.id.toString(),
                    ficheUid: fiche.id!.toString(),
                  })}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16 mb-8">
              Aucune fiche ne correspond à votre recherche
            </div>
          )
        ) : // Affiche les fiches et sous-axes s'il y en a, sinon un état vide
        plan.enfants || plan.fiches ? (
          <>
            <div className="mb-4">
              {!isReadonly && (
                <AxeActions planActionId={plan.axe.id} axeId={plan.axe.id} />
              )}
              {/** Affichage des fiches */}
              {plan.fiches && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {plan.fiches.map(fiche => (
                    <FicheActionCard
                      key={fiche.id}
                      ficheAction={fiche}
                      link={makeCollectivitePlanActionFicheUrl({
                        collectiviteId: fiche.collectivite_id!,
                        planActionUid: plan.axe.id.toString(),
                        ficheUid: fiche.id!.toString(),
                      })}
                    />
                  ))}
                </div>
              )}
            </div>
            {/** Affichage des sous-axes */}
            {plan.enfants &&
              plan.enfants.length > 0 &&
              plan.enfants.map(enfant => (
                <PlanActionAxe
                  key={enfant.axe.id}
                  planActionGlobal={plan}
                  axe={enfant}
                  displayAxe={displaySousAxe}
                  isReadonly={isReadonly}
                />
              ))}
          </>
        ) : (
          <div>
            <div className="flex flex-col items-center my-8">
              <PictoLeaf className="w-24 fill-gray-400" />
              <div className="my-6 text-gray-500">
                Aucune arborescence pour l'instant
              </div>
              {!isReadonly && (
                <AxeActions planActionId={plan.axe.id} axeId={plan.axe.id} />
              )}
            </div>
          </div>
        )}
        <PlanActionFooter plan={plan} isReadonly={isReadonly} />
      </div>
    </div>
  );
};

const PlanActionConnected = () => {
  const {planUid} = useParams<{planUid: string}>();

  const {data} = usePlanAction(parseInt(planUid));

  return data ? <PlanAction plan={data} /> : <div></div>;
};

export default PlanActionConnected;
