'use server';

import { createClient } from '@/prismicio';
import { asText, Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { format } from 'date-fns';
import readingTime from 'reading-time';

const BlogList = async () => {
	const client = createClient();

	const documents = await client.getAllByType<
		Content.BlogDocument & {
			data: {
				author: {
					data: Pick<Content.BlogAuthorDocumentData, 'author' | 'avatar'>;
				};
				category: {
					data: Pick<Content.BlogCategoryDocumentData, 'category'>;
				};
			};
		}
	>('blog', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc',
		},
		fetchLinks: [
			'blog_author.author',
			'blog_author.avatar',
			'blog_category.category',
		],
	});

	const { tagline, heading, description, tabs } = {
		...Blog23Defaults,
	};
	return (
		<div className='flex flex-col justify-center'>
			<div className='no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0'>
				{tabs.map((tab, index) => (
					<button
						key={index}
						value={tab.value}
						className='px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black'>
						{tab.trigger}
					</button>
				))}
			</div>

			<div className='grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2'>
				{documents.map((document) => (
					<div
						key={document.id}
						className='flex size-full flex-col items-center justify-start neobrutalist-shadow'>
						<PrismicNextLink
							document={document}
							className='w-full cursor-pointer'>
							<PrismicNextImage
								field={document.data.image}
								className='aspect-video size-full object-cover rounded-3xl'
							/>
						</PrismicNextLink>
						<div className='flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6'>
							<p className='mb-2 text-sm font-semibold'>
								{document.data.category.data.category}
							</p>
							<div className='flex w-full flex-col items-start justify-start'>
								<PrismicNextLink document={document} className='mb-2'>
									<h2 className='text-xl font-bold md:text-2xl cursor-pointer'>
										{asText(document.data.title)}
									</h2>
								</PrismicNextLink>
								<p className='line-clamp-2'>{asText(document.data.content)}</p>
								<div className='mt-6 flex items-center'>
									<div className='mr-4 shrink-0'>
										<PrismicNextImage
											field={document.data.author.data.avatar}
											className='size-12 min-h-12 min-w-12 rounded-full object-cover'
										/>
									</div>
									<div>
										<h6 className='text-sm font-semibold'>
											{document.data.author.data.author}
										</h6>
										<div className='flex items-center'>
											<p className='text-sm'>
												{document.first_publication_date &&
													format(
														new Date(document.first_publication_date),
														'dd MMMM yyyy'
													)}
											</p>
											<span className='mx-2'>•</span>
											<p className='text-sm'>
												{readingTime(asText(document.data.content)).minutes} min
												read
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;

type ImageProps = {
	src: string;
	alt?: string;
};

type BlogPost = {
	url: string;
	image: ImageProps;
	category: string;
	readTime: string;
	title: string;
	description: string;
	avatar: ImageProps;
	fullName: string;
	date: string;
};

type FeaturedBlogPost = BlogPost;

type Tab = {
	value: string;
	trigger: string;
	content: BlogPost[];
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	featuredBlogPost: FeaturedBlogPost;
	defaultValue: string;
	tabs: Tab[];
};

const blogPost: BlogPost = {
	url: '#',
	image: {
		src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
		alt: 'Relume placeholder image',
	},
	category: 'Category',
	readTime: '5 min read',
	title: 'Blog title heading will go here',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
	avatar: {
		src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
		alt: 'Relume placeholder avatar',
	},
	fullName: 'Full name',
	date: '11 Jan 2022',
};

const Blog23Defaults: Props = {
	tagline: 'Blog',
	heading: 'Short heading goes here',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	featuredBlogPost: blogPost,
	tabs: [
		{
			value: 'view-all',
			trigger: 'View all',
			content: [blogPost, blogPost, blogPost, blogPost],
		},
		{
			value: 'category-one',
			trigger: 'Category one',
			content: [blogPost, blogPost, blogPost, blogPost],
		},
		{
			value: 'category-two',
			trigger: 'Category two',
			content: [blogPost, blogPost, blogPost, blogPost],
		},
		{
			value: 'category-three',
			trigger: 'Category three',
			content: [blogPost, blogPost, blogPost, blogPost],
		},
		{
			value: 'category-four',
			trigger: 'Category four',
			content: [blogPost, blogPost, blogPost, blogPost],
		},
	],
	defaultValue: 'view-all',
};
