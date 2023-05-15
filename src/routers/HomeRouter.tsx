import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Route } from "react-router-dom";
import Navigation from "../components/common/Navigation";
import Banner from "../pages/home/banner";
import footerlogo from "../images/footerlogo.svg";
import HeaderDesktop from "../components/common/HeaderDesktop";

const PublicRoute = ({ children, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <>
          <HeaderDesktop />
          <Banner />

          <Content className="content">{children}</Content>

          <Footer>
            <img src={footerlogo} alt="3brindeLogo" />
          </Footer>
        </>
      )}
    />
  );
};

export default PublicRoute;
