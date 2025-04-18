import { GradientBlob } from '@/components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/GradientBlob',
  component: GradientBlob,
} as Meta;

const Template: StoryFn<typeof GradientBlob> = args => (
  <GradientBlob {...args}>
    <p className="text-white">Gradient Blob Content</p>
  </GradientBlob>
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-64 h-64',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  className: 'w-80 h-80 bg-gray-800',
};
