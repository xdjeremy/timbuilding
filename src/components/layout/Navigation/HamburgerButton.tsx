'use client';

import { bottomLineVariants, middleLineVariants, topLineVariants } from './line-variants';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => (
  <button
    className='-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden'
    onClick={onClick}
  >
    <motion.span
      className='my-[3px] h-0.5 w-6 bg-black'
      animate={isOpen ? ['open', 'rotatePhase'] : 'closed'}
      variants={topLineVariants}
    />
    <motion.span
      className='my-[3px] h-0.5 w-6 bg-black'
      animate={isOpen ? 'open' : 'closed'}
      variants={middleLineVariants}
    />
    <motion.span
      className='my-[3px] h-0.5 w-6 bg-black'
      animate={isOpen ? ['open', 'rotatePhase'] : 'closed'}
      variants={bottomLineVariants}
    />
  </button>
);
