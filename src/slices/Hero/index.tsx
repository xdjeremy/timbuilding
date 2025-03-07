'use server';

import { Bounded } from '@/components/Bounded';
import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { BlueStar2, PinkStar } from '@/constants/icons';
import { HeroDecorations } from '@/slices/Hero/HeroDecorations';
import { HeroImageGrid } from '@/slices/Hero/HeroImageGrid';
import { components } from '@/slices/Hero/HeroRichText';
import { type Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { type SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = async ({ slice }) => {
  const { buttonLink, buttonText, title, subtitle, images } = slice.primary;

  return (
    <Bounded
      as="section"
      className="grid grid-cols-1 gap-y-16 px-0 pb-0 md:grid-flow-row md:pb-0 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:py-0 lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <div className="lg:text-10xl mb-5 text-6xl font-extrabold md:mb-6 md:text-9xl">
          <PrismicRichText field={title} components={components} />
        </div>
        <PrismicRichText field={subtitle} components={components} />
        <div className="relative mt-6 flex flex-wrap gap-4 md:mt-8">
          <PrismicNextLink field={buttonLink}>
            <Button>{buttonText}</Button>
          </PrismicNextLink>
          <PinkStar className="animate-infinite absolute bottom-5 left-52 h-[55px] w-[52px] animate-pulse lg:-bottom-10 lg:left-64 lg:h-[106px] lg:w-[99px]" />
          <BlueStar2 className="animate-infinite absolute bottom-0 left-64 h-[43px] w-10 animate-pulse delay-200 lg:-bottom-20 lg:left-80 lg:h-[63px] lg:w-[59px]" />
        </div>
      </div>

      <div className="relative h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <HeroImageGrid images={images} />
        <HeroDecorations />
      </div>
    </Bounded>
  );
};

export default Hero;
