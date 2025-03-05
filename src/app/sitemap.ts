import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.com';
  const client = createClient();
  
  // Get all pages
  const pages = await client.getAllByType('page');
  const pageEntries = pages.map((page) => ({
    url: page.uid === 'home' ? baseUrl : `${baseUrl}/${page.uid}`,
    lastModified: page.last_publication_date || new Date().toISOString(),
    changeFrequency: page.uid === 'home' ? 'daily' : 'weekly' as 'daily' | 'weekly',
    priority: page.uid === 'home' ? 1 : 0.8,
  }));
  
  // Get all blog posts
  const blogPosts = await client.getAllByType('blog');
  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.uid}`,
    lastModified: post.last_publication_date || new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));
  
  // Add blog list page
  const blogListEntry = {
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as 'daily',
    priority: 0.9,
  };
  
  return [...pageEntries, blogListEntry, ...blogEntries];
}
