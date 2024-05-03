import { createRef, useCallback } from 'react';
import { CardContext } from '@machine/cardMachine';

const useCardPassword = () => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const refs = Array.from({ length: 2 }).map(createRef<HTMLInputElement>);

  const handlePassword = useCallback(() => {
    const password = refs.map((ref) => ref.current?.value || '');

    send({
      type: 'UPDATE_PASSWORD',
      payload: {
        key: 'password',
        value: password,
      },
    });
  }, [refs, send]);

  return {
    refs,
    password: cardState.password,
    handlePassword,
  };
};

export default useCardPassword;
