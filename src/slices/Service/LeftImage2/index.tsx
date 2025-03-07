import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlueClover,
  OutlineStar,
  PinkClover,
  YellowClover
} from '@/constants/icons';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { FC } from 'react';
import { ServiceProps } from '..';
import { component } from '../ServicesRichText';

const LeftImage2: FC<ServiceProps> = ({ slice }) => {
  const { badge, title, description, button, image } = slice.primary;

  if (slice.variation !== 'leftImage2') return null;

  return (
    <Bounded as="section" data-slice-variation={slice.variation}>
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative order-2 md:order-1">
            <BlueClover className="absolute -top-28 left-4 -z-10 h-[183px] w-[183px] md:-top-24 lg:-top-28 lg:-left-8 lg:h-[230px] lg:w-[230px]" />
            <OutlineStar className="absolute end-px -top-16 -right-7 -z-10 h-[110px] w-[100px] md:-right-16 lg:-top-20 lg:-right-36 lg:h-[123px] lg:w-[120px]" />
            <PinkClover className="absolute end-px -right-8 -bottom-14 h-[119px] w-[119px] md:-right-12 lg:-right-24 lg:h-[185px] lg:w-[185px]" />
            <PrismicNextImage
              field={image}
              className="mx-auto h-[348px] w-[335px] rounded-3xl border-4 border-black object-cover object-top md:h-[640px] md:w-[616px]"
              style={{
                boxShadow:
                  '-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)'
              }}
            />
          </div>
          <div className="order-1 md:order-2">
            <Badge variant="amber">{badge}</Badge>
            <YellowClover className="absolute end-px -top-14 right-10 h-[131px] w-[131px] md:-top-20 lg:right-32 lg:h-[195px] lg:w-[195px]" />
            <PrismicRichText field={title} components={component} />
            <PrismicRichText field={description} components={component} />
            <div className="relative mt-6 flex flex-wrap gap-4 md:mt-8">
              <PrismicNextLink field={button}>
                <Button variant="outline">{button.text}</Button>
              </PrismicNextLink>
              <OutlineStar className="absolute end-px -top-6 right-16 h-[72px] w-[82px] md:top-8 lg:right-32 lg:h-[109px] lg:w-[100px]" />
            </div>
          </div>
          <OutlineStar className="absolute end-px -top-16 -right-7 h-[49px] w-[55px] lg:-top-20 lg:h-[69px] lg:w-[78px]" />
        </div>
      </Container>
    </Bounded>
  );
};

export default LeftImage2;
