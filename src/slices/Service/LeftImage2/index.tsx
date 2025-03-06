import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
	BlueClover,
	OutlineStar,
	PinkClover,
	YellowClover,
} from '@/constants/icons';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { FC } from 'react';
import { ServiceProps } from '..';
import { component } from '../ServicesRichText';

const LeftImage2: FC<ServiceProps> = ({ slice }) => {
	const { badge, title, description, button, image } = slice.primary;

	if (slice.variation !== 'leftImage2') return null;

	return (
		<Bounded as='section' data-slice-variation={slice.variation}>
			<Container>
				<div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20 relative'>
					<div className='order-2 md:order-1 relative'>
						<BlueClover className='w-[183px] h-[183px] absolute -top-28 left-4 -z-10 md:-top-24 lg:w-[230px] lg:h-[230px] lg:-top-28 lg:-left-8' />
						<OutlineStar className='w-[100px] h-[110px] absolute end-px -z-10 -right-7 -top-16 md:-right-16 lg:w-[120px] lg:h-[123px] lg:-right-36 lg:-top-20' />
						<PinkClover className='w-[119px] h-[119px] absolute end-px -bottom-14 -right-8 md:-right-12 lg:w-[185px] lg:h-[185px] lg:-right-24' />
						<PrismicNextImage
							field={image}
							className='w-[335px] object-cover h-[348px] mx-auto object-top rounded-3xl border-4 border-black md:w-[616px] md:h-[640px]'
							style={{
								boxShadow:
									'-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)',
							}}
						/>
					</div>
					<div className='order-1 md:order-2'>
						<Badge variant='amber'>{badge}</Badge>
						<YellowClover className='w-[131px] h-[131px] absolute end-px -top-14 right-10 md:-top-20 lg:right-32 lg:w-[195px] lg:h-[195px]' />
						<PrismicRichText field={title} components={component} />
						<PrismicRichText field={description} components={component} />
						<div className='mt-6 flex flex-wrap gap-4 md:mt-8 relative'>
							<PrismicNextLink field={button}>
								<Button variant='outline'>{button.text}</Button>
							</PrismicNextLink>
							<OutlineStar className='w-[82px] h-[72px] absolute -top-6 end-px right-16 lg:w-[100px] lg:h-[109px] md:top-8 lg:right-32' />
						</div>
					</div>
					<OutlineStar className='w-[55px] h-[49px] absolute -top-16 end-px -right-7 lg:w-[78px] lg:h-[69px] lg:-top-20' />
				</div>
			</Container>
		</Bounded>
	);
};

export default LeftImage2;
