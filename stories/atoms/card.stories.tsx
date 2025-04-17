import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
  },
} as Meta;

const Template: StoryFn = args => (
  <Card {...args}>
    <CardHeader {...args.headerProps}>
      <CardTitle {...args.titleProps}>{args.title}</CardTitle>
      <CardDescription {...args.descriptionProps}>
        {args.description}
      </CardDescription>
      <CardAction {...args.actionProps}>
        <button type="button" className="text-sm text-primary">
          {args.actionText}
        </button>
      </CardAction>
    </CardHeader>
    <CardContent {...args.contentProps}>
      <p>{args.content}</p>
    </CardContent>
    <CardFooter {...args.footerProps}>
      <button type="button" className="text-sm text-secondary">
        {args.footerActionText}
      </button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-96',
  headerProps: {},
  title: 'Card Title',
  titleProps: {},
  description: 'Card description goes here.',
  descriptionProps: {},
  actionText: 'Action',
  actionProps: {},
  content: 'This is the content of the card. You can add any elements here.',
  contentProps: {},
  footerProps: {},
  footerActionText: 'Footer Action',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  ...Default.args,
  className: 'w-96 bg-primary text-primary-foreground',
};

export const WithoutFooter: StoryFn = args => (
  <Card {...args}>
    <CardHeader {...args.headerProps}>
      <CardTitle {...args.titleProps}>{args.title}</CardTitle>
      <CardDescription {...args.descriptionProps}>
        {args.description}
      </CardDescription>
    </CardHeader>
    <CardContent {...args.contentProps}>
      <p>{args.content}</p>
    </CardContent>
  </Card>
);
WithoutFooter.args = {
  className: 'w-96',
  headerProps: {},
  title: 'Card Without Footer',
  titleProps: {},
  description: 'Card description goes here.',
  descriptionProps: {},
  content: 'This card does not have a footer.',
  contentProps: {},
};

export const OnlyHeader: StoryFn = args => (
  <Card {...args}>
    <CardHeader {...args.headerProps}>
      <CardTitle {...args.titleProps}>{args.title}</CardTitle>
      <CardDescription {...args.descriptionProps}>
        {args.description}
      </CardDescription>
    </CardHeader>
  </Card>
);
OnlyHeader.args = {
  className: 'w-96 ',
  headerProps: {},
  title: 'Only Header',
  titleProps: {},
  description: 'This card only has a header.',
  descriptionProps: {},
};
