import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

type LayoutProps = {
  title: string;
  description: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
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
