import { Bounded } from '@/components/Bounded';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { BlackX, BlueSpring, PinkX, YellowWaves } from '@/constants/icons';
import { asText, Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mb-5 text-4xl leading-[1.2] font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
      {children}
    </h2>
  ), // for the highlight items' titles
  heading3: ({ children }) => (
    <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
      {children}
    </h3>
  ), // for main title
  paragraph: ({ children }) => (
    <p className="md:text-md mb-6 md:mb-8">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="text-brand-telemagenta">{children}</strong>
  ) // for highlighting text on items' title
};

/**
 * Component for "Highlight" Slices.
 */
const Highlight: FC<HighlightProps> = ({ slice }) => {
  const { image, title, description, highlight } = slice.primary;

  return (
    <Bounded as="section" yPadding="sm" data-slice-type={slice.slice_type}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="relative order-2 md:order-1">
            <PrismicNextImage
              field={image}
              className="neobrutalist-shadow h-[348px] w-full object-cover lg:h-[640px]"
            />

            {/* decoration */}
            <BlueSpring className="absolute -top-14 right-0 -z-10 h-auto w-[202px] lg:-top-20 lg:-right-24 lg:w-[402px]" />
            <YellowWaves className="absolute -bottom-4 -left-3 h-auto w-[148px] lg:-bottom-20 lg:-left-9 lg:w-[303px]" />
            <BlackX className="absolute right-32 -bottom-4 h-auto w-[50px] lg:right-24 lg:-bottom-12 lg:w-[100px]" />
            <BlackX
              name="BlackX"
              className="absolute right-20 -bottom-4 h-auto w-[50px] lg:right-4 lg:-bottom-12 lg:w-[100px]"
            />
            <PinkX className="absolute right-0 -bottom-4 h-auto w-[50px] lg:-right-40 lg:-bottom-12 lg:w-[100px]" />
          </div>
          <div className="order-1 md:order-2">
            <PrismicRichText field={title} components={component} />
            <PrismicRichText field={description} components={component} />
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {highlight.map((item) => (
                <div key={asText(item.title)}>
                  <PrismicRichText field={item.title} components={component} />
                  <PrismicRichText
                    field={item.description}
                    components={component}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* decorations */}
      <BlackX
        name="BlackX"
        className="absolute right-44 bottom-[62px] hidden h-auto w-[100px] lg:block"
      />
      <BlackX
        name="BlackX"
        className="absolute right-20 bottom-[62px] hidden h-auto w-[100px] lg:block"
      />
    </Bounded>
  );
};

export default Highlight;
