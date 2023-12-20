'use client';

import ButtonWithLink from '@components/dstet/buttons/ButtonWithLink';
import PlayCircleIcon from '@components/icones/PlayCircleIcon';
import Section from '@components/sections/Section';
import {StrapiImage} from '@components/strapiImage/StrapiImage';
import {useEvolutionTotalActivation} from 'app/stats/EvolutionTotalActivationParType';
import {StrapiItem} from 'src/strapi/StrapiItem';
import Arrow from './Arrow';

type HeaderPlateformeProps = {
  titre: string;
  accroche: string;
  cta_inscription: string;
  url_inscription: string;
  cta_demo: string;
  url_demo: string;
  couverture: StrapiItem;
};

const HeaderPlateforme = ({
  titre,
  accroche,
  cta_inscription,
  url_inscription,
  cta_demo,
  url_demo,
  couverture,
}: HeaderPlateformeProps) => {
  const {data} = useEvolutionTotalActivation('', '');
  const collectivitesActivees = data ? data.courant.total : undefined;

  return (
    <Section containerClassName="bg-gradient-to-b from-[#F4F5FD] to-[#FFFFFF] !pb-0">
      <h1 className="text-primary-9 text-center md:text-[52px] md:leading-[72px]">
        {titre}
      </h1>
      <p className="text-primary-7 text-center text-[22px] leading-[28px] md:text-[24px] md:leading-[32px] font-bold">
        {accroche}
      </p>
      <div className="flex max-md:flex-col gap-y-4 gap-x-8 justify-center items-center">
        <div className="max-md:flex max-md:flex-col max-md:items-center">
          <ButtonWithLink href={url_inscription} size="big">
            {cta_inscription}
          </ButtonWithLink>
          {!!collectivitesActivees && (
            <p className="md:hidden text-primary-9 text-[13px] font-bold mb-0 pt-2">
              Déjà {collectivitesActivees} collectivités utilisatrices
            </p>
          )}
        </div>

        <ButtonWithLink href={url_demo} size="big" variant="outlined">
          <div className="flex gap-3 justify-center items-center">
            <PlayCircleIcon fill="#6A6AF4" /> {cta_demo}
          </div>
        </ButtonWithLink>
      </div>
      <div className="max-md:hidden flex justify-center gap-4 h-[32px] mt-2">
        {!!collectivitesActivees && (
          <>
            <Arrow />
            <p className="text-primary-9 text-[13px] font-bold mb-0 pt-2">
              Déjà {collectivitesActivees} collectivités utilisatrices
            </p>
          </>
        )}
      </div>
      <div
        style={{boxShadow: '0px 4px 50px 0px #0000000D'}}
        className="md:w-4/5 h-fit mt-8 rounded-t-[30px] overflow-hidden border-t border-l border-r border-primary-4 mx-auto"
      >
        <StrapiImage
          data={couverture}
          className="w-auto mx-auto"
          containerClassName="w-full min-w-[350px]"
          displayCaption={false}
        />
      </div>
    </Section>
  );
};

export default HeaderPlateforme;
