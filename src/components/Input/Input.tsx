import { ComponentPropsWithRef, forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import { useInputContext } from './useInput';

export interface Props extends ComponentPropsWithRef<'input'> {
  type?: ComponentPropsWithRef<'input'>['type'];
  variant?: 'basic' | 'underline';
  isValid?: (value: string) => boolean;
}

export const InputBase = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    type = 'text',
    variant = 'basic',
    isValid,
    className,
    ...rest
  } = props;
  const { setHasError } = useInputContext();

  const handleFocus = () => {
    setHasError(false);
  };

  useEffect(() => {
    const validateInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      const isInvalid = isValid ? isValid(value) : true;
      setHasError(!isInvalid);
    };

    if (!ref || typeof ref === 'function') return;
    ref.current?.addEventListener('input', validateInput);
    () => ref.current?.removeEventListener('input', validateInput);
  }, [ref]);

  return (
    <input
      ref={ref}
      type={type}
      className={classNames(`input-${variant}`, className)}
      onFocus={handleFocus}
      {...rest}
    />
  );
});

InputBase.displayName = 'InputBase';
