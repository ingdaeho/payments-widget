import { RefObject, forwardRef, useImperativeHandle } from 'react';
import { Input } from '@components/Input';
import useFocus from '@hooks/useFocus';
import {
  isValidMonth,
  isValidYear,
  EXPIRATION_MAX_LENGTH,
} from '@utils/validator';
import useCardExpiration from '../hooks/useCardExpiration';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardExpiration = forwardRef<HTMLInputElement, Props>(
  ({ nextFieldRef }, forwardedRef) => {
    const { refs, expiration, handleExpirationDate } = useCardExpiration();
    const monthInputRef = refs[0];

    useImperativeHandle(forwardedRef, () => monthInputRef.current!);

    useFocus({
      isValid: isValidMonth(expiration[0]),
      focusTargetRef: refs[1],
    });

    useFocus({
      isValid: isValidYear(expiration[1]),
      focusTargetRef: nextFieldRef,
    });

    return (
      <Input.Container label='만료일' className='input-box w-50'>
        <Input.InputBase
          ref={refs[0]}
          placeholder='MM'
          isValid={isValidMonth}
          onInput={handleExpirationDate}
          maxLength={EXPIRATION_MAX_LENGTH}
        />
        <span>/</span>
        <Input.InputBase
          ref={refs[1]}
          placeholder='YY'
          isValid={isValidYear}
          onInput={handleExpirationDate}
          maxLength={EXPIRATION_MAX_LENGTH}
        />
      </Input.Container>
    );
  }
);

export default CardExpiration;
