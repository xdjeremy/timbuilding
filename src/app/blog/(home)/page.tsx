import { FC } from 'react';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui';
import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { createClient } from '@/prismicio';
import { notFound } from 'next/navigation';
import FeaturedBlog from './FeaturedBlog';
import { asText } from '@prismicio/client';
import { Metadata } from 'next';

const component: JSXMapSerializer = {
	heading1: ({ children }) => (
		<h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl'>
			{children}
		</h1>
	),
	paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle('blog_list').catch(() => notFound());

	return {
		title: asText(page.data.title),
		description: page.data.meta_description,
		openGraph: {
			title: page.data.meta_title ?? undefined,
			images: [{ url: page.data.meta_image.url ?? '' }],
		},
	};
}

const BlogHome = async () => {
	const client = createClient();
	const page = await client.getSingle('blog_list').catch(() => notFound());

	const { badge, title } = page.data;
	return (
		<Bounded className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='mb-12 md:mb-18 lg:mb-20'>
				<div className='w-full max-w-lg space-y-3 md:space-y-4'>
					<Badge variant='pink'>{badge}</Badge>
					<PrismicRichText field={title} components={component} />
				</div>
			</div>
			<div className='flex flex-col justify-start'>
				<FeaturedBlog />
				{/* <Tabs defaultValue={tabs[0].value} className="flex flex-col justify-center">
            <TabsList className="no-scrollbar mb-12 flex w-full items-center justify-start overflow-auto md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  {tab.trigger}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:animate-tabs"
              >
                <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                  {tab.content.map((post, index) => (
                    <div
                      key={index}
                      className="flex size-full flex-col items-center justify-start border border-border-primary"
                    >
                      <a href={post.url} className="w-full">
                        <img
                          src={post.image.src}
                          alt={post.image.alt}
                          className="aspect-video size-full object-cover"
                        />
                      </a>
                      <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6 lg:p-6">
                        <p className="mb-2 text-sm font-semibold">{post.category}</p>
                        <div className="flex w-full flex-col items-start justify-start">
                          <a className="mb-2" href={post.url}>
                            <h2 className="text-xl font-bold md:text-2xl">{post.title}</h2>
                          </a>
                          <p>{post.description}</p>
                          <div className="mt-6 flex items-center">
                            <div className="mr-4 shrink-0">
                              <img
                                src={post.avatar.src}
                                alt={post.avatar.alt}
                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <h6 className="text-sm font-semibold">{post.fullName}</h6>
                              <div className="flex items-center">
                                <p className="text-sm">{post.date}</p>
                                <span className="mx-2">•</span>
                                <p className="text-sm">{post.readTime}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs> */}
			</div>
		</Bounded>
	);
};

export default BlogHome;
