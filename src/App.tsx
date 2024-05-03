import Button from '@components/Button/Button';
import { usePaymentWidget } from './usePaymentWidget';

function App() {
  const { initPayment, PaymentWidget } = usePaymentWidget();

  const onClick = () => {
    initPayment();
  };

  return (
    <>
      <div className='flex-center'>
        <Button onClick={onClick}>결제 시작</Button>
      </div>
      <PaymentWidget />
    </>
  );
}

export default App;
