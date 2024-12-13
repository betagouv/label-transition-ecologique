import { Badge } from '@/app/ui/export-pdf/components';
import { getFormattedNumber } from '@/app/utils/formatUtils';
import { Text } from '@react-pdf/renderer';
import classNames from 'classnames';
import { tw } from '../../utils';

type BadgeBudgetProps = {
  montantTtc: number | undefined | null;
  size?: 'sm' | 'md';
  className?: string;
};

export const BadgeBudget = ({
  montantTtc,
  className,
  ...props
}: BadgeBudgetProps) => {
  return (
    <Badge
      title={
        montantTtc ? (
          <Text>
            {getFormattedNumber(montantTtc)} €{' '}
            <Text style={tw('text-[0.5rem] leading-[0.6rem]')}>TTC</Text>
          </Text>
        ) : (
          'Non renseigné'
        )
      }
      state="standard"
      className={classNames('bg-white', className)}
      {...props}
    />
  );
};
