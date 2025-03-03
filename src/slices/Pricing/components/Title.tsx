import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { HalfDarkBlueWaves } from '@/constants/icons';
import { JSXMapSerializer } from '@prismicio/react';
import { FC } from 'react';
import { PricingProps } from '..';

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<h2 className='rb-5 mb-5 mt-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
			{children}
		</h2>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

const PricingTitle: FC<PricingProps> = ({ slice }) => {
	const { title } = slice.primary;

	return (
		<div className='mb-8 w-full max-w-lg lg:mb-20 relative'>
			<HalfDarkBlueWaves className='w-[125px] h-[100px] absolute -top-16 -z-10 md:-top-24 lg:w-[180px] lg:h-[160px] lg:-top-28' />
			<Badge>Pricing</Badge>
			<PrismicRichText field={title} components={component} />
		</div>
	);
};

export default PricingTitle;
