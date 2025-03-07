import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { components } from '@/slices/Header/DefaultHeader/HeaderRichText';
import { PrismicNextLink } from '@prismicio/next';
import { FC } from 'react';
import { HeaderProps } from '..';

const PageHeaderTwoShadows: FC<HeaderProps> = ({ slice }) => {
  if (slice.variation !== 'pageHeaderTwoShadows') return null;

  return (
    <section className="text-brand-dark-blue relative pb-[470px] lg:pb-[530px] p-8 pr-[2%]  border-b-4 border-black">
      <div className="container flex flex-row">
        <div
          className="w-[70%] mx-auto my-auto lg:w-[714px] neobrutalist-shadow-no-radius top-16 -left-8 p-8 md:top-12 lg:left-28 lg:p-4 lg:top-16 xl:left-80 bg-white absolute">
          <div className="text-4xl text-brand-dark-blue md:mb-6 md:text-7xl lg:text-10xl lg:p-4 text-center">
            <PrismicRichText
              field={slice.primary.page_header}
              components={components}
            />
          </div>
        </div>
        <div
          className="w-[70%] mx-auto  lg:w-[714px] right-4 top-52 z-10 neobrutalist-shadow-no-radius p-6 md:p-10 md:top-48 lg:top-64 lg:right-40 xl:right-80  bg-white absolute">
          <div className="text-brand-dark-blue font-extrabold md:text-md lg:text-xl text-pretty">
            {slice.primary.page_sub_header}
          </div>
          <div className="mt-6 flex flex-row gap-4 md:mt-8">
            <PrismicNextLink
              field={slice.primary.header_button}
              className={slice.primary.header_button.variant}
            >
              <Button>
                <span className="text-nowrap">
                  {slice.primary.header_button.text}
                </span>
              </Button>
            </PrismicNextLink>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden flex flex-col">
        {[...Array(9)].map((_, rowIndex) => (
          <span
            key={rowIndex}
            className="uppercase font-extrabold text-[4rem] text-stroke tracking-widest overflow-hidden leading-[100%]"
          >
            {[...Array(8)].map((_, colIndex) => (
              <PrismicRichText
                key={colIndex}
                field={slice.primary.page_header_background}
                components={{
                  paragraph: ({ children }) => <>{children}</>
                }}
              />
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PageHeaderTwoShadows;
