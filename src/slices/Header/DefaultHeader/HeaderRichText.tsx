import { JSXMapSerializer } from '@prismicio/react';

export const components: JSXMapSerializer = {
  heading1: ({ children }) => <h1 className="font-extrabold">{children}</h1>,
  heading3: ({ children }) => <h3 className="font-extrabold">{children}</h3>,
  heading4: ({ children }) => <h4 className="font-extrabold">{children}</h4>,
  strong: ({ children }) => (
    <span>{children}</span>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};
