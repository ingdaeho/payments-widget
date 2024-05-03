import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './InputContainer';

const meta: Meta<typeof Input.Container> = {
  component: Input.Container,
  tags: ['autodocs'],
};

export default meta;
export type Story = StoryObj<typeof Input.Container>;

const Template: Story = {
  render: ({ label }) => {
    return (
      <Input.Container label={label}>
        <Input.InputBase />
      </Input.Container>
    );
  },
};

export const WithTitle: Story = {
  ...Template,
  args: {
    label: '카드 번호',
  },
};

export const WithoutTitle: Story = {
  ...Template,
};

export const Password: Story = {
  args: {
    label: '비밀번호',
  },
  render: ({ label }) => {
    return (
      <Input.Container label={label}>
        <div style={{ display: 'flex', gap: 6, width: '30%' }}>
          <Input.InputBase className='w-15' type='password' />
          <Input.InputBase className='w-15' type='password' />
          <Input.InputBase className='w-15' type='password' />
          <Input.InputBase className='w-15' type='password' />
        </div>
      </Input.Container>
    );
  },
};
