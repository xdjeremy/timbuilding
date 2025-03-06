'use client';

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { AnimatePresence, motion } from 'framer-motion';
import { NavigationDocument, SettingsDocument } from 'prismicio-types';
import { FC, useState } from 'react';

import { DesktopNavigation } from './DesktopNavigation';
import { HamburgerButton } from './HamburgerButton';
import { MobileNavigation } from './MobileNavigation';

interface NavigationProps {
	settings: SettingsDocument;
	navigation: NavigationDocument;
}

const Navigation: FC<NavigationProps> = ({ settings, navigation }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			<div className='mx-auto flex size-full max-w-full items-center justify-between h-[var(--header-height)]'>
				<PrismicNextLink href={'/'}>
					<PrismicNextImage
						field={settings.data.navigation_logo}
						className='w-[135px] h-9'
					/>
				</PrismicNextLink>

				<DesktopNavigation navigation={navigation} onLinkClick={() => setIsMobileMenuOpen(false)} />

				<HamburgerButton
					isOpen={isMobileMenuOpen}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				/>
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
							<MobileNavigation 
								navigation={navigation} 
								onLinkClick={() => setIsMobileMenuOpen(false)}
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
