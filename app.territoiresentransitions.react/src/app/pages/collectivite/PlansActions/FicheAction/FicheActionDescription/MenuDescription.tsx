import classNames from 'classnames';
import { FicheAction } from '@tet/api/plan-actions';
import ModaleDescription from './ModaleDescription';
import ModaleEmplacement from './EmplacementFiche/ModaleEmplacement';
import ModaleSuppression from './ModaleSuppression';
import ExportFicheActionButton from '../../ExportPdf/ExportFicheActionButton';

type MenuDescriptionProps = {
  isReadonly: boolean;
  fiche: FicheAction;
  className?: string;
  updateFiche: (fiche: FicheAction) => void;
};

const MenuDescription = ({
  isReadonly,
  fiche,
  className,
  updateFiche,
}: MenuDescriptionProps) => {
  const { id: ficheId, titre, axes } = fiche;

  return !isReadonly ? (
    <div className={classNames('flex gap-4', className)}>
      <ModaleDescription fiche={fiche} updateFiche={updateFiche} />
      <ModaleEmplacement fiche={fiche} />
      <ExportFicheActionButton fiche={fiche} />
      <ModaleSuppression
        ficheId={ficheId}
        title={titre}
        isInMultipleAxes={!!axes && axes.length > 1}
        buttonVariant="white"
        redirect
      />
    </div>
  ) : null;
};

export default MenuDescription;
