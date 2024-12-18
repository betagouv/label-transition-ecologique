import { Alert, AlertProps, Button, ButtonProps } from '@/ui';
import classNames from 'classnames';
import { alertClassnames } from './utils';

type BottomAlertOkCancelProps = Pick<AlertProps, 'state' | 'title'> & {
  title: string;
  /** Les props du bouton "Valider" */
  btnOKProps: ButtonProps;
  /** Les props du bouton "Annuler" (si non spécifié, le bouton est masqué) */
  btnCancelProps?: ButtonProps;
};

export const BottomAlertOkCancel = (props: BottomAlertOkCancelProps) => {
  const { btnOKProps, btnCancelProps, title, ...remainingAlertProps } = props;
  const { children: ok, ...btnOKRemainingProps } = btnOKProps;
  const { children: cancel, ...btnCancelRemainingProps } = btnCancelProps || {};
  const styles = alertClassnames[remainingAlertProps.state || 'info'];

  return (
    <Alert
      className={classNames(
        'absolute left-0 bottom-0 border-t border-t-info-1 pt-2 pb-4 transition-all duration-500 opacity-100 z-50'
      )}
      {...remainingAlertProps}
      description={
        <div className="flex gap-4 justify-between">
          <div
            className={classNames(
              'flex flex-col justify-center text-base font-bold',
              styles.text
            )}
          >
            {title}
          </div>
          <div className="flex gap-3 justify-center">
            {btnCancelProps && (
              <Button
                type="button"
                variant="outlined"
                {...btnCancelRemainingProps}
              >
                {cancel || 'Annuler'}
              </Button>
            )}
            <Button type="submit" {...btnOKRemainingProps}>
              {ok || 'Confirmer'}
            </Button>
          </div>
        </div>
      }
      fullPageWidth
      noIcon
    />
  );
};
