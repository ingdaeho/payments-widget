import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../InputContainer/InputContainer';
import { VirtualKeypad } from './VirtualKeypad';
import { useVirtualKeypad } from './useVirtualKeypad';

const meta: Meta<typeof VirtualKeypad> = {
  component: VirtualKeypad,
  decorators: [
    (Story) => (
      <Input.Container>
        <Story />
      </Input.Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VirtualKeypad>;

export const Component: Story = {
  render: () => {
    const ref = useRef(null);
    const { handleClickKeypad, handleFocus } = useVirtualKeypad({
      onClick: () => {},
      maxLength: 4,
    });
    return (
      <VirtualKeypad
        ref={ref}
        onFocus={handleFocus}
        onClick={handleClickKeypad}
      />
    );
  },
};
