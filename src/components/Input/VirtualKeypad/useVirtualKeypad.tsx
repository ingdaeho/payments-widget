import { useCallback, useRef, FocusEvent } from 'react';

interface Props {
  maxLength: number;
  onClick: (value: number) => void;
}

export const useVirtualKeypad = ({ maxLength, onClick }: Props) => {
  const ref = useRef<HTMLInputElement>();

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>) => {
      ref.current = event.target;
    },
    []
  );

  const handleClickKeypad = useCallback(
    (value: number) => {
      if (ref.current) {
        ref.current.value = (ref.current.value + value).substring(0, maxLength);
        onClick(value);
        const event = new Event('input');
        ref.current.dispatchEvent(event);
      }
    },
    [maxLength, onClick]
  );

  return { handleFocus, handleClickKeypad };
};
