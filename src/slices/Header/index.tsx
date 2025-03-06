import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';
import DefaultHeader from './DefaultHeader';
import PageHeaderNoBG from './PageHeaderNoBG';
import PageHeaderNoButtons from './PageHeaderNoButtons';
import PageHeaderTwoShadows from './PageHeaderTwoShadows';

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
