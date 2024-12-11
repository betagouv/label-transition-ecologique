'use client';

import { Button } from '@/ui';
import Section from '@tet/site/components/sections/Section';
import { StrapiImage } from '@tet/site/components/strapiImage/StrapiImage';
import { StrapiItem } from '@tet/site/src/strapi/StrapiItem';

type HeaderTrajectoireProps = {
  titre: string;
  couverture: StrapiItem;
  ctaConnexion: string;
};

const HeaderTrajectoire = ({
  titre,
  couverture,
  ctaConnexion,
}: HeaderTrajectoireProps) => {
  return (
    <Section containerClassName="bg-primary-1 max-md:!py-6 md:max-lg:!py-12 lg:!py-20">
      <h1 className="text-center text-primary-10">{titre}</h1>
      <StrapiImage
        data={couverture}
        className="max-h-[560px]"
        containerClassName="mx-auto h-fit"
        displayCaption={false}
      />
      <Button
        href="https://app.territoiresentransitions.fr/"
        className="mx-auto"
        external
      >
        {ctaConnexion}
      </Button>
    </Section>
  );
};

export default HeaderTrajectoire;
