import { FicheAction, FicheResume } from '@tet/api/plan-actions';
import { TActionStatutsRow, TAxeRow } from 'types/alias';
import { IndicateurDefinition } from '@tet/api/indicateurs/domain';
import { AnnexeInfo } from '../data/useAnnexesFicheActionInfos';
import { Stack, Title } from 'ui/export-pdf/components';

import Acteurs from './Acteurs';
import ActionsLiees from './ActionsLiees';
import Budget from './Budget';
import Chemins from './Chemins';
import CreationFiche from './CreationFiche';
import Description from './Description';
import FichesLiees from './FichesLiees';
import Indicateurs from './Indicateurs';
import Notes from './Notes';
import Planning from './Planning';
import Documents from './Documents';

export type FicheActionPdfProps = {
  fiche: FicheAction;
};

export type FicheActionPdfExtendedProps = FicheActionPdfProps & {
  chemins: TAxeRow[][];
  indicateursListe: IndicateurDefinition[] | undefined | null;
  fichesLiees: FicheResume[];
  actionsLiees: TActionStatutsRow[];
  annexes: AnnexeInfo[] | undefined;
};

const FicheActionPdf = ({
  fiche,
  chemins,
  indicateursListe,
  fichesLiees,
  actionsLiees,
  annexes,
}: FicheActionPdfExtendedProps) => {
  const { titre } = fiche;

  return (
    <Stack>
      <Stack gap={2} className="mb-4" fixed>
        {/* Titre */}
        <Title variant="h1">{titre || 'Sans titre'}</Title>

        {/* Emplacements de la fiche */}
        <Chemins chemins={chemins} />
      </Stack>

      {/* Description de la fiche */}
      <Description fiche={fiche} />

      {/* Informations principales */}
      <Stack direction="row">
        <Stack className="w-3/5">
          {/* Dates et auteurs */}
          <CreationFiche fiche={fiche} />

          {/* Planning */}
          <Planning fiche={fiche} />
        </Stack>

        {/* Acteurs */}
        <Acteurs fiche={fiche} />
      </Stack>

      {/* Indicateurs */}
      <Indicateurs fiche={fiche} indicateursListe={indicateursListe} />

      {/* Budget */}
      <Budget fiche={fiche} />

      {/* Fiches des plans liées */}
      <FichesLiees fichesLiees={fichesLiees} />

      {/* Actions des référentiels liées */}
      <ActionsLiees actionsLiees={actionsLiees} />

      {/* Notes */}
      <Notes fiche={fiche} />

      {/* Documents */}
      <Documents annexes={annexes} />
    </Stack>
  );
};

export default FicheActionPdf;