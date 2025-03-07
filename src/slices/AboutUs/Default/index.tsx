import { FC } from 'react';
import Badge from '@/components/common/Badge';
import { Bounded } from '@/components/Bounded';
import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage } from '@prismicio/next';
import {
  BlueHalfCircle,
  DarkBlueHalfCircle,
  PinkStar3
} from '@/constants/icons';
import { AboutUsProps } from '@/slices/AboutUs';
import { JSXMapSerializer } from '@prismicio/react';
import Container from '@/components/Container';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="rb-5 mt-3 mb-5 text-5xl font-extrabold md:mt-4 md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
      {children}
    </h3>
  ),
  strong: ({ children }) => (
    <span className="bg-brand-blue px-1 pb-1 text-white">{children}</span>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};

const DefaultAboutUs: FC<AboutUsProps> = ({ slice }) => {
  if (slice.variation !== 'default') return null;

  return (
    <Bounded as="section">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <Badge variant="pink">{slice.primary.badge}</Badge>

            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
          <div className="relative">
            <div className="bg-brand-blue absolute -top-12 -right-12 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <div className="bg-brand-telemagenta absolute top-9 -right-12 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <div className="bg-brand-dark-blue absolute top-30 -right-12 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <DarkBlueHalfCircle className="absolute right-0 -bottom-14 h-[92px] w-auto" />
            <BlueHalfCircle className="absolute top-5 -left-14 h-[92px] w-auto" />
            <PinkStar3 className="absolute -bottom-20 -left-14 -z-10 h-[211px] w-auto" />
            <PrismicNextImage
              field={slice.primary.image}
              className="neobrutalist-shadow w-full object-cover xl:h-[640px] xl:w-[616px]"
            />
          </div>
        </div>
      </Container>
      <div className="bg-brand-amber absolute right-0 bottom-0 -z-20 h-2/6 w-screen border-t-4 border-black md:h-full md:w-2/5 md:border-t-0 md:border-l-4"></div>
    </Bounded>
  );
};

export default DefaultAboutUs;
