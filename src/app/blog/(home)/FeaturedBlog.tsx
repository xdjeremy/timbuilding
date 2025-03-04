import { createClient } from '@/prismicio';
import React from 'react';

const FeaturedBlog = async () => {
  const client = createClient();

  const page = await client.getByUID('blog_list', 'blog_list', {
    graphQuery: `{
      blog_list {
        featured_blog {
          ...on blog {
            title
          }
        }
      }
    }`
  })

  const { featured_blog } = page.data

	return (
    <></>
		// <div className='rb-12 mb-12 grid grid-cols-1 items-center border border-border-primary md:mb-16 md:grid-cols-2'>
		// 	<a href={blogPost.url} className='size-full'>
		// 		<img
		// 			src={blogPost.image.src}
		// 			alt={blogPost.image.alt}
		// 			className='aspect-[8/6] size-full object-cover'
		// 		/>
		// 	</a>
		// 	<div className='flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12'>
		// 		<div>
		// 			<p className='mb-2 text-sm font-semibold'>{blog_post.link_type}</p>
		// 			<div className='flex w-full flex-col items-start justify-start'>
		// 				<a className='mb-2' href={blogPost.url}>
		// 					<h3 className='mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl'>
		// 						{blogPost.title}
		// 					</h3>
		// 				</a>
		// 				<p>{blogPost.description}</p>
		// 			</div>
		// 		</div>
		// 		<div className='mt-6 flex items-center'>
		// 			<div className='mr-4 shrink-0'>
		// 				<img
		// 					src={blogPost.avatar.src}
		// 					alt={blogPost.avatar.alt}
		// 					className='size-12 min-h-12 min-w-12 rounded-full object-cover'
		// 				/>
		// 			</div>
		// 			<div>
		// 				<h6 className='text-sm font-semibold'>{blogPost.fullName}</h6>
		// 				<div className='flex items-center'>
		// 					<p className='text-sm'>{blogPost.date}</p>
		// 					<span className='mx-2'>•</span>
		// 					<p className='text-sm'>{blogPost.readTime}</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default FeaturedBlog;
