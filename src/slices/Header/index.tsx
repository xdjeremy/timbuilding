import {FC} from "react";
import {Content} from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import DefaultHeader from "./DefaultHeader";
import PageHeaderNoButtons from "./PageHeaderNoButtons";
import PageHeaderNoBG from "./PageHeaderNoBG";
import PageHeaderTwoShadows from "./PageHeaderTwoShadows";

export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

const Header: FC<HeaderProps> = (slice) => {
    return (
        <>
            <DefaultHeader {...slice} />
            <PageHeaderNoButtons {...slice} />
            <PageHeaderNoBG {...slice} />
            <PageHeaderTwoShadows {...slice} />

        </>
    );
};


export default Header;
