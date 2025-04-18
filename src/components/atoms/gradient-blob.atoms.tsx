import { cn } from '@/libs/utils';

interface GradientBlobProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export function GradientBlob({
  className,
  children,
  ...props
}: GradientBlobProps) {
  return (
    <div
      className={cn(
        `
          relative flex place-items-center
          before:absolute
          before:-z-50
          before:h-[180px]
          before:w-[300px]
          before:-top-10
          before:-left-20
          before:bg-gradient-to-br
          before:rounded-full
          before:blur-2xl
          before:content-['']
          before:from-[#FF0000]/40
          before:to-[#66B3FF]/40
          before:animate-[blob_7s_infinite]
          before:[animation-delay:_0s]
          after:absolute
          after:-z-50
          after:h-[180px]
          after:w-[300px]
          after:-right-20
          after:-bottom-10
          after:bg-gradient-to-tl
          after:rounded-full
          after:blur-2xl
          after:content-['']
          after:to-[#66B3FF]/40
          after:from-[#9CCC65]/40
          after:animate-[blob_7s_infinite]
          after:[animation-delay:_2s]`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
