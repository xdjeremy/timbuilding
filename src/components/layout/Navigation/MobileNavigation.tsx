'use client';

import { asText } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { NavigationDocument } from 'prismicio-types';
import MegaMenu from './MegaMenu';

interface MobileNavigationProps {
	navigation: NavigationDocument;
	onLinkClick: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
	navigation,
	onLinkClick,
}) => (
	<div className='flex flex-col items-center'>
		{navigation.data.links.map((item) => (
			<PrismicNextLink
				key={asText(item.label)}
				field={item.link}
				className='relative hover:text-brand-telemagenta block w-auto py-3 text-md'
				onClick={onLinkClick}>
				<PrismicText field={item.label} />
			</PrismicNextLink>
		))}
		<MegaMenu onLinkClick={onLinkClick} />
	</div>
);
