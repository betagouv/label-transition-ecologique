import {Card} from '@tet/ui';
import {SecteurTrajectoire, METHODO_PAR_SECTEUR} from './constants';

/** Affiche l'encadré "Méthodologie" (lorsqu'un secteur est sélectionné) */
export const Methodologie = ({secteur}: {secteur: SecteurTrajectoire}) => {
  const methodo = METHODO_PAR_SECTEUR[secteur.nom];
  return methodo ? (
    <Card>
      <h5 className="mb-0">Méthodologie</h5>
      {'snbc2' in methodo && (
        <>
          <p className="text-primary-8 font-bold mb-0">SNBC 2</p>
          <p className="mb-0 font-normal">
            {methodo.snbc2.map(s => (
              <>
                {s}
                <br />
              </>
            ))}
          </p>
        </>
      )}
      {'pivots' in methodo && (
        <>
          <p className="text-primary-8 font-bold mb-0">
            Méthode de territorialisation
          </p>
          <p className="mb-0 font-normal">
            {methodo.pivots.map(s => (
              <>
                {s}
                <br />
              </>
            ))}
          </p>
        </>
      )}
    </Card>
  ) : null;
};