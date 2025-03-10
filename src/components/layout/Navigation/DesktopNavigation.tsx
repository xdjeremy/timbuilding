'use client';

import { asText } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { NavigationDocument } from 'prismicio-types';
import MegaMenu from './MegaMenu';

interface DesktopNavigationProps {
  navigation: NavigationDocument;
  onLinkClick: () => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navigation,
  onLinkClick
}) => (
  <div className="border-border-primary bg-background-primary absolute hidden h-screen overflow-auto border-b px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
    <div className="flex flex-col items-center lg:flex-row">
      {navigation.data.links.map((item) => (
        <PrismicNextLink
          key={asText(item.label)}
          field={item.link}
          className="hover:text-brand-telemagenta text-md relative block w-auto py-3 lg:inline-block lg:px-4 lg:py-6 lg:text-base"
        >
          <PrismicText field={item.label} />
        </PrismicNextLink>
      ))}
      <MegaMenu onLinkClick={onLinkClick} />
    </div>
  </div>
);
