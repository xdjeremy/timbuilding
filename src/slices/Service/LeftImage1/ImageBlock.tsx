import { PrismicNextImage } from '@prismicio/next';
import { BlueCircle, OutlineSpark, YellowCircle } from '@/constants/icons';
import { FC } from 'react';

interface ImageBlockProps {
  image: any;
}

const ImageBlock: FC<ImageBlockProps> = ({ image }) => {
  return (
    <div className="relative order-2 md:order-1">
      <PrismicNextImage
        field={image}
        className="mx-auto h-[348px] w-[335px] rounded-3xl border-4 border-black object-cover object-top md:h-[640px] md:w-[616px]"
        style={{
          boxShadow:
            '-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)'
        }}
      />
      <OutlineSpark className="absolute -top-16 left-64 h-[77px] w-[48px] lg:-top-20 lg:left-[350px] lg:h-[103px] lg:w-[64px]" />
      <BlueCircle className="absolute -top-10 -left-8 h-[110px] w-[110px] lg:-top-20 lg:-left-12 lg:h-[157px] lg:w-[157px]" />
      <YellowCircle className="absolute end-px -right-9 -bottom-6 h-[94px] w-[94px] lg:-right-16 lg:-bottom-12 lg:h-[120px] lg:w-[120px]" />
    </div>
  );
};

export default ImageBlock;
