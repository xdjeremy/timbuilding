import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

const Categories = async () => {
  try {
    const client = createClient();
    const documents = await client.getAllByType('blog_category');

    if (!documents || documents.length === 0) {
      return null;
    }

    return (
      <div className="no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
        {/* New */}
        <PrismicNextLink
          href={'/blog'}
          className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
        >
          New
        </PrismicNextLink>

        {documents &&
          documents.map((document) => (
            <PrismicNextLink
              href={`/blog?category=${document.uid}`}
              key={document.uid}
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              title={`View posts in ${document.data.category}`}
            >
              {document.data.category}
            </PrismicNextLink>
          ))}

        {/* All */}
        <PrismicNextLink
          href={'/blog?category=all'}
          className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
          title="View all posts"
        >
          All
        </PrismicNextLink>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return null;
  }
};

export default Categories;
