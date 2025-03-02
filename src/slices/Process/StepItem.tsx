import { Content } from '@prismicio/client';
import { PrismicRichText } from '@/components/PrismicRichText';
import { JSXMapSerializer } from '@prismicio/react';
import { iconComponent } from '@/slices/Process/icons';

interface StepItemProps {
  icon: Content.ProcessSlice['primary']['steps'][number]['icon'];
  text: Content.ProcessSlice['primary']['steps'][number]['text'];
  subtext: Content.ProcessSlice['primary']['steps'][number]['subtext'];
  isDesktop?: boolean;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  dimensions?: {
    width: string;
    height: string;
  };
}

export const StepItem = ({
  icon,
  text,
  subtext,
  isDesktop = false,
  position,
  dimensions,
}: StepItemProps) => {
  return (
    <div className="flex flex-col p-3 items-center text-center">
      <div className="mb-5 md:mb-6">{iconComponent(icon)}</div>
      <PrismicRichText field={text} components={component} />
      <PrismicRichText field={subtext} components={component} />
    </div>
  );
};

const component: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="mb-3 text-xl font-extrabold md:mb-4 md:text-2xl">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>,
};
