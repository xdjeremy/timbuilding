import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

const Categories = async () => {
	const client = createClient();
	const documents = await client.getAllByType('blog_category');

	return (
		<div className='no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0'>

      {/* New */}
      <PrismicNextLink
				href={'/blog'}
				className='px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black'>
				New
			</PrismicNextLink>

			{documents &&
				documents.map((document) => (
					<PrismicNextLink
						href={`/blog?category=${document.uid}`}
						key={document.uid}
						className='px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black'>
						{document.data.category}
					</PrismicNextLink>
				))}

			{/* All */}
			<PrismicNextLink
				href={'/blog?category=all'}
				className='px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black'>
				All
			</PrismicNextLink>
		</div>
	);
};

export default Categories;
