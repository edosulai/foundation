import { Card, CardDescription, CardHeader, CardTitle } from '../atoms';

interface SocialLink extends React.ComponentProps<'a'> {
  href: string;
  title: string;
  username: string;
}

export function SocialLink({ href, title, username, ...props }: SocialLink) {
  return (
    <a
      href={href}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Card className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            {title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </CardTitle>
          <CardDescription className="max-w-[30ch] text-sm opacity-50">
            {username}
          </CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}
