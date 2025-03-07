import React, { FC } from 'react';
import { cn } from '../../utils/tailwind';

type ButtonProps = {
  variant?: keyof typeof variants;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const variants = {
  primary:
    'bg-brand-amber shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] border-4 border-black rounded-md text-black  transition-all ease-in-out hover:-translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]',
  secondary:
    'bg-brand-blue shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-white',
  outline:
    'border-4 border-brand-dark-blue text-black bg-white rounded-md transition-all ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]'
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex h-12 cursor-pointer items-center justify-center gap-2 px-6 py-3 disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className
      )}
      type={type}
      {...props}
    >
      <div className="text-base leading-normal font-normal">{children}</div>
    </button>
  );
};

export default Button;
