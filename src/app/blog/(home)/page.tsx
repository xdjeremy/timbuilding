import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { createClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import { JSXMapSerializer } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogList from './BlogList';
import FeaturedBlog from './FeaturedBlog';

const component: JSXMapSerializer = {
	heading1: ({ children }) => (
		<h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl'>
			{children}
		</h1>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle('blog_list').catch(() => notFound());

	return {
		title: asText(page.data.title),
		description: page.data.meta_description,
		openGraph: {
			title: page.data.meta_title ?? undefined,
			images: [{ url: page.data.meta_image.url ?? '' }],
		},
	};
}

const BlogHome = async ({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
	const client = createClient();
	const page = await client.getSingle('blog_list').catch(() => notFound());

	const { badge, title } = page.data;
	return (
		<Bounded className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='mb-12 md:mb-18 lg:mb-20'>
				<div className='w-full max-w-lg space-y-3 md:space-y-4'>
					<Badge variant='pink'>{badge}</Badge>
					<PrismicRichText field={title} components={component} />
				</div>
			</div>
			<div className='flex flex-col justify-start gap-10'>
				<FeaturedBlog />
				<BlogList searchParams={searchParams} />
			</div>
		</Bounded>
	);
};

export default BlogHome;
