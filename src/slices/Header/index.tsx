import {FC} from "react";
import {Content} from "@prismicio/client";
import {type SliceComponentProps} from "@prismicio/react";
import Button from '@/components/common/Button';
import {PrismicRichText} from '@/components/PrismicRichText';
import {PrismicNextLink} from "@prismicio/next";

export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

const Header: FC<HeaderProps> = ({slice}) => {
    return (
        <section
            className="relative text-brand-dark-blue pl-[5%] pr-[2%] pt-16 md:pt-24 lg:pt-28 border-b-4 border-black"
        >
            <div className="container overflow-hidden">
                <div
                    className="w-[95%] max-w-lg neobrutalist-shadow pb-12 md:pb-16 lg:pb-20 px-9 pt-5 translate-y-6 bg-white md:mx-auto"
                >
                    <div
                        className="mb-5 text-6xl font-extrabold text-dark-blue md:mb-6 md:text-9xl lg:text-10xl"
                    >
                        <PrismicRichText field={slice.primary.page_header}/>
                    </div>
                    <p className="text-dark-blue md:text-md">
                        {slice.primary.page_sub_header}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <PrismicNextLink
                            field={slice.primary.header_button}
                            className={slice.primary.header_button.variant}
                        ><Button>Learn More</Button></PrismicNextLink>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 overflow-hidden flex flex-col">
                {[...Array(7)].map((_, rowIndex) => (
                    <span
                        key={rowIndex}
                        className="uppercase font-extrabold text-[4rem] text-white tracking-widest overflow-hidden leading-[100%] whitespace-nowrap"
                        style={{WebkitTextStroke: "1px #444444"}}
                    >
                    {[...Array(8)].map((_, colIndex) => (
                        <PrismicRichText
                            key={colIndex}
                            field={slice.primary.page_header_background}
                            components={{
                                paragraph: ({children}) => <>{children}</>,
                            }}
                        />
                    ))}
                </span>
                ))}
            </div>
        </section>
    );
};


export default Header;
