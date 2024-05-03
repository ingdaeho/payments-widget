import type { Meta, StoryObj } from '@storybook/react';
import { InputBase } from './Input';
import { Input } from './InputContainer/InputContainer';

const meta: Meta<typeof InputBase> = {
  component: InputBase,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['basic', 'underline'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => (
      <Input.Container>
        <Story />
      </Input.Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: 'basic',
    type: 'text',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    type: 'text',
  },
};
