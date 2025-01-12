import { usePlanActionsCount } from '@/app/app/pages/collectivite/PlansActions/PlanAction/data/usePlanActionsCount';
import { getDisplayButtons } from '@/app/app/pages/collectivite/TableauDeBord/components/utils';
import FilterBadges, {
  BadgeFilters,
  useFiltersToBadges,
} from '@/app/ui/shared/filters/filter-badges';
import SpinnerLoader from '@/app/ui/shared/SpinnerLoader';
import { Button, ButtonGroup } from '@/ui';
import { OpenState } from '@/ui/utils/types';
import classNames from 'classnames';
import React, { useState } from 'react';

export type ModuleDisplay = 'circular' | 'row';

export type ModuleDisplaySettings = {
  display: ModuleDisplay;
  setDisplay: (display: ModuleDisplay) => void;
  options?: ModuleDisplay[];
};

type Props = {
  /** Titre du module */
  title: string;
  /** Symbole du module (picto svg) */
  symbole?: React.ReactNode;
  /** Fonction d'affichage de la modale avec les filtres du modules,
   * à afficher au clique des boutons d'édition.
   * Récupère le state d'ouverture en argument */
  editModal?: (modalState: OpenState) => React.ReactNode;
  /** État de loading générique */
  isLoading: boolean;
  /** État vide générique */
  isEmpty: boolean;
  /** Filtre du module */
  filtre?: BadgeFilters;
  /** Le contenu (cartes, boutons, ... ) à afficher dans le module.
   * Les contenus sont trop différents pour tous les traiter ici.
   * (voir ModuleFichesActions pour un exemple) */
  children: React.ReactNode;
  /** Classe donnée au container afin d'appliquer par exemple
   *  le nombre de colonne à remplir dans la grille */
  className?: string;
  /** Des boutons optionnels dans un fragment qui s'affichent au pied du module */
  footerButtons?: React.ReactNode;
  /** Paramétrage de l'affichage des données */
  displaySettings?: ModuleDisplaySettings;
  /** Permet par exemple de donner une fonction de tracking */
  onSettingsClick?: () => void;
};

/** Composant générique d'un module du tableau de bord plans d'action */
const Module = ({
  title,
  filtre = {},
  symbole,
  editModal,
  isLoading,
  isEmpty,
  children,
  className,
  footerButtons,
  displaySettings,
  onSettingsClick,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { count } = usePlanActionsCount();

  const { data: filterBadges } = useFiltersToBadges({
    filters: filtre,
    customValues: {
      planActions: filtre.planActionIds?.length === count && 'Tous les plans',
    },
  });

  if (isLoading) {
    return (
      <ModuleContainer className={className}>
        <div className="m-auto">
          <SpinnerLoader className="w-8 h-8" />
        </div>
      </ModuleContainer>
    );
  }

  if (isEmpty) {
    return (
      <ModuleContainer
        className={classNames(
          '!gap-0 items-center text-center !bg-primary-0',
          className
        )}
      >
        <div className="mb-4">{symbole}</div>
        <h4 className="mb-2 text-primary-8">{title}</h4>
        <div className="flex flex-col items-center gap-6">
          <p className="mb-0 font-bold text-primary-9">
            Aucun résultat pour ce filtre !
          </p>
          <FilterBadges className="justify-center" badges={filterBadges} />
          {editModal && (
            <Button
              size="sm"
              onClick={() => {
                setIsModalOpen(true);
                onSettingsClick?.();
              }}
            >
              Modifier le filtre
            </Button>
          )}
        </div>
        {editModal?.({ isOpen: isModalOpen, setIsOpen: setIsModalOpen })}
      </ModuleContainer>
    );
  }

  return (
    <ModuleContainer className={classNames('!border-grey-3', className)}>
      <div className="flex items-start gap-20">
        <h6 className="mb-0">{title}</h6>
        <>
          {/** Bouton d'édition des filtres du module + modale */}
          {editModal && (
            <>
              <Button
                variant="grey"
                icon="edit-line"
                size="xs"
                className="ml-auto"
                onClick={() => {
                  setIsModalOpen(true);
                  onSettingsClick?.();
                }}
              />
              {isModalOpen &&
                editModal({ isOpen: isModalOpen, setIsOpen: setIsModalOpen })}
            </>
          )}
        </>
      </div>
      {/** Filtres du module */}
      <FilterBadges badges={filterBadges} />
      {/** Contenu du module */}
      <div className="flex-grow">{children}</div>
      {/** Footer buttons */}
      {(footerButtons || displaySettings) && (
        <div className="mt-auto flex items-center justify-between">
          {displaySettings && (
            <ButtonGroup
              activeButtonId={displaySettings.display}
              variant="neutral"
              size="xs"
              buttons={getDisplayButtons({
                onClick: (display) => displaySettings.setDisplay(display),
              })}
            />
          )}
          {footerButtons && (
            <div className="ml-auto flex items-center gap-4">
              {footerButtons}
            </div>
          )}
        </div>
      )}
    </ModuleContainer>
  );
};

export default Module;

const ModuleContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={classNames(
      'col-span-full min-h-[21rem] flex flex-col gap-4 p-8 bg-white border border-primary-4 rounded-xl',
      className
    )}
  >
    {children}
  </div>
);
