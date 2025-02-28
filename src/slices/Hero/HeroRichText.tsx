import { type JSXMapSerializer } from '@prismicio/react';
import { Heading } from '@/components/Heading';

export const components: JSXMapSerializer = {
  heading1: ({ children }) => <Heading as='h1'>{children}</Heading>,
  strong: ({ children }) => (
    <span className='text-brand-amber'>{children}</span>
  ),
  paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};
