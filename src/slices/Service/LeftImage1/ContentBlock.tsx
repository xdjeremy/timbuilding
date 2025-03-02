import { PrismicRichText } from '@/components/PrismicRichText';
import { component } from '../ServicesRichText';
import { FC } from 'react';
import Badge from '@/components/common/Badge';
import { MonitorSmartphone, Search, Settings } from 'lucide-react';

import { RichTextField, KeyTextField } from '@prismicio/client';

interface ContentBlockProps {
  badge: KeyTextField;
  title: RichTextField;
  description: RichTextField;
  items: Array<{
    icon?: string | null;
    text: RichTextField;
  }>;
}

const ContentBlock: FC<ContentBlockProps> = ({
  badge,
  title,
  description,
  items,
}) => {
  return (
    <div className='order-1 md:order-2'>
      <Badge variant='amber'>{badge}</Badge>
      <PrismicRichText field={title} components={component} />
      <PrismicRichText field={description} components={component} />
      <div className='grid grid-cols-1 gap-4 py-2'>
        {items.map((item, index) => (
          <div key={index} className='flex self-start'>
            <div className='mr-4 flex-none self-start'>
              <Icon icon={item.icon || ''} />
            </div>
            <PrismicRichText
              field={item.text}
              components={{
                paragraph: ({ children }) => <p>{children}</p>,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'settings':
      return <Settings className='size-6' />;
    case 'monitorsmartphone':
      return <MonitorSmartphone className='size-6' />;
    case 'search':
      return <Search className='size-6' />;
    default:
      return <Settings className='size-6' />;
  }
};

export default ContentBlock;
