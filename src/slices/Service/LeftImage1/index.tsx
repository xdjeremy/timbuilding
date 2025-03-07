import { FC } from 'react';
import { ServiceProps } from '..';
import { OutlineSpark, PinkCircle } from '@/constants/icons';
import ImageBlock from './ImageBlock';
import ContentBlock from './ContentBlock';
import ButtonGroup from './ButtonGroup';
import { Bounded } from '@/components/Bounded';
import Container from '@/components/Container';

const LeftImage1: FC<ServiceProps> = ({ slice }) => {
  const { badge, image, title, description, button } = slice.primary;

  if (slice.variation !== 'default') return null;

  return (
    <Bounded as="section" data-slice-variation={slice.variation}>
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <ImageBlock image={image} />
          <div className="order-1 md:order-2">
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
          <PinkCircle className="absolute end-px -top-10 right-6 h-[73px] w-[73px] md:h-[94px] md:w-[94px]" />
          <OutlineSpark className="absolute end-px -top-2 -right-2 h-[55px] w-[34px] md:top-4 md:-right-4 md:w-[51px]" />
        </div>
      </Container>
    </Bounded>
  );
};

export default LeftImage1;
