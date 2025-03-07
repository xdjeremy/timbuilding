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
    <h2 className="mb-5 mt-5 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
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
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20 relative">
          <OutlineSpark3 className="w-[52px]  h-[52px] absolute right-32 bottom-10 -z-10 lg:w-[82px] lg:h-[82px] lg:right-1/4 " />
        </footer>
        <HalfBlueWaves2 className="w-[182px]  h-[100px] absolute top-0 right-8 -z-10 lg:w-[250px] lg:h-[180px] lg:right-28" />
        <OutlineSpark3 className="w-[35px]  h-[35px] absolute top-24 left-16 lg:w-[62px] lg:h-[62px] lg:left-1/3" />
        <OutlineSpark3 className="w-[48px]  h-[48px] absolute top-1/3 right-2 lg:w-[62px] lg:h-[62px] lg:top-1/4 lg:right-6" />
        <OutlineSpark3 className="w-[42px]  h-[42px] absolute bottom-20 left-6 lg:w-[62px] lg:h-[62px] lg:bottom-32 lg:left-36" />
        <OutlineSpark3 className="w-[85px]  h-[85px] absolute right-4 bottom-2 lg:w-[139px] lg:h-[139px] lg:right-2" />
        <OutlineSpark3 className="w-[49px]  h-[49px] absolute top-[70%] -left-4 lg:w-[75px] lg:h-[75px]" />
        <YellowWaves3 className="w-[160px] h-[120px] absolute -bottom-5 -z-10 lg:w-[230px] lg:h-[190px] lg:left-40" />
      </Container>
    </Bounded>
  );
};

export default Portfolio;
