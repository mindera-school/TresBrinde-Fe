import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Route } from "react-router-dom";
import Navigation from "../components/common/Navigation";

const PublicRoute = ({ children, ...rest }: any) => {
  const newChild = 
  React.cloneElement(children, { params: rest?.computedMatch?.params })
  return (
    <Route
      {...rest}
      render={({ location }) => (
        <>
          <Navigation />
          <Content className="content">{newChild}</Content>
          <Footer>Footer</Footer>
        </>
      )}
    />
  );
};

export default PublicRoute;
