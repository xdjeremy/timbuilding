'use server';

import { type Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { type SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { components } from '@/slices/Hero/HeroRichText';

import { BlueStar2, PinkStar } from '@/constants/icons';
import { HeroImageGrid } from '@/slices/Hero/HeroImageGrid';
import { HeroDecorations } from '@/slices/Hero/HeroDecorations';

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = async ({ slice }) => {
	const { buttonLink, buttonText, title, subtitle, images } = slice.primary;

	return (
		<section className='font-redhat text-brand-dark-blue grid grid-cols-1 gap-y-16 border-b-4 border-black pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0'>
			<div className='mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end'>
				<div className='mb-5 text-6xl font-extrabold md:mb-6 md:text-9xl lg:text-10xl'>
					<PrismicRichText field={title} components={components} />
				</div>
				<PrismicRichText field={subtitle} components={components} />
				<div className='relative mt-6 flex flex-wrap gap-4 md:mt-8'>
					<PrismicNextLink field={buttonLink}>
						<Button>{buttonText}</Button>
					</PrismicNextLink>
					<PinkStar className='animate-infinite absolute bottom-5 left-52 h-[55px] w-[52px] animate-pulse lg:-bottom-10 lg:left-64 lg:h-[106px] lg:w-[99px]' />
					<BlueStar2 className='animate-infinite absolute bottom-0 left-64 h-[43px] w-10 animate-pulse delay-200 lg:-bottom-20 lg:left-80 lg:h-[63px] lg:w-[59px]' />
				</div>
			</div>

			<div className='relative h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0'>
				<HeroImageGrid images={images} />
				<HeroDecorations />
			</div>
		</section>
	);
};

export default Hero;
