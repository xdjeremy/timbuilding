'use client';

import { BlogCategoryDocument, BlogDocument } from 'prismicio-types';
import React, { ReactNode, useContext } from 'react';

const useHeader = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useHeader must be used within a HeaderProvider');
  }
  return context;
};

const NavigationContext = React.createContext({
  categories: [] as BlogCategoryDocument[],
  blogs: [] as BlogDocument[]
});

const HeaderProvider = ({
  children,
  categories,
  blogs
}: {
  children: ReactNode;
  categories: BlogCategoryDocument[];
  blogs: BlogDocument[];
}) => {
  return (
    <NavigationContext.Provider value={{ categories, blogs }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { HeaderProvider, useHeader };
