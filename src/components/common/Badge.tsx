import { cn } from '@/utils/tailwind';
import React, { FC, ReactNode } from 'react';

type BadgeProps = {
  variant?: keyof typeof variants;
  children: ReactNode;
};

const variants = {
  blue: 'bg-brand-blue text-white',
  amber: 'bg-brand-amber text-black',
  pink: 'bg-brand-telemagenta text-white'
};

const Badge: FC<BadgeProps> = ({ variant = 'blue', children }) => {
  return (
    <div
      className={cn(
        'inline-flex h-10 items-center justify-center gap-2 rounded-full border-4 border-black px-[18px] py-2 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]',
        variants[variant]
      )}
    >
      <div className="text-base leading-normal font-semibold">{children}</div>
    </div>
  );
};

export default Badge;
