import './globals.css';

import { Inter } from 'next/font/google';
import { asText } from '@prismicio/client';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink, PrismicPreview } from '@prismicio/next';

import { createClient, repositoryName } from '@/prismicio';
import { Bounded } from '@/components/Bounded';
import Header from '../components/layout/Navigation/Header';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className={inter.variable}>
			<body className='overflow-x-hidden antialiased'>
				<Header />
				{children}
				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	);
}
