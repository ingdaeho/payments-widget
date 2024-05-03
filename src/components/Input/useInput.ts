import { useContext } from 'react';
import { InputContext } from './Input.context';

export const useInputContext = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('InputContext must be used within a InputContextProvider');
  }

  return context;
};
