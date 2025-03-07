import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { asText } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { Check } from 'lucide-react';
import { FC } from 'react';
import { PricingProps } from '..';

const component: JSXMapSerializer = {
  heading4: ({ children }) => (
    <h4 className="mb-2 text-xl font-bold md:text-2xl">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="lg:text-10xl justify-self-end text-6xl font-bold md:text-9xl">
      {children}
    </h5>
  ),
  strong: ({ children }) => (
    // this is used for the "/mo" on price
    <span className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
      {children}
    </span>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

const PricingCard: FC<PricingProps> = ({ slice }) => {
  const { price_text, price, inclusions, button } = slice.primary;

  return (
    <div>
      <div className="border-border-primary bg-brand-telemagenta h-full border">
        <div className="flex items-start justify-between px-6 py-8 text-white md:p-8">
          <div>
            <PrismicRichText field={price_text} components={component} />
          </div>
          <PrismicRichText field={price} components={component} />
        </div>
      </div>
      <div className="border-border-primary h-full border bg-white px-6 py-8 md:p-8">
        <p>Includes:</p>
        <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
          {inclusions.map((inclusion) => (
            <div key={asText(inclusion.text)} className="flex self-start">
              <div className="mr-4 flex-none self-start">
                <Check className="size-5" />
              </div>
              <PrismicRichText field={inclusion.text} components={component} />
            </div>
          ))}
        </div>
        <div className="bg-border my-8 h-px w-full shrink-0"></div>
        <PrismicNextLink field={button}>
          <div className="flex flex-row items-center justify-center">
            <Button className="w-full">{button.text}</Button>
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default PricingCard;
