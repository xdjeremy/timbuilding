import { Content } from '@prismicio/client';

type ImageSizeType = Content.ProjectDocument['data']['image_size'];

export const projectImageClassName = (size: ImageSizeType): string => {
  switch (size) {
    case 'normal':
      return 'w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]';
    case 'large':
      return 'w-[335px] object-cover object-top h-[335px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[416px]';
    default:
      return 'w-[335px] object-cover object-top h-[166px] mx-auto rounded-3xl border-4 border-black md:w-[416px] md:h-[234px]';
  }
};
