import {TextInput} from '@dataesr/react-dsfr';
import {currentCollectiviteBloc} from 'core-logic/observables';

export const AnyIndicateurCommentaire = ({
  handleSave,
  value,
}: {
  handleSave: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  value: string;
}) => (
  <TextInput
    textarea
    defaultValue={value}
    onBlur={handleSave}
    label="Précisions sur l'indicateur"
    hint="Renseignez ici les informations que vous souhaitez préciser vis-à-vis de l'indicateur. Analyse de la tendance d'évolution, éléments de contexte sur l'évolution des valeurs, sources, etc."
    disabled={currentCollectiviteBloc.readonly}
  />
);
