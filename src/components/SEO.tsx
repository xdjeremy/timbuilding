import { Metadata } from 'next';
import { asText } from '@prismicio/client';

type SEOProps = {
  title?: string | null;
  description?: string | null;
  image?: {
    url: string | null;
    alt?: string | null;
    width?: number;
    height?: number;
  } | null;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  twitterCardType?: 'summary' | 'summary_large_image';
};

/**
 * Generates metadata for Next.js pages with SEO best practices
 */
export function generateSEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  twitterCardType = 'summary_large_image'
}: SEOProps): Metadata {
  // Base URL for absolute URLs
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev';

  // Ensure URL is absolute
  const absoluteUrl = url
    ? url.startsWith('http')
      ? url
      : `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`
    : baseUrl;

  // Ensure image URL is absolute
  const imageUrl = image?.url
    ? image.url.startsWith('http')
      ? image.url
      : `${baseUrl}${image.url.startsWith('/') ? image.url : `/${image.url}`}`
    : `${baseUrl}/default-og-image.jpg`;

  return {
    // Basic metadata
    title: title || 'TimBuilding',
    description:
      description ||
      'TimBuilding - Professional construction and building services',

    // Canonical URL
    alternates: {
      canonical: absoluteUrl
    },

    // Open Graph metadata
    openGraph: {
      title: title || 'TimBuilding',
      description:
        description ||
        'TimBuilding - Professional construction and building services',
      url: absoluteUrl,
      siteName: 'TimBuilding',
      images: [
        {
          url: imageUrl,
          width: image?.width || 1200,
          height: image?.height || 630,
          alt: image?.alt || title || 'TimBuilding'
        }
      ],
      locale: 'en_US',
      type,
      ...(type === 'article' && {
        article: {
          publishedTime,
          modifiedTime,
          authors: [author || 'TimBuilding']
        }
      })
    },

    // Twitter Card metadata
    twitter: {
      card: twitterCardType,
      title: title || 'TimBuilding',
      description:
        description ||
        'TimBuilding - Professional construction and building services',
      images: [imageUrl],
      creator: '@timbuilding',
      site: '@timbuilding'
    },

    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },

    // Verification tags
    verification: {
      // Add your verification tags here
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    }
  };
}

/**
 * Generates JSON-LD structured data for SEO
 */
export function generateJSONLD({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}: SEOProps): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev';
  const absoluteUrl = url
    ? url.startsWith('http')
      ? url
      : `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`
    : baseUrl;
  const imageUrl = image?.url
    ? image.url.startsWith('http')
      ? image.url
      : `${baseUrl}${image.url.startsWith('/') ? image.url : `/${image.url}`}`
    : `${baseUrl}/default-og-image.jpg`;

  if (type === 'article') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      image: imageUrl,
      description: description,
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      author: {
        '@type': 'Person',
        name: author || 'TimBuilding'
      },
      publisher: {
        '@type': 'Organization',
        name: 'TimBuilding',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteUrl
      }
    });
  }

  // Default to WebSite schema
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title || 'TimBuilding',
    description:
      description ||
      'TimBuilding - Professional construction and building services',
    url: absoluteUrl
  });
}

/**
 * Generates Organization schema for the homepage
 */
export function generateOrganizationSchema(): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev';

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TimBuilding',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://facebook.com/timbuilding',
      'https://twitter.com/timbuilding',
      'https://instagram.com/timbuilding',
      'https://linkedin.com/company/timbuilding'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  });
}
