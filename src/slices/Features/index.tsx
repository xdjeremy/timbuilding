import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlackSpark2,
  BlueSpark2,
  PinkStar2,
  YellowStar,
} from '@/constants/icons';
import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
  JSXMapSerializer,
  SliceComponentProps
} from '@prismicio/react';
import { FC } from 'react';

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const components: JSXMapSerializer = {
	heading2: ({ children }) => <Heading as='h2' size='lg'>{children}</Heading>,
	strong: ({ children }) => <span className='highlight'>{children}</span>,
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};
/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
	const { badge, title, subtitle, features, button_link } = slice.primary;

	return (
		<section
			data-slice-type={slice.slice_type}
			className='font-redhat text-brand-dark-blue relative border-b-4 border-black px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
						<div className='w-full max-w-lg'>
							<div className='mb-10'>
								<Badge>{badge}</Badge>
							</div>
							<PrismicRichText field={title} components={components} />
							<PrismicRichText field={subtitle} components={components} />
						</div>
					</div>
					<div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
						<div className='flex w-full flex-col items-center text-center'>
							<div className='rb-6 relative mb-6 md:mb-8'>
								<PrismicNextImage
									field={features[0]?.image}
									className='neobrutalist-shadow'
								/>
								<PinkStar2 className='absolute -left-5 -top-10 h-[75px] w-[75px] lg:-left-10 lg:-top-16 lg:h-[122px] lg:w-[122px]' />
								<BlueSpark2 className='absolute -top-3 left-16 h-[31px] w-[31px] lg:-top-5 lg:left-24 lg:h-[50px] lg:w-[50px]' />
								<BlueSpark2 className='absolute -left-5 top-12 h-[22px] w-[22px] lg:top-18 lg:h-[36px] lg:w-[36px]' />
							</div>
							<h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
								Custom Web Development for Your Unique Needs
							</h3>
							<p>
								We build responsive and user-friendly websites that capture your
								brand essence.
							</p>
						</div>
						<div className='flex w-full flex-col items-center text-center'>
							<div className='rb-6 mb-6 md:mb-8'>
								<PrismicNextImage
									field={features[1]?.image}
									className='neobrutalist-shadow'
								/>
							</div>
							<h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
								Tailored Applications to Streamline Your Operations
							</h3>
							<p>
								Our custom applications are designed to enhance efficiency and
								productivity.
							</p>
						</div>
						<div className='flex w-full flex-col items-center text-center'>
							<div className='rb-6 relative mb-6 md:mb-8'>
								<PrismicNextImage
									className='neobrutalist-shadow'
									field={features[2]?.image}
								/>

								{/* decorations */}
								<YellowStar className='absolute -bottom-6 -right-2 h-[64px] w-[64px] lg:-bottom-8 lg:-right-12 lg:h-[121px] lg:w-[121px]' />
								<BlackSpark2 className='absolute -bottom-6 right-16 h-[26px] w-[26px] lg:-bottom-8 lg:right-20 lg:h-[50px] lg:w-[50px]' />
								<BlackSpark2 className='absolute bottom-12 -right-4 h-[26px] w-[26px] lg:bottom-24 lg:-right-4 lg:h-[33px] lg:w-[33px]' />
							</div>
							<h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
								Comprehensive Marketing Services to Boost Visibility
							</h3>
							<p>
								We offer strategic marketing solutions that drive engagement and
								growth.
							</p>
						</div>
					</div>
					<div className='mt-12 flex items-center gap-4 md:mt-18 lg:mt-20'>
						<PrismicNextLink field={button_link}>
							<Button variant='outline'>{button_link.text}</Button>
						</PrismicNextLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
