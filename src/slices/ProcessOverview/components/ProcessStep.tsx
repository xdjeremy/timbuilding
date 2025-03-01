import { JSXMapSerializer } from '@prismicio/react';
import { FC } from 'react';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import { Lightbulb, Pencil, Box } from 'lucide-react';

const component: JSXMapSerializer = {
  heading3: ({ children }) => (
    <Heading as='h3' size='xs'>
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <span className='text-brand-telemagenta'>{children}</span>
  ),
  paragraph: ({ children }) => <p>{children}</p>,
};

import { Content } from '@prismicio/client';

interface ProcessStepProps {
  icon: Content.ProcessOverviewSlice['primary']['process'][number]['icon'];
  title: any;
  description: any;
  decorations?: React.ReactNode;
}

const iconComponent = (icon: ProcessStepProps['icon']) => {
  if (!icon) return <Lightbulb className='size-12' />;
  switch (icon) {
    case 'lightbulb':
      return <Lightbulb className='size-12' />;
    case 'pencil':
      return <Pencil className='size-12' />;
    case 'box':
      return <Box className='size-12' />;
    default:
      return <Lightbulb className='size-12' />;
  }
};

export const ProcessStep: FC<ProcessStepProps> = ({
  icon,
  title,
  description,
  decorations,
}) => {
  return (
    <div className='neobrutalist-shadow relative flex h-full flex-col items-center px-6 py-4 text-center'>
      <div className='mb-5 md:mb-6'>{iconComponent(icon)}</div>
      <PrismicRichText field={title} components={component} />
      <PrismicRichText field={description} components={component} />
      {decorations}
    </div>
  );
};
