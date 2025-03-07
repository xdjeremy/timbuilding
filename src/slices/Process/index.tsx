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
    <h2 className="mt-8 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
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
    <span className="bg-brand-blue px-1 text-white">{children}</span>
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
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-8 md:gap-y-16 lg:hidden">
            {steps.slice(0, 2).map((step, index) => (
              <div
                key={index}
                className="neobrutalist-shadow-left flex flex-col items-center p-3 text-center"
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
          <div className="lg:col-span-none order-last w-full sm:col-span-2 lg:relative lg:order-none">
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
                  className={`neobrutalist-shadow-left absolute hidden lg:block ${positions[index].className} h-[230px] w-[338px]`}
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
              className="h-auto w-full rounded-3xl border-4 border-black object-cover lg:mx-auto lg:h-[592px] lg:w-[540px]"
              style={{
                boxShadow:
                  '-8px 12px 0px 0px rgba(219,39,119,1.00), -17px 23px 0px 0px rgba(251,191,36,1.00), -28px 36px 0px 0px rgba(8,145,178,1.00)'
              }}
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-8 md:gap-y-16 lg:hidden">
            {steps.slice(2).map((step, index) => (
              <div
                key={index}
                className="neobrutalist-shadow-left flex flex-col items-center p-3 text-center"
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
        <PinkSpring className="absolute top-0.5 right-0.5 -z-10 h-[166px] w-[130px] lg:-top-6 lg:h-[300px] lg:w-[200px]" />
        <OutlineStar2 className="absolute top-16 right-16 -z-10 h-[104px] w-[104px] lg:right-32 lg:h-[140px] lg:w-[140px]" />
        <OutlineStar2 className="absolute top-6 h-[77px] w-[77px] lg:left-24 lg:h-[100px] lg:w-[100px]" />
        <BlueFences className="absolute top-[360px] -left-6 -z-10 h-[170px] w-[120px] lg:top-32 lg:h-[220px] lg:w-[190px]" />
        <OutlineStar2 className="absolute top-[350px] left-1/2 -z-10 h-[42px] w-[42px] lg:top-96 lg:h-[60px] lg:w-[60px]" />
        <OutlineStar2 className="absolute -right-0.5 bottom-[52%] -z-10 h-[55px] w-[55px] lg:right-16 lg:bottom-1/3 lg:h-[65px] lg:w-[65px] xl:right-64" />
        <OutlineStar2 className="absolute bottom-[40%] -left-2 h-[40px] w-[40px] lg:left-16 lg:h-[50px] lg:w-[50px] xl:left-64" />
        <YellowRoundedStar className="absolute bottom-1 -left-20 -z-10 h-[200px] w-[200px] rotate-[190deg] lg:-left-24 lg:h-[280px] lg:w-[280px]" />
        <OutlineStar2 className="absolute bottom-20 left-24 -z-10 h-[60px] w-[60px] md:left-32 lg:left-56 lg:h-[80px] lg:w-[80px]" />
        <PinkHalfCircle className="absolute right-12 bottom-0 h-[64px] w-[110px] lg:right-32 lg:-bottom-1.5 lg:h-[110px] lg:w-[170px]" />
        <DarkBlueHalfCircle className="absolute -right-20 bottom-56 h-[128px] w-[220px] rotate-[142deg] lg:-right-28 lg:h-[210px] lg:w-[330px]" />
      </Container>
    </Bounded>
  );
};

export default Process;
