// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ExampleComponent from './ExampleComponent';

const meta: Meta<typeof ExampleComponent> = {
  title: 'SignIn by components',
  component: ExampleComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // You can add argTypes here to control the props in Storybook
  argTypes: {},
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define your stories
export const Primary: Story = {
  args: {},
};
