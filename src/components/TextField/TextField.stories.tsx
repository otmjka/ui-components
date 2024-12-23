// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
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
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Submit: Story = {
  args: {
    error: false,
    helperText: undefined,
    type: 'email',
    placeholder: 'your@email.com',
    autoComplete: 'email',
    autoFocus: true,
    required: true,
    fullWidth: true,
    variant: 'outlined',
    color: 'primary',
    sx: { ariaLabel: 'email' },
  },
};
