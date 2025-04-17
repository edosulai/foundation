import ts from 'typescript';

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
