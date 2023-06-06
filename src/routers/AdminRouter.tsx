import React from "react";
import { useSelector } from "react-redux";
import { Link, Redirect, Route } from "react-router-dom";
import { RootState } from "../redux/store";
import Dashboard from "../pages/admin/dashboard";
import { Layout, Menu } from "antd";
import { DollarSign, List, ShoppingCart } from "react-feather";
import Logo from "../images/Logo.svg";

const { Header, Content, Sider } = Layout;

const AdminRoute = ({ children, ...rest }: any) => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const newChild = React.cloneElement(children, {
    params: rest?.computedMatch?.params,
  });

  return (
    <Route
      {...rest}
      component={() =>
        userInfo.user?.role === "Admin" ? (
          <div className="backOffice">
            <header>
              <div>
                <img src={Logo} alt="test" className="logo" />
              </div>
            </header>
            <aside></aside>
            <Dashboard/>
          </div>
        ) : (
          /*
          <Layout>
            <Sider breakpoint="lg" collapsedWidth="0">
              <img src={Logo} alt="test" className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                {/*
                  <Link to="/admin/categories">
                  <Menu.Item
                    key="1"
                    style={{ marginLeft: "20px" }}
                    icon={<List />}
                  >
                    Categorias
                  </Menu.Item>
                </Link>
                <Link to="/admin/products">
                  <Menu.Item
                    style={{ marginLeft: "20px" }}
                    key="2"
                    icon={<ShoppingCart />}
                  >
                    Produtos
                  </Menu.Item>
                </Link>
                <Link to="/admin/budgets">
                  <Menu.Item
                    style={{ marginLeft: "20px" }}
                    key="3"
                    icon={<DollarSign />}
                  >
                    Orçamentos
                  </Menu.Item>
                </Link>
                }
              </Menu>
            </Sider>
            <Layout>
              <Header
                className="site-layout-sub-header-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "24px 16px 0" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: "100vh" }}
                >
                  {newChild}
                </div>
              </Content>
            </Layout>
          </Layout>
          */
          //This needs to be changed when login is implemented
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
