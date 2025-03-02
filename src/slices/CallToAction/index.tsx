import { Bounded } from '@/components/Bounded';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import Button from '@/components/common/Button';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<h2 className='mb-3 text-4xl font-extrabold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl'>
			{children}
		</h2>
	),
	strong: ({ children }) => (
		<span className='text-brand-telemagenta'>{children}</span>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
	const { title, description, button, background, background_mobile } =
		slice.primary;

	return (
		<Bounded as='section' className='px-[5%] py-16 md:py-24 lg:py-28 relative font-redhat text-brand-dark-blue border-b-4 border-black h-fit overflow-y-hidden overflow-x-hidden'>
			<div className='container grid w-full grid-cols-1 items-start justify-between gap-6'>
				<div className='md:mr-12 lg:mr-0'>
					<div className='w-full max-w-lg'>
						<PrismicRichText field={title} components={component} />
						<PrismicRichText field={description} components={component} />
					</div>
				</div>
				<div className='flex items-start justify-start'>
					<PrismicNextLink field={button}>
						<Button>{button.text}</Button>
					</PrismicNextLink>
				</div>
			</div>
			<PrismicNextImage
				className='absolute bottom-0 left-0 -z-10 lg:hidden'
				field={background_mobile}
			/>
			<PrismicNextImage
				className='absolute -bottom-5 left-0 w-full -z-10 hidden lg:block'
				field={background}
			/>
		</Bounded>
	);
};

export default CallToAction;
