// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import PasswordControl from './PasswordControl'

const meta: Meta<typeof PasswordControl> = {
  title: 'Components/PasswordControl',
  component: PasswordControl,
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
} satisfies Meta<typeof PasswordControl>

export default meta
type Story = StoryObj<typeof meta>

export const Password: Story = {
  args: {},
}
