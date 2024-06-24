import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};