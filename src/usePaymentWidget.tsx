import { CardContext } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';
import { createPortal } from 'react-dom';
import { useDisclosure } from '@hooks/useDisclosure';

export function usePaymentWidget() {
  const [opened, handler] = useDisclosure(false);

  const initPayment = () => handler.open();
  const closePayment = () => handler.close();

  const renderPaymentWidget =
    opened &&
    createPortal(
      <div className='widget'>
        <CardContext.Provider>
          <CardStepper />
        </CardContext.Provider>
      </div>,
      document.body
    );

  return { renderPaymentWidget, initPayment, closePayment };
}
