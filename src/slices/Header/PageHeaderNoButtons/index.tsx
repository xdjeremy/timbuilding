import { PrismicRichText } from '@/components/PrismicRichText';
import { components } from '@/slices/Header/DefaultHeader/HeaderRichText';
import { FC } from 'react';
import { HeaderProps } from '..';
import Container from '@/components/Container';

const PageHeaderNoButtons: FC<HeaderProps> = ({ slice }) => {
  if (slice.variation !== 'pageHeaderNoButtons') return null;

  return (
    <section className="text-brand-dark-blue relative mx-auto border-b-4 border-black pt-16 pr-[2%] pl-[5%] md:pt-24 lg:pt-28">
      <Container className="overflow-hidden">
        <div className="neobrutalist-shadow-right w-[95%] max-w-lg translate-y-6 bg-white px-12 py-8 pb-12 md:mx-auto">
          <div className="text-dark-blue lg:text-10xl mb-5 text-6xl md:mb-6 md:text-9xl">
            <PrismicRichText
              field={slice.primary.page_header}
              components={components}
            />
          </div>
          <div className="text-dark-blue md:text-md">
            {slice.primary.page_sub_header}
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 -z-10 flex flex-col overflow-hidden">
        {[...Array(7)].map((_, rowIndex) => (
          <span
            key={rowIndex}
            className="overflow-hidden text-[4rem] leading-[100%] font-extrabold tracking-widest whitespace-nowrap text-white uppercase"
            style={{ WebkitTextStroke: '1px #444444' }}
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

export default PageHeaderNoButtons;
