import Button from '@/components/common/Button';
import { PrismicRichText } from '@/components/PrismicRichText';
import { components } from '@/slices/Header/DefaultHeader/HeaderRichText';
import { PrismicNextLink } from '@prismicio/next';
import { FC } from 'react';
import { HeaderProps } from '..';

const PageHeaderTwoShadows: FC<HeaderProps> = ({ slice }) => {
  if (slice.variation !== 'pageHeaderTwoShadows') return null;

  return (
    <section className="text-brand-dark-blue relative border-b-4 border-black p-8 pr-[2%] pb-[470px] lg:pb-[530px]">
      <div className="container flex flex-row">
        <div className="neobrutalist-shadow-no-radius absolute top-16 -left-8 mx-auto my-auto w-[70%] bg-white p-8 md:top-12 lg:top-16 lg:left-28 lg:w-[714px] lg:p-4 xl:left-80">
          <div className="text-brand-dark-blue lg:text-10xl text-center text-4xl md:mb-6 md:text-7xl lg:p-4">
            <PrismicRichText
              field={slice.primary.page_header}
              components={components}
            />
          </div>
        </div>
        <div className="neobrutalist-shadow-no-radius absolute top-52 right-4 z-10 mx-auto w-[70%] bg-white p-6 md:top-48 md:p-10 lg:top-64 lg:right-40 lg:w-[714px] xl:right-80">
          <div className="text-brand-dark-blue md:text-md font-extrabold text-pretty lg:text-xl">
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
      <div className="absolute inset-0 -z-10 flex flex-col overflow-hidden">
        {[...Array(9)].map((_, rowIndex) => (
          <span
            key={rowIndex}
            className="text-stroke overflow-hidden text-[4rem] leading-[100%] font-extrabold tracking-widest uppercase"
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
