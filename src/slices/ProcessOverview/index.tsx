import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlackCircles,
  BlackStar,
  GreenBox,
  PinkStar3,
  YellowWaves2,
} from '@/constants/icons';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { Box, Lightbulb, Pencil } from 'lucide-react';
import { FC } from 'react';

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as='h2' size='md'>
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading as='h3' size='xs'>
			{children}
		</Heading>
	),
	strong: ({ children }) => (
		<span className='text-brand-telemagenta'>{children}</span>
	),
	paragraph: ({ children }) => <p>{children}</p>,
};

/**
 * Props for `ProcessOverview`.
 */
export type ProcessOverviewProps =
	SliceComponentProps<Content.ProcessOverviewSlice>;

/**
 * Component for "ProcessOverview" Slices.
 */
const ProcessOverview: FC<ProcessOverviewProps> = ({ slice }) => {
	const { title, process } = slice.primary;
	const icon = process.map((item) => item.icon);

	const iconComponent = (icon: (typeof process)[number]['icon']) => {
		switch (icon) {
			case 'lightbulb':
				return <Lightbulb className='size-12' />;
			case 'pencil':
				return <Pencil className='size-12' />;
			case 'box':
				return <Box className='size-12' />;
			default:
				return <Lightbulb className='size-12' />;
		}
	};

	return (
		<section
			id='relume'
			className='relative font-redhat text-brand-dark-blue h-fit overflow-x-hidden overflow-y-hidden border-b-4 border-black px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
					<div className='mx-auto w-full max-w-lg'>
						<PrismicRichText field={title} components={component} />
					</div>
				</div>
				<div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
					<div className='neobrutalist-shadow relative flex h-full flex-col items-center px-6 py-4 text-center'>
						<div className='mb-5 md:mb-6'>{iconComponent(icon[0])}</div>
						<PrismicRichText field={process[0]?.title} components={component} />
						<PrismicRichText
							field={process[0]?.description}
							components={component}
						/>

						{/* decoration */}
						<PinkStar3 className='absolute -left-14 -top-20 -z-10 h-auto w-[161px] lg:-top-24 lg:w-[243px]' />
						<BlackStar className='absolute -bottom-8 -left-10 hidden h-auto w-[46px] lg:block' />
					</div>
					<div className='neobrutalist-shadow flex h-full flex-col items-center px-6 py-4 text-center'>
						<div className='mb-5 md:mb-6'>{iconComponent(icon[1])}</div>
						<PrismicRichText field={process[1]?.title} components={component} />
						<PrismicRichText
							field={process[1]?.description}
							components={component}
						/>
					</div>
					<div className='neobrutalist-shadow flex h-full flex-col items-center px-6 py-4 text-center'>
						<div className='mb-5 md:mb-6'>{iconComponent(icon[2])}</div>
						<PrismicRichText field={process[2]?.title} components={component} />
						<PrismicRichText
							field={process[2]?.description}
							components={component}
						/>
					</div>
				</div>
			</div>

			{/* decorations */}
			<GreenBox
				name='GreenBox'
				className='absolute right-0 top-0 -z-10 h-auto w-[114px] lg:w-[160px]'
			/>
			<BlackStar
				name='BlackStar'
				className='absolute left-2.5 top-3 h-auto w-12 lg:left-30 lg:top-20 lg:w-[68px]'
			/>
			<YellowWaves2
				name='YellowWaves2'
				className='absolute -right-24 top-28 -z-10 h-auto w-[162px] overflow-x-hidden lg:right-24 lg:top-32 lg:w-[267px]'
			/>
			<BlackCircles
				name='BlackCircles'
				className='animate-fade-up animate-once animate-ease-in absolute -bottom-12 left-16 h-auto w-[172px] lg:-bottom-3 lg:left-[55%] lg:w-[192px]'
			/>
			<BlackStar
				name='BlackStar'
				className='absolute bottom-3 right-3 -z-10 h-auto w-[52px] lg:bottom-10 lg:right-10 lg:w-[68px]'
			/>
		</section>
	);
};

export default ProcessOverview;
