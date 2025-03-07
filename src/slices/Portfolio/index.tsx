import { Bounded } from '@/components/Bounded';
import Badge from '@/components/common/Badge';
import Container from '@/components/Container';
import { PrismicRichText } from '@/components/PrismicRichText';
import { HalfBlueWaves2, OutlineSpark3, YellowWaves3 } from '@/constants/icons';
import { Content } from '@prismicio/client';
import { JSXMapSerializer, SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import PortfolioItem from './components/PortfolioItem';

const component: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="mt-5 mb-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-2 text-xl font-bold md:text-2xl">{children}</h3>
  ),
  strong: ({ children }) => (
    <span className="text-brand-telemagenta">{children}</span>
  ),
  paragraph: ({ children }) => <p>{children}</p>
};

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice> & {
  context?: {
    uid?: string;
  };
};

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio: FC<PortfolioProps> = async ({ slice, context }) => {
  if (!context?.uid) return null;

  const portfolioProjects = slice.primary
    .portfolio_projects as unknown as Array<{
    project: {
      uid: string;
    };
  }>;

  return (
    <Bounded as="section">
      <Container>
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <Badge variant="pink">{slice.primary.badge}</Badge>
          <PrismicRichText field={slice.primary.text} components={component} />
        </header>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          {portfolioProjects.map(({ project }) => (
            <PortfolioItem key={project.uid} uid={project.uid} />
          ))}
        </div>
        <footer className="relative mt-8 flex justify-center md:mt-18 lg:mt-20">
          <OutlineSpark3 className="absolute right-32 bottom-10 -z-10 h-[52px] w-[52px] lg:right-1/4 lg:h-[82px] lg:w-[82px]" />
        </footer>
        <HalfBlueWaves2 className="absolute top-0 right-8 -z-10 h-[100px] w-[182px] lg:right-28 lg:h-[180px] lg:w-[250px]" />
        <OutlineSpark3 className="absolute top-24 left-16 h-[35px] w-[35px] lg:left-1/3 lg:h-[62px] lg:w-[62px]" />
        <OutlineSpark3 className="absolute top-1/3 right-2 h-[48px] w-[48px] lg:top-1/4 lg:right-6 lg:h-[62px] lg:w-[62px]" />
        <OutlineSpark3 className="absolute bottom-20 left-6 h-[42px] w-[42px] lg:bottom-32 lg:left-36 lg:h-[62px] lg:w-[62px]" />
        <OutlineSpark3 className="absolute right-4 bottom-2 h-[85px] w-[85px] lg:right-2 lg:h-[139px] lg:w-[139px]" />
        <OutlineSpark3 className="absolute top-[70%] -left-4 h-[49px] w-[49px] lg:h-[75px] lg:w-[75px]" />
        <YellowWaves3 className="absolute -bottom-5 -z-10 h-[120px] w-[160px] lg:left-40 lg:h-[190px] lg:w-[230px]" />
      </Container>
    </Bounded>
  );
};

export default Portfolio;
