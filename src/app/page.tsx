import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { asText } from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import Script from 'next/script';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateSEO, generateJSONLD } from '@/components/SEO';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('page', 'home').catch(() => notFound());

  return generateSEO({
    title: asText(page.data.title),
    description: page.data.meta_description || null,
    image: page.data.meta_image?.url
      ? {
          url: page.data.meta_image.url,
          alt: page.data.meta_image.alt || asText(page.data.title),
          width: page.data.meta_image.dimensions?.width,
          height: page.data.meta_image.dimensions?.height
        }
      : null,
    url: '/'
  });
}

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID('page', 'home').catch(() => notFound());

  const jsonLd = generateJSONLD({
    title: asText(page.data.title),
    description: page.data.meta_description || null,
    image: page.data.meta_image?.url
      ? {
          url: page.data.meta_image.url,
          alt: page.data.meta_image.alt || asText(page.data.title)
        }
      : null,
    url: '/'
  });

  return (
    <>
      <Script
        id="schema-org-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}
