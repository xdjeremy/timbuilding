import Badge from '@/components/common/Badge';
import { PrismicRichText } from '@/components/PrismicRichText';
import { components } from '@/slices/Header/DefaultHeader/HeaderRichText';
import { FC } from 'react';
import { HeaderProps } from '..';

const PageHeaderNoBG: FC<HeaderProps> = ({ slice }) => {
  if (slice.variation !== 'pageHeaderNoBg') return null;

  return (
    <section className="text-brand-dark-blue border-b-4 border-black px-[5%]">
      <div className="mx-auto py-16 text-center">
        <div className="mx-1.5 flex w-full justify-center md:mx-4">
          <div className="text-stroke sm-text-stroke-shadow md-text-stroke-shadow text-center text-[48px] tracking-[7px] text-white uppercase md:text-[90px] md:tracking-[14px] lg:text-[140px]">
            <PrismicRichText
              field={slice.primary.page_header_background}
              components={components}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="-mt-9 mb-5 text-[34px] tracking-[3px] whitespace-nowrap uppercase md:-mt-18 md:text-[70px] md:tracking-[8px] lg:-mt-24 lg:text-[85px] lg:tracking-[19px]">
            <PrismicRichText
              field={slice.primary.page_header}
              components={components}
            />
          </div>
        </div>
        <div className="md:text-md mt-8 font-bold">
          {slice.primary.page_sub_header}
        </div>
        <ul className="mt-5 flex flex-wrap justify-center gap-4 md:mt-6">
          {slice.primary.badge_group.map((item, index) => (
            <li className="flex" key={index}>
              <Badge variant="amber">{item.badge_text}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PageHeaderNoBG;
