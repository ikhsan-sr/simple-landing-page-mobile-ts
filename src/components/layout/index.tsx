import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import { StyledLayout } from './styles';

 
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />  
        <div className="content">
          {children}
        </div>
      <Footer />  
    </StyledLayout>
  )
};

export default Layout;