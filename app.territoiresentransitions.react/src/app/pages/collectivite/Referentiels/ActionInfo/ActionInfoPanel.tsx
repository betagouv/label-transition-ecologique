import { ActionDefinitionSummary } from '@/app/core-logic/api/endpoints/ActionDefinitionSummaryReadEndpoint';
import { useState } from 'react';
import { useShowDescIntoInfoPanel } from '../../Audit/useAudit';
import { ActionInfoDetail } from './ActionInfoDetail';
import { ActionInfoSommaire } from './ActionInfoSommaire';
import { getItems } from './toc-items';

export type TActionInfoProps = { action: ActionDefinitionSummary };

/**
 * Affiche les informations détaillées associées à une action (contextes,
 * exemples, ressources...)
 */
export const ActionInfoPanel = ({ action }: TActionInfoProps) => {
  // items à afficher dans le sommaire
  const showDescIntoInfoPanel =
    useShowDescIntoInfoPanel() && Boolean(action.description);
  const items = getItems(action, showDescIntoInfoPanel);

  // item sélectionné (le 1er par défaut)
  const [current, setCurrent] = useState(items?.[0].id);
  const currentItem = items.find(({ id }) => id === current);

  return (
    <>
      <ActionInfoSommaire
        items={items}
        current={current}
        setCurrent={setCurrent}
      />
      {currentItem ? (
        <ActionInfoDetail item={currentItem} action={action} />
      ) : null}
    </>
  );
};
