import { asText } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { Button, useMediaQuery } from '@relume_io/relume-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FC, useState } from 'react';
import { useHeader } from './HeaderProvider';

interface MegaMenuProps {
  onLinkClick: () => void;
}

const MegaMenu: FC<MegaMenuProps> = ({ onLinkClick }) => {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { blogs, categories } = useHeader();

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="text-md hover:text-brand-telemagenta relative flex w-full items-center justify-between py-3 whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>Blogs</span>
        <motion.span
          animate={isDropdownOpen ? 'rotated' : 'initial'}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            variants={{
              open: {
                opacity: 1,
                height: 'var(--height-open, auto)'
              },
              close: {
                opacity: 0,
                height: 'var(--height-close, 0)'
              }
            }}
            animate={isDropdownOpen ? 'open' : 'close'}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bg-background-primary lg:border-border-primary top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden lg:absolute lg:w-screen lg:border-b lg:px-[5%] lg:[--height-close:auto]"
          >
            <div className="mx-auto flex size-full max-w-full items-center justify-between">
              <div className="flex w-full flex-col lg:flex-row">
                {/* Left content */}
                <div className="w-full content-start py-4 sm:py-8 lg:max-w-[15rem] lg:pr-8">
                  <div className="grid auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-4">
                    <h4 className="text-sm leading-[1.4] font-semibold md:leading-[1.3]">
                      Blog categories
                    </h4>
                    {categories.map((category) => (
                      <PrismicNextLink
                        key={category.id}
                        href={`/blog?category=${category.uid}`}
                        className="hover:text-brand-telemagenta"
                      >
                        {category.data.category}
                      </PrismicNextLink>
                    ))}
                  </div>
                </div>

                {/* Right content */}
                <div className="relative flex w-full flex-wrap items-start justify-center pb-6 lg:items-stretch lg:pt-6">
                  <div className="grid w-full auto-cols-max auto-rows-max grid-cols-1 grid-rows-[max-content] gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-y-2">
                    {blogs.map((blog) => (
                      <PrismicNextLink
                        onClick={onLinkClick}
                        key={blog.id}
                        document={blog}
                        className="hover:text-brand-telemagenta grid max-w-full auto-cols-fr grid-cols-1 items-start gap-x-6 gap-y-4 py-2 lg:grid-cols-[0.5fr_1fr] lg:gap-y-0"
                      >
                        <div className="relative flex w-full flex-col pt-[66.6%] lg:flex-row">
                          <PrismicNextImage
                            field={blog.data.image}
                            className="absolute inset-0 size-full object-cover"
                          />
                        </div>
                        <div className="flex w-full flex-col justify-center self-center lg:w-auto">
                          <h5 className="mb-1 font-semibold">
                            {asText(blog.data.title)}
                          </h5>
                          <p className="line-clamp-2 text-sm">
                            {asText(blog.data.content)}
                          </p>
                          <Button
                            title="Read more"
                            variant="link"
                            size="link"
                            className="mt-2 w-fit text-sm underline"
                          />
                        </div>
                      </PrismicNextLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;
