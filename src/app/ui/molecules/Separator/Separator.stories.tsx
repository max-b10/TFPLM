import { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'ui/molecules/Separator',
  component: Separator,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};
