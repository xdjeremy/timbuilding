import { FC } from 'react';
import { ServiceProps } from '..';
import { OutlineSpark, PinkCircle } from '@/constants/icons';
import ImageBlock from './ImageBlock';
import ContentBlock from './ContentBlock';
import ButtonGroup from './ButtonGroup';

const LeftImage1: FC<ServiceProps> = ({ slice }) => {
  const { badge, image, title, description, button } = slice.primary;

  return (
    <section
      data-slice-variation={slice.variation === 'default'}
      className='px-[5%] font-redhat text-brand-dark-blue py-16 md:py-24 lg:py-28 border-b-4 border-black'
    >
      <div className='container'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20 relative'>
          <ImageBlock image={image} />
          <div className='order-1 md:order-2'>
            {slice.variation === 'default' && (
              <ContentBlock
                badge={badge as string}
                title={title}
                description={description}
                items={slice.primary.items}
              />
            )}
            <ButtonGroup button={button} />
          </div>
          <PinkCircle
            name='PinkCircle'
            className='w-[73px] h-[73px] absolute -top-10 end-px right-6 md:w-[94px] md:h-[94px]'
          />
          <OutlineSpark
            name='OutlineSpark'
            className='w-[34px] h-[55px] absolute -top-2 end-px -right-2 md:w-[51px] md:-right-4 md:top-4'
          />
        </div>
      </div>
    </section>
  );
};

export default LeftImage1;
