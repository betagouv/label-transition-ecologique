import { referentielToName } from '@/app/app/labels';
import {
  makeCollectiviteReferentielUrl,
  ReferentielParamOption,
} from '@/app/app/paths';
import {
  useCollectiviteId,
  useReferentielId,
} from '@/app/core-logic/hooks/params';
import { ReferentielOfIndicateur } from '@/app/referentiels/litterals';
import Link from 'next/link';
import HeaderLabellisation from './HeaderLabellisation';
import { LabellisationTabs } from './LabellisationTabs';
import { useCycleLabellisation } from './useCycleLabellisation';
import { useIsUnchangedReferentiel } from './useIsUnchangedReferentiel';

const ParcoursLabellisation = () => {
  const collectiviteId = useCollectiviteId();
  const referentiel = useReferentielId();
  const { parcours } = useCycleLabellisation(referentiel);
  const isUnchangedReferentiel = useIsUnchangedReferentiel(
    collectiviteId,
    referentiel
  );

  // cas particulier : le référentiel n'est pas du tout renseigné
  if (isUnchangedReferentiel) {
    return (
      <>
        <Title referentiel={referentiel} />
        <main
          className="fr-container mt-9 mb-16"
          data-test={`labellisation-${referentiel}`}
        >
          <p>
            Ce référentiel n’est pas encore renseigné pour votre collectivité.
            Pour commencer à visualiser votre progression, mettez à jour les
            statuts des actions.
          </p>

          {collectiviteId && referentiel ? (
            <div className="flex justify-center">
              <Link
                className="fr-btn fr-btn--secondary "
                href={makeCollectiviteReferentielUrl({
                  collectiviteId,
                  referentielId: referentiel as ReferentielParamOption,
                })}
              >
                Mettre à jour le référentiel
              </Link>
            </div>
          ) : null}
        </main>
      </>
    );
  }

  return collectiviteId && parcours ? (
    <>
      <Title referentiel={parcours.referentiel} />
      <HeaderLabellisation />
      <main
        className="fr-container mt-9 mb-16"
        data-test={`labellisation-${parcours.referentiel}`}
      >
        <LabellisationTabs />
      </main>
    </>
  ) : (
    <div>...</div>
  );
};

const Title = ({ referentiel }: { referentiel: string | null }) => (
  <>
    <h1 className="text-center fr-mt-4w fr-mb-1w">Audit et labellisation</h1>
    {referentiel ? (
      <p className="text-center text-[22px]">
        Référentiel {referentielToName[referentiel as ReferentielOfIndicateur]}
      </p>
    ) : null}
  </>
);

export default ParcoursLabellisation;
