import { generateJSONLD, generateSEO } from '@/components/SEO';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { asText } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

type Params = { uid: string };

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID('page', uid).catch(() => notFound());

  return generateSEO({
    title: page.data.meta_title || asText(page.data.title),
    description: page.data.meta_description || null,
    image: page.data.meta_image?.url
      ? {
          url: page.data.meta_image.url,
          alt: page.data.meta_image.alt || asText(page.data.title),
          width: page.data.meta_image.dimensions?.width,
          height: page.data.meta_image.dimensions?.height
        }
      : null,
    url: `/${uid}`
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID('page', uid).catch(() => notFound());

  const jsonLd = generateJSONLD({
    title: page.data.meta_title || asText(page.data.title),
    description: page.data.meta_description || null,
    image: page.data.meta_image?.url
      ? {
          url: page.data.meta_image.url,
          alt: page.data.meta_image.alt || asText(page.data.title)
        }
      : null,
    url: `/${uid}`
  });

  return (
    <>
      <Script
        id="schema-org-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ uid: page.uid }}
      />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('page');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
