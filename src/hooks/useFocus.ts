import { RefObject, useEffect } from 'react';

interface Props {
  isValid: boolean;
  focusTargetRef: RefObject<HTMLInputElement>;
}

export default function useFocus({ isValid, focusTargetRef }: Props) {
  useEffect(() => {
    if (isValid) focusTargetRef.current?.focus();
  }, [isValid]);
}
