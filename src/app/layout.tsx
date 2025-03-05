import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import Footer from '@/components/layout/Footer/Footer';
import { createClient, repositoryName } from '@/prismicio';
import Header from '../components/layout/Navigation/Header';
import React from "react";
import Script from 'next/script';
import { generateOrganizationSchema } from '@/components/SEO';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev'),
    title: {
      template: '%s | TimBuilding',
      default: 'TimBuilding - Professional Construction Services',
    },
    description: 'TimBuilding offers professional construction and building services with expertise in residential and commercial projects.',
    applicationName: 'TimBuilding',
    referrer: 'origin-when-cross-origin',
    keywords: ['construction', 'building', 'renovation', 'timbuilding', 'professional construction'],
    authors: [{ name: 'TimBuilding' }],
    creator: 'TimBuilding',
    publisher: 'TimBuilding',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='{inter.variable}'>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<meta name="theme-color" content="#ffffff" />
				<Script
					id="schema-org-organization"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: generateOrganizationSchema() }}
				/>
			</head>
			<body className='overflow-x-hidden antialiased w-screen font-redhat'>
				<Header />
				{children}
				<PrismicPreview repositoryName={repositoryName} />
				<Footer />
			</body>
		</html>
	);
}
