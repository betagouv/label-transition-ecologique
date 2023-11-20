'use client';

import ButtonWithLink from '@components/dstet/buttons/ButtonWithLink';
import Section from '@components/sections/Section';
import {StrapiItem} from 'src/strapi/StrapiItem';
import EquipeListe from './EquipeListe';
import EquipeCarousel from './EquipeCarousel';
import {useEffect, useRef, useState} from 'react';

type EquipePlateformeProps = {
  titre: string;
  citation?: string;
  description?: string;
  liste: {
    id: number;
    titre: string;
    legende: string;
    image: StrapiItem;
  }[];
  cta_contact: string;
};

const EquipePlateforme = ({
  titre,
  citation,
  description,
  liste,
  cta_contact,
}: EquipePlateformeProps) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialisation de carouselWidth au chargement de la page
    if (ref && ref.current) {
      const element = ref.current;
      setCarouselWidth(element.clientWidth);

      // Détecte le changement de taille de la fenêtre
      window.addEventListener('resize', () =>
        setCarouselWidth(element.clientWidth),
      );
      return () =>
        window.removeEventListener('resize', () =>
          setCarouselWidth(element.clientWidth),
        );
    }
  }, []);

  return (
    <Section>
      <h2 className="md:text-center mb-1 p-">{titre}</h2>
      {citation && (
        <h4 className="text-primary-7 md:text-center text-[24px] leading-[32px] mb-1">
          {citation}
        </h4>
      )}
      {description && (
        <p className="text-primary-10 md:text-center md:text-[18px] leading-[30px] mb-0">
          {description}
        </p>
      )}

      {/* Affichage de la liste en version desktop */}
      <div className="max-md:hidden flex gap-4 flex-wrap justify-center my-12">
        <EquipeListe liste={liste} />
      </div>

      {/* Affichage de la liste en version mobile */}
      <div ref={ref} className="md:hidden">
        <EquipeCarousel liste={liste} width={carouselWidth} />
      </div>

      <div className="flex gap-8 justify-center">
        <ButtonWithLink href="/contact" size="big">
          {cta_contact}
        </ButtonWithLink>
      </div>
    </Section>
  );
};

export default EquipePlateforme;
