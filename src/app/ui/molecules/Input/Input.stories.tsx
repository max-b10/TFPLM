import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'ui/molecules/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: { type: 'number', className: 'no-spinner' },
};
