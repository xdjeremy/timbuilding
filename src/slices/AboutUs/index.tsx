import {FC} from "react";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import DefaultAboutUs from "./Default";
import LeftBackgroundColor from "./LeftBackgroundColor";


export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

const AboutUs: FC<AboutUsProps> = (slice) => {
    return (
        <>
            <DefaultAboutUs {...slice} />
            <LeftBackgroundColor {...slice} />
        </>
    );
};

export default AboutUs;
