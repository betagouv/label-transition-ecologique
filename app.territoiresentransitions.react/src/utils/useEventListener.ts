import { useEffect } from 'react';

type EventType = 'resize' | 'scroll';

const useEventListener = (
  event: EventType,
  listener: () => void,
  useCapture?: boolean
) => {
  useEffect(() => {
    if (listener) {
      listener();
      window.addEventListener(event, listener, useCapture);

      return () => window.removeEventListener(event, listener, useCapture);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [event, listener, useCapture]);
};

export default useEventListener;
