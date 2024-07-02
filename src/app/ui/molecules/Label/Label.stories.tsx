import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'ui/molecules/Label',
  component: Label,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;
export const Default: Story = {
  args: {
    children: 'Label',
  },
};
