import RepubliqueFrancaiseLogo from '@assets/RepubliqueFrancaiseLogo';
import AdemeLogo from '@assets/AdemeLogo';
import {Footer, LinkObject} from '../../design-system/Footer/Footer';
import {Button} from '@design-system/Button';
import {BASE_URL} from 'utils/constants';

type FooterTeTProps = {
  /** Liens supplémentaires à afficher en fonction de la page visitée */
  customLinks?: LinkObject[];
  /** Logos supplémentaires à afficher en fonction de la page visitée */
  customLogos?: React.ReactNode[];
};

/**
 * Footer par défaut des applications Territoires en Transitions
 */

export const FooterTeT = ({customLinks, customLogos}: FooterTeTProps) => {
  return (
    <Footer
      logos={[
        <RepubliqueFrancaiseLogo className="h-full" />,
        <AdemeLogo className="h-full" />,
        ...(customLogos ?? []),
      ]}
      content="Territoires en Transitions est une startup d'État portée par l'Agence de la Transition Écologique (ADEME) avec le soutien de l'Agence Nationale de la Cohésion des Territoires (ANCT)."
      contentLinks={[
        {label: 'ademe.fr', href: 'https://www.ademe.fr/', external: true},
        {label: 'beta.gouv', href: 'https://beta.gouv.fr/', external: true},
      ]}
      bottomContent={
        <div className="flex flex-wrap gap-x-1 mb-0">
          Sauf mention contraire, tous les contenus de ce site sont sous
          <Button
            variant="underlined"
            size="xs"
            href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
            external
            className="!text-grey-8 !font-normal !border-b-grey-8"
          >
            licence etalab-2.0
          </Button>
        </div>
      }
      bottomLinks={[
        {
          label: 'Accessibilité : non conforme',
          href: `${BASE_URL}/accessibilite`,
        },
        {
          label: 'Mentions légales',
          href: `${BASE_URL}/mentions`,
        },
        {
          label: 'Données personnelles',
          href: 'https://www.ademe.fr/donnees-personnelles/',
          external: true,
        },
        {
          label: 'Gestion des cookies',
          href: `${BASE_URL}/cookies`,
        },
        {
          label: 'Code source',
          href: 'https://github.com/incubateur-ademe/territoires-en-transitions',
          external: true,
        },
        {
          label: 'Conditions générales d’utilisation',
          href: `${BASE_URL}/cgu`,
        },
        ...(customLinks ?? []),
      ]}
    />
  );
};
