import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useDisclosure } from '@hooks/useDisclosure';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story = {
  render: (props) => {
    const [opened, handler] = useDisclosure(false);
    return (
      <>
        <button onClick={handler.open}>Open Modal</button>
        <Modal opened={opened} onClose={handler.close}>
          {props.children}
        </Modal>
      </>
    );
  },
};

export const Example: Story = {
  ...Template,
  args: {
    children: (
      <>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
      </>
    ),
  },
};
