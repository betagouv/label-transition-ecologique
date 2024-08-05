import {monComptePath} from 'app/paths';
import classNames from 'classnames';
import {TAuthContext, UserData} from 'core-logic/api/auth/AuthProvider';
import {usePathname} from 'next/navigation';
import {forwardRef, Ref} from 'react';
import {useQueryClient} from 'react-query';
import {useHistory} from 'react-router-dom';
import DropdownFloater from 'ui/shared/floating-ui/DropdownFloater';
import './MenuUtilisateur.css';
import {HeaderPropsWithModalState} from './types';
import Link from 'next/link';

/**
 * Affiche le menu associé à l'utilisateur courant
 */
const MenuUtilisateur = (props: HeaderPropsWithModalState) => {
  const {auth, setModalOpened} = props;
  const {user} = auth;
  const pathname = usePathname();
  if (!user) {
    return null;
  }
  const isUserPath = pathname === monComptePath;

  return (
    <DropdownFloater
      placement="bottom"
      offsetValue={-12}
      zIndex={2000}
      render={({close}) => (
        <div
          className="m-0 p-0 user-menu"
          onClick={() => {
            close();
            setModalOpened(false);
          }}
        >
          <Link
            href={monComptePath}
            className="fr-nav__link"
            aria-current={isUserPath ? 'page' : undefined}
          >
            <span className="px-6">Profil</span>
          </Link>
          <Deconnexion auth={auth} />
        </div>
      )}
    >
      <MenuUtilisateurBtn user={user} isUserPath={isUserPath} />
    </DropdownFloater>
  );
};

export default MenuUtilisateur;

/** Bouton permettant d'ouvrir le menu */
const MenuUtilisateurBtn = forwardRef(
  (
    {
      user,
      isUserPath,
      isOpen,
      ...props
    }: {
      isOpen?: boolean;
      isUserPath: boolean;
      user: UserData;
    },
    ref?: Ref<HTMLDivElement>
  ) => (
    <div ref={ref} {...props}>
      <button
        data-test="connectedMenu"
        className={`user-menu fr-btn fr-icon-${
          user.isSupport ? 'customer-service' : 'account'
        }-${isUserPath ? 'fill' : 'line'}`}
        style={{maxWidth: '15rem'}}
        aria-expanded={isOpen}
      >
        <span className="line-clamp-1">{user.prenom}</span>
        <i
          className={classNames('fr-fi-arrow-down-s-line ml-2 transition-all', {
            'rotate-180': isOpen,
          })}
        />
      </button>
    </div>
  )
);

/**
 * Bouton "Déconnexion"
 */
const Deconnexion = ({auth}: {auth: TAuthContext}) => {
  const history = useHistory();
  const queryClient = useQueryClient();
  return (
    <Link
      className="fr-nav__link"
      style={{backgroundImage: 'none'}}
      data-test="logoutBtn"
      href="/"
      onClick={() => {
        auth.disconnect().then(() => {
          // Supprime le cache de la session
          queryClient.removeQueries({
            queryKey: ['session'],
          });

          history.push('/');
        });
      }}
    >
      <span className="px-6">Déconnexion</span>
    </Link>
  );
};
