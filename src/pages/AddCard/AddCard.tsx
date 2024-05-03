import { createRef } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CardNumbers from './components/CardNumbers';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardSecurityCode from './components/CardSecurityCode';
import CardPassword from './components/CardPassword';
import { Modal } from '../../components/Modal/Modal';
import { BrandList } from './components/BrandList';
import { useCardBrands } from './hooks/useCardBrands';
import { CardContext } from '@machine/cardMachine';

interface Props {
  onNext: () => void;
  onGoBack: () => void;
}

const AddCard = ({ onNext, onGoBack }: Props) => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { opened, handler, selectBrand } = useCardBrands();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, monthRef, ownerRef, passwordRef] = Array.from({ length: 4 }).map(
    createRef<HTMLInputElement>
  );

  return (
    <>
      <Header className='mb-10'>
        <div onClick={onGoBack}>{'<'}&nbsp;</div>
        <span>카드추가</span>
      </Header>

      <Card
        {...cardState}
        error={!cardState.brand.label && cardState.numbers[3].length === 4}
        onClick={handler.open}
      />
      <CardNumbers nextFieldRef={monthRef} />
      <CardExpiration ref={monthRef} nextFieldRef={ownerRef} />
      <CardOwner ref={ownerRef} />
      <CardSecurityCode nextFieldRef={passwordRef} />
      <CardPassword ref={passwordRef} />

      <div className='button-box'>
        <Button onClick={onNext}>다음</Button>
      </div>

      <Modal opened={opened} onClose={handler.close}>
        <BrandList onClick={selectBrand} />
      </Modal>
    </>
  );
};

export default AddCard;
