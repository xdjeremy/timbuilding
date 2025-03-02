import {FC} from "react";
import Button from '@/components/common/Button';
import {PrismicRichText} from '@/components/PrismicRichText';
import {PrismicNextLink} from "@prismicio/next";
import { components } from '@/slices/Header/DefaultHeader/HeaderRichText';
import { HeaderProps } from "..";
import Badge from "@/components/common/Badge";



const PageHeaderNoBG: FC<HeaderProps> = ({slice}) => {
    if (slice.variation !== 'pageHeaderNoBg') return null;

    return (
        <section className=" text-brand-dark-blue px-[5%] border-b-4 border-black">
            <div className="mx-auto py-16 text-center md:py-28 lg:py-28">
                <div className="justify-center w-full flex mx-1.5 md:mx-4">
                    <div className="text-[48px] md:text-[90px] lg:text-[128px] text-stroke text-white tracking-[7px] md:tracking-[14px] sm-text-stroke-shadow md-text-stroke-shadow text-center uppercase">
                        <PrismicRichText field={slice.primary.page_header_background} components={components} /></div>
                </div>
                <div className="justify-center w-full flex">
                    <div className=" whitespace-nowrap text-[34px] -mt-9 tracking-[3px] mb-5 md:text-[70px] md:-mt-18 md:tracking-[8px] lg:text-[85px] lg:tracking-[19px] lg:-mt-24 uppercase">
                        <PrismicRichText field={slice.primary.page_header} components={components} /></div>
                </div>
                <div className=" font-bold md:text-md">
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