import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlackSpark,
  BlueSpark,
  BlueStar,
  PinkSpark,
  YellowSpark
} from '@/constants/icons';
import { AboutUsProps } from '@/slices/AboutUs';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { GitMerge, TrendingUp } from 'lucide-react';
import { FC } from 'react';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="rb-5 mt-3 mb-5 text-5xl font-extrabold text-white md:mt-4 md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
      {children}
    </h3>
  ),
  heading6: ({ children }) => (
    <h6 className="text-md mb-3 leading-[1.4] font-bold md:mb-4 md:text-xl">
      {children}
    </h6>
  ),
  strong: ({ children }) => (
    <span className="bg-brand-telemagenta px-1 pb-1 text-white">
      {children}
    </span>
  ),
  paragraph: ({ children }) => (
    <p className="md:text-md mb-6 text-white md:mb-8">{children}</p>
  )
};

const LeftBackgroundColor: FC<AboutUsProps> = ({ slice }) => {
  if (slice.variation !== 'leftBackgroundColor') return null;

  return (
    <Bounded as="section">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <Badge variant="amber">{slice.primary.badge}</Badge>
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {slice.primary.iconsandtexts.map((item, index) => (
                <div
                  key={index}
                  className={index % 2 === 0 ? 'text-white' : 'sm:text-white'}
                >
                  <div className="mb-3 md:mb-4">
                    {item.icons === 'trendingUp' ? (
                      <TrendingUp className="size-12" />
                    ) : (
                      <GitMerge className="size-12" />
                    )}
                  </div>
                  <PrismicRichText
                    field={item.icon_title}
                    components={components}
                  />
                  <PrismicRichText field={item.icon_description} />
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <PrismicNextLink field={slice.primary.button}>
                <Button variant="outline">{slice.primary.button.text}</Button>
              </PrismicNextLink>
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-blue absolute -bottom-7 -left-7 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <div className="bg-brand-amber absolute -bottom-4 left-5 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <div className="bg-brand-telemagenta absolute bottom-4 -left-4 h-[72.92px] w-[72.92px] rounded-full border-4 border-black"></div>
            <BlueStar className="absolute -top-20 -right-12 -z-10 h-[190px] w-[204px] rotate-[8.33deg]" />
            <YellowSpark className="absolute top-14 -left-4 h-[51px] w-[51px] rotate-[15deg]" />
            <BlueSpark className="absolute right-40 -bottom-5 h-[51px] w-[51px]" />
            <BlackSpark className="absolute right-10 -bottom-5 h-[51px] w-[51px]" />
            <PinkSpark className="absolute -right-6 bottom-20 h-[51px] w-[51px]" />
            <PrismicNextImage
              field={slice.primary.image}
              className="neobrutalist-shadow w-full object-cover xl:h-[640px] xl:w-[616px]"
            />
          </div>
          <div className="bg-brand-blue absolute top-0 left-0 -z-10 h-[37%] w-full border-b-4 border-black md:h-full md:border-r-4 md:border-b-0 lg:w-1/2"></div>
        </div>
      </Container>
    </Bounded>
  );
};

export default LeftBackgroundColor;
