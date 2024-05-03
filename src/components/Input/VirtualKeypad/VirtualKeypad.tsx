import { FocusEventHandler, forwardRef, useEffect } from 'react';
import { Modal } from '@components/Modal/Modal';
import { shuffle } from '@utils/shuffle';
import { Input } from '../InputContainer/InputContainer';
import { Props as InputProps } from '../Input';
import { useDisclosure } from '@hooks/useDisclosure';

const KEYPAD_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '*'];

export interface Props extends Omit<InputProps, 'onClick'> {
  onClick: (value: number) => void;
  onFocus: FocusEventHandler<HTMLInputElement>;
}

const shuffledValues = shuffle(KEYPAD_VALUES);

export const VirtualKeypad = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { onFocus, onClick, maxLength, ...rest } = props;
    const [opened, handler] = useDisclosure(false);

    const handleClick = (value: string | number) => {
      if (typeof value === 'string') return;
      onClick(value);
    };

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      handler.open();
      onFocus(event);
    };

    useEffect(() => {
      if (!ref || typeof ref === 'function') return;
      if (ref.current?.value.length === maxLength) {
        handler.close();
      }
    }, [handler, maxLength, ref]);

    return (
      <>
        <Input.InputBase
          ref={ref}
          onFocus={handleFocus}
          maxLength={maxLength}
          {...rest}
        />
        <Modal opened={opened} onClose={handler.close}>
          <div className='flex-center grid keypad'>
            {shuffledValues.map((value, index) => {
              return (
                <button
                  className='modal-item-container'
                  key={index}
                  onClick={() => handleClick(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </Modal>
      </>
    );
  }
);
