import { FicheAction } from '@tet/api/plan-actions';
import { useState } from 'react';
import EmptyCard from '../EmptyCard';
import EmptyActeursPicto from '../FicheActionActeurs/PictosActeurs/EmptyActeursPicto';
import PersonnePilotePicto from './PersonnePilotePicto';

import { Button } from '@tet/ui';
import classNames from 'classnames';
import ModalePilotes from '../FicheActionPilotes/ModalePilotes';

type FicheActionPilotesProps = {
  isReadonly: boolean;
  fiche: FicheAction;
  className?: string;
  updateFiche: (fiche: FicheAction) => void;
};

const FicheActionPilotes = ({
  isReadonly,
  fiche,
  className,
  updateFiche,
}: FicheActionPilotesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pilotes } = fiche;

  const isEmpty = !pilotes || pilotes.length === 0;

  return (
    <>
      {!isEmpty ? (
        <div
          className={classNames(
            'bg-white border border-grey-3 rounded-lg py-7 lg:py-8 xl:py-10 px-5 lg:px-6 xl:px-8 relative flex flex-col items-start gap-y-3 gap-x-6',
            className
          )}
        >
          {!isReadonly && (
            <Button
              title="Modifier les pilotes"
              icon="edit-line"
              size="xs"
              variant="grey"
              className="!absolute top-4 right-3"
              onClick={() => setIsModalOpen(true)}
            />
          )}
          <div className="w-full flex flex-col gap-4 items-center">
            <PersonnePilotePicto className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <h6 className="text-sm leading-4 text-primary-9 uppercase text-center mb-1">
                Personnes pilotes
              </h6>
              {pilotes.map((pilote, index) => (
                <p
                  key={index}
                  className="text-sm leading-4 mb-0 text-primary-10 text-center"
                >
                  {pilote.nom}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyCard
          picto={(className) => <EmptyActeursPicto className={className} />}
          title="Aucun pilote du projet n'est renseigné !"
          isReadonly={isReadonly}
          action={{
            dataTest: 'pilotes',
            label: 'Ajouter les pilotes',
            onClick: () => setIsModalOpen(true),
          }}
          className={className}
        />
      )}

      {isModalOpen && !isReadonly && (
        <ModalePilotes
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          fiche={fiche}
          updateFiche={updateFiche}
        />
      )}
    </>
  );
};

export default FicheActionPilotes;