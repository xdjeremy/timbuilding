'use server';

import React from 'react';
import { Bounded } from '../../Bounded';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { createClient } from '../../../prismicio';
import { asText } from '@prismicio/client';
import Navigation from './Navigation';

const Header = async () => {
	const client = createClient();
	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

	return (
		<nav className='relative z-[999] flex min-h-16 w-full items-center border-b-4 border-border-primary bg-background-primary px-[5%] md:min-h-18'>
			<Navigation settings={settings} navigation={navigation} />
		</nav>
		// <Bounded as='header' yPadding='sm'>
		// 	<div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none'>
		// 		<PrismicNextLink
		// 			href='/'
		// 			className='text-xl font-semibold tracking-tight'>
		// 			<PrismicText field={settings.data.siteTitle} />
		// 		</PrismicNextLink>
		// 		<nav>
		// 			<ul className='flex flex-wrap gap-6 md:gap-10'>
		// 				{navigation.data?.links.map((item) => (
		// 					<li
		// 						key={asText(item.label)}
		// 						className='font-semibold tracking-tight text-slate-800'>
		// 						<PrismicNextLink field={item.link}>
		// 							<PrismicText field={item.label} />
		// 						</PrismicNextLink>
		// 					</li>
		// 				))}
		// 			</ul>
		// 		</nav>
		// 	</div>
		// </Bounded>
	);
};

export default Header;
