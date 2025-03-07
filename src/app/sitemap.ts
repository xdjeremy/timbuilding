import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';

const formatSitemapDate = (dateStr: string): string => {
  return new Date(dateStr).toISOString().replace(/\.\d+Z$/, 'Z');
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev';
  const client = createClient();
  
  // Get all published pages with valid dates
  const pages = await client.getAllByType('page');
  const pageEntries = pages
    .filter(page => page.last_publication_date)
    .map((page) => ({
      url: page.uid === 'home' ? baseUrl : `${baseUrl}/${page.uid}`,
      lastModified: formatSitemapDate(page.last_publication_date),
      changeFrequency: (page.uid === 'home' ? 'daily' : 'weekly') as 'daily' | 'weekly',
      priority: page.uid === 'home' ? 1 : 0.8
    }));
  
  // Get all published blog posts with valid dates
  const blogPosts = await client.getAllByType('blog');
  const blogEntries = blogPosts
    .filter(post => post.last_publication_date)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.uid}`,
      lastModified: formatSitemapDate(post.last_publication_date),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.7
    }));
  
  // Add blog list page with strict ISO format
  const blogListEntry = {
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
    changeFrequency: 'daily' as 'daily',
    priority: 0.9
  };
  
  return [...pageEntries, blogListEntry, ...blogEntries];
}
