import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';

export const Component: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="mt-8 mb-4 text-4xl leading-tight font-bold md:text-5xl dark:text-inherit">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mt-6 mb-3 text-3xl font-semibold md:text-4xl dark:text-inherit">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mt-4 mb-2 text-2xl font-medium md:text-3xl dark:text-inherit">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => (
    <p className="mb-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
      {children}
    </p>
  ),
  oList: ({ children }) => (
    <ol className="mb-6 list-decimal space-y-3 pl-6 text-base text-gray-800 dark:text-gray-200">
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-2 pl-2 text-base text-gray-800 marker:text-gray-500 dark:text-gray-200 dark:marker:text-gray-400">
      {children}
    </li>
  ),
  list: ({ children }) => (
    <ul className="mb-6 list-disc space-y-3 pl-6 text-base text-gray-800 dark:text-gray-200">
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-2 pl-2 text-base text-gray-800 marker:text-gray-500 dark:text-gray-200 dark:marker:text-gray-400">
      {children}
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm md:p-6 md:text-base dark:bg-gray-800/50">
      <code className="font-mono">{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-gray-100">
      {children}
    </strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="hover:text-primary-600 dark:hover:text-primary-400 underline decoration-1 underline-offset-2 transition-colors"
    >
      {children}
    </PrismicNextLink>
  )
};
