import {cloneElement, useState} from 'react';
import {flushSync} from 'react-dom';
import {
  useFloating,
  offset,
  useInteractions,
  useDismiss,
  shift,
  useClick,
  Placement,
  autoUpdate,
  size,
  OffsetOptions,
} from '@floating-ui/react';

type DropdownFloaterProps = {
  /** Élement qui reçoit la fonction d'ouverture du dropdown */
  children: JSX.Element;
  /** Permet de définir et d'afficher le contenu du dropdown */
  render: (data: {close: () => void}) => React.ReactNode;
  /** Où le dropdown doit apparaître par rapport à l'élement d'ouverture */
  placement?: Placement;
  /** Toggle l'état d'ouverture en appuyant sur la touche 'space'. Défaut `true` */
  spaceToToggle?: boolean;
  /** Toggle l'état d'ouverture en appuyant sur la touche 'enter'. Défaut `true` */
  enterToToggle?: boolean;
  /** Pour que la largeur des options soit égale au bouton d'ouverture. Défaut `false` */
  containerWidthMatchButton?: boolean;
  /** Placement offset */
  offsetValue?: OffsetOptions;
  'data-test'?: string;
  disabled?: boolean;
};

/** Affiche un élement volant (dropdown, modal...) avec une configuration floating-ui prédéfinie */
export const DropdownFloater = ({
  render,
  children,
  placement,
  spaceToToggle = true,
  enterToToggle = true,
  containerWidthMatchButton = false,
  offsetValue = 4,
  disabled,
  'data-test': dataTest,
}: DropdownFloaterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [maxHeight, setMaxHeight] = useState(null);

  const {x, y, strategy, refs, context} = useFloating({
    open: disabled ? false : isOpen,
    onOpenChange: disabled ? () => null : setIsOpen,
    placement: placement ?? 'bottom',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      shift(),
      size({
        apply({rects, elements, availableHeight}) {
          // https://floating-ui.com/docs/size
          flushSync(() => setMaxHeight(availableHeight));
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
            width: containerWidthMatchButton
              ? `${rects.reference.width}px`
              : 'auto',
          });
        },
      }),
    ],
  });

  const click = useClick(context, {
    keyboardHandlers: false,
  });
  const dismiss = useDismiss(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({
          ref: refs.setReference,
          isOpen,
          onKeyDown(evt) {
            if (
              enterToToggle &&
              evt.key === 'Enter' &&
              evt.target instanceof HTMLInputElement
            ) {
              setIsOpen(!isOpen);
            }
            if (
              spaceToToggle &&
              evt.key === ' ' &&
              evt.target instanceof HTMLInputElement
            ) {
              setIsOpen(!isOpen);
            }
          },
          ...children.props,
        })
      )}
      {isOpen && (
        <div
          data-test={dataTest}
          {...getFloatingProps({
            ref: refs.setFloating,
            style: {
              position: strategy,
              top: y,
              left: x,
            },
          })}
        >
          <div
            className="overflow-y-auto bg-white rounded-b-lg border border-grey-4 border-t-0"
            style={{maxHeight: maxHeight - 16}}
          >
            {render({
              close: () => setIsOpen(false),
            })}
          </div>
        </div>
      )}
    </>
  );
};
