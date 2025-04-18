import { ServiceUnavailable } from '@/components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/ServiceUnavailable',
  component: ServiceUnavailable,
} as Meta;

const Template: StoryFn<typeof ServiceUnavailable> = args => (
  <ServiceUnavailable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '503',
  subtitle: 'Service Unavailable',
  message: 'Forgive me, but the website is still under development by me 😭',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  title: '500',
  subtitle: 'Internal Server Error',
  message: 'Something went wrong on our end. Please try again later.',
  className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};
