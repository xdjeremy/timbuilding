import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { BlueWaves, OutlineX, PinkWaves, YellowWaves } from '@/constants/icons';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { FC } from 'react';
import { ServiceProps } from '..';
import { component } from '../ServicesRichText';

const RightImage1: FC<ServiceProps> = ({ slice }) => {
  const { badge, image, title, description, button } = slice.primary;

  if (slice.variation !== 'rightImage1') return null;

  return (
    <Bounded
      as="section"
      data-slice-variation={slice.variation === 'rightImage1'}
    >
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-1 md:order-2">
            <Badge variant="blue">{badge}</Badge>
            <PrismicRichText field={title} components={component} />
            <PrismicRichText field={description} components={component} />
            <div className="relative mt-6 flex flex-wrap gap-4 md:mt-8">
              <PrismicNextLink field={button}>
                <Button variant="outline">{button.text}</Button>
              </PrismicNextLink>
              <OutlineX className="absolute top-10 left-12 z-10 h-[100px] w-[100px] lg:top-16 lg:left-16 lg:h-[120px] lg:w-[120px]" />
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <BlueWaves className="absolute end-px -top-24 -right-8 -z-10 h-[170px] w-[170px] lg:-top-32 lg:-right-36 lg:h-[290px] lg:w-[290px]" />
            <PinkWaves className="absolute -bottom-24 -left-10 h-[200px] w-[200px] lg:-bottom-32 lg:-left-1/3 lg:h-[330px] lg:w-[330px]" />
            <OutlineX className="lg:[80px] absolute -right-4 -bottom-12 h-[60px] w-[60px] md:-right-14 lg:h-[80px]" />
            <PrismicNextImage
              field={image}
              className="mx-auto h-[348px] w-[335px] rounded-3xl border-4 border-black object-cover object-top md:h-[640px] md:w-[616px]"
              style={{
                boxShadow:
                  '-8px 12px 0px 0px rgba(8,145,178,1.00), -17px 23px 0px 0px rgba(219,39,119,1.00), -28px 36px 0px 0px rgba(251,191,36,1.00)'
              }}
            />
          </div>
          <YellowWaves className="absolute -top-[90px] -left-8 -z-10 h-[150px] w-[150px] md:-top-[124px] lg:-top-[170px] lg:-left-24 lg:h-[250px] lg:w-[250px] xl:-left-32" />
          <OutlineX className="absolute -top-4 left-56 h-[75px] w-[75px] lg:left-80 lg:h-[90px] lg:w-[90px]" />
        </div>
      </Container>
    </Bounded>
  );
};

export default RightImage1;
