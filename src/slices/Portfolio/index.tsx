import { FC } from 'react';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import Badge from '@/components/common/Badge';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextImage } from '@prismicio/next';
import { HalfBlueWaves2, OutlineSpark3, ThreeCircles } from '@/constants/icons';

const component: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as='h2' size='lg'>
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading
			as='h3'
			size='xs'
			className='mb-2 text-xl font-extrabold md:text-2xl'>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio: FC<PortfolioProps> = ({ slice }) => {
	const { badge, description, project, title } = slice.primary;

	return (
		<section
			id='relume'
			className='font-redhat text-brand-dark-blue relative px-[5%] py-16 md:py-24 lg:py-28 border-b-4 border-black'>
			<div className='container'>
				<header className='mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20'>
					<Badge variant='pink'>{badge}</Badge>
					<PrismicRichText field={title} components={component} />
					<PrismicRichText field={description} components={component} />
				</header>
				<div className='columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3'>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6 relative'>
							<PrismicNextImage
								field={project[0]?.image}
								className='w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[0]?.shadow_color}` }}
							/>
							<OutlineSpark3 className='w-[71px]  h-[71px] absolute -top-10 -left-4 md:-top-14 lg:w-[114px] lg:h-[114px] lg:-left-14 lg:-top-20' />
						</div>
						<PrismicRichText field={project[0]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Dashboard Management
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Employee Tool
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Client Focused
								</div>
							</li>
						</ul>
					</article>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6'>
							<PrismicNextImage
								field={project[1]?.image}
								className='w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[1]?.shadow_color}` }}
							/>
						</div>
						<PrismicRichText field={project[1]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Hotel Landing Page
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Tourism
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Hospitality
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Website Design
								</div>
							</li>
						</ul>
					</article>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6'>
							<PrismicNextImage
								field={project[2]?.image}
								className='w-[335px] object-cover object-top h-[335px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[416px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[2]?.shadow_color}` }}
							/>
						</div>
						<PrismicRichText field={project[2]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Information Technology
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Business Solutions
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Web Design
								</div>
							</li>
						</ul>
					</article>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6'>
							<PrismicNextImage
								field={project[3]?.image}
								className='w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[3]?.shadow_color}` }}
							/>
						</div>
						<PrismicRichText field={project[3]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<a
									href='#'
									className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Social Media
								</a>
							</li>
							<li className='flex'>
								<a
									href='#'
									className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Employee Engagement
								</a>
							</li>
							<li className='flex'>
								<a
									href='#'
									className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Internal Tool
								</a>
							</li>
						</ul>
					</article>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6'>
							<PrismicNextImage
								field={project[4]?.image}
								className='w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[4]?.shadow_color}` }}
							/>
						</div>
						<PrismicRichText field={project[4]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Budgeting App
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Finance
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									User Friendly
								</div>
							</li>
						</ul>
					</article>
					<article className='mb-8 break-inside-avoid'>
						<div className='mb-5 md:mb-6 relative'>
							<PrismicNextImage
								field={project[5]?.image}
								className='w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]'
								style={{ boxShadow: `-15px 15px 0px 0px ${project[5]?.shadow_color}` }}
							/>
							<ThreeCircles
								name='ThreeCircles'
								className='w-[100px]  h-[280px] absolute bottom-[34%] -right-4 -z-10 md:-right-8 md:-bottom-32 lg:h-[336px] lg:bottom-[40%] lg:-right-12 lg:z-10'
							/>
						</div>
						<PrismicRichText field={project[5]?.text} components={component} />
						<ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									All Projects
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Portfolio Showcase
								</div>
							</li>
							<li className='flex'>
								<div className='bg-background-secondary px-2 py-1 text-sm font-semibold'>
									Client Success
								</div>
							</li>
						</ul>
					</article>
				</div>
				<footer className='mt-8 flex justify-center md:mt-18 lg:mt-20 relative'>
					<OutlineSpark3 className='w-[52px]  h-[52px] absolute right-32 bottom-10 -z-10 lg:w-[82px] lg:h-[82px] lg:right-1/4 ' />
				</footer>
				<HalfBlueWaves2 className='w-[182px]  h-[100px] absolute -top-0 right-8 -z-10 lg:w-[250px] lg:h-[180px] lg:right-28' />
				<OutlineSpark3 className='w-[35px]  h-[35px] absolute top-16 left-20 lg:w-[62px] lg:h-[62px] lg:left-1/3' />
				<OutlineSpark3 className='w-[48px]  h-[48px] absolute top-1/3 right-2 lg:w-[62px] lg:h-[62px] lg:top-1/4 lg:right-6' />
				<OutlineSpark3 className='w-[42px]  h-[42px] absolute bottom-20 left-6 lg:w-[62px] lg:h-[62px] lg:bottom-32 lg:left-36' />
				<OutlineSpark3 className='w-[160px] h-[120px] absolute bottom-0 -z-10 lg:w-[230px] lg:h-[190px] lg:left-40' />
				<OutlineSpark3 className='w-[85px]  h-[85px] absolute right-4 bottom-2 lg:w-[139px] lg:h-[139px] lg:right-2' />
				<OutlineSpark3 className='w-[49px]  h-[49px] absolute top-[70%] -left-4 lg:w-[75px] lg:h-[75px]' />
			</div>
		</section>
	);
};

export default Portfolio;
