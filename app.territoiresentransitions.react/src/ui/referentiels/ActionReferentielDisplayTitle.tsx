import {observer} from 'mobx-react-lite';
import {scoreBloc, ScoreBloc} from 'core-logic/observables/scoreBloc';
import {referentielId} from 'utils/actions';
import {toFixed} from 'utils/toFixed';
import {ActionType} from 'types/action_referentiel';
import {ActionDefinitionSummary} from 'core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';

export interface PillParams {
  color: string;
  textColor: string;
  filled: boolean;
  height: number;
}

export const pillParams: Record<ActionType, PillParams> = {
  referentiel: {
    color: '#000091',
    textColor: '#000091',
    filled: false,
    height: 20,
  },
  axe: {
    color: '#000091',
    textColor: '#000091',
    filled: false,
    height: 20,
  },
  'sous-axe': {
    color: '#000091',
    textColor: '#000091',
    filled: false,
    height: 20,
  },
  action: {color: '#000091', textColor: 'white', filled: true, height: 20},
  'sous-action': {
    color: '#919BAC',
    textColor: 'white',
    filled: true,
    height: 20,
  },
  tache: {color: '#E8EBF3', textColor: 'black', filled: true, height: 20},
};
export const ActionPotentiel = observer(
  ({
    action,
    scoreBloc,
  }: {
    action: ActionDefinitionSummary;
    scoreBloc: ScoreBloc;
  }) => {
    const score = scoreBloc.getScore(action.id, referentielId(action.id));

    if (score === null) return null;

    const potentiel = toFixed(
      score?.point_potentiel,
      action.type === 'axe' || action.type === 'sous-axe' ? 0 : 2
    );
    const text = score?.point_potentiel ? `${potentiel} points` : '0 point';
    return <span className="font-normal whitespace-nowrap">({text})</span>;
  }
);
export const ActionReferentielTitlePill = ({
  action,
}: {
  action: ActionDefinitionSummary;
}) => {
  const pill = pillParams[action.type];
  return (
    <div
      className="content-center font-normal"
      style={{
        color: pill.textColor,
        borderWidth: 2,
        backgroundColor: pill.filled ? pill.color : 'white',
        borderColor: pill.filled ? 'white' : pill.color,
        borderRadius: pill.height,
        minHeight: pill.height,
        paddingLeft: pill.height * 0.5,
        paddingRight: pill.height * 0.5,
        fontSize: pill.height + 'px',
      }}
    >
      <div className="pb-1">{action.identifiant}</div>
    </div>
  );
};
export const ActionReferentielDisplayTitle = ({
  action,
}: {
  action: ActionDefinitionSummary;
}) => {
  return (
    <div className="flex justify-between my-6 items-center">
      <div className="flex flex-row align-middle items-center font-bold gap-2 mr-2">
        <ActionReferentielTitlePill action={action} />
        <div>
          <span className="fr-text--lg">{action.nom} </span>
        </div>
      </div>
      <ActionPotentiel action={action} scoreBloc={scoreBloc} />
    </div>
  );
};
