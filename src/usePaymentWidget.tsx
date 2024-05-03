import { CardContext } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';
import { createPortal } from 'react-dom';
import { useDisclosure } from '@hooks/useDisclosure';
import './styles/index.css';

export function usePaymentWidget() {
  const [opened, handler] = useDisclosure(false);

  const initPayment = () => handler.open();

  const PaymentWidget = () => {
    if (!opened) return <></>;

    return createPortal(
      <div className='overlay' onClick={handler.close}>
        <div
          className='widget'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CardContext.Provider>
            <CardStepper />
          </CardContext.Provider>
        </div>
      </div>,
      document.body
    );
  };

  return { PaymentWidget, initPayment };
}
