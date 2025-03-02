import { FC } from 'react';
import { asText, Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { BlackX, BlueSpring, PinkX, YellowWaves } from '@/constants/icons';
import { PrismicRichText } from '@/components/PrismicRichText';
import { Heading } from '@/components/Heading';

/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<h2 className='mb-5 text-4xl font-extrabold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>
			{children}
		</h2>
	), // for the highlight items' titles
	heading3: ({ children }) => (
		<h3 className='mb-2 text-5xl font-bold md:text-7xl lg:text-8xl'>
			{children}
		</h3>
	), // for main title
	paragraph: ({ children }) => (
		<p className='mb-6 md:mb-8 md:text-md'>{children}</p>
	),
	strong: ({ children }) => (
		<strong className='text-brand-telemagenta'>{children}</strong>
	), // for highlighting text on items' title
};

/**
 * Component for "Highlight" Slices.
 */
const Highlight: FC<HighlightProps> = ({ slice }) => {
	const { image, title, description, highlight } = slice.primary;

	return (
		<section
			className='relative font-redhat text-brand-dark-blue border-b-4 border-black px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20'>
					<div className='relative order-2 md:order-1'>
						<PrismicNextImage
							field={image}
							className='neobrutalist-shadow h-[348px] w-full object-cover lg:h-[640px]'
						/>

						{/* decoration */}
						<BlueSpring className='absolute -top-14 right-0 -z-10 h-auto w-[202px] lg:-right-24 lg:-top-20 lg:w-[402px]' />
						<YellowWaves className='absolute -bottom-4 -left-3 h-auto w-[148px] lg:-bottom-20 lg:-left-9 lg:w-[303px]' />
						<BlackX className='absolute -bottom-4 right-32 h-auto w-[50px] lg:-bottom-12 lg:right-24 lg:w-[100px]' />
						<BlackX
							name='BlackX'
							className='absolute -bottom-4 right-20 h-auto w-[50px] lg:-bottom-12 lg:right-4 lg:w-[100px]'
						/>
						<PinkX className='absolute -bottom-4 right-0 h-auto w-[50px] lg:-bottom-12 lg:-right-40 lg:w-[100px]' />
					</div>
					<div className='order-1 md:order-2'>
						<PrismicRichText field={title} components={component} />
						<PrismicRichText field={description} components={component} />
						<div className='grid grid-cols-1 gap-6 py-2 sm:grid-cols-2'>
							{highlight.map((item) => (
								<div key={asText(item.title)}>
									<PrismicRichText field={item.title} components={component} />
									<PrismicRichText
										field={item.description}
										components={component}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* decorations */}
			<BlackX
				name='BlackX'
				className='absolute bottom-[62px] right-44 hidden h-auto w-[100px] lg:block'
			/>
			<BlackX
				name='BlackX'
				className='absolute bottom-[62px] right-20 hidden h-auto w-[100px] lg:block'
			/>
		</section>
	);
};

export default Highlight;
