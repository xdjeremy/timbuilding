import {Bounded} from '@/components/Bounded';
import {PrismicRichText} from '@/components/PrismicRichText';
import Button from '@/components/common/Button';
import {PrismicNextImage, PrismicNextLink} from '@prismicio/next';
import {JSXMapSerializer} from '@prismicio/react';
import {FC} from 'react';
import {CallToActionProps} from "..";

const component: JSXMapSerializer = {
    heading2: ({children}) => (
        <h2 className='mb-3 text-4xl font-extrabold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl'>
            {children}
        </h2>
    ),
    strong: ({children}) => (
        <span>{children}</span>
    ),
    paragraph: ({children}) => <p className='md:text-md'>{children}</p>,
};


const CTATwoButtons: FC<CallToActionProps> = ({slice}) => {

    if (slice.variation !== 'ctaTwoButtons') return null;

    return (
        <Bounded as='section'
                 className="px-[5%] font-redhat text-brand-dark-blue py-16 md:py-24 lg:py-28 relative border-b-4 border-black h-fit overflow-y-hidden overflow-x-hidden">
            <div
                className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20"
            >
                <div className="md:mr-12 lg:mr-0">
                    <div className="w-full max-w-lg">
                        <PrismicRichText field={slice.primary.title} components={component}/>
                        <PrismicRichText field={slice.primary.description} components={component}/>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-4">
                    <PrismicNextLink field={slice.primary.button}>
                        <Button>{slice.primary.button.text}</Button>
                    </PrismicNextLink>
                    <PrismicNextLink field={slice.primary.outline_button}>
                        <Button variant='outline'>{slice.primary.outline_button.text}</Button>
                    </PrismicNextLink>
                </div>
            </div>
            <PrismicNextImage
                className='absolute bottom-0 left-0 -z-10 lg:hidden'
                field={slice.primary.background_mobile}
            />
            <PrismicNextImage
                className='absolute -bottom-5 left-0 w-full -z-10 hidden lg:block'
                field={slice.primary.background}
            />
        </Bounded>
    );
};

export default CTATwoButtons;
