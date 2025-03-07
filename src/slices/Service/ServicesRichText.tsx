import { Heading } from '@/components/Heading';
import { JSXMapSerializer } from '@prismicio/react';

export const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mt-8 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  strong: ({ children }) => (
    <span className="text-brand-telemagenta">{children}</span>
  ),
  paragraph: ({ children }) => (
    <p className="md:text-md mb-5 md:mb-6">{children}</p>
  )
};
