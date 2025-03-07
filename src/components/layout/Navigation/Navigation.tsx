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
      <div className="mx-auto flex size-full h-[var(--header-height)] max-w-full items-center justify-between">
        <PrismicNextLink href={'/'}>
          <PrismicNextImage
            field={settings.data.navigation_logo}
            className="h-9 w-[135px]"
          />
        </PrismicNextLink>

        <DesktopNavigation
          navigation={navigation}
          onLinkClick={() => setIsMobileMenuOpen(false)}
        />

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
            initial="close"
            exit="close"
            className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{ open: { y: 0 }, close: { y: '-100%' } }}
              animate={isMobileMenuOpen ? 'open' : 'close'}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="border-border-primary bg-background-primary absolute top-0 right-0 left-0 block h-dvh overflow-auto border-b px-[5%] pt-4 pb-8"
            >
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
