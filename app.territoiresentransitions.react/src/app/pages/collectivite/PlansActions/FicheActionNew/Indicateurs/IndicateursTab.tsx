import {FicheAction} from '../../FicheAction/data/types';
import EmptyCard from '../EmptyCard';
import DatavizPicto from './DatavizPicto';

type IndicateursTabProps = {
  fiche: FicheAction;
};

const IndicateursTab = ({fiche}: IndicateursTabProps) => {
  const {indicateurs} = fiche;

  const isEmpty = indicateurs === null || indicateurs.length === 0;

  return isEmpty ? (
    <EmptyCard
      picto={className => <DatavizPicto className={className} />}
      title="Aucun indicateur associé !"
      subTitle="Mesurez les résultats de l'action grâce à des indicateurs de réalisation et de résultats"
      action={{
        label: 'Créer un indicateur personnalisé',
        icon: 'add-line',
        onClick: () => {},
      }}
      secondaryAction={{
        label: 'Associer des indicateurs',
        icon: 'link',
        onClick: () => {},
      }}
    />
  ) : (
    <div>Indicateurs</div>
  );
};

export default IndicateursTab;