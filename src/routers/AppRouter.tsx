import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "../pages/home";
import { Route as ROUTES } from "../constants/routes";
//import Navigation from "../components/common/Navigation";
import Dashboard from "../pages/admin/dashboard";
import Login from "../pages/auth/login";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRouter";
import AdminCategories from "../pages/admin/categories";
import CreateCategory from "../pages/admin/categories/createCategory";
import EditCategory from "../pages/admin/categories/editCategory";
import HomeRouter from "./HomeRouter";
import Shop from "../pages/products";
import AdminProducts from "../pages/admin/products";
import CreateProdct from "../pages/admin/products/create";
import ProductDetails from "../pages/products/product";
import NotFound from "../pages/404";
import CartList from "../pages/cart";
import UpdateProduct from "../pages/admin/products/update";
import Register from "../pages/auth/register";
import CategoryPage from "../pages/categories";
import BudgetPage from "../pages/budget";
import AdminBudgets from "../pages/admin/budgets";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Switch>
        <Route component={Login} path={ROUTES.LOGIN} />
        <Route component={Register} path={ROUTES.REGISTER} />

        <HomeRouter exact path={ROUTES.HOME}>
          <Home />
        </HomeRouter>

        <PublicRoute path={ROUTES.CART}>
          <CartList />
        </PublicRoute>

        <PublicRoute path={ROUTES.PRODUCTS_LIST}>
          <Shop />
        </PublicRoute>

        <PublicRoute path={ROUTES.BUDGET}>
          <BudgetPage />
        </PublicRoute>

        <PublicRoute path={`${ROUTES.PRODUCT}`}>
          <ProductDetails />
        </PublicRoute>

        <PublicRoute path={`${ROUTES.CATEGORY}`}>
          <CategoryPage />
        </PublicRoute>

        <AdminRoute exact path={ROUTES.ADMIN}>
          <Dashboard />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_PRODUCTS}>
          <AdminProducts />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_BUDGET}>
          <AdminBudgets />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_PRODUCTS_EDIT}>
          <UpdateProduct />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_PRODUCTS_CREATE}>
          <CreateProdct />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_CATEGORIES}>
          <AdminCategories />
        </AdminRoute>

        <AdminRoute exact path={ROUTES.ADMIN_CATEGORIES_CREATECATEGORY}>
          <CreateCategory />
        </AdminRoute>

        <AdminRoute path={`${ROUTES.ADMIN_CATEGORIES_EDIT}`}>
          <EditCategory />
        </AdminRoute>

        <PublicRoute path={ROUTES.NOT_FOUND}>
          <NotFound />
        </PublicRoute>
      </Switch>
    </>
  </Router>
);
export default AppRouter;
