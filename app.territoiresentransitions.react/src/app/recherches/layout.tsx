import {ReactNode} from 'react';
import CollectivitesEngagees from '../pages/CollectivitesEngagees/CollectivitesEngagees';

export default function LayoutToutesLesCollectivites({
  children,
}: {
  children: ReactNode;
}) {
  return <CollectivitesEngagees>{children}</CollectivitesEngagees>;
}
