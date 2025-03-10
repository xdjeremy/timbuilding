'use server';

import { Bounded } from '@/components/Bounded';
import Container from '@/components/Container';
import { createClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import MailingList from './MailingList';

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');
  const navigation = await client.getSingle('navigation');

  return (
    <Bounded as="footer" className="border-b-0">
      <Container>
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <PrismicNextLink href="/" className="mb-8">
              <PrismicNextImage
                field={settings.data.navigation_logo}
                className="inline-block w-[135px]"
              />
            </PrismicNextLink>
            <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-start gap-y-4 md:grid-flow-col md:grid-cols-[max-content] md:justify-start md:justify-items-start md:gap-x-6">
              {navigation.data.links.map((item) => (
                <PrismicNextLink
                  key={asText(item.label)}
                  field={item.link}
                  className="font-semibold"
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              ))}
            </ul>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-semibold md:mb-4">Subscribe</p>
            <MailingList />
            <div>
              <p className="text-xs">
                By subscribing you agree to with our{' '}
                <PrismicNextLink
                  field={settings.data.privacy_policy}
                  className="underline"
                >
                  Privacy Policy
                </PrismicNextLink>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black"></div>
        <div className="flex flex-col items-start justify-start pt-6 pb-4 text-sm md:flex-row md:items-center md:justify-between md:pt-8 md:pb-0 md:text-center">
          <ul className="grid grid-flow-row grid-cols-[max-content] gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            <li className="underline decoration-black underline-offset-1">
              <PrismicNextLink field={settings.data.privacy_policy}>
                Privacy Policy
              </PrismicNextLink>
            </li>
            <li className="underline decoration-black underline-offset-1">
              <PrismicNextLink field={settings.data.terms_of_service}>
                Terms of Service
              </PrismicNextLink>
            </li>
          </ul>
          <p className="mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} TimBuilding. All rights reserved.
          </p>
        </div>
      </Container>
    </Bounded>
  );
};

export default Footer;
