import { createRef, useCallback } from 'react';
import { CardContext } from '@machine/cardMachine';

const useCardExpiration = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 2 }).map(createRef<HTMLInputElement>);

  const handleExpirationDate = useCallback(() => {
    const value = refs.map((ref) => ref.current?.value || '');

    send({
      type: 'UPDATE_EXPIRATION_DATE',
      payload: { key: 'expiration', value },
    });
  }, [refs, send]);

  return {
    expiration: cardState.expiration,
    handleExpirationDate,
    refs,
  };
};

export default useCardExpiration;
