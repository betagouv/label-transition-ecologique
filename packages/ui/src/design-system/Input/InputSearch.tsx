import classNames from 'classnames';
import {useRef} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import {InputBase, InputBaseProps} from './InputBase';

export type InputSearchProps = Omit<InputBaseProps, 'icon' | 'type'> & {
  /** Fait apparaître un picto "chargement" à la place du picto "recherche" */
  isLoading?: boolean;
  /** Valeur en ms du délai entre deux appels à `onSearch` lors de la saisie. */
  debounce?: number;
  /** Appelée pour déclencher la recherche. Reçoit la valeur saisie dans le champ. */
  onSearch: (value: string) => void;
};

/**
 * Affiche un champ de recherche.
 * Un bouton permet de déclencher la recherche. Le bouton est désactivé si le champ est vide.
 * La recherche se déclenche également automatiquement (avec un `debounce`) lors de la saisie
 */
export const InputSearch = ({
  className,
  isLoading = false,
  debounce = 500,
  onChange,
  onSearch,
  ...remainingProps
}: InputSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const disabled = !(remainingProps.value || inputRef.current?.value);

  /** Debounce les appels à `onSearch` */
  const handleDebouncedInputChange = useDebouncedCallback(v => {
    onSearch(v);
  }, debounce);

  return (
    <InputBase
      className={classNames(
        'search-reset:appearance-none search-reset:w-5 search-reset:h-5 search-reset:bg-close-circle-fill',
        className
      )}
      type="search"
      ref={inputRef}
      onChange={e => {
        onChange?.(e);
        handleDebouncedInputChange(e.target.value);
      }}
      icon={{
        buttonProps: {
          disabled,
          icon: isLoading ? 'loader-4-line animate-spin' : 'search-line',
          onClick: () => handleDebouncedInputChange(inputRef.current.value),
          title: 'Rechercher',
        },
      }}
      {...remainingProps}
    />
  );
};
