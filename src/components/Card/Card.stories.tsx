import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  tags: ['autodocs'],
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    brand: { label: '클린 카드', color: '#E76E9A', bankId: ['1', '1'] },
    numbers: ['1234', '5678', '1234', '5678'],
    owner: 'NAME',
    expiration: ['12', '23'],
  },
};
