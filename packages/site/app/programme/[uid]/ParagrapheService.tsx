import ThreePicsMosaic from '@components/galleries/ThreePicsMosaic';
import Markdown from '@components/markdown/Markdown';
import Section from '@components/sections/Section';
import {StrapiImage} from '@components/strapiImage/StrapiImage';
import classNames from 'classnames';
import {ParagrapheData} from './types';

const ParagrapheService = ({
  tailleParagraphe,
  titre,
  imageTitre,
  tailleImageTitre,
  texte,
  images,
  alignementImageDroite,
}: ParagrapheData) => {
  const Titre = (
    tailleParagraphe === 'md' ? 'h2' : 'h1'
  ) as keyof JSX.IntrinsicElements;

  return (
    <Section
      className={classNames('lg:flex-row !gap-14 items-center', {
        'lg:flex-row-reverse': alignementImageDroite,
        'max-lg:flex-col-reverse ':
          alignementImageDroite && tailleParagraphe === 'md',
      })}
    >
      {!!images &&
        images.length > 0 &&
        (tailleParagraphe === 'md' ? (
          <ThreePicsMosaic images={images} />
        ) : (
          <StrapiImage
            data={images[0]}
            containerClassName="w-[452px] max-w-full h-[419px] flex-none"
            className="rounded-3xl border-8 border-primary-3 h-full w-full object-cover"
          />
        ))}

      <div>
        <Titre className={classNames({'mb-3': !!imageTitre})}>{titre}</Titre>
        {!!imageTitre && (
          <StrapiImage
            data={imageTitre}
            className={classNames('mb-6', {
              'h-6': tailleImageTitre === 'sm' || !tailleImageTitre,
              'h-20': tailleImageTitre === 'md',
              'h-52': tailleImageTitre === 'lg',
            })}
          />
        )}
        <Markdown
          texte={texte}
          className={classNames('-mb-6', {
            'max-md:paragraphe-18 md:paragraphe-22':
              tailleParagraphe === 'lg' || !tailleParagraphe,
            'paragraphe-18': tailleParagraphe === 'md',
          })}
        />
      </div>
    </Section>
  );
};

export default ParagrapheService;
