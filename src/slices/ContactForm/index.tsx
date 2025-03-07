import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlueHalfCircle2,
  DarkBlueHalfCircle2,
  PinkHalfCircle,
  YellowHalfCircle
} from '@/constants/icons';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import InquiryForm from './components/form';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="rb-5 mt-4 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = (slice) => {
  const { badge, text } = slice.slice.primary;

  return (
    <Bounded className="font-redhat text-brand-dark-blue relative overflow-hidden border-b-4 border-black px-[5%] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-lg">
          <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
            <Badge>{badge}</Badge>
            <span className="mt-4 mb-5">
              <PrismicRichText field={text} components={component} />
            </span>
          </div>
          <InquiryForm {...slice} />
        </div>
        <BlueHalfCircle2 className="absolute top-0 -right-5 h-[110px] w-[99px] lg:top-12 lg:-right-9 lg:h-[140px] lg:w-[150px]" />
        <YellowHalfCircle className="absolute top-28 -right-5 h-[110px] w-[99px] lg:top-48 lg:-right-9 lg:h-[140px] lg:w-[150px]" />
        <PinkHalfCircle className="absolute -bottom-7 -left-4 h-[110px] w-[99px] lg:left-16 lg:h-[140px] lg:w-[150px]" />
        <DarkBlueHalfCircle2 className="absolute -bottom-7 left-[85px] h-[110px] w-[99px] lg:left-56 lg:h-[140px] lg:w-[150px]" />
      </Container>
    </Bounded>
  );
};

export default ContactForm;
