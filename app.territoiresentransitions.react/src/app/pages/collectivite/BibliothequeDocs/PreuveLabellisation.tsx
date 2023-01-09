import {referentielToName} from 'app/labels';
import {Fragment} from 'react';
import {Referentiel} from 'types/litterals';
import PreuveDoc from 'ui/shared/preuves/Bibliotheque/PreuveDoc';
import {TPreuveAuditEtLabellisation} from 'ui/shared/preuves/Bibliotheque/types';
import {numLabels} from '../ParcoursLabellisation/numLabels';

export const PreuvesLabellisation = ({
  preuves,
}: {
  preuves: TPreuveAuditEtLabellisation[];
}) => {
  const parReferentiel = groupByReferentielEtDate(preuves);
  return (
    <>
      {Object.entries(parReferentiel).map(
        ([referentiel, preuvesReferentiel]) => {
          const parDate = Object.entries(preuvesReferentiel);
          return (
            <Fragment key={referentiel}>
              <h2>
                Documents d'audit et de labellisation - Référentiel{' '}
                {referentielToName[referentiel as Referentiel]}
              </h2>
              {parDate.map(([date, preuvesDate]) => {
                return (
                  <Fragment key={date}>
                    <Title date={date} preuves={preuvesDate} />
                    {preuvesDate.map(preuve => (
                      <PreuveDoc
                        key={preuve.id}
                        preuve={preuve}
                        readonly={!preuve.demande?.en_cours}
                        classComment="pb-0 mb-2"
                      />
                    ))}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        }
      )}
    </>
  );
};

const Title = (props: {
  date: string;
  preuves: TPreuveAuditEtLabellisation[];
}) => {
  const {date, preuves} = props;
  const annee = new Date(date).getFullYear();
  const demande = preuves.find(p => p.demande)?.demande;
  const audit = preuves?.find(p => p.audit)?.audit;

  const etoile = demande?.etoiles;
  const labelEtoile = etoile ? (numLabels[etoile] as string) : null;
  const en_cours = demande?.en_cours || (audit && !audit.valide);
  const label = annee + (en_cours ? ' (en cours)' : '') + ' - ';

  if (etoile) {
    return (
      <h3>
        {label}
        <span className="capitalize">{labelEtoile}</span> étoile
      </h3>
    );
  }

  if (audit) {
    return (
      <h3>
        {label}
        <span>Audit contrat d'objectif territorial (COT)</span>
      </h3>
    );
  }

  return null;
};

// groupe les preuves par référentiel
type TPreuvesParReferentiel = Record<
  Referentiel,
  TPreuveAuditEtLabellisation[]
>;
const groupByReferentiel = (
  preuves: TPreuveAuditEtLabellisation[]
): TPreuvesParReferentiel =>
  preuves.reduce((dict, preuve) => {
    const referentiel =
      preuve.demande?.referentiel || preuve.audit?.referentiel;
    if (!referentiel) {
      return dict;
    }
    return {
      ...dict,
      [referentiel]: [...(dict[referentiel] || []), preuve],
    };
  }, {} as TPreuvesParReferentiel);

// groupe les preuves par date de la demande
type TPreuvesParDate = Record<string, TPreuveAuditEtLabellisation[]>;
const groupByDate = (preuves: TPreuveAuditEtLabellisation[]): TPreuvesParDate =>
  preuves.reduce((dict, preuve) => {
    const date = preuve.demande?.date || preuve.audit?.date_debut;
    if (!date) {
      return dict;
    }
    return {
      ...dict,
      [date]: [...(dict[date] || []), preuve],
    };
  }, {} as TPreuvesParDate);

// groupe les preuves par référentiel et par étoile demandée
type TPreuvesParReferentielEtDate = Record<
  string,
  Record<string, TPreuveAuditEtLabellisation[]>
>;
const groupByReferentielEtDate = (
  preuves: TPreuveAuditEtLabellisation[]
): TPreuvesParReferentielEtDate => {
  return Object.entries(groupByReferentiel(preuves)).reduce(
    (dict, [referentiel, preuvesReferentiel]) => ({
      ...dict,
      [referentiel]: groupByDate(preuvesReferentiel),
    }),
    {} as TPreuvesParReferentielEtDate
  );
};
