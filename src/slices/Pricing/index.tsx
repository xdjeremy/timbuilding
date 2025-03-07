import { Bounded } from '@/components/Bounded';
import { HalfBlueWaves2, HalfPinkWaves, YellowWaves3 } from '@/constants/icons';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import PricingCard from './components/Card';
import PricingFeatures from './components/Features';
import PricingTitle from './components/Title';
import Container from '@/components/Container';

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing: FC<PricingProps> = (slice) => {
  return (
    <Bounded yPadding="sm" as="section">
      <Container className="relative">
        <PricingTitle {...slice} />
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <PricingFeatures {...slice} />
          <PricingCard {...slice} />
        </div>
        <HalfPinkWaves className="absolute -top-16 right-10 h-[100px] w-[125px] md:-top-24 lg:-top-28 lg:h-[160px] lg:w-[180px]" />
        <HalfBlueWaves2 className="absolute -bottom-16 -left-2 -z-10 h-[100px] w-[125px] rotate-180 md:-bottom-24 lg:-bottom-28 lg:h-[160px] lg:w-[180px]" />
        <YellowWaves3 className="absolute -bottom-16 left-32 -z-10 h-[100px] w-[125px] md:-bottom-24 lg:-bottom-28 lg:left-48 lg:h-[160px] lg:w-[180px]" />
      </Container>
    </Bounded>
  );
};

export default Pricing;
