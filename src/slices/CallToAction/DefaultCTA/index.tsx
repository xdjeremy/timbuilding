import { Bounded } from '@/components/Bounded';
import { PrismicRichText } from '@/components/PrismicRichText';
import Button from '@/components/common/Button';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import { FC } from 'react';
import { CallToActionProps } from '..';
import Container from '@/components/Container';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mb-3 text-4xl leading-[1.2] font-extrabold md:mb-4 md:text-5xl lg:text-6xl">
      {children}
    </h2>
  ),
  strong: ({ children }) => <span>{children}</span>,
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};

const DefaultCTA: FC<CallToActionProps> = ({ slice }) => {
  const { title, description, button, background, background_mobile } =
    slice.primary;

  if (slice.variation !== 'default') return null;

  return (
    <Bounded as="section">
      <Container className="grid w-full grid-cols-1 items-start justify-between gap-6">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <PrismicRichText field={title} components={component} />
            <PrismicRichText field={description} components={component} />
          </div>
        </div>
        <div className="flex items-start justify-start">
          <PrismicNextLink field={button}>
            <Button>{button.text}</Button>
          </PrismicNextLink>
        </div>
      </Container>
      <PrismicNextImage
        className="absolute bottom-0 left-0 -z-10 lg:hidden"
        field={background_mobile}
      />
      <PrismicNextImage
        className="absolute -bottom-5 left-0 -z-10 hidden w-full lg:block"
        field={background}
      />
    </Bounded>
  );
};

export default DefaultCTA;
