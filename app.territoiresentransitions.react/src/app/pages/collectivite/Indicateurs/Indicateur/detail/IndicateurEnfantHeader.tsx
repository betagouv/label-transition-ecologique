import { Badge } from '@/ui';
import BadgeOpenData from 'app/pages/collectivite/Indicateurs/components/BadgeOpenData';
import classNames from 'classnames';
import { ExpandToggle } from 'ui/icons/ExpandToggle';
import { BadgeACompleter } from 'ui/shared/Badge/BadgeACompleter';
import { TIndicateurPredefini } from '../../types';

/** Affiche l'en-tête du détail d'un indicateur enfant */
export const IndicateurEnfantHeader = ({
  definition,
  open,
  toggle,
}: {
  definition: TIndicateurPredefini;
  open: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      className={classNames(
        'flex justify-between items-center px-6 py-4 rounded-lg cursor-pointer sticky top-[86px] z-30',
        {
          'bg-[#f5f5fE]': open,
          'hover:bg-grey975': !open,
        }
      )}
      onClick={toggle}
    >
      <div>
        <ExpandToggle open={open} />
        <span className="font-bold">{definition.titre}</span>
      </div>
      <div className="flex gap-2">
        {definition.hasOpenData && <BadgeOpenData />}
        {definition.participationScore && (
          <Badge title="Participe au score" state="grey" />
        )}
        <BadgeACompleter
          className="min-w-max"
          a_completer={!definition.rempli}
        />
      </div>
    </div>
  );
};
