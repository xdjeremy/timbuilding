import { Bounded } from '@/components/Bounded';
import Container from '@/components/Container';
import { Heading } from '@/components/Heading';
import { PrismicRichText } from '@/components/PrismicRichText';
import {
  BlackCircles,
  BlackStar,
  GreenBox,
  PinkStar3,
  YellowWaves2
} from '@/constants/icons';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import { ProcessStep } from './components/ProcessStep';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="xs">
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <span className="text-brand-telemagenta">{children}</span>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

/**
 * Props for `ProcessOverview`.
 */
export type ProcessOverviewProps =
  SliceComponentProps<Content.ProcessOverviewSlice>;

/**
 * Component for "ProcessOverview" Slices.
 */
const ProcessOverview: FC<ProcessOverviewProps> = ({ slice }) => {
  const { title, process } = slice.primary;
  const icon = process.map((item) => item.icon);

  return (
    <Bounded as="section" data-slice-type={slice.slice_type}>
      <Container>
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg">
            <PrismicRichText field={title} components={component} />
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <ProcessStep
            icon={icon[0]}
            title={process[0]?.title}
            description={process[0]?.description}
            decorations={
              <>
                <PinkStar3 className="absolute -top-20 -left-14 -z-10 h-auto w-[161px] lg:-top-24 lg:w-[243px]" />
                <BlackStar className="absolute -bottom-8 -left-10 hidden h-auto w-[46px] lg:block" />
              </>
            }
          />
          <ProcessStep
            icon={icon[1]}
            title={process[1]?.title}
            description={process[1]?.description}
          />
          <ProcessStep
            icon={icon[2]}
            title={process[2]?.title}
            description={process[2]?.description}
          />
        </div>
      </Container>

      {/* decorations */}
      <GreenBox
        name="GreenBox"
        className="absolute top-0 right-0 -z-10 h-auto w-[114px] lg:w-[160px]"
      />
      <BlackStar
        name="BlackStar"
        className="absolute top-3 left-2.5 h-auto w-12 lg:top-20 lg:left-30 lg:w-[68px]"
      />
      <YellowWaves2
        name="YellowWaves2"
        className="absolute top-28 -right-24 -z-10 h-auto w-[162px] overflow-x-hidden lg:top-32 lg:right-24 lg:w-[267px]"
      />
      <BlackCircles
        name="BlackCircles"
        className="animate-fade-up animate-once animate-ease-in absolute -bottom-12 left-16 h-auto w-[172px] lg:-bottom-3 lg:left-[55%] lg:w-[192px]"
      />
      <BlackStar
        name="BlackStar"
        className="absolute right-3 bottom-3 -z-10 h-auto w-[52px] lg:right-10 lg:bottom-10 lg:w-[68px]"
      />
    </Bounded>
  );
};

export default ProcessOverview;
