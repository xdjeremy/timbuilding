import { PrismicNextImage } from '@prismicio/next';
import {
  BlueCircle,
  OutlineSpark,
  YellowCircle,
} from '@/constants/icons';
import { FC } from 'react';

interface ImageBlockProps {
  image: any;
}

const ImageBlock: FC<ImageBlockProps> = ({ image }) => {
  return (
    <div className='order-2 md:order-1 relative'>
      <PrismicNextImage
        field={image}
        className='w-[335px] object-cover h-[348px] mx-auto object-top rounded-3xl border-4 border-black md:w-[616px] md:h-[640px]'
        style={{
          boxShadow:
            '-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)',
        }}
      />
      <OutlineSpark
        name='OutlineSpark'
        className='w-[48px] h-[77px] absolute -top-16 left-64 lg:w-[64px] lg:h-[103px] lg:-top-20 lg:left-[350px]'
      />
      <BlueCircle
        name='BlueCircle'
        className='w-[110px] h-[110px] absolute -left-8 -top-10 lg:w-[157px] lg:h-[157px] lg:-top-20 lg:-left-12'
      />
      <YellowCircle
        name='YellowCircle'
        className='w-[94px] h-[94px] absolute end-px -right-9 -bottom-6 lg:w-[120px] lg:h-[120px] lg:-right-16 lg:-bottom-12'
      />
    </div>
  );
};

export default ImageBlock;
