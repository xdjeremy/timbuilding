import { PrismicNextLink } from '@prismicio/next';
import Button from '@/components/common/Button';
import { OutlineSpark } from '@/constants/icons';
import { FC } from 'react';

interface ButtonGroupProps {
  button: any;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ button }) => {
  return (
    <div className='mt-6 md:mt-8 flex flex-wrap gap-4 lg:gap-24'>
      <PrismicNextLink field={button}>
        <Button variant='outline'>{button.text}</Button>
      </PrismicNextLink>
      <OutlineSpark
        className='w-[54px] h-[87px] -mt-10 lg:w-[76px] lg:h-[122px] lg:-mt-2'
      />
    </div>
  );
};

export default ButtonGroup;
