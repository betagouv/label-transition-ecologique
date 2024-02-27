import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from 'react';

/** Propriétés HTML d'une div */
export type DivHTMLProps = HTMLAttributes<HTMLDivElement>;
/** Propriétés HTML d'un bouton */
export type ButtonHTMLProps = ButtonHTMLAttributes<HTMLButtonElement>;
/** Propriétés HTML d'un lien */
export type AnchorHTMLProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/** Détermine si les proriétés appartiennent à un lien */
export function isAnchor(
  props: ButtonHTMLProps | AnchorHTMLProps | DivHTMLProps
): props is AnchorHTMLProps {
  return (props as AnchorHTMLProps).href !== undefined;
}
