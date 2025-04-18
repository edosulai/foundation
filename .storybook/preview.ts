import type { Preview } from '@storybook/react';

if (typeof document !== 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    // @ts-ignore
    import('@/styles/globals.css');
  };
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
