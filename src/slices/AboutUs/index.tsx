import { FC } from "react";
import { Content } from "@prismicio/client";
import {JSXMapSerializer, SliceComponentProps} from "@prismicio/react";
import Badge from "@/components/common/Badge";
import {Bounded} from "@/components/Bounded";
import {PrismicRichText} from "@/components/PrismicRichText";
import {PrismicNextImage} from "@prismicio/next";
import {BlueHalfCircle, DarkBlueHalfCircle, PinkStar3} from "@/constants/icons";

/**
 * Props for `AboutUs`.
 */
export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
      <h2 className='rb-5 mb-5 mt-3 md:mt-4 text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl'>
        {children}
      </h2>
  ),
  heading3: ({ children }) => (
      <h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
        {children}
      </h3>
  ),
  strong: ({ children }) => <span className='bg-brand-blue text-white pb-1 px-1'>{children}</span>,
  paragraph: ({ children }) => <p className='md:text-md'>{children}</p>,
};

/**
 * Component for "AboutUs" Slices.
 */
const AboutUs: FC<AboutUsProps> = ({ slice }) => {
  return (
      <Bounded
          as='section'
          className="text-brand-dark-blue px-[5%] py-24 lg:py-28 border-b-4 border-border-primary relative overflow-hidden"
      >
        <div className="container">
          <div
              className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
          >
            <div>
              <Badge variant="pink">{slice.primary.badge}</Badge>

              <PrismicRichText field={slice.primary.title} components={components} />
              <PrismicRichText field={slice.primary.description} components={components} />
            </div>
            <div className="relative">
              <div
                  className="bg-brand-blue h-[72.92px] absolute rounded-full border-4 w-[72.92px]
        border-black -right-12 -top-12"
              >
              </div>
              <div
                  className="bg-brand-telemagenta h-[72.92px] absolute rounded-full border-4 w-[72.92px]
        border-black -right-12 top-9"
              >
              </div>
              <div
                  className="bg-brand-dark-blue h-[72.92px] absolute rounded-full border-4 w-[72.92px]
        border-black -right-12 top-30"
              >
              </div>
              <DarkBlueHalfCircle className="absolute right-0 -bottom-14 h-[92px] w-auto"/>
              <BlueHalfCircle className="absolute -left-14 top-5 h-[92px] w-auto"/>
              <PinkStar3 className="absolute -bottom-20 -left-14 h-[211px] -z-10 w-auto"/>
              <PrismicNextImage field={slice.primary.image} className="w-full xl:w-[616px] xl:h-[640px] object-cover neobrutalist-shadow" />
            </div>
          </div>
        </div>
        <div
            className="bg-brand-amber h-2/6 -z-20 w-screen absolute bottom-0 right-0 border-t-4 border-black md:h-full md:w-2/5 md:border-t-0 md:border-l-4 "
        >
        </div>
      </Bounded>
  );
};

export default AboutUs;
