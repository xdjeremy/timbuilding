'use client';

import { asText } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import MegaMenu from './MegaMenu';
import { NavigationDocument, SettingsDocument } from 'prismicio-types';

interface MobileNavigationProps {
  navigation: NavigationDocument;
  settings: SettingsDocument;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ navigation, settings }) => (
  <div className='flex flex-col items-center'>
    {navigation.data.links.map((item) => (
      <PrismicNextLink
        key={asText(item.label)}
        field={item.link}
        className='relative hover:text-brand-telemagenta block w-auto py-3 text-md'
      >
        <PrismicText field={item.label} />
      </PrismicNextLink>
    ))}
    <MegaMenu title={asText(settings.data.siteTitle)} />
  </div>
);
