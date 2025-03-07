import Button from '@/components/common/Button';
import {PrismicRichText} from '@/components/PrismicRichText';
import {components} from '@/slices/Header/DefaultHeader/HeaderRichText';
import {PrismicNextLink} from '@prismicio/next';
import {FC} from 'react';
import {HeaderProps} from '..';
import Container from "@/components/Container";

const DefaultHeader: FC<HeaderProps> = ({slice}) => {
    if (slice.variation !== 'default') return null;

    return (
        <section
            className="relative text-brand-dark-blue pl-[5%] pr-[2%] pt-16 md:pt-24 lg:pt-28 border-b-4 border-black mx-auto"
        >
            <Container className="overflow-hidden">
                <div
                    className="w-[95%] max-w-lg neobrutalist-shadow-right px-12 py-8 pb-12  translate-y-6 bg-white md:mx-auto">
                    <div className="mb-5 text-6xl text-dark-blue md:mb-6 md:text-9xl lg:text-10xl">
                        <PrismicRichText
                            field={slice.primary.page_header}
                            components={components}
                        />
                    </div>
                    <div className="text-dark-blue md:text-md">
                        {slice.primary.page_sub_header}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <PrismicNextLink
                            field={slice.primary.header_button}
                            className={slice.primary.header_button.variant}
                        >
                            <Button>{slice.primary.header_button.text}</Button>
                        </PrismicNextLink>
                    </div>
                </div>
            </Container>
            <div className="absolute inset-0 -z-10 overflow-hidden flex flex-col">
                {[...Array(7)].map((_, rowIndex) => (
                    <span
                        key={rowIndex}
                        className="uppercase font-extrabold text-[4rem] tracking-widest overflow-hidden leading-[98%] text-stroke"
                    >
            {[...Array(8)].map((_, colIndex) => (
                <PrismicRichText
                    key={colIndex}
                    field={slice.primary.page_header_background}
                    components={{
                        paragraph: ({children}) => <>{children}</>
                    }}
                />
            ))}
          </span>
                ))}
            </div>
        </section>
    );
};

export default DefaultHeader;
