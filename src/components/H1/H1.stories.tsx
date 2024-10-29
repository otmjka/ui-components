// src/components/H1/H1.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import H1 from './H1';

const meta: Meta<typeof H1> = {
  title: 'Components/H1',
  component: H1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // You can add argTypes here to control the props in Storybook
  argTypes: {
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
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {},
};

// Define your stories
export const Primary: Story = {
  args: {
    children: '# Heading',
  },
};

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
