import { cn } from '@/utils/tailwind';
import React, { FC, ReactNode } from 'react';

type BadgeProps = {
	variant?: keyof typeof variants;
	children: ReactNode;
};

const variants = {
	blue: 'bg-brand-blue text-white',
	amber: 'bg-brand-amber text-black',
	pink: 'bg-brand-telemagenta text-white',
};

const Badge: FC<BadgeProps> = ({ variant = 'blue', children }) => {
	return (
		<div
			className={cn(
				'h-10 px-[18px] py-2 rounded-full shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black justify-center items-center gap-2 inline-flex',
				variants[variant]
			)}>
			<div className='text-base font-semibold leading-normal'>{children}</div>
		</div>
	);
};

export default Badge;
