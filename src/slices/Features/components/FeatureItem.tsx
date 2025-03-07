import { PrismicNextImage } from '@prismicio/next';
import {
  BlackSpark2,
  BlueSpark2,
  PinkStar2,
  YellowStar
} from '@/constants/icons';
import { FC } from 'react';

import { PrismicRichText } from '@/components/PrismicRichText';
import { RichTextField } from '@prismicio/client';
import { JSXMapSerializer } from '@prismicio/react';

interface FeatureItemProps {
  image: any;
  title?: RichTextField;
  description?: RichTextField;
  decorations?: {
    type: 'pink-star' | 'blue-spark' | 'black-spark' | 'yellow-star';
    position: string;
    size: string;
  }[];
}

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

const FeatureItem: FC<FeatureItemProps> = ({
  image,
  title,
  description,
  decorations
}) => {
  return (
    <div className="flex w-full flex-col items-center text-center">
      <div className="rb-6 relative mb-6 md:mb-8">
        <PrismicNextImage field={image} className="neobrutalist-shadow" />
        {decorations?.map((decoration, index) => {
          switch (decoration.type) {
            case 'pink-star':
              return (
                <PinkStar2
                  key={index}
                  className={`absolute ${decoration.position} ${decoration.size}`}
                />
              );
            case 'blue-spark':
              return (
                <BlueSpark2
                  key={index}
                  className={`absolute ${decoration.position} ${decoration.size}`}
                />
              );
            case 'black-spark':
              return (
                <BlackSpark2
                  key={index}
                  className={`absolute ${decoration.position} ${decoration.size}`}
                />
              );
            case 'yellow-star':
              return (
                <YellowStar
                  key={index}
                  className={`absolute ${decoration.position} ${decoration.size}`}
                />
              );
            default:
              return null;
          }
        })}
      </div>
      {title && <PrismicRichText field={title} components={components} />}
      {description && (
        <PrismicRichText field={description} components={components} />
      )}
    </div>
  );
};

export default FeatureItem;
