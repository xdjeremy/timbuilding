import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type BoundedProps = {
  as?: 'div' | 'section' | 'header' | 'footer';
  yPadding?: 'sm' | 'base' | 'lg' | 'none';
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = 'div',
  yPadding = 'sm',
  collapsible = true,
  className,
  children
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={cn(
        'relative overflow-hidden border-b-4 border-black px-6',
        yPadding === 'sm' && 'py-16 md:py-24 lg:py-28',
        yPadding === 'base' && 'py-20 md:py-28',
        yPadding === 'lg' && 'py-32 md:py-48',
        yPadding === 'none' && '',
        className
      )}
    >
      {children}
    </Comp>
  );
}
