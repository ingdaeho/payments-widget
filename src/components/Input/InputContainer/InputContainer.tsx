import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import { InputContext } from '../Input.context';
import { InputBase } from '../Input';
import { VirtualKeypad } from '../VirtualKeypad/VirtualKeypad';

export interface Props extends ComponentPropsWithoutRef<'div'> {
  label?: string;
}

export const Input = ({
  label,
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const [hasError, setHasError] = useState(false);

  const contextValue = useMemo(() => ({ hasError, setHasError }), [hasError]);

  return (
    <InputContext.Provider value={contextValue}>
      <div className={'input-container'} {...props}>
        {label && <span className='input-title'>{label}</span>}
        <div className={classNames(className, { error: hasError })}>
          {children}
        </div>
      </div>
    </InputContext.Provider>
  );
};

Input.displayName = 'InputContainer';
Input.Container = Input;
Input.InputBase = InputBase;
Input.Keypad = VirtualKeypad;
