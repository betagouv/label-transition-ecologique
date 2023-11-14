import classNames from 'classnames';
import ButtonWithLink from '@components/dstet/buttons/ButtonWithLink';
import {ButtonVariant} from '@components/dstet/buttons/utils';
import Markdown from '@components/markdown/Markdown';

type CardProps = {
  title?: string;
  subtitle?: string;
  step?: number | string;
  description: string;
  button?: {
    title: string;
    href: string;
    external?: boolean;
    variant?: ButtonVariant;
  };
  image?: React.ReactNode;
  imagePosition?: 'top' | 'left';
  className?: string;
  textClassName?: string;
};

/**
 * Carte générique
 * Permet l'affichage d'un titre, d'un contenu, avec ou sans
 * image, step et bouton
 */

const Card = ({
  title,
  subtitle,
  step,
  description,
  button,
  image,
  imagePosition = 'top',
  className,
  textClassName,
}: CardProps) => {
  return (
    <div
      className={classNames(
        'bg-white p-6 xl:p-8 border border-primary-4 rounded-lg',
        {
          'grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8':
            !!image && imagePosition === 'left',
          'flex flex-col gap-6 xl:gap-8': !!image && imagePosition === 'top',
        },
        className,
      )}
    >
      {!!image && <div>{image}</div>}
      <div
        className={classNames('h-full flex flex-col justify-between', {
          'col-span-2': !!image && imagePosition === 'left',
        })}
      >
        <div>
          {step && (
            <div className="w-[40px] h-[40px] rounded-full bg-primary-6 text-white text-center text-[22px] leading-[40px] font-bold mb-6">
              {step}
            </div>
          )}
          {title && <h4>{title}</h4>}
          {subtitle && (
            <p className="text-primary-8 text-[17px] leading-[24px] font-bold mb-3">
              {subtitle}
            </p>
          )}
          <Markdown
            texte={description}
            className={classNames(
              'paragraphe-16',
              {'no-margin': !button},
              textClassName,
            )}
          />
        </div>

        {button && (
          <ButtonWithLink
            href={button.href}
            variant={button.variant}
            external={button.external}
            fullWidth
            size="big"
          >
            {button.title}
          </ButtonWithLink>
        )}
      </div>
    </div>
  );
};

export default Card;
