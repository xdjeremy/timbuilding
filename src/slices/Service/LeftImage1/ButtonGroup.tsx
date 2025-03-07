import { PrismicNextLink } from '@prismicio/next';
import Button from '@/components/common/Button';
import { OutlineSpark } from '@/constants/icons';
import { FC } from 'react';

interface ButtonGroupProps {
  button: any;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ button }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:gap-24">
      <PrismicNextLink field={button}>
        <Button variant="outline">{button.text}</Button>
      </PrismicNextLink>
      <OutlineSpark className="-mt-10 h-[87px] w-[54px] lg:-mt-2 lg:h-[122px] lg:w-[76px]" />
    </div>
  );
};

export default ButtonGroup;
