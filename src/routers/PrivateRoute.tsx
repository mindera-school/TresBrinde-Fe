import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';


const PrivateRoute = ({ children, ...rest }:any) => {
    return (
        
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem("authenticationToken") ? (
            <Layout>
            {children}
            </Layout>
          ) : (
            <Redirect 
              to="/login"
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
