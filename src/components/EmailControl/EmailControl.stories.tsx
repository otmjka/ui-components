// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import EmailControl from './EmailControl';

const meta: Meta<typeof EmailControl> = {
  title: 'Components/EmailControl',
  component: EmailControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // You can add argTypes here to control the props in Storybook
  argTypes: {
    type: {
      control: 'select',
      options: ['email'],
    },
    fullWidth: {
      control: 'select',
      options: [true, false],
    },

    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
} satisfies Meta<typeof EmailControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    error: false,
    helperText: undefined,
    type: 'email',
    placeholder: 'yourname@email.com',
    autoComplete: 'email',
    autoFocus: true,
    required: true,
    fullWidth: true,
    variant: 'outlined',
    color: 'primary',
    sx: { ariaLabel: 'email' },
  },
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
