import {JSXMapSerializer} from "@prismicio/react";

export const components: JSXMapSerializer = {
    heading2: ({ children }) => <h2 className='font-extrabold'>{children}</h2>,
    heading3: ({ children }) => <h3 className='font-extrabold'>{children}</h3>,
    heading4: ({ children }) => <h4 className='font-extrabold'>{children}</h4>,
    strong: ({ children }) => (
        <span className='text-brand-amber'>{children}</span>
    ),
    paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};