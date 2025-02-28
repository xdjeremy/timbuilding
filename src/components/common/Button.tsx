import React, { FC } from 'react';
import { cn } from '../../utils/tailwind';

type ButtonProps = {
	variant?: keyof typeof variants;
	children: React.ReactNode;
};

const variants = {
	primary:
		'bg-brand-amber shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] border-4 border-black rounded-md text-black  transition-all ease-in-out hover:-translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]',
	secondary:
		'bg-brand-blue shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] border-4 border-black text-white',
	outline:
		'bg-transparent border-4 border-brand-dark-blue text-black bg-white rounded-md transition-all ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)]',
};

const Button: FC<ButtonProps> = ({ variant = 'primary', children }) => {
	return (
		<button
			className={cn(
				'h-12 px-6 py-3 justify-center items-center gap-2 inline-flex cursor-pointer',
				variants[variant]
			)}>
			<div className='text-base font-normal leading-normal'>{children}</div>
		</button>
	);
};

export default Button;
