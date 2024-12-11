import { Badge, BadgeProps } from '@/ui';

type Props = Pick<BadgeProps, 'size'>;

const BadgeIndicateurPerso = ({ size }: Props) => {
  return (
    <Badge
      title="Indicateur personnalisé"
      state="success"
      size={size}
      light
      iconPosition="left"
      icon="line-chart-line"
    />
  );
};

export default BadgeIndicateurPerso;
