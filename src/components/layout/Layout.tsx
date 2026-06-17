import React from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { CommonContainer } from '@/shared/constants/pages';

const PageLayout = ({ children, transparentHeader = false }: { children?: React.ReactNode | React.ReactNode[]; transparentHeader?: boolean }) => (
  <CommonContainer>
    <Header transparent={transparentHeader} />
    {children}
    <Footer />
  </CommonContainer>
);

export default PageLayout;
