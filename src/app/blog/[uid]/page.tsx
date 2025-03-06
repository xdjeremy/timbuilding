import { asText } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import BlogPost from './BlogPost';
import { generateSEO, generateJSONLD } from '@/components/SEO';

type Params = { uid: string };

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID('blog', uid).catch(() => notFound());

	// Get author information if available
	let authorName = 'TimBuilding';

	return generateSEO({
		title: page.data.meta_title || asText(page.data.title),
		description: page.data.meta_description || null,
		image: page.data.meta_image?.url
			? {
					url: page.data.meta_image.url,
					alt: page.data.meta_image.alt || asText(page.data.title),
					width: page.data.meta_image.dimensions?.width,
					height: page.data.meta_image.dimensions?.height,
				}
			: null,
		url: `/blog/${uid}`,
		type: 'article',
		publishedTime: page.first_publication_date,
		modifiedTime: page.last_publication_date,
		author: authorName,
		twitterCardType: 'summary_large_image',
	});
}

export default async function Page({ params }: { params: Promise<Params> }) {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID('blog', uid).catch(() => notFound());

	// Get author information if available
	let authorName = 'TimBuilding';

	const jsonLd = generateJSONLD({
		title: page.data.meta_title || asText(page.data.title),
		description: page.data.meta_description || null,
		image: page.data.meta_image?.url
			? {
					url: page.data.meta_image.url,
					alt: page.data.meta_image.alt || asText(page.data.title),
				}
			: null,
		url: `/blog/${uid}`,
		type: 'article',
		publishedTime: page.first_publication_date,
		modifiedTime: page.last_publication_date,
		author: authorName,
	});

	return (
		<>
			<Script
				id='schema-org-article'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: jsonLd }}
			/>
			<BlogPost uid={uid} />
			<SliceZone slices={page.data.slices} components={components} />
		</>
	);
}

export async function generateStaticParams() {
	const client = createClient();

	const pages = await client.getAllByType('blog');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
