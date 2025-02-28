'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface MobileMenuPanelProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const MobileMenuPanel: React.FC<MobileMenuPanelProps> = ({ isOpen, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='fixed inset-0 z-50 bg-background-primary lg:hidden'
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);
