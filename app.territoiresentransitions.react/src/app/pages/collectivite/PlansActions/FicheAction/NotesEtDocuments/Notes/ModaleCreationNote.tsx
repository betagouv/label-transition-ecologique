import {useState} from 'react';
import {Field, Modal, ModalFooterOKCancel, Textarea} from '@tet/ui';

type ModaleCreationNoteProps = {
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
  updateNotes: (notes: string | null) => void;
};

const ModaleCreationNote = ({
  isOpen,
  setIsOpen,
  updateNotes,
}: ModaleCreationNoteProps) => {
  const [editedNotes, setEditedNotes] = useState<string | null>(null);

  const handleSave = () => {
    if (editedNotes !== null) updateNotes(editedNotes);
  };

  return (
    <Modal
      openState={{isOpen, setIsOpen}}
      title="Ajouter une note"
      size="lg"
      render={({descriptionId}) => (
        <div id={descriptionId} className="flex flex-col gap-8">
          {/* Décommenter au passage à notes privées */}
          {/* <Alert description="La note est privée, elle n’est pas consultable par les personnes n’étant pas membres de votre collectivité." /> */}

          <Field title="Note">
            <Textarea
              className="min-h-[100px]"
              value={editedNotes ?? ''}
              onChange={evt =>
                setEditedNotes((evt.target as HTMLTextAreaElement).value)
              }
            />
          </Field>
        </div>
      )}
      // Boutons pour valider / annuler les modifications
      renderFooter={({close}) => (
        <ModalFooterOKCancel
          btnCancelProps={{onClick: close}}
          btnOKProps={{
            onClick: () => {
              handleSave();
              close();
            },
          }}
        />
      )}
    />
  );
};

export default ModaleCreationNote;