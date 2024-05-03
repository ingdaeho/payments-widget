import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import HelpIcon from '@assets/svgs/help.svg?react';

const meta: Meta<typeof Tooltip> = {
  tags: ['autodocs'],
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    icon: <HelpIcon />,
    message: '보안코드',
  },
  render: (props) => {
    return (
      <div className='flex'>
        <Tooltip {...props} />
      </div>
    );
  },
};
