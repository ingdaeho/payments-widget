import { useCallback, useRef } from 'react';
import { CardContext } from '@machine/cardMachine';

const useCardSecurityCode = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const ref = useRef<HTMLInputElement>(null);

  const handleSecurityCode = useCallback(() => {
    const value = ref.current?.value || '';

    send({
      type: 'UPDATE_SECURITY_CODE',
      payload: { key: 'securityCode', value },
    });
  }, [send]);

  return {
    ref,
    securityCode: cardState.securityCode,
    handleSecurityCode,
  };
};

export default useCardSecurityCode;
