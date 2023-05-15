import { Link, useHistory } from "react-router-dom";
import Logo from "../../../images/Logo.svg";
import { Route as ROUTES } from "../../../constants/routes";
import { NavLink } from "react-router-dom";
import { List, Search, User } from "react-feather";
import { Button, Dropdown, Input, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SubMenu from "antd/lib/menu/SubMenu";
import { logout } from "../../../redux/actions/AuthActions";
import { ListCategories } from "../../../redux/actions/categoryActions";
import { useEffect } from "react";

const Navigation = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const history = useHistory();
  const dispatch = useDispatch();

  const { categories } = useSelector((state: RootState) => state.categoryList);

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(ListCategories());
  }, [dispatch]);

  const menu = (
    <Menu>
      <Menu.Item key="1">Meus Orçamentos</Menu.Item>
      <Menu.Item key="2">Minha Conta</Menu.Item>
      <Menu.Item onClick={logoutHandler} key="3">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <nav className="navigation">
        <div className="logo">
          <Link to="/">
            {" "}
            <img alt="Logo" src={Logo} />
          </Link>
        </div>
        <ul className="navigation-menu-main">
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              exact
              to={ROUTES.HOME}
            >
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              exact
              to={ROUTES.HOME}
            >
              Sobre Nós
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navigation-menu-active"
              exact
              to={ROUTES.HOME}
            >
              Contactos
            </NavLink>
          </li>
        </ul>

        <ul className="navigation-menu">
          <li className="navigation-menu-item">
            <Input placeholder="Pesquisar Produtos" prefix={<Search />} />
          </li>
          <li className="navigation-menu-item">
            <Button
              className="button-secondary"
              type="primary"
              icon={<List size={18} />}
              onClick={() => history.push("/cart")}
            >
              Lista de Artigos
            </Button>
          </li>

          <li className="navigation-menu-item">
            {userInfo.isAuthenticating ? (
              <Dropdown overlay={menu}>
                <Button className="button-secondary" icon={<User size={18} />}>
                  {userInfo.user.name}
                </Button>
              </Dropdown>
            ) : (
              <Link to="/login">
                <Button className="button-secondary" icon={<User size={18} />}>
                  Login
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <Menu mode="horizontal">
        {categories?.map((category) => (
          <SubMenu
            key={category.id}
            title={category.name}
            onTitleClick={() => history.push(`category/${category.id}`)}
          >
            {category.subCategories?.map((subCategory) => (
              <Link to={`/products?subCategory=${subCategory.id}`}>
                <Menu.ItemGroup title={subCategory.name} />
              </Link>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </div>
  );
};

export default Navigation;
