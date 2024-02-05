'use server';

import {fetchCollection} from 'src/strapi/strapi';
import {StrapiImage} from '@components/strapiImage/StrapiImage';
import {StrapiItem} from 'src/strapi/StrapiItem';
import Section from '@components/sections/Section';
import BlogCard from '@components/cards/BlogCard';
import MasonryGallery from '@components/galleries/MasonryGallery';
import {Metadata} from 'next';
import {convertNameToSlug} from 'src/utils/convertNameToSlug';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Actualités',
  };
}

type ActuCard = {
  id: number;
  titre: string;
  dateCreation: Date;
  epingle: boolean;
  resume?: string;
  couverture: StrapiItem;
};

const getData = async () => {
  const data = await fetchCollection('actualites', [
    ['populate[0]', 'Couverture'],
    ['sort[0]', 'createdAt:desc'],
  ]);

  const formattedData: ActuCard[] | null = data
    ? data.map(d => ({
        id: d.id,
        titre: d.attributes.Titre as unknown as string,
        dateCreation:
          (d.attributes.DateCreation as unknown as Date) ??
          (d.attributes.createdAt as unknown as Date),
        epingle: (d.attributes.Epingle as unknown as boolean) ?? false,
        resume: (d.attributes.Resume as unknown as string) ?? undefined,
        couverture: d.attributes.Couverture.data as unknown as StrapiItem,
      }))
    : null;

  return formattedData
    ? formattedData.sort((a, b) => {
        if (a.epingle && !b.epingle) return -1;
        if (!a.epingle && b.epingle) return 1;

        return (
          new Date(b.dateCreation).getTime() -
          new Date(a.dateCreation).getTime()
        );
      })
    : null;
};

const Actualites = async () => {
  const data: ActuCard[] | null = await getData();

  return data ? (
    <Section>
      <h1>Actualités</h1>
      <MasonryGallery
        data={data.map(actu => (
          <BlogCard
            key={actu.id}
            backgroundColor="#f5f5fe"
            title={actu.titre}
            date={actu.dateCreation}
            description={actu.resume}
            image={
              actu.couverture ? (
                <StrapiImage
                  data={actu.couverture}
                  className="w-full"
                  displayCaption={false}
                />
              ) : undefined
            }
            badge={actu.epingle ? 'A la une' : undefined}
            href={`/actus/${actu.id}/${convertNameToSlug(actu.titre)}`}
          />
        ))}
      />
    </Section>
  ) : null;
};

export default Actualites;
