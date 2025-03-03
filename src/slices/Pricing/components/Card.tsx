import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { asText } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { Check } from 'lucide-react';
import { FC } from 'react';
import { PricingProps } from '..';

const component: JSXMapSerializer = {
	heading4: ({ children }) => (
		<h4 className='mb-2 text-xl font-bold md:text-2xl'>{children}</h4>
	),
	heading5: ({ children }) => (
		<h5 className='justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl'>
			{children}
		</h5>
	),
	strong: ({ children }) => (
		// this is used for the "/mo" on price
		<span className='text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl'>
			{children}
		</span>
	),
	paragraph: ({ children }) => <p>{children}</p>,
};

const PricingCard: FC<PricingProps> = ({ slice }) => {
	const { price_text, price, inclusions, button } = slice.primary;

	return (
		<div>
			<div className='h-full border border-border-primary bg-brand-telemagenta'>
				<div className='flex items-start justify-between px-6 py-8 md:p-8 text-white'>
					<div>
						<PrismicRichText field={price_text} components={component} />
					</div>
					<PrismicRichText field={price} components={component} />
				</div>
			</div>
			<div className='h-full border border-border-primary px-6 py-8 md:p-8 bg-white'>
				<p>Includes:</p>
				<div className='mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6'>
					{inclusions.map((inclusion) => (
						<div key={asText(inclusion.text)} className='flex self-start'>
							<div className='mr-4 flex-none self-start'>
								<Check className='size-5' />
							</div>
							<PrismicRichText field={inclusion.text} components={component} />
						</div>
					))}
				</div>
				<div className='my-8 h-px w-full shrink-0 bg-border'></div>
				<PrismicNextLink field={button}>
					<div className='items-center justify-center flex flex-row'>
						<Button className='w-full'>{button.text}</Button>
					</div>
				</PrismicNextLink>
			</div>
		</div>
	);
};

export default PricingCard;
