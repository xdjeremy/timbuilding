import { Bounded } from '@/components/Bounded';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@relume_io/relume-ui';
import { FC } from 'react';
import { FrequentlyAskedQuestionsProps } from '..';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="rb-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),

  heading4: ({ children }) => (
    <h4 className="mb-3 text-2xl font-extrabold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
      {children}
    </h4>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>
};

const CenteredFAQs: FC<FrequentlyAskedQuestionsProps> = ({ slice }) => {
  if (slice.variation !== 'centered') return null;

  const { faqs, text, bottom_text, button } = slice.primary;

  return (
    <Bounded as="section">
      <Container className="max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <PrismicRichText field={text} />
        </div>
        <Accordion type="multiple">
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={`item-${question}`}>
              <AccordionTrigger className="md:text-md md:py-5">
                {question}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                <PrismicRichText field={answer} components={component} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <PrismicRichText field={bottom_text} components={component} />
          <PrismicNextLink field={button}>
            <Button className="border-brand-dark-blue mt-6 rounded-md border-4 bg-white text-black transition-all ease-in-out hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] md:mt-8">
              {button.text}
            </Button>
          </PrismicNextLink>
        </div>
        <svg
          viewBox="0 0 190 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0.5 right-0.5 h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]"
        >
          <path
            d="M133.141 71.6161L133.149 71.6179L176.296 82.1479L176.297 82.1484C189.718 85.4165 189.718 104.52 176.297 107.788L176.295 107.788L133.153 118.317C133.152 118.317 133.152 118.318 133.151 118.318C125.832 120.095 120.126 125.812 118.32 133.142L118.318 133.149L107.788 176.296L107.787 176.297C104.519 189.718 85.4163 189.718 82.1481 176.297L82.1477 176.296L71.6187 133.153C71.6185 133.153 71.6183 133.152 71.6181 133.151C69.8408 125.832 64.1235 120.126 56.7941 118.32L56.7867 118.318L13.64 107.788L13.6383 107.788C0.217899 104.52 0.217902 85.4165 13.6384 82.1483L13.6401 82.1479L56.7824 71.619C56.7832 71.6188 56.7839 71.6186 56.7847 71.6184C64.1037 69.8411 69.81 64.1237 71.6158 56.7944L71.6176 56.787L82.1477 13.6403L82.1481 13.6386C85.4163 0.218176 104.519 0.218176 107.787 13.6386L107.788 13.6403L118.317 56.7827C118.317 56.7833 118.317 56.784 118.317 56.7846C120.095 64.1038 125.812 69.8103 133.141 71.6161Z"
            fill="#1E293B"
            stroke="black"
            strokeWidth="7"
          />
        </svg>
        <svg
          viewBox="0 0 139 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-12 right-20 h-[70px] w-[70px] lg:top-20 lg:right-32 lg:h-[105px] lg:w-[105px]"
        >
          <path
            d="M97.1867 53.3659L97.1942 53.3677L128.725 61.0628L128.727 61.0633C137.575 63.218 137.575 75.8142 128.727 77.969L128.725 77.9694L97.1984 85.6634C97.1977 85.6636 97.1969 85.6638 97.1961 85.664C91.5038 87.0465 87.0689 91.4925 85.6658 97.1872L85.664 97.1946L77.9689 128.725L77.9685 128.727C75.8137 137.575 63.2175 137.575 61.0628 128.727L61.0624 128.725L53.3683 97.1989C53.3681 97.1981 53.3679 97.1974 53.3677 97.1966C51.9852 91.5043 47.5392 87.0694 41.8446 85.6663L41.8371 85.6645L10.3064 77.9694L10.3047 77.969C1.45646 75.8142 1.45645 63.218 10.3047 61.0633L10.3064 61.0628L41.8328 53.3688C41.8336 53.3686 41.8343 53.3684 41.8351 53.3682C47.5274 51.9857 51.9624 47.5397 53.3654 41.845L53.3672 41.8376L61.0624 10.3069L61.0628 10.3052C63.2175 1.45694 75.8137 1.45694 77.9685 10.3052L77.9689 10.3069L85.663 41.8333C85.6631 41.834 85.6633 41.8346 85.6634 41.8353C87.0459 47.5277 91.4919 51.9628 97.1867 53.3659Z"
            fill="#FBBF24"
            stroke="black"
            strokeWidth="7"
          />
        </svg>
        <svg
          viewBox="0 0 190 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0.5 left-0.5 h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]"
        >
          <path
            d="M133.141 71.6161L133.149 71.6179L176.296 82.1479L176.297 82.1484C189.718 85.4165 189.718 104.52 176.297 107.788L176.295 107.788L133.153 118.317C133.152 118.317 133.152 118.318 133.151 118.318C125.832 120.095 120.126 125.812 118.32 133.142L118.318 133.149L107.788 176.296L107.787 176.297C104.519 189.718 85.4163 189.718 82.1481 176.297L82.1477 176.296L71.6187 133.153C71.6185 133.153 71.6183 133.152 71.6181 133.151C69.8408 125.832 64.1235 120.126 56.7941 118.32L56.7867 118.318L13.64 107.788L13.6383 107.788C0.217899 104.52 0.217902 85.4165 13.6384 82.1483L13.6401 82.1479L56.7824 71.619C56.7832 71.6188 56.7839 71.6186 56.7847 71.6184C64.1037 69.8411 69.81 64.1237 71.6158 56.7944L71.6176 56.787L82.1477 13.6403L82.1481 13.6386C85.4163 0.218176 104.519 0.218176 107.787 13.6386L107.788 13.6403L118.317 56.7827C118.317 56.7833 118.317 56.784 118.317 56.7846C120.095 64.1038 125.812 69.8103 133.141 71.6161Z"
            fill="#DB2777"
            stroke="black"
            strokeWidth="7"
          />
        </svg>
        <svg
          viewBox="0 0 139 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-12 left-20 h-[70px] w-[70px] lg:bottom-20 lg:left-32 lg:h-[105px] lg:w-[105px]"
        >
          <path
            d="M97.1867 53.3659L97.1942 53.3677L128.725 61.0628L128.727 61.0633C137.575 63.218 137.575 75.8142 128.727 77.969L128.725 77.9694L97.1984 85.6634C97.1977 85.6636 97.1969 85.6638 97.1961 85.664C91.5038 87.0465 87.0689 91.4925 85.6658 97.1872L85.664 97.1946L77.9689 128.725L77.9685 128.727C75.8137 137.575 63.2175 137.575 61.0628 128.727L61.0624 128.725L53.3683 97.1989C53.3681 97.1981 53.3679 97.1974 53.3677 97.1966C51.9852 91.5043 47.5392 87.0694 41.8446 85.6663L41.8371 85.6645L10.3064 77.9694L10.3047 77.969C1.45646 75.8142 1.45645 63.218 10.3047 61.0633L10.3064 61.0628L41.8328 53.3688C41.8336 53.3686 41.8343 53.3684 41.8351 53.3682C47.5274 51.9857 51.9624 47.5397 53.3654 41.845L53.3672 41.8376L61.0624 10.3069L61.0628 10.3052C63.2175 1.45694 75.8137 1.45694 77.9685 10.3052L77.9689 10.3069L85.663 41.8333C85.6631 41.834 85.6633 41.8346 85.6634 41.8353C87.0459 47.5277 91.4919 51.9628 97.1867 53.3659Z"
            fill="#0891B2"
            stroke="black"
            strokeWidth="7"
          />
        </svg>
      </Container>
    </Bounded>
  );
};

export default CenteredFAQs;
