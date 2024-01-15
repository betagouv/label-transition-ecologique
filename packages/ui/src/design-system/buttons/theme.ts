import {ButtonSize, ButtonState, ButtonVariant} from './types';

/**
 * Thème couleurs du composant Button
 *
 * Pour un variant donné, permet de récupérer les couleurs de
 * texte, background, border et icône en fonction du statut du bouton
 *
 * Utilisation des couleurs configurées dans Tailwind
 **/
export const buttonThemeClassnames: Record<
  ButtonVariant,
  Record<
    ButtonState,
    {
      text: string;
      background: string;
      border: string;
      icon: string;
    }
  >
> = {
  primary: {
    default: {
      text: 'text-white hover:!text-white',
      background: 'bg-primary-7 hover:!bg-primary-8',
      border: 'border-primary-7 hover:!border-primary-8',
      icon: 'fill-white group-hover:fill-white',
    },
    disabled: {
      text: '!text-primary-3',
      background: '!bg-primary-4',
      border: '!border-primary-4',
      icon: 'fill-primary-3',
    },
  },
  secondary: {
    default: {
      text: 'text-white hover:!text-white',
      background: 'bg-secondary-1 hover:!bg-secondary-2',
      border: 'border-secondary-1 hover:!border-secondary-2',
      icon: 'fill-white group-hover:fill-white',
    },
    disabled: {
      text: '!text-grey-1',
      background: '!bg-secondary-2',
      border: '!border-secondary-2',
      icon: 'fill-grey-1',
    },
  },
  outlined: {
    default: {
      text: 'text-primary-7 hover:!text-primary-8',
      background: 'bg-white hover:!bg-primary-1',
      border: 'border-primary-7 hover:!border-primary-8',
      icon: 'fill-primary-7 group-hover:fill-primary-8',
    },
    disabled: {
      text: '!text-primary-3',
      background: '!bg-white',
      border: '!border-primary-4',
      icon: 'fill-primary-3',
    },
  },
  white: {
    default: {
      text: 'text-primary-7 hover:!text-primary-8',
      background: 'bg-white hover:!bg-primary-1',
      border: 'border-white hover:!border-primary-1',
      icon: 'fill-primary-7 group-hover:fill-primary-8',
    },
    disabled: {
      text: '!text-primary-4',
      background: '!bg-white',
      border: '!border-white',
      icon: 'fill-primary-4',
    },
  },
  grey: {
    default: {
      text: 'text-primary-7 hover:!text-primary-8',
      background: 'bg-grey-1 hover:!bg-grey-2',
      border: 'border-grey-4 hover:!border-grey-4',
      icon: 'fill-primary-7 group-hover:fill-primary-8',
    },
    disabled: {
      text: '!text-primary-4',
      background: '!bg-white',
      border: '!border-grey-2',
      icon: 'fill-primary-4',
    },
  },
};

/**
 * Tailles du composant Button
 *
 * Gère les tailles si le bouton est un bouton icon ou non
 **/
export const buttonSizeClassnames: Record<
  ButtonSize,
  {
    textButton: string;
    iconButton: string;
  }
> = {
  xs: {
    textButton: 'text-xs py-2 px-5',
    iconButton: 'p-2',
  },
  sm: {
    textButton: 'text-sm py-2.5 px-6',
    iconButton: 'p-3',
  },
  md: {
    textButton: 'text-base py-3 px-6',
    iconButton: 'p-3.5',
  },
  xl: {
    textButton: 'text-2xl py-4 px-6',
    iconButton: 'p-5',
  },
};
