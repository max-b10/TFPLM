import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'ui/organisms/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
const Template: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Description</CardDescription>
      </CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
};

export const Default: StoryObj<typeof Card> = {
  ...Template,
  args: {},
};
