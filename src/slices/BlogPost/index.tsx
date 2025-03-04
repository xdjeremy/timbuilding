import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { asText, Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { ButtonProps } from '@relume_io/relume-ui';
import { format } from 'date-fns';
import { ChevronLeft, ChevronLeftIcon, Link } from 'lucide-react';
import { FC } from 'react';
import readingTime from 'reading-time';

const component: JSXMapSerializer = {
	heading1: ({ children }) => (
		<h1 className='text-2xl font-bold lg:text-[40px]'>{children}</h1>
	),
};

/**
 * Props for `BlogPost`.
 */
export type BlogPostProps = SliceComponentProps<Content.BlogPostSlice>;

/**
 * Component for "BlogPost" Slices.
 */
const BlogPost: FC<BlogPostProps> = async ({ slice }) => {
	const { category, author, content, image, title, published_date } =
		slice.primary;

	const { button, readTime, heading, postDetails, socialMediaLinks } = {
		...BlogPostHeader2Defaults,
	};
	return (
		<Bounded className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='rb-12 mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20'>
				<PrismicNextLink
					href={'/blog'}
					className='flex items-center gap-2 mb-4'>
					<ChevronLeftIcon /> All Posts
				</PrismicNextLink>
				<div className='rb-4 mb-4 flex w-full gap-4 items-center justify-start'>
					<Badge>{category}</Badge>
					<p className='inline text-sm font-semibold'>
						{readingTime(asText(content)).minutes} min read
					</p>
				</div>
			</div>
			<div className='relative mx-auto mb-8 w-full md:mb-12 lg:mb-8 space-y-10 overflow-visible'>
				<div className='neobrutalist-shadow lg:absolute h-fit p-2 justify-center items-center gap-2 inline-flex cursor-pointer border-4 text-black bg-white rounded-none w-full lg:-rotate-6 lg:max-w-lg lg:-top-12 lg:-left-6'>
					<PrismicRichText field={title} components={component} />
				</div>
				<PrismicNextImage
					field={image}
					className='aspect-[5/2] size-full object-cover h-[600px] neobrutalist-shadow-right'
				/>
			</div>
			<div className='flex w-full flex-col items-start justify-between md:flex-row gap-6'>
				<div className='rb-4 mb-4 flex items-center sm:mb-8 md:mb-0'>
					<div className='mr-8 md:mr-10 lg:mr-12'>
						<p className='mb-2'>Written by</p>
						<p className='font-medium neobrutalist-shadow rounded-none text-center px-2'>
							{author}
						</p>
					</div>
					<div className='mr-8 md:mr-10 lg:mr-12'>
						<p className='mb-2'>Published on</p>
						<p className='font-medium'>
							{published_date
								? format(new Date(published_date), 'dd MMMM yyyy')
								: ''}
						</p>
					</div>
				</div>
				<div className='grid grid-flow-col grid-cols-[max-content] items-start gap-2'>
					{socialMediaLinks.map((link, index) => (
						<a
							key={index}
							href={link.url}
							className='rounded-[1.25rem] bg-background-secondary p-1'>
							{link.icon}
						</a>
					))}
				</div>
			</div>
			<div className='mt-8'>
				<PrismicRichText field={content} />
			</div>
		</Bounded>
	);
};

export default BlogPost;

type ImageProps = {
	src: string;
	alt?: string;
};

type PostDetails = {
	title: string;
	description: string;
};

type SocialMediaLinksProps = {
	icon: React.ReactNode;
	url: string;
};

type Props = {
	button: ButtonProps;
	category: string;
	readTime: string;
	heading: string;
	image: ImageProps;
	postDetails: PostDetails[];
	socialMediaLinks: SocialMediaLinksProps[];
};

const BlogPostHeader2Defaults: Props = {
	button: {
		title: 'All Posts',
		variant: 'link',
		size: 'link',
		iconLeft: <ChevronLeft />,
	},
	category: 'Category',
	readTime: '5 min read',
	heading: 'Blog title heading will go here',
	postDetails: [
		{ title: 'Written by', description: 'Full Name' },
		{ title: 'Published on', description: '22 January 2021' },
	],
	socialMediaLinks: [
		{ url: '#', icon: <Link className='size-6' /> },
		{ url: '#', icon: <Link className='size-6' /> },
		{ url: '#', icon: <Link className='size-6 p-0.5' /> },
		{ url: '#', icon: <Link className='size-6' /> },
	],
	image: {
		src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
		alt: 'Relume placeholder image',
	},
};
