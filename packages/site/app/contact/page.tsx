'use server';

import NoResult from '@components/info/NoResult';
import Section from '@components/sections/Section';
import {StrapiImage} from '@components/strapiImage/StrapiImage';
import PhoneIcon from '@components/icones/PhoneIcon';
import ContactForm from './ContactForm';
import {Metadata, ResolvingMetadata} from 'next';
import {getStrapiData} from './utils';
import {getUpdatedMetadata} from 'src/utils/getUpdatedMetadata';

export async function generateMetadata(
  params: {params: {}},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const metadata = (await parent) as Metadata;
  const strapiData = await getStrapiData();

  return getUpdatedMetadata(metadata, {
    title: strapiData?.seo.metaTitle ?? 'Contact',
    description: strapiData?.seo.metaDescription,
    image: strapiData?.seo.metaImage,
  });
}

const Contact = async () => {
  const data = await getStrapiData();

  return data ? (
    <Section>
      <h1>{data.titre ?? "Contacter l'équipe"}</h1>

      {data.description && <p className="text-xl">{data.description}</p>}

      <div className="p-4 md:p-14 lg:px-28 bg-gray-100 mb-6">
        <p className="text-sm">Tous les champs sont obligatoires</p>
        <ContactForm />
      </div>
      {data.telephone && (
        <div>
          <p className="font-bold flex gap-2 mb-0">
            <PhoneIcon />
            Tél. : {data.telephone}
          </p>
          <p className="text-[#666]">{data.horaires}</p>
        </div>
      )}

      {!!data.couverture && (
        <StrapiImage
          data={data.couverture}
          className="w-full"
          containerClassName="w-full my-6"
          displayCaption={data.legendeVisible}
        />
      )}
    </Section>
  ) : (
    <NoResult />
  );
};

export default Contact;
