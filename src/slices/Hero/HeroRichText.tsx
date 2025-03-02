import { type JSXMapSerializer } from '@prismicio/react';
import { Heading } from '@/components/Heading';

export const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className='mb-5 text-6xl font-extrabold md:mb-6 md:text-9xl lg:text-10xl'>{children}</h1>,
  strong: ({ children }) => (
    <span className='text-brand-amber'>{children}</span>
  ),
  paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};
