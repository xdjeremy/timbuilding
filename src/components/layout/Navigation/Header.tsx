'use server';

import { createClient } from '@/prismicio';
import { HeaderProvider } from './HeaderProvider';
import Navigation from './Navigation';

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');
  const navigation = await client.getSingle('navigation');

  // fetch blogs data
  const categoryDocuments = await client.getAllByType('blog_category');
  const blogDocuments = await client.getAllByType('blog', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    },
    pageSize: 6
  });

  return (
    <nav className="border-border-primary bg-background-primary relative z-[999] flex min-h-16 w-full items-center border-b-4 px-[5%] md:min-h-18">
      <HeaderProvider categories={categoryDocuments} blogs={blogDocuments}>
        <Navigation settings={settings} navigation={navigation} />
      </HeaderProvider>
    </nav>
  );
};

export default Header;
