import type { ReactNode } from 'react';
import clsx from 'clsx';

type HeadingProps = {
	as?: 'h1' | 'h2' | 'h3';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
	children?: ReactNode;
};

export function Heading({
	as: Comp = 'h1',
	size = 'lg',
	children,
	className,
}: HeadingProps) {
	return (
		<Comp
			className={clsx(
				'font-semibold leading-tight tracking-tight md:leading-tight',
				size === 'xl' &&
					'mb-5 text-6xl font-extrabold md:mb-6 md:text-9xl lg:text-10xl',
				size === 'lg' &&
					'mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl',
				size === 'md' &&
					'mb-5 text-4xl font-extrabold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl',
				size === 'sm' &&
					'mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl',
				size === 'xs' && 'mb-5 text-xl font-extrabold md:mb-6 md:text-2xl',
				className
			)}>
			{children}
		</Comp>
	);
}
