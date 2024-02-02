import {SelectBase, SelectProps} from './components/SelectBase';
import {OptionValue} from './utils';

export type SelectMultipleOnChangeArgs = {
  selectedValue: OptionValue;
  values?: OptionValue[];
};

export type SelectMultipleProps = Omit<SelectProps, 'onChange'> & {
  /**
   * Appelée à la sélection d'une option.
   * Reçoit la valeur de l'option cliquée,
   * ainsi que la liste de toutes les valeurs sélectionnées finale.
   * */
  onChange: (args: SelectMultipleOnChangeArgs) => void;
};
/**
 * Sélecteur de valeur multiple
 *
 * Ajouter `isSearcheable`, `createProps` ou `onSearch` pour faire un Searchable select
 */
export const SelectMultiple = ({
  values,
  onChange,
  ...props
}: SelectMultipleProps) => {
  return (
    <SelectBase
      {...props}
      onChange={v => {
        let allValues = values as OptionValue[];

        if (allValues) {
          if (allValues.includes(v)) {
            // retrait d'une valeur
            allValues.length === 1
              ? // renvoie undefined si la seule valeur présente dans les valeurs du sélecteur est la même que la valeur de l'option
                (allValues = undefined)
              : (allValues = allValues.filter(val => val !== v));
          } else {
            // ajoût d'une valeur
            allValues = [...allValues, v];
          }
          // si aucune valeur n'était déjà sélectionnée alors on renvoie directement la veleur de l'option dans un tableau
        } else {
          allValues = [v];
        }
        onChange({selectedValue: v, values: allValues});
      }}
      multiple
      values={values}
    />
  );
};
