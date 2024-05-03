import { useCallback, useRef } from 'react';
import { CardContext } from '@machine/cardMachine';

export const OWNER_NAME_MAX_LENGTH = 30;

const useCardOwner = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const ref = useRef<HTMLInputElement>(null);

  const handleOwner = useCallback(() => {
    const value = ref.current?.value || '';

    send({
      type: 'UPDATE_OWNER',
      payload: { key: 'owner', value },
    });
  }, [send]);

  return {
    ref,
    owner: cardState.owner,
    handleOwner,
  };
};

export default useCardOwner;
