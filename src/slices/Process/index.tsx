import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Container from '@/components/Container';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlueFences,
  DarkBlueHalfCircle,
  OutlineStar2,
  PinkHalfCircle,
  PinkSpring,
  YellowRoundedStar
} from '@/constants/icons';
import { StepItem } from '@/slices/Process/StepItem';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mb-5 mt-8 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-3 text-xl font-extrabold md:mb-4 md:text-2xl">
      {children}
    </h3>
  ),
  paragraph: ({ children }) => <p className="md:text-md">{children}</p>,
  strong: ({ children }) => (
    <span className="bg-brand-blue text-white px-1">{children}</span>
  )
};

/**
 * Props for `Process`.
 */
export type ProcessProps = SliceComponentProps<Content.ProcessSlice>;

/**
 * Component for "Process" Slices.
 */
const Process: FC<ProcessProps> = ({ slice }) => {
  const { badge, description, image, steps, title } = slice.primary;

  return (
    <Bounded as="section">
      <Container className="overscroll-none">
        <div className="mb-12 md:mb-18 lg:mb-40">
          <div className="mx-auto max-w-lg text-center">
            <Badge variant="pink">{badge}</Badge>
            <PrismicRichText field={title} components={component} />
            <PrismicRichText field={description} components={component} />
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-8 sm:grid-cols-2 md:gap-y-16 lg:mx-auto lg:grid-cols-none">
          <div className="w-full grid-cols-1 gap-x-20 gap-y-8 md:gap-y-16 grid lg:hidden">
            {steps.slice(0, 2).map((step, index) => (
              <div
                key={index}
                className="flex flex-col neobrutalist-shadow-left items-center text-center p-3"
              >
                {step && (
                  <StepItem
                    icon={step.icon}
                    text={step.text}
                    subtext={step.subtext}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="order-last w-full sm:col-span-2 lg:order-none lg:col-span-none lg:relative">
            {steps.map((step, index) => {
              const positions = [
                { className: 'left-14 bottom-3/4' },
                { className: 'left-14 -bottom-8' },
                { className: 'right-8 bottom-3/4' },
                { className: 'right-8 -bottom-8' }
              ];

              return (
                <div
                  key={index}
                  className={`hidden lg:block absolute neobrutalist-shadow-left ${positions[index].className} w-[338px] h-[230px]`}
                >
                  {step && (
                    <StepItem
                      icon={step.icon}
                      text={step.text}
                      subtext={step.subtext}
                    />
                  )}
                </div>
              );
            })}
            <PrismicNextImage
              field={image}
              className="h-auto w-full object-cover rounded-3xl border-4 border-black lg:h-[592px] lg:w-[540px] lg:mx-auto"
              style={{
                boxShadow:
                  '-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)'
              }}
            />
          </div>
          <div className="w-full grid-cols-1 gap-x-20 gap-y-8 md:gap-y-16 grid lg:hidden">
            {steps.slice(2).map((step, index) => (
              <div
                key={index}
                className="flex flex-col neobrutalist-shadow-left items-center text-center p-3"
              >
                {step && (
                  <StepItem
                    icon={step.icon}
                    text={step.text}
                    subtext={step.subtext}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <PinkSpring className="w-[130px] h-[166px] absolute top-0.5 right-0.5 -z-10 lg:w-[200px] lg:h-[300px] lg:-top-6" />
        <OutlineStar2 className="w-[104px] h-[104px] absolute top-16 right-16 -z-10 lg:w-[140px] lg:h-[140px] lg:right-32" />
        <OutlineStar2 className="w-[77px] h-[77px] absolute top-6 lg:w-[100px] lg:h-[100px] lg:left-24" />
        <BlueFences className="w-[120px] h-[170px] absolute top-[360px] -left-6 -z-10 lg:w-[190px] lg:h-[220px] lg:top-32" />
        <OutlineStar2 className="w-[42px] h-[42px] absolute -z-10 top-[350px] left-1/2 lg:w-[60px] lg:h-[60px] lg:top-96" />
        <OutlineStar2 className="w-[55px] h-[55px] absolute bottom-[52%] -right-0.5 -z-10 lg:w-[65px] lg:h-[65px] lg:bottom-1/3 lg:right-16 xl:right-64" />
        <OutlineStar2 className="w-[40px] h-[40px] absolute bottom-[40%] -left-2 lg:w-[50px] lg:h-[50px] lg:left-16 xl:left-64" />
        <YellowRoundedStar className="w-[200px] h-[200px] absolute rotate-[190deg] bottom-1 -z-10 -left-20 lg:w-[280px] lg:h-[280px] lg:-left-24" />
        <OutlineStar2 className="w-[60px] h-[60px] absolute left-24 bottom-20 -z-10 md:left-32 lg:w-[80px] lg:h-[80px] lg:left-56" />
        <PinkHalfCircle className="w-[110px] h-[64px] absolute right-12 bottom-0 lg:w-[170px] lg:h-[110px] lg:right-32 lg:-bottom-1.5" />
        <DarkBlueHalfCircle className="w-[220px]  h-[128px] absolute rotate-[142deg] -right-20 bottom-56 lg:w-[330px] lg:h-[210px] lg:-right-28" />
      </Container>
    </Bounded>
  );
};

export default Process;
