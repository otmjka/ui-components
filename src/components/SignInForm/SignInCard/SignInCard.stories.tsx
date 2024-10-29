// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SignInCard from './SignInCard';

const meta: Meta<typeof SignInCard> = {
  title: 'Components/SignInCard',
  component: SignInCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // You can add argTypes here to control the props in Storybook
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
} satisfies Meta<typeof SignInCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {},
};

// // Define your stories
// export const Primary: Story = {
//   args: {
//     variant: 'contained',
//     children: 'Primary Button',
//     color: 'primary',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     variant: 'contained',
//     children: 'Secondary Button',
//     color: 'secondary',
//   },
// };

// export const Outlined: Story = {
//   args: {
//     variant: 'outlined',
//     children: 'Outlined Button',
//   },
// };