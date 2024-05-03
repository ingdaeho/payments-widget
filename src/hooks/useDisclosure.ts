import { useCallback, useState } from 'react';

export function useDisclosure(initialState = false) {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) return true;

      return isOpened;
    });
  }, []);

  const close = useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) return false;

      return isOpened;
    });
  }, []);

  const toggle = useCallback(() => {
    opened ? close() : open();
  }, [close, open, opened]);

  return [opened, { open, close, toggle }] as const;
}
