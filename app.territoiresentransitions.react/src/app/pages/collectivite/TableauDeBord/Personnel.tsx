import ModuleFichesActions from 'app/pages/collectivite/TableauDeBord/Module/ModuleFichesActions/ModuleFichesActions';
import SpinnerLoader from 'ui/shared/SpinnerLoader';
import ModuleIndicateurs from './Module/ModuleIndicateurs/ModuleIndicateurs';
import {useModulesFetch} from './Module/useModulesFetch';

/** Vue personnelle du tableau de bord plans d'action */
const Personnel = () => {
  const {data: modules, isLoading} = useModulesFetch();

  if (isLoading) {
    return (
      <div className="h-64 flex">
        <div className="m-auto">
          <SpinnerLoader className="w-8 h-8" />
        </div>
      </div>
    );
  }

  const isEmpty = !modules || modules?.length === 0;

  if (isEmpty) {
    return (
      <div className="h-64 flex items-center justify-center text-error-1">
        Une erreur est survenue
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {modules.map(module => {
        if (module.type === 'indicateur.list') {
          return (
            <ModuleIndicateurs
              key={module.slug}
              view={'personnel'}
              module={module}
            />
          );
        }
        if (module.type === 'fiche_action.list') {
          return (
            <ModuleFichesActions
              key={module.slug}
              view={'personnel'}
              module={module}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Personnel;