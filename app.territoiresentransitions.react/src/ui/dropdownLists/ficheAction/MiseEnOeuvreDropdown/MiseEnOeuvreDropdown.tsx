import { TempsDeMiseEnOeuvre } from '@tet/api/plan-actions';
import { Select, SelectProps } from '@tet/ui';
import { useMiseEnOeuvre } from './useMiseEnOeuvre';

type MiseEnOeuvreDropdownProps = Omit<
  SelectProps,
  'values' | 'onChange' | 'options'
> & {
  values?: TempsDeMiseEnOeuvre | null;
  onChange: (tempsDeMiseEnOeuvre: TempsDeMiseEnOeuvre) => void;
};

const MiseEnOeuvreDropdown = (props: MiseEnOeuvreDropdownProps) => {
  const { data: options } = useMiseEnOeuvre();
  if (!options?.length) return;

  return (
    <Select
      {...props}
      values={props.values?.id}
      options={options.map(({ niveau, nom }) => ({
        value: niveau,
        label: nom,
      }))}
      onChange={(value) => {
        const selectedOption =
          value !== undefined
            ? options.filter((v) => value === v.niveau)[0]
            : undefined;
        props.onChange(
          (selectedOption !== undefined
            ? { id: selectedOption.niveau, nom: selectedOption.nom }
            : undefined) as TempsDeMiseEnOeuvre
        );
      }}
    />
  );
};

export default MiseEnOeuvreDropdown;