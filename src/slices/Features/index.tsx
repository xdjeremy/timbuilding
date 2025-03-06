import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import FeatureItem from './components/FeatureItem';

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<h2 className='mb-5 text-4xl font-extrabold whitespace-normal md:text-5xl md:mb-6 lg:text-6xl xl:text-7xl 2xl:text-8xl overflow-x-visible overflow-y-visible'>
			{children}
		</h2>
	),
	heading3: ({ children }) => (
		<h3 className='mb-5 text-xl font-bold break-words whitespace-normal md:text-2xl md:mb-6 md:leading-[1.3] lg:text-3xl'>
			{children}
		</h3>
	),
	strong: ({ children }) => (
		<span className='highlight inline-block px-[0.1em] -mx-[0.1em]'>
			{children}
		</span>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};
/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
	const { badge, title, subtitle, features, button_link } = slice.primary;

	return (
		<Bounded as='section' data-slice-type={slice.slice_type} yPadding='sm'>
			<Container>
				<div className='flex flex-col items-center overflow-visible'>
					<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
						<div className='w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] px-4 sm:px-6 relative z-10'>
							<div className='mb-10'>
								<Badge>{badge}</Badge>
							</div>
							<PrismicRichText field={title} components={components} />
							<PrismicRichText field={subtitle} components={components} />
						</div>
					</div>
					<div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 overflow-visible'>
						<FeatureItem
							image={features[0]?.image}
							title={features[0]?.title}
							description={features[0]?.description}
							decorations={[
								{
									type: 'pink-star',
									position: '-left-5 -top-10',
									size: 'h-[75px] w-[75px] lg:-left-10 lg:-top-16 lg:h-[122px] lg:w-[122px]',
								},
								{
									type: 'blue-spark',
									position: '-top-3 left-16',
									size: 'h-[31px] w-[31px] lg:-top-5 lg:left-24 lg:h-[50px] lg:w-[50px]',
								},
								{
									type: 'blue-spark',
									position: '-left-5 top-12',
									size: 'h-[22px] w-[22px] lg:top-18 lg:h-[36px] lg:w-[36px]',
								},
							]}
						/>
						<FeatureItem
							image={features[1]?.image}
							title={features[1]?.title}
							description={features[1]?.description}
						/>
						<FeatureItem
							image={features[2]?.image}
							title={features[2]?.title}
							description={features[2]?.description}
							decorations={[
								{
									type: 'yellow-star',
									position: '-bottom-6 -right-2',
									size: 'h-[64px] w-[64px] lg:-bottom-8 lg:-right-12 lg:h-[121px] lg:w-[121px]',
								},
								{
									type: 'black-spark',
									position: '-bottom-6 right-16',
									size: 'h-[26px] w-[26px] lg:-bottom-8 lg:right-20 lg:h-[50px] lg:w-[50px]',
								},
								{
									type: 'black-spark',
									position: 'bottom-12 -right-4',
									size: 'h-[26px] w-[26px] lg:bottom-24 lg:-right-4 lg:h-[33px] lg:w-[33px]',
								},
							]}
						/>
					</div>
					<div className='mt-12 flex items-center gap-4 md:mt-18 lg:mt-20'>
						<PrismicNextLink field={button_link}>
							<Button variant='outline'>{button_link.text}</Button>
						</PrismicNextLink>
					</div>
				</div>
			</Container>
		</Bounded>
	);
};

export default Features;
