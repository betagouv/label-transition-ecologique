import {NavLink} from 'react-router-dom';

import {monComptePath, rejoindreUneCollectivitePath} from 'app/paths';
import {ProfilRoutes} from './ProfileRoutes';

const Profil = () => {
  return (
    <div className="flex items-start">
      <nav className="hidden md:flex fr-sidemenu w-max py-8 md:px-8 lg:px-14 border-r border-gray-100 whitespace-nowrap">
        <div className="fr-sidemenu-wrapper">
          <ul className="fr-sidemenu_list">
            <li className="fr-sidemenu_item fr-sidemenu_item--active">
              <NavLink
                className="fr-sidemenu__link"
                to={monComptePath}
                target="_self"
                aria-current="page"
              >
                Mon compte
              </NavLink>
            </li>
            <li className="fr-sidemenu_item fr-sidemenu_item--active">
              <NavLink
                className="fr-sidemenu__link"
                to={rejoindreUneCollectivitePath}
                target="_self"
                aria-current="page"
              >
                Rejoindre une collectivité
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="max-w-3xl w-full mt-14 mx-auto px-6">
        <ProfilRoutes />
      </div>
    </div>
  );
};

export default Profil;
