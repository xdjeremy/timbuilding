import { BlueCircle, PinkCircle, YellowCircle } from '@/constants/icons';

export const HeroDecorations = () => (
  <>
    <PinkCircle className='absolute left-2 top-20 h-[94px] w-[94px] animate-bounce lg:h-[141px] lg:w-[141px]' />
    <BlueCircle className='absolute right-10 top-72 md:-right-2 lg:right-4 h-[94px] w-[94px] animate-bounce lg:h-[141px] lg:w-[141px]' />
    <YellowCircle className='absolute bottom-5 left-20 h-[67px] w-[67px] animate-bounce delay-200 lg:h-[103px] lg:w-[103px]' />
  </>
);
