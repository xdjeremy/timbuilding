import './globals.css';

import Footer from '@/components/layout/Footer/Footer';
import { generateOrganizationSchema } from '@/components/SEO';
import { repositoryName } from '@/prismicio';
import { GoogleAnalytics } from '@next/third-parties/google';
import { PrismicPreview } from '@prismicio/next';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import Header from '../components/layout/Navigation/Header';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL(
			process.env.NEXT_PUBLIC_SITE_URL || 'https://timbuilding.dev'
		),
		title: {
			template: '%s | TimBuilding',
			default: 'Custom Website Solutions | TimBuilding',
		},
		description:
			'TimBuilding: Crafting custom websites and digital solutions to help your business thrive online. From design to development, we build your vision.',
		applicationName: 'TimBuilding',
		referrer: 'origin-when-cross-origin',
		keywords: [
			'custom website design',
			'website development',
			'digital marketing',
			'web solutions',
			'small business websites',
			'business website',
			'TimBuilding',
			'responsive web design',
			'ux design',
			'ui design',
		],
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
		<html lang='en' className={inter.variable}>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='theme-color' content='#ffffff' />
				<Script
					id='schema-org-organization'
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: generateOrganizationSchema() }}
				/>
			</head>
			<body className='overflow-x-hidden antialiased w-screen font-redhat'>
				<Header />
					{children}
				<PrismicPreview repositoryName={repositoryName} />
				<Footer />
			</body>
			<GoogleAnalytics gaId='G-WKHF6PHXL9' />
		</html>
	);
}
