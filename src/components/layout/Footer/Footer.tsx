'use server';

import Button from '@/components/common/Button';
import { createClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import React from 'react';

const Footer = async () => {
	const client = createClient();
	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

	return (
		<footer className='px-[5%] py-12 md:py-18 lg:py-20'>
			<div className='container'>
				<div className='grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20'>
					<div className='flex flex-col items-start'>
						<PrismicNextLink href='/' className='mb-8'>
							<PrismicNextImage
								field={settings.data.navigation_logo}
								className='inline-block w-[135px]'
							/>
						</PrismicNextLink>
						<ul className='grid grid-flow-row grid-cols-1 items-start justify-center justify-items-start gap-y-4 md:grid-flow-col md:grid-cols-[max-content] md:justify-start md:justify-items-start md:gap-x-6'>
							{navigation.data.links.map((item) => (
								<PrismicNextLink
									key={asText(item.label)}
									field={item.link}
									className='font-semibold'>
									<PrismicText field={item.label} />
								</PrismicNextLink>
							))}
						</ul>
					</div>
					<div className='max-w-md lg:min-w-[25rem]'>
						<p className='mb-3 font-semibold md:mb-4'>Subscribe</p>
						<form className='mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4'>
							<div className='relative flex size-full items-center'>
								<input
									type='email'
									className='flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3'
									id='email'
									placeholder='Enter your email'
									value=''
								/>
							</div>
							<Button variant='outline'> Subscribe</Button>
						</form>
						<div>
							<p className='text-xs'>
								By subscribing you agree to with our{' '}
								<PrismicNextLink
									field={settings.data.privacy_policy}
									className='underline'>
									Privacy Policy
								</PrismicNextLink>
								.
							</p>
						</div>
					</div>
				</div>
				<div className='h-px w-full bg-black'></div>
				<div className='flex flex-col items-start justify-start pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between md:pb-0 md:pt-8 md:text-center'>
					<ul className='grid grid-flow-row grid-cols-[max-content] gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center'>
						<li className='underline decoration-black underline-offset-1'>
							<PrismicNextLink field={settings.data.privacy_policy}>
								Privacy Policy
							</PrismicNextLink>
						</li>
						<li className='underline decoration-black underline-offset-1'>
							<PrismicNextLink field={settings.data.terms_of_service}>
								Terms of Service
							</PrismicNextLink>
						</li>
					</ul>
					<p className='mt-8 md:mt-0'>
						&copy; {new Date().getFullYear()} TimBuilding. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
