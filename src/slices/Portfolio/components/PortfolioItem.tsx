'use server';

import { PrismicRichText } from '@/components/PrismicRichText';
import { cn } from '@/lib/utils';
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { FC } from 'react';
import { floaterComponent } from './Floaters';
import { projectImageClassName } from './projectImageClassName';
const component: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="mb-2 text-xl font-bold md:text-2xl">{children}</h3>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

interface PortfolioItemProps {
  uid: string;
}

const PortfolioItem: FC<PortfolioItemProps> = async ({ uid }) => {
  const client = createClient();
  const project = await client.getByUID('project', uid);

  const { image, shadow_color, text, tags, floaters, image_size } =
    project.data;

  return (
    <article className="mb-8 break-inside-avoid">
      <div className="relative mb-5 md:mb-6">
        <PrismicNextImage
          field={image}
          className={cn(projectImageClassName(image_size))}
          style={{
            boxShadow: `-15px 15px 0px 0px ${shadow_color}`
          }}
        />
        {floaterComponent(floaters)}
      </div>
      <PrismicRichText field={text} components={component} />
      <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
        {tags.map((tag) => (
          <li key={tag.text} className="flex">
            <div className="bg-background-secondary px-2 py-1 text-sm font-semibold">
              {tag.text}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PortfolioItem;
