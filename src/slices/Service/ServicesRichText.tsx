import { Heading } from '@/components/Heading';
import { JSXMapSerializer } from '@prismicio/react';

export const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading
			as='h2'
			size='lg'
			className='mb-5 mt-8 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
			{children}
		</Heading>
	),
	strong: ({ children }) => (
		<span className='text-brand-telemagenta'>{children}</span>
	),
	paragraph: ({ children }) => (
		<p className='mb-5 md:mb-6 md:text-md'>{children}</p>
	),
};
