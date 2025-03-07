import { OutlineSpark3, ThreeCircles } from '@/constants/icons';
import { Content } from '@prismicio/client';
import { createElement, ReactElement } from 'react';

type FloaterType = Content.ProjectDocument['data']['floaters'];

export const floaterComponent = (floater: FloaterType): ReactElement => {
  switch (floater) {
    case 'outlineSpark3':
      return createElement(OutlineSpark3, {
        className:
          'w-[71px]  h-[71px] absolute -top-10 -left-4 md:-top-14 lg:w-[114px] lg:h-[114px] lg:-left-14 lg:-top-20'
      });
    case 'threeCircles':
      return createElement(ThreeCircles, {
        className:
          'w-[100px] h-[280px] absolute bottom-[34%] -right-4 -z-10 md:-right-8 md:-bottom-32 lg:h-[336px] lg:bottom-[2%] lg:-right-12 lg:z-10'
      });

    case 'none':
      return <></>;
    default:
      return <></>;
  }
};
