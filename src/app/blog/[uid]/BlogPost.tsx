import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { createClient } from '@/prismicio';
import { asText, Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { format } from 'date-fns';
import { ChevronLeftIcon } from 'lucide-react';
import readingTime from 'reading-time';
import { Component } from './ContentComponent';

const component: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-2xl font-bold lg:text-[40px]">{children}</h1>
  )
};

const BlogPost = async ({ uid }: { uid: string }) => {
  const client = createClient();
  const page = await client.getByUID('blog', uid, {
    graphQuery: `{
        blog {
          title
          image
          content
          category {
            ...on blog_category {
              category
            }
          }
          author {
            ...on blog_author {
              author
            }
          }
        }
      }`
  });

  const { title, image, content } = page.data;

  // implement type assertion on linked documents
  const category = page.data.category as typeof page.data.category & {
    data: Pick<Content.BlogCategoryDocument['data'], 'category'>;
  };

  // implement type assertion on linked documents
  const author = page.data.author as typeof page.data.author & {
    data: Pick<Content.BlogAuthorDocument['data'], 'author'>;
  };

  return (
    <Bounded className="px-[5%] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="rb-12 mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          <PrismicNextLink
            href={'/blog'}
            className="mb-4 flex items-center gap-2"
          >
            <ChevronLeftIcon /> All Posts
          </PrismicNextLink>
          <div className="rb-4 mb-4 flex w-full items-center justify-start gap-4">
            <Badge>{category.data.category}</Badge>
            <p className="inline text-sm font-semibold">
              {readingTime(asText(content)).minutes} min read
            </p>
          </div>
        </div>
        <div className="relative mx-auto mb-8 w-full space-y-10 overflow-visible md:mb-12 lg:mb-8">
          <div className="neobrutalist-shadow inline-flex h-fit w-full cursor-pointer items-center justify-center gap-2 rounded-none border-4 bg-white p-2 text-black lg:absolute lg:-top-12 lg:-left-6 lg:max-w-lg lg:-rotate-6">
            <PrismicRichText field={title} components={component} />
          </div>
          <PrismicNextImage
            field={image}
            className="neobrutalist-shadow-right aspect-[5/2] size-full h-96 object-cover lg:h-[600px]"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row">
          <div className="rb-4 mb-4 flex items-center sm:mb-8 md:mb-0">
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Written by</p>
              <p className="neobrutalist-shadow rounded-none px-2 text-center font-medium">
                {author.data.author}
              </p>
            </div>
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Published on</p>
              <p className="font-medium">
                {page.first_publication_date
                  ? format(
                      new Date(page.first_publication_date),
                      'dd MMMM yyyy'
                    )
                  : ''}
              </p>
            </div>
          </div>
          {/* <div className='grid grid-flow-col grid-cols-[max-content] items-start gap-2'>
					{socialMediaLinks.map((link, index) => (
						<a
							key={index}
							href={link.url}
							className='rounded-[1.25rem] bg-background-secondary p-1'>
							{link.icon}
						</a>
					))}
				</div> */}
        </div>
        <div className="prose prose-lg dark:prose-invert mx-auto mt-20 w-full max-w-lg">
          <PrismicRichText field={content} components={Component} />
        </div>
      </Container>
    </Bounded>
  );
};

export default BlogPost;
