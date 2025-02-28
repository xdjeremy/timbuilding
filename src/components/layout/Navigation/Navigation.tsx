'use client';

import {
	bottomLineVariants,
	middleLineVariants,
	topLineVariants,
} from '@/components/layout/Navigation/line-variants';
import MegaMenu from '@/components/layout/Navigation/MegaMenu';
import { asText } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavigationDocument, SettingsDocument } from 'prismicio-types';
import { FC, useState } from 'react';

interface NavigationProps {
	settings: SettingsDocument;
	navigation: NavigationDocument;
}

const Navigation: FC<NavigationProps> = ({ settings, navigation }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='mx-auto flex size-full max-w-full items-center justify-between'>
				<PrismicNextLink href={'/'}>
					<PrismicNextImage
						field={settings.data.navigation_logo}
						className='w-[135px] h-9'
					/>
				</PrismicNextLink>
				<div className='absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0'>
					<div className='flex flex-col items-center lg:flex-row'>
						{navigation.data.links.map((item) => (
							<PrismicNextLink
								key={asText(item.label)}
								field={item.link}
								className='relative hover:text-brand-telemagenta block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base'>
								<PrismicText field={item.label} />
							</PrismicNextLink>
						))}
						<MegaMenu title={asText(settings.data.siteTitle)} />
					</div>
				</div>
				<button
					className='-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					<motion.span
						className='my-[3px] h-0.5 w-6 bg-black'
						animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
						variants={topLineVariants}
					/>
					<motion.span
						className='my-[3px] h-0.5 w-6 bg-black'
						animate={isMobileMenuOpen ? 'open' : 'closed'}
						variants={middleLineVariants}
					/>
					<motion.span
						className='my-[3px] h-0.5 w-6 bg-black'
						animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
						variants={bottomLineVariants}
					/>
				</button>
			</div>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						variants={{ open: { height: '100dvh' }, close: { height: 'auto' } }}
						animate={isMobileMenuOpen ? 'open' : 'close'}
						initial='close'
						exit='close'
						className='absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden'
						transition={{ duration: 0.4 }}>
						<motion.div
							variants={{ open: { y: 0 }, close: { y: '-100%' } }}
							animate={isMobileMenuOpen ? 'open' : 'close'}
							initial='close'
							exit='close'
							transition={{ duration: 0.4 }}
							className='absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4'>
							<div className='flex flex-col'>
								{navigation.data.links.map((item) => (
									<PrismicNextLink
										key={asText(item.label)}
										field={item.link}
										className='block py-3 text-md hover:text-brand-telemagenta'>
										<PrismicText field={item.label} />
									</PrismicNextLink>
								))}
								<MegaMenu title={asText(settings.data.siteTitle)} />
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
