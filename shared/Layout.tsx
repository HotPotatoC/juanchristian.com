import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <NextSeo
        title={title}
        description='Juan Christian is a Developer based in Jakarta, Indonesia.'
        canonical='https://juanchristian.com'
        twitter={{
          handle: "@juanwmv",
          site: "@juanwmv",
          cardType: "summary_large_image",
        }}
      />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
