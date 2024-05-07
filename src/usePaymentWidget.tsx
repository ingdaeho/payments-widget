import { createPortal } from 'react-dom';
import { CardContext } from './machine/cardMachine';
import { CardStepper } from './pages/CardStepper/CardStepper';
import { useDisclosure } from '@hooks/useDisclosure';
import { useQueryParams } from '@hooks/useQueryParams';
import './styles/index.css';

export function usePaymentWidget() {
  const [opened, handler] = useDisclosure(false);
  const { setQueryParams } = useQueryParams();

  const initPayment = () => handler.open();

  const closePayment = () => {
    setQueryParams(null);
    handler.close();
  };

  const PaymentWidget = () => {
    if (!opened) return <></>;

    return createPortal(
      <div className='overlay' onClick={closePayment}>
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
