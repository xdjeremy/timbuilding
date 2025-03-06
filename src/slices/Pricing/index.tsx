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
		<Bounded yPadding='sm' as='section'>
			<Container className='relative'>
				<PricingTitle {...slice} />
				<div className='grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20'>
					<PricingFeatures {...slice} />
					<PricingCard {...slice} />
				</div>
				<HalfPinkWaves className='w-[125px] h-[100px] absolute -top-16 right-10  md:-top-24 lg:w-[180px] lg:h-[160px] lg:-top-28' />
				<HalfBlueWaves2 className='w-[125px] h-[100px] absolute rotate-180 -bottom-16 -z-10 -left-2 md:-bottom-24 lg:-bottom-28 lg:w-[180px] lg:h-[160px] ' />
				<YellowWaves3 className='w-[125px] h-[100px] absolute -bottom-16 -z-10 left-32 md:-bottom-24 lg:-bottom-28 lg:w-[180px] lg:h-[160px] lg:left-48' />
			</Container>
		</Bounded>
	);
};

export default Pricing;
