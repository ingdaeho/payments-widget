import { forwardRef, useImperativeHandle } from 'react';
import useCardOwner, { OWNER_NAME_MAX_LENGTH } from '../hooks/useCardOwner';
import { Input } from '../../../components/Input/InputContainer/InputContainer';

const CardOwner = forwardRef<HTMLInputElement>((_, forwardedRef) => {
  const { ref, owner, handleOwner } = useCardOwner();

  useImperativeHandle(forwardedRef, () => ref.current!);

  return (
    <Input.Container label='카드 소유자 이름(선택)' className='input-relative'>
      <span className='owner-length'>
        {owner?.length} / {OWNER_NAME_MAX_LENGTH}
      </span>
      <Input.InputBase
        ref={ref}
        onInput={handleOwner}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        maxLength={OWNER_NAME_MAX_LENGTH}
      />
    </Input.Container>
  );
});

export default CardOwner;
