import { createRef, useCallback } from 'react';
import { CardContext } from '@machine/cardMachine';

const useCardNumber = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 4 }).map(createRef<HTMLInputElement>);

  const handleNumbers = useCallback(() => {
    const numbers = refs.map((ref) => ref.current?.value || '');

    send({
      type: 'UPDATE_CARD_NUMBER',
      payload: { key: 'numbers', value: numbers },
    });
  }, [refs, send]);

  return {
    cardNumbers: cardState.numbers,
    handleNumbers,
    refs,
  };
};

export default useCardNumber;
