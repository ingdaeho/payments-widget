import { forwardRef, useImperativeHandle } from 'react';
import useCardPassword from '../hooks/useCardPassword';
import useFocus from '@hooks/useFocus';
import { Input, useVirtualKeypad } from '@components/Input';
import { PASSWORD_INPUT_MAX_LENGTH, isValidPassword } from '@utils/validator';

const CardPassword = forwardRef<HTMLInputElement>((_, forwardedRef) => {
  const { refs, password, handlePassword } = useCardPassword();
  const { handleFocus, handleClickKeypad } = useVirtualKeypad({
    maxLength: PASSWORD_INPUT_MAX_LENGTH,
    onClick: handlePassword,
  });
  const [firstInput] = refs;

  useFocus({
    isValid: isValidPassword(password[0]),
    focusTargetRef: refs[1],
  });

  useImperativeHandle(forwardedRef, () => firstInput.current!);

  return (
    <Input.Container label='카드 비밀번호'>
      <div style={{ display: 'flex', gap: 6 }}>
        <Input.Keypad
          className='w-15'
          ref={refs[0]}
          type='password'
          onFocus={handleFocus}
          onClick={handleClickKeypad}
          maxLength={PASSWORD_INPUT_MAX_LENGTH}
        />
        <Input.Keypad
          className='w-15'
          ref={refs[1]}
          type='password'
          onFocus={handleFocus}
          onClick={handleClickKeypad}
          maxLength={PASSWORD_INPUT_MAX_LENGTH}
        />
        <div className='flex-center w-15'>•</div>
        <div className='flex-center w-15'>•</div>
      </div>
    </Input.Container>
  );
});

export default CardPassword;
