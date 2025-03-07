import { PrismicRichText } from '@/components/PrismicRichText';
import { asText, Content } from '@prismicio/client';
import { JSXMapSerializer } from '@prismicio/react';
import { AlignStartVertical, MessageSquare, Monitor } from 'lucide-react';
import { FC } from 'react';
import { PricingProps } from '..';

const component: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="text-md mb-3 leading-[1.4] font-extrabold md:mb-4 md:text-xl">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

const PricingFeatures: FC<PricingProps> = ({ slice }) => {
  const { features } = slice.primary;

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
      {features.map((feature) => (
        <div key={asText(feature.text)} className="flex self-start">
          <div className="mr-6 flex-none self-start">
            {iconComponent(feature.icon)}
          </div>
          <div>
            <PrismicRichText field={feature.text} components={component} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingFeatures;

interface PricingFeaturesProps {
  icon: Content.PricingSlice['primary']['features'][number]['icon'];
}

const iconComponent = (icon: PricingFeaturesProps['icon']) => {
  switch (icon) {
    case 'alignStartVertical':
      return <AlignStartVertical className="size-8" />;
    case 'monitor':
      return <Monitor className="size-8" />;
    case 'messagesSquare':
      return <MessageSquare className="size-8" />;
    default:
      return <AlignStartVertical className="size-8" />;
  }
};
