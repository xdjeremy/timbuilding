import { cn } from '@/lib/utils';
import React from 'react';

type ContainerProps = {
	as?: 'div' | 'section' | 'header' | 'footer';
	className?: string;
	children?: React.ReactNode;
};

const Container = ({
	as: Comp = 'div',
	className,
	children,
}: ContainerProps) => {
	return <Comp className={cn(className, 'container mx-auto')}>{children}</Comp>;
};

export default Container;
