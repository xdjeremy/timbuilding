import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer/Footer';
import { repositoryName } from '@/prismicio';
import Header from '../components/layout/Navigation/Header';
import React from "react";

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='{inter.variable}'>
			<body className='overflow-x-hidden antialiased w-screen font-redhat'>
				<Header />
				{children}
				<PrismicPreview repositoryName={repositoryName} />
				<Footer />
			</body>
		</html>
	);
}
