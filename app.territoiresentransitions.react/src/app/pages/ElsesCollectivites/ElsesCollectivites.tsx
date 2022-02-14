import {useEffect, useState} from 'react';

import {Spacer} from 'ui/shared/Spacer';
import {elsesCollectiviteReadEndpoint} from 'core-logic/api/endpoints/CollectiviteReadEndpoints';
import {ElsesCollectiviteRead} from 'generated/dataLayer';
import {observer} from 'mobx-react-lite';
import {
  ownedCollectiviteBloc,
  OwnedCollectiviteBloc,
} from 'core-logic/observables/OwnedCollectiviteBloc';
import {SimpleCollectiviteCard} from 'ui/collectivites/SimpleCollectiviteCard';

const ElsesCollectivitesObserver = observer(
  ({bloc}: {bloc: OwnedCollectiviteBloc}) => {
    const [elseCollectiviteReads, setElseCollectiviteReads] = useState<
      ElsesCollectiviteRead[]
    >([]);
    useEffect(() => {
      elsesCollectiviteReadEndpoint
        .getBy({})
        .then(elseCollectiviteReads =>
          setElseCollectiviteReads(elseCollectiviteReads)
        );
    }, []);

    return (
      <div
        data-test="ElsesCollectivites"
        className="app fr-container mt-5 flex justify-center"
      >
        <section className="text-center">
          <h2 className="fr-h2 py-5">Consulter les autres collectivités</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {elseCollectiviteReads.map(collectivite => {
              if (
                bloc.ownedCollectiviteIds.includes(collectivite.collectivite_id)
              )
                return null;
              return (
                <SimpleCollectiviteCard
                  collectivite={collectivite}
                  key={collectivite.collectivite_id}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
);

const ElsesCollectivites = () => (
  <ElsesCollectivitesObserver bloc={ownedCollectiviteBloc} />
);

export default ElsesCollectivites;
