import { ParticipationCitoyenne } from '@tet/api/plan-actions';
import { Select, SelectMultipleProps } from '@tet/ui';
import { ficheActionParticipationOptions } from '../../listesStatiques';

type ParticipationCitoyenneDropdownProps = Omit<
  SelectMultipleProps,
  'values' | 'onChange' | 'options'
> & {
  values?: ParticipationCitoyenne | null;
  onChange: (participation: ParticipationCitoyenne) => void;
};

const ParticipationCitoyenneDropdown = (
  props: ParticipationCitoyenneDropdownProps
) => {
  return (
    <Select
      {...props}
      values={props.values ?? undefined}
      options={ficheActionParticipationOptions}
      onChange={(participation) =>
        props.onChange(participation as ParticipationCitoyenne)
      }
    />
  );
};

export default ParticipationCitoyenneDropdown;