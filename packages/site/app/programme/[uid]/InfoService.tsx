'use client'; // todo: voir côté composant <Button/> pourquoi le use client est nécessaire

import {Button} from '@tet/ui';
import Section from '@components/sections/Section';
import {InfoData} from './types';
import classNames from 'classnames';

const InfoService = ({titre, boutons}: InfoData) => {
  const areButtons = boutons.filter(b => !!b.url).length !== 0;

  return (
    <Section containerClassName="bg-primary-7">
      <h2 className="text-white text-center">{titre}</h2>

      <div
        className={classNames(
          'max-lg:w-fit lg:h-fit flex max-lg:flex-col justify-center items-center max-lg:divide-y lg:divide-x mx-auto',
          {'gap-8': areButtons},
        )}
      >
        {areButtons
          ? boutons.map(b => (
              <Button
                key={b.label}
                href={b.url}
                variant="white"
                disabled={!b.url}
                external={b.url?.startsWith('http')}
                className="max-lg:w-full max-lg:text-center"
              >
                {b.label}
              </Button>
            ))
          : boutons.map(b => (
              <div
                key={b.label}
                className="text-white text-base text-center font-bold max-lg:py-8 lg:px-8 max-lg:w-full lg:h-full"
              >
                {b.label}
              </div>
            ))}
      </div>
    </Section>
  );
};

export default InfoService;
