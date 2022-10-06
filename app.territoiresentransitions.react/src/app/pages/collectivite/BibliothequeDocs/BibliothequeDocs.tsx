import PreuveDoc from 'ui/shared/preuves/Bibliotheque/PreuveDoc';
import {TPreuvesParType} from 'ui/shared/preuves/Bibliotheque/types';
import {usePreuvesParType} from 'ui/shared/preuves/Bibliotheque/usePreuves';
import {AddRapportVisite} from './AddRapportVisite';
import {PreuvesLabellisation} from './PreuveLabellisation';
import {PreuvesTabs} from './PreuvesTabs';

type TBibliothequeDocsProps = {
  preuves: TPreuvesParType;
};

export const BibliothequeDocs = ({preuves}: TBibliothequeDocsProps) => {
  const {labellisation, rapport} = preuves;

  return (
    <main data-test="BibliothequeDocs" className="fr-container mt-9 mb-16">
      <h1 className="text-center fr-mt-4w fr-mb-4w">
        Bibliothèque de documents
      </h1>

      {labellisation?.length ? (
        <section className="fr-mt-4w" data-test="labellisation">
          <PreuvesLabellisation preuves={labellisation} />
        </section>
      ) : null}

      <section className="fr-mt-4w" data-test="rapports">
        <h2>Rapports de visite annuelle</h2>
        <AddRapportVisite />
        {rapport?.map(preuve => (
          <div className="py-4" key={preuve.id}>
            <PreuveDoc preuve={preuve} />
          </div>
        ))}
      </section>

      <section className="fr-mt-4w">
        <h2>Preuves</h2>
        <PreuvesTabs />
      </section>
    </main>
  );
};

const BibliothequeDocsConnected = () => {
  const preuves = usePreuvesParType({
    preuve_types: ['labellisation', 'rapport'],
  });
  return <BibliothequeDocs preuves={preuves} />;
};

export default BibliothequeDocsConnected;
