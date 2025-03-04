import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
	BlueHalfCircle2,
	DarkBlueHalfCircle2,
	PinkHalfCircle,
	YellowHalfCircle,
} from '@/constants/icons';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import InquiryForm from './components/form';

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<h2 className='rb-5 mb-5 mt-4 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
			{children}
		</h2>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = (slice) => {
	const { badge, text } = slice.slice.primary;

	return (
		<Bounded className='font-redhat text-brand-dark-blue px-[5%] relative overflow-hidden py-16 md:py-24 lg:py-28 border-b-4 border-black'>
			<div className='max-w-lg mx-auto'>
				<div className='mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12'>
					<Badge>Connect</Badge>
					<span className='mt-4 mb-5'>
						<PrismicRichText field={text} components={component} />
					</span>
				</div>
				<InquiryForm {...slice} />
			</div>
			<BlueHalfCircle2 className='w-[99px]  h-[110px] absolute top-0 -right-5 lg:w-[150px] lg:h-[140px] lg:-right-9 lg:top-12' />
			<YellowHalfCircle className='w-[99px]  h-[110px] absolute top-28 -right-5 lg:w-[150px] lg:h-[140px] lg:-right-9 lg:top-48' />
			<PinkHalfCircle className='w-[99px]  h-[110px] absolute -bottom-7 -left-4 lg:w-[150px] lg:h-[140px] lg:left-16' />
			<DarkBlueHalfCircle2 className='w-[99px] h-[110px] absolute -bottom-7 left-[85px] lg:w-[150px] lg:h-[140px] lg:left-56' />
		</Bounded>
	);
};

export default ContactForm;
