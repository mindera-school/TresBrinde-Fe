import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Route } from "react-router-dom";
import Banner from "../pages/home/banner";
import HeaderDesktop from "../components/common/HeaderDesktop";
import MobileDesktop from "../components/common/HeaderMobile";
import HeaderMobile from "../components/common/HeaderMobile";
import Footer from "../components/common/Footer";

const PublicRoute = ({ children, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <>
          <HeaderDesktop />
          <HeaderMobile />
          <Banner />

          <Content className="content">{children}</Content>

          <Footer />
        </>
      )}
    />
  );
};

export default PublicRoute;
