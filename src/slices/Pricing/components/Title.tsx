import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { HalfDarkBlueWaves } from '@/constants/icons';
import { JSXMapSerializer } from '@prismicio/react';
import { FC } from 'react';
import { PricingProps } from '..';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="rb-5 mt-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};

const PricingTitle: FC<PricingProps> = ({ slice }) => {
  const { title } = slice.primary;

  return (
    <div className="relative mb-8 w-full max-w-lg lg:mb-20">
      <HalfDarkBlueWaves className="absolute -top-16 -z-10 h-[100px] w-[125px] md:-top-24 lg:-top-28 lg:h-[160px] lg:w-[180px]" />
      <Badge>Pricing</Badge>
      <PrismicRichText field={title} components={component} />
    </div>
  );
};

export default PricingTitle;
