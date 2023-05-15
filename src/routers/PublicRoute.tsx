import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/common/Footer";
import HeaderDesktop from "../components/common/HeaderDesktop";
import HeaderMobile from "../components/common/HeaderMobile";
import Navigation from "../components/common/Navigation";

const PublicRoute = ({ children, ...rest }: any) => {
  const newChild = React.cloneElement(children, {
    params: rest?.computedMatch?.params,
  });
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <>
          <HeaderDesktop />
          <HeaderMobile />
          <Content className="content">{newChild}</Content>
          <Footer />
        </>
      )}
    />
  );
};

export default PublicRoute;
