import Button from '@components/Button/Button';
import { usePaymentWidget } from './usePaymentWidget';

function App() {
  const { initPayment, renderPaymentWidget } = usePaymentWidget();

  const onClick = () => {
    initPayment();
  };

  return (
    <>
      <div className='flex-center'>
        <Button onClick={onClick}>결제 시작</Button>
      </div>
      {renderPaymentWidget}
    </>
  );
}

export default App;
