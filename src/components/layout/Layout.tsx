import React from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { CommonContainer } from '@/shared/constants/pages';

const PageLayout = ({ children })=> <CommonContainer>
  <Header transparent/>
    {children}
  <Footer />
</CommonContainer>;

export default PageLayout;
