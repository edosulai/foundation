import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/manager-api',
    '@storybook/preview-api',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-styling',
    '@storybook/addon-toolbars',
    '@storybook/addon-backgrounds',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-queryparams',
    '@storybook/addon-console',
    '@storybook/addon-designs',
    '@storybook/addon-svelte-csf',
    '@storybook/addon-jest',
    '@storybook/addon-knobs',
    '@storybook/addon-postcss',
    '@storybook/addon-storyshots',
    '@storybook/addon-storysource',
    '@storybook/addon-graphql',
  ],
  framework: 'storybook-react-rsbuild',
  rsbuildFinal: config => {
    return config;
  },

  typescript: {
    reactDocgen: 'react-docgen',
  },

  docs: {
    autodocs: true,
  },
};

export default config;
