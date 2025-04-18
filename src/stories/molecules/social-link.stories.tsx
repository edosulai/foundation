import { SocialLink } from '@/components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/SocialLink',
  component: SocialLink,
} as Meta;

const Template: StoryFn<typeof SocialLink> = args => <SocialLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://github.com',
  title: 'GitHub',
  username: '@github',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  href: 'https://twitter.com',
  title: 'Twitter',
  username: '@twitter',
  className: 'bg-blue-500 text-white hover:bg-blue-600',
};
