import {notFound} from 'next/navigation';
import {StrapiImage} from '@components/strapiImage/StrapiImage';
import Section from '@components/sections/Section';
import {getLocalDateString} from 'src/utils/getLocalDateString';
import ParagrapheArticle from './ParagrapheArticle';
import InfoArticle from './InfoArticle';
import {GallerieArticleData, ImageArticleData} from '../../../types';
import {getData, getMetaData} from './utils';
import GallerieArticle from './GallerieArticle';
import EmbededVideo from '@components/video/EmbededVideo';
import {ParagrapheCustomArticleData} from 'app/types';
import {Metadata, ResolvingMetadata} from 'next';

export async function generateMetadata(
  {
    params,
  }: {
    params: {id: string};
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getMetaData(parseInt(params.id));
  const metadata = (await parent) as Metadata;

  return {
    ...metadata,
    title: data.title ? {absolute: data.title} : 'Actualités',
    description: data.description ? data.description : metadata.description,
    openGraph: {
      ...metadata.openGraph,
      title: data.title ? data.title : metadata.openGraph?.title,
      description: data.description
        ? data.description
        : metadata.openGraph?.description,
      images: data.image
        ? [
            {
              url: data.image.url,
              width: data.image.width,
              height: data.image.height,
              type: data.image.type,
              alt: data.image.alt,
            },
          ]
        : metadata.openGraph?.images,
      type: 'article',
      publishedTime: data.publishedAt,
      modifiedTime: data.updatedAt,
    },
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

const Article = async ({params}: {params: {id: string}}) => {
  const id = parseInt(params.id);
  const data = await getData(id);

  if (!data) return notFound();

  return (
    <>
      <Section className="gap-8">
        {/* Image de couverture */}
        <StrapiImage
          data={data.couverture}
          className="fr-responsive-img max-h-[550px] object-cover"
          displayCaption={false}
        />

        <div>
          {/* Titre */}
          <h1>{data.titre}</h1>

          {/* Date de création et date d'édition */}
          <p className="text-sm text-[#666]">
            Le {getLocalDateString(data.dateCreation)}
            {data.dateEdition &&
            getLocalDateString(data.dateCreation) !==
              getLocalDateString(data.dateEdition) ? (
              <span>
                {' '}
                &bull; Mis à jour le {getLocalDateString(data.dateEdition)}
              </span>
            ) : (
              ''
            )}
          </p>
        </div>
      </Section>

      {/* Contenu de l'article */}
      {data.contenu.map((section, index) => (
        <Section
          key={index}
          containerClassName={index === 0 ? '!pt-0 !pb-6' : '!py-6'}
          className="article"
        >
          {
            // Contenu de type parapraphe (titre, texte, image)
            section.type === 'paragraphe' ? (
              <ParagrapheArticle
                paragraphe={section.data as ParagrapheCustomArticleData}
              />
            ) : // Contenu de type image
            section.type === 'image' ? (
              <StrapiImage
                data={(section.data as ImageArticleData).data}
                containerClassName="max-w-full lg:max-w-[80%] h-full flex flex-col justify-center items-center mx-auto mb-6"
                displayCaption={
                  (section.data as ImageArticleData).legendeVisible
                }
              />
            ) : // Contenu de type gallerie d'images
            section.type === 'gallerie' ? (
              <GallerieArticle data={section.data as GallerieArticleData} />
            ) : // Contenu de type vidéo Youtube ou Dailymotion
            section.type === 'video' ? (
              <EmbededVideo
                url={section.data as string}
                className="mb-6 lg:w-4/5"
              />
            ) : // Contenu de type info (dans un cadre bleu)
            section.type === 'info' ? (
              <InfoArticle texte={section.data as string} />
            ) : (
              <></>
            )
          }
        </Section>
      ))}

      <Section className="!flex-row flex-wrap justify-between gap-y-14">
        {data.prevId && (
          <a
            className="fr-link fr-icon-arrow-left-line fr-link--icon-left order-1"
            href={`/actus/${data.prevId}`}
          >
            Précédent
          </a>
        )}
        <a
          className="fr-link mx-auto max-[455px]:order-last order-2"
          href="/actus"
        >
          Retour à la liste des articles
        </a>
        {data.nextId && (
          <a
            className="fr-link fr-icon-arrow-right-line fr-link--icon-right order-3"
            href={`/actus/${data.nextId}`}
          >
            Suivant
          </a>
        )}
      </Section>
    </>
  );
};

export default Article;
