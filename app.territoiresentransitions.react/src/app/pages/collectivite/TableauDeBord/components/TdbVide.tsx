import { Button } from '@/ui';
import { makeCollectivitePlansActionsNouveauUrl } from 'app/paths';
import { useCurrentCollectivite } from 'core-logic/hooks/useCurrentCollectivite';
import { useRouter } from 'next/navigation';
import PictoDashboard from 'ui/pictogrammes/PictoDashboard';

const TdbVide = () => {
  const currentCollectivite = useCurrentCollectivite();

  const router = useRouter();

  if (!currentCollectivite) return null;

  return (
    <div className="col-span-full flex flex-col items-center p-12 text-center bg-primary-0 border border-primary-4 rounded-xl">
      <PictoDashboard />
      <h3 className="mb-4 text-primary-8">
        Vous n'avez pas encore créé de plan d'action !
      </h3>
      <p className="mb-8 text-sm text-primary-9">
        Vous pouvez créer votre plan d'action, qu’il soit déjà voté ou encore en
        cours d’élaboration.
        <br />
        Les fiches seront modifiables à tout moment et vous pourrez les piloter
        depuis ce tableau de bord !
      </p>
      {!currentCollectivite.readonly && (
        <Button
          onClick={() =>
            router.push(
              makeCollectivitePlansActionsNouveauUrl({
                collectiviteId: currentCollectivite.collectivite_id!,
              })
            )
          }
        >
          Créer un plan d'action
        </Button>
      )}
    </div>
  );
};

export default TdbVide;
