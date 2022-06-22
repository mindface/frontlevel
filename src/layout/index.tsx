import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { ReactNode } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
