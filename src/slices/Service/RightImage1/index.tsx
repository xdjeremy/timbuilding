import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
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
		<section
			data-slice-variation={slice.variation === 'rightImage1'}
			className='font-redhat text-brand-dark-blue px-[5%] py-16 md:py-24 lg:py-28 border-b-4 border-black'>
			<div className='container'>
				<div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20 relative'>
					<div className='order-1 md:order-2'>
						<Badge variant='blue'>{badge}</Badge>
						<PrismicRichText field={title} components={component} />
						<PrismicRichText field={description} components={component} />
						<div className='mt-6 flex flex-wrap gap-4 md:mt-8 relative'>
							<PrismicNextLink field={button}>
								<Button variant='outline'>{button.text}</Button>
							</PrismicNextLink>
							<OutlineX className='w-[100px] h-[100px] absolute top-10 z-10 left-12 lg:top-16 lg:left-16 lg:w-[120px] lg:h-[120px]' />
						</div>
					</div>
					<div className='order-1 md:order-2 relative'>
						<BlueWaves className='w-[170px] h-[170px] absolute end-px -z-10 -top-24 -right-8 lg:w-[290px] lg:h-[290px] lg:-right-36 lg:-top-32' />
						<PinkWaves className='w-[200px] h-[200px] absolute -bottom-24 -left-10 lg:w-[330px] lg:h-[330px] lg:-left-1/3 lg:-bottom-32' />
						<OutlineX className='w-[60px] h-[60px] absolute -bottom-12 -right-4 md:-right-14 lg:[80px] lg:h-[80px]' />
						<PrismicNextImage
							field={image}
							className='w-[335px] object-cover h-[348px] mx-auto object-top rounded-3xl border-4 border-black md:w-[616px] md:h-[640px]'
							style={{
								boxShadow:
									'-8px 12px 0px 0px rgba(8,145,178,1.00), -17px 23px 0px 0px rgba(219,39,119,1.00), -28px 36px 0px 0px rgba(251,191,36,1.00)',
							}}
						/>
					</div>
					<YellowWaves className='w-[150px] h-[150px] absolute -top-[90px] -z-10 -left-8 md:-top-[124px] lg:w-[250px] lg:h-[250px] lg:-top-[170px] lg:-left-24 xl:-left-32' />
					<OutlineX className='w-[75px] h-[75px] absolute -top-4 left-56 lg:w-[90px] lg:h-[90px] lg:left-80' />
				</div>
			</div>
		</section>
	);
};

export default RightImage1;
