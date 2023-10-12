'use server';

import {Metadata} from 'next';
import CGU from './cgu.mdx';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'CGU',
  };
}

export default async function Page() {
  return (
    <div className="fr-container">
      <div className="fr-mt-1w fr-mt-md-4w fr-mb-5w">
        <h1 className="fr-header__body">Conditions générales d’utilisation</h1>
        <CGU />
      </div>
    </div>
  );
}
