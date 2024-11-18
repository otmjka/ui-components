// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import MinimalizeLayoutBlog from './MinimalizeLayoutBlog'

const meta: Meta<typeof MinimalizeLayoutBlog> = {
  title: 'Simple layout, header',
  component: MinimalizeLayoutBlog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // You can add argTypes here to control the props in Storybook
  argTypes: {},
} satisfies Meta<typeof MinimalizeLayoutBlog>

export default meta
type Story = StoryObj<typeof meta>

// Define your stories
export const Primary: Story = {
  args: {},
}
