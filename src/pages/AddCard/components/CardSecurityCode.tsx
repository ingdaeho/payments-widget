import { RefObject } from 'react';
import {
  SECURITY_CODE_MAX_LENGTH,
  isValidSecurityCode,
} from '../../../utils/validator';
import useCardSecurityCode from '../hooks/useCardSecurityCode';
import useFocus from '../../../hooks/useFocus';
import Tooltip from '@components/Tooltip/Tooltip';
import HelpIcon from '@assets/svgs/help.svg?react';
import { Input, useVirtualKeypad } from '@components/Input';

interface Props {
  nextFieldRef: RefObject<HTMLInputElement>;
}

const CardSecurityCode = ({ nextFieldRef }: Props) => {
  const { ref, securityCode, handleSecurityCode } = useCardSecurityCode();
  const { handleFocus, handleClickKeypad } = useVirtualKeypad({
    maxLength: SECURITY_CODE_MAX_LENGTH,
    onClick: handleSecurityCode,
  });

  useFocus({
    isValid: isValidSecurityCode(securityCode),
    focusTargetRef: nextFieldRef,
  });

  return (
    <Input.Container label='보안코드' className='input-box w-25'>
      <Input.Keypad
        ref={ref}
        type='password'
        isValid={isValidSecurityCode}
        onFocus={handleFocus}
        onClick={handleClickKeypad}
        maxLength={SECURITY_CODE_MAX_LENGTH}
      />
      <div className='flex'>
        <Tooltip icon={<HelpIcon />} message='보안코드 3자리' />
      </div>
    </Input.Container>
  );
};

export default CardSecurityCode;
