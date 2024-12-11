import { InfoActionImpact, Modal, useEventTracker } from '@/ui';
import { useCollectiviteId } from 'core-logic/hooks/params';
import { useState } from 'react';
import Markdown from 'ui/Markdown';
import { useActionImpact } from './useActionImpact';

type ModaleActionImpactProps = {
  actionImpactId: number;
  children: React.JSX.Element;
};

/**
 * Affiche le descriptif d'une action à impact (du panier d'actions)
 */
export const ModaleActionImpact = (props: ModaleActionImpactProps) => {
  const { actionImpactId, children } = props;
  const { data: action } = useActionImpact(actionImpactId);
  const [isOpen, setIsOpen] = useState(false);
  const trackEvent = useEventTracker('app/fiche-action');
  const collectivite_id = useCollectiviteId()!;

  if (!action) {
    return null;
  }

  const { titre, description, typologie } = action;
  return (
    <Modal
      size="lg"
      title={titre}
      subTitle={typologie?.nom}
      textAlign="left"
      openState={{
        isOpen,
        setIsOpen: (opened) => {
          if (opened) {
            trackEvent('cta_fa_fai', { collectivite_id });
          }
          setIsOpen(opened);
        },
      }}
      render={() => {
        return (
          <InfoActionImpact
            action={action}
            descriptionMarkdown={
              <Markdown
                content={description}
                className="paragraphe-18 mb-8 [&_ul]:list-disc [&_ul]:pl-8"
              />
            }
          />
        );
      }}
    >
      {children}
    </Modal>
  );
};
