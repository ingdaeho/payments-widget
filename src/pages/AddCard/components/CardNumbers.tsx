import { RefObject } from 'react';
import { Input, useVirtualKeypad } from '@components/Input';
import useFocus from '@hooks/useFocus';
import { CardContext } from '@machine/cardMachine';
import { CARD_NUMBER_MAX_LENGTH, isCardNumber } from '@utils/validator';
import useCardNumber from '../hooks/useCardNumber';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardNumbers = ({ nextFieldRef }: Props) => {
  const { refs, cardNumbers, handleNumbers } = useCardNumber();
  const { brand } = CardContext.useSelector(({ context }) => context.cardState);
  const { handleFocus, handleClickKeypad } = useVirtualKeypad({
    maxLength: CARD_NUMBER_MAX_LENGTH,
    onClick: handleNumbers,
  });

  useFocus({
    isValid: isCardNumber(cardNumbers[0]),
    focusTargetRef: refs[1],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers[1]),
    focusTargetRef: refs[2],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers[2]),
    focusTargetRef: refs[3],
  });

  useFocus({
    isValid: isCardNumber(cardNumbers[3]) && Boolean(brand.label),
    focusTargetRef: nextFieldRef,
  });

  return (
    <>
      <Input.Container label='카드 번호' className='input-box'>
        <Input.InputBase
          ref={refs[0]}
          isValid={isCardNumber}
          onInput={handleNumbers}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
        <span>-</span>
        <Input.InputBase
          ref={refs[1]}
          isValid={isCardNumber}
          onInput={handleNumbers}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
        <span>-</span>
        <Input.Keypad
          ref={refs[2]}
          type='password'
          isValid={isCardNumber}
          onFocus={handleFocus}
          onClick={handleClickKeypad}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />

        <span>-</span>
        <Input.Keypad
          ref={refs[3]}
          type='password'
          isValid={isCardNumber}
          onFocus={handleFocus}
          onClick={handleClickKeypad}
          maxLength={CARD_NUMBER_MAX_LENGTH}
        />
      </Input.Container>
    </>
  );
};

export default CardNumbers;
