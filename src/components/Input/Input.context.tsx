import { Dispatch, SetStateAction, createContext } from 'react';

export interface InputContext {
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

export const InputContext = createContext<InputContext | undefined>(undefined);
