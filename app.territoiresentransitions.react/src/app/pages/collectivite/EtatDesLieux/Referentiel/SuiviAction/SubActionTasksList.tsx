import { ActionDefinitionSummary } from '@/app/core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';
import { StatusToSavePayload } from '@/app/referentiels/ui/ActionStatusDropdown';
import { SuiviScoreRow } from '../data/useScoreRealise';
import SubActionTask from './SubActionTask';

type SubActionTasksListProps = {
  tasks: ActionDefinitionSummary[];
  actionScores: { [actionId: string]: SuiviScoreRow };
  hideStatus?: boolean;
  statusWarningMessage?: boolean;
  onSaveStatus?: (payload: StatusToSavePayload) => void;
};

/**
 * Liste des tâches associées à une sous-action
 */

const SubActionTasksList = ({
  tasks,
  actionScores,
  hideStatus = false,
  statusWarningMessage = false,
  onSaveStatus,
}: SubActionTasksListProps): JSX.Element => {
  return (
    <div className="divide-y divide-[#ddd]">
      {tasks.map((task) => (
        <SubActionTask
          key={task.id}
          task={task}
          actionScores={actionScores}
          hideStatus={hideStatus}
          statusWarningMessage={statusWarningMessage}
          onSaveStatus={onSaveStatus}
        />
      ))}
    </div>
  );
};

export default SubActionTasksList;
