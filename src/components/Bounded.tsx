import type { ReactNode } from 'react';
import clsx from 'clsx';

type BoundedProps = {
	as?: 'div' | 'section' | 'header' | 'footer';
	yPadding?: 'sm' | 'base' | 'lg' | 'none';
	collapsible?: boolean;
	className?: string;
	children?: ReactNode;
};

export function Bounded({
	as: Comp = 'div',
	yPadding = 'none',
	collapsible = true,
	className,
	children,
}: BoundedProps) {
	return (
		<Comp
			data-collapsible={collapsible}
			className={clsx(
				'px-6 overflow-x-hidden',
				yPadding === 'sm' && 'py-8 md:py-10',
				yPadding === 'base' && 'py-20 md:py-28',
				yPadding === 'lg' && 'py-32 md:py-48',
				yPadding === 'none' && '',
				className
			)}>
			<div className='mx-auto w-full max-w-screen-xl lg:max-w-[992px] xl:max-w-[1280px]'>
				{children}
			</div>
		</Comp>
	);
}
