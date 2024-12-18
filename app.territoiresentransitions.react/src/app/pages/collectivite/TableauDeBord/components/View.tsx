import { TDBViewParam } from '@/app/app/paths';
import { useCollectiviteId } from '@/app/core-logic/hooks/params';
import { Button, ButtonProps, TrackPageView } from '@/ui';

type Props = {
  view: TDBViewParam;
  title: string;
  description: string;
  btnProps?: ButtonProps;
  children: React.ReactNode;
};

/** Vue générique parent pour les pages tableau de bord de la collectivité et personnel */
const View = ({ view, title, description, children, btnProps }: Props) => {
  const collectivite_id = useCollectiviteId()!;
  const { children: btnContent, ...btnRemainingProps } = btnProps || {};

  return (
    <div data-test={`tdb-${view}`}>
      <TrackPageView
        pageName={`app/tdb/${view}`}
        properties={{ collectivite_id }}
      />
      {/** Header */}
      <div className="flex justify-between max-sm:flex-col gap-y-4">
        <h2 className="mb-4">{title}</h2>
        {btnProps && (
          <Button {...btnRemainingProps}>{btnContent || 'Nouveau'}</Button>
        )}
      </div>
      <p className="mb-12 text-lg text-grey-8">{description}</p>
      {/** Contenu principal */}
      <div className="grid grid-cols-12 gap-10">{children}</div>
    </div>
  );
};

export default View;
