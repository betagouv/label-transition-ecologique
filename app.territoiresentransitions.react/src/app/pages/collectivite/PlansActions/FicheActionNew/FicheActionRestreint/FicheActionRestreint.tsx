import {useState} from 'react';
import {Button, Notification} from '@tet/ui';
import ModaleAcces from './ModaleAcces';

type FicheActionRestreintProps = {
  isRestreint: boolean;
  updateRestreint: (isRestreint: boolean) => void;
};

const FicheActionRestreint = ({
  isRestreint,
  updateRestreint,
}: FicheActionRestreintProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsModalOpen(true)}
      className="relative cursor-pointer bg-white hover:bg-primary-2 transition-colors border border-grey-3 rounded-lg py-2 px-2.5 h-14 text-sm text-primary-10 font-medium italic flex gap-2 items-center max-md:justify-center"
    >
      <Notification
        icon={isRestreint ? 'lock-fill' : 'group-fill'}
        size="xs"
        classname="h-6 w-8 justify-center"
      />
      <span className="mt-1">
        Cette fiche est en mode{' '}
        <span className="font-extrabold">
          {isRestreint ? 'privé' : 'public'}
        </span>
      </span>
      <Button
        title="Modifier la restriction d'accès"
        icon="edit-line"
        size="xs"
        variant="grey"
        className="md:ml-auto max-md:absolute right-3"
        onClick={() => setIsModalOpen(true)}
      />

      <ModaleAcces
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isRestreint={isRestreint}
        updateRestreint={updateRestreint}
      />
    </div>
  );
};

export default FicheActionRestreint;