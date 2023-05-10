import {Link, useHistory} from 'react-router-dom';
import {IndicateurReferentielCard} from 'app/pages/collectivite/Indicateurs/IndicateurReferentielCard';
import {useState} from 'react';
import {addTargetToContentAnchors} from 'utils/content';
import {Tabs, Tab} from 'ui/shared/Tabs';
import {ActionReferentielDisplayTitle} from 'ui/referentiels/ActionReferentielDisplayTitle';
import {Spacer} from 'ui/shared/Spacer';
import {ActionCommentaire} from 'ui/shared/actions/ActionCommentaire';
import ActionProgressBar from 'ui/referentiels/ActionProgressBar';
import {ActionReferentielAvancementRecursiveCard} from 'ui/referentiels/ActionReferentielAvancementRecursiveCard';
import {Switch} from '@material-ui/core';
import {useActionSummaryChildren} from 'core-logic/hooks/referentiel';
import {ActionDefinitionSummary} from 'core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';
import {OrientationQuickNav} from 'app/pages/collectivite/Referentiels/QuickNav';
import {PersoPotentiel} from '../PersoPotentielModal/PersoPotentiel';
import {useActionScore} from 'core-logic/hooks/scoreHooks';
import {
  ActionVueParamOption,
  makeCollectiviteActionUrl,
  ReferentielParamOption,
} from 'app/paths';
import {useActionVue, useReferentielId} from 'core-logic/hooks/params';
import HistoriqueListe from 'app/pages/collectivite/Historique/HistoriqueListe';
import ScrollTopButton from 'ui/shared/ScrollTopButton';
import ActionNav from './ActionNav';
import ActionPreuvePanel from 'ui/shared/actions/ActionPreuvePanel/ActionPreuvePanel';
import {DownloadDocs} from './DownloadDocs';
import ActionAuditStatut from '../Audit/ActionAuditStatut';
import {ActionAuditDetail} from '../Audit/ActionAuditDetail';
import {useCurrentCollectivite} from 'core-logic/hooks/useCurrentCollectivite';
import {useActionLinkedIndicateurDefinitions} from './useActionLinkedIndicateurDefinitions';
import Alerte from 'ui/shared/Alerte';
import {ActionSidePanel} from './ActionSidePanel';

// index des onglets de la page Action
const TABS_INDEX: Record<ActionVueParamOption, number> = {
  suivi: 0,
  preuves: 1,
  indicateurs: 2,
  historique: 3,
};

const useIsFullyRenseigne = (action: ActionDefinitionSummary): boolean => {
  const actionScore = useActionScore(action.id);
  return (
    !!actionScore &&
    (actionScore.completed_taches_count === actionScore.total_taches_count ||
      actionScore.desactive)
  );
};

const Action = ({action}: {action: ActionDefinitionSummary}) => {
  const [showOnlyActionWithData, setShowOnlyActionWithData] = useState(false);
  const children = useActionSummaryChildren(action);
  const actionVue = useActionVue();
  const history = useHistory();
  const collectivite = useCurrentCollectivite();
  const collectiviteId = collectivite?.collectivite_id;
  const referentielId = useReferentielId() as ReferentielParamOption;

  const actionLinkedIndicateurDefinitions =
    useActionLinkedIndicateurDefinitions(action?.id);

  if (!action || !collectivite) {
    return <Link to="./referentiels" />;
  }

  const activeTab = actionVue ? TABS_INDEX[actionVue] : TABS_INDEX['suivi'];

  // le contenu de l'onglet Indicateurs n'est pas affiché si la collectivité est
  // en accès restreint
  const noIndicateursTab =
    collectivite.acces_restreint && collectivite.readonly;

  // synchronise l'url lors du passage d'un onglet à l'autre
  const handleChange = (activeTab: number) => {
    // recherche le nom de la vue correspondant à l'onglet courant
    const view = Object.entries(TABS_INDEX).find(
      ([, index]) => index === activeTab
    );
    const name = view?.[0] as ActionVueParamOption;

    // met à jour l'url
    if (collectiviteId && name && name !== actionVue) {
      history.replace(
        makeCollectiviteActionUrl({
          collectiviteId,
          referentielId,
          actionVue: name,
          actionId: action.id,
        })
      );
    }
  };

  if (!action || !collectiviteId) {
    return <Link to="./referentiels" />;
  }

  return (
    <div className="fr-container" data-test={`Action-${action.identifiant}`}>
      <div className="flex justify-between items-center fr-py-2w">
        <OrientationQuickNav action={action} />
        <ActionSidePanel action={action} />
      </div>
      <div className="sticky top-0 z-40 flex flex-row justify-between bg-white pr-8 py-4">
        <div className="flex flex-col w-4/5">
          <ActionReferentielDisplayTitle action={action} />
        </div>
        <div className="w-1/6">
          <ActionProgressBar actionId={action.id} />
        </div>
      </div>
      <ActionAuditStatut action={action} />
      <div className="mt-4">
        <ActionAuditDetail action={action} />
      </div>
      <div className="flex flex-col w-4/5">
        {action.have_questions && (
          <>
            <Spacer size={2} />
            <PersoPotentiel actionDef={action} />
          </>
        )}
      </div>
      <Alerte state="information" classname="fr-my-3w">
        <div
          className="htmlContent"
          dangerouslySetInnerHTML={{
            __html: addTargetToContentAnchors(action.description ?? ''),
          }}
        />
      </Alerte>

      <Tabs defaultActiveTab={activeTab} onChange={handleChange}>
        <Tab label="Suivi de l'action" icon="seedling">
          <section>
            <ActionCommentaire action={action} />

            <h4 className="text-xl fr-mt-4w">
              Détail des sous-actions et des tâches
            </h4>
            <div className="flex items-center fr-text--sm fr-m-0">
              Afficher uniquement les actions non-renseignées
              <Switch
                color="primary"
                checked={showOnlyActionWithData}
                inputProps={{'aria-label': 'controlled'}}
                onChange={() => {
                  setShowOnlyActionWithData(!showOnlyActionWithData);
                }}
              />
            </div>
            {children.map(action => (
              <ActionAvancement
                action={action}
                key={action.id}
                showOnlyActionWithData={showOnlyActionWithData}
              />
            ))}
          </section>
        </Tab>
        <Tab label="Preuves" icon="file">
          {activeTab === TABS_INDEX['preuves'] ? (
            <section>
              <ActionPreuvePanel withSubActions showWarning action={action} />
              <DownloadDocs action={action} />
            </section>
          ) : (
            '...'
          )}
        </Tab>
        <Tab label="Indicateurs" icon="line-chart">
          {activeTab === TABS_INDEX['indicateurs'] && !noIndicateursTab ? (
            <section>
              {actionLinkedIndicateurDefinitions.length === 0 && (
                <p>Cette action ne comporte pas d'indicateur</p>
              )}

              {actionLinkedIndicateurDefinitions.map(definition => (
                <IndicateurReferentielCard
                  key={definition.id}
                  definition={definition}
                />
              ))}
            </section>
          ) : (
            '...'
          )}
        </Tab>
        <Tab label="Historique" icon="history">
          {activeTab === TABS_INDEX['historique'] ? (
            <HistoriqueListe actionId={action.id} />
          ) : (
            '...'
          )}
        </Tab>
      </Tabs>
      <ActionNav actionId={action.id} />
      <div className="mt-8">
        <ScrollTopButton />
      </div>
    </div>
  );
};

export default Action;

const ActionAvancement = ({
  action,
  showOnlyActionWithData,
}: {
  action: ActionDefinitionSummary;
  showOnlyActionWithData: boolean;
}) => {
  const isFullyRenseigne = useIsFullyRenseigne(action);

  if (showOnlyActionWithData && isFullyRenseigne) {
    return null;
  }

  return (
    <ActionReferentielAvancementRecursiveCard
      action={action}
      displayAddFicheActionButton={true}
      displayProgressStat={true}
    />
  );
};
