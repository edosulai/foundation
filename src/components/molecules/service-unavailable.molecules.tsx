import { cn } from '@/libs/utils';

interface ServiceUnavailableProps extends React.ComponentProps<'div'> {
  title: string;
  subtitle: string;
  message: string;
}

export function ServiceUnavailable({
  title,
  subtitle,
  message,
  ...props
}: ServiceUnavailableProps) {
  return (
    <div
      className={cn(
        'relative drop-shadow-[0_0_0.3rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-center',
        props.className,
      )}
      {...props}
    >
      <div className="relative">
        <h1 className="relative text-9xl -tracking-[0.75rem] font-sans font-bold [text-shadow:_-8px_0_0_#ADD8E6] dark:[text-shadow:_-8px_0_0_#66B3FF]">
          {title.split('').map(char => (
            <span key={`${char}`}>{char}</span>
          ))}
        </h1>
        <span className="absolute top-0 -ml-12 font-semibold">Oops!</span>
      </div>
      <h5 className="font-semibold -mr-10 -mt-3">{subtitle}</h5>
      <p className="mt-2 mb-6">{message}</p>
    </div>
  );
}
