import Badge from '@/components/common/Badge';
import { createClient } from '@/prismicio';
import { asText, Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';
import { format } from 'date-fns';
import readingTime from 'reading-time';

const FeaturedBlog = async () => {
	const client = createClient();

	const page = await client.getSingle('blog_list', {
		graphQuery: `{
      blog_list {
        featured_blog {
          ...on blog {
            title
						image
						content
						author {
							...on blog_author {
								author
								avatar
							}
						}
						category {
							...on blog_category {
								category
							}
						}
          }
        }
      }
    }`,
	});

	const featuredBlog = page.data
		.featured_blog as typeof page.data.featured_blog & {
		data: Pick<
			Content.BlogDocument['data'],
			'title' | 'image' | 'content' | 'author' | 'category'
		>;
		first_publication_date: string;
	};

	const category = featuredBlog.data
		.category as typeof featuredBlog.data.category & {
		data: Pick<Content.BlogCategoryDocument['data'], 'category'>;
	};

	const author = featuredBlog.data.author as typeof featuredBlog.data.author & {
		data: Pick<Content.BlogAuthorDocument['data'], 'author' | 'avatar'>;
	};

	return (
		<div className='rb-12 mb-12 grid grid-cols-1 items-center md:mb-16 md:grid-cols-2'>
			<PrismicLink field={featuredBlog} className='size-full'>
				<PrismicNextImage
					field={featuredBlog.data.image}
					className='aspect-[8/6] size-full object-cover neobrutalist-shadow rounded-3xl'
				/>
			</PrismicLink>
			<div className='flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12'>
				<div>
					<Badge variant='amber'>{category.data.category}</Badge>
					<div className='flex w-full flex-col items-start justify-start mt-2'>
						<PrismicNextLink field={featuredBlog} className='mb-2'>
							<h3 className='mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl'>
								{asText(featuredBlog.data.title)}
							</h3>
						</PrismicNextLink>
						<p className='line-clamp-3'>{asText(featuredBlog.data.content)}</p>
					</div>
				</div>
				<div className='mt-6 flex items-center'>
					<div className='mr-4 shrink-0'>
						<PrismicNextImage
							field={author.data.avatar}
							className='size-12 min-h-12 min-w-12 rounded-full object-cover'
						/>
					</div>
					<div>
						<h6 className='text-sm font-semibold'>{author.data.author}</h6>
						<div className='flex items-center'>
							<p className='text-sm'>
								{featuredBlog.first_publication_date &&
									format(
										new Date(featuredBlog.first_publication_date),
										'dd MMMM yyyy'
									)}
							</p>
							<span className='mx-2'>•</span>
							<p className='text-sm'>
								{readingTime(asText(featuredBlog.data.content)).minutes} min
								read
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedBlog;
