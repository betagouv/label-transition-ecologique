import classNames from 'classnames';
import { Statut as PlanActionStatut } from '@tet/api/plan-actions/domain';
import { statusToState } from '@tet/app/pages/collectivite/PlansActions/components/BadgeStatut';
import { Badge } from './Badge';

type BadgeStatutProps = {
  count?: number;
  statut: PlanActionStatut | 'Sans statut';
  size?: 'sm' | 'md';
  uppercase?: boolean;
  className?: string;
};

/** Badge représentant le statut d'une fiche action */
export const BadgeStatut = ({
  count,
  statut,
  uppercase = true,
  className,
  ...props
}: BadgeStatutProps) => {
  return (
    <Badge
      className={classNames(className, {
        'bg-[#F9F3FE] border-[#F9F3FE] text-[#9351CF]': statut === 'A discuter',
        'bg-white border-grey-4 text-grey-6': statut === 'Sans statut',
      })}
      title={`${count ? count : ''} ${statut}`}
      state={statusToState[statut]}
      uppercase={uppercase}
      {...props}
    />
  );
};