import classNames from 'classnames';

import {TProfondeurAxe} from '../../PlanAction/data/types/profondeurPlan';

type Props = {
  axe: TProfondeurAxe;
  selectAxe: (axe: TProfondeurAxe) => void;
  /** L'axe/sous-axe actuellement sélectionné */
  isSelected: boolean;
  /** Applique un léger background pour indiquer qu'un sous-axe est sélectionné'  */
  containSelectedAxe: boolean;
};

const TableauAxe = ({
  axe,
  selectAxe,
  isSelected,
  containSelectedAxe,
}: Props) => {
  return (
    <button
      key={axe.id}
      className={classNames(
        'flex items-center gap-1 py-2 px-4 text-sm text-left rounded-lg',
        {
          'bg-gray-200': containSelectedAxe && !isSelected,
          'bg-bf500 text-white': isSelected,
        }
      )}
      onClick={() => selectAxe(axe)}
    >
      {axe.nom}
      {axe.enfants && (
        <span className="fr-fi-arrow-right-s-line mt-1 ml-auto scale-90" />
      )}
    </button>
  );
};

export default TableauAxe;
