import React, { Suspense, lazy } from "react";
import { Route, Redirect } from "react-router-dom";

import PathLink from "../utils/pathLinkUrl/PathLink";
const ShopsPage = lazy(() => import("../pages/Shops"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const OrdersPage = lazy(() => import("../pages/Orders"));
const CartPage = lazy(() => import("../pages/Cart"));

export const routes = {
  home: new PathLink("/", "home"),
  shops: new PathLink("/shops", "shops"),
  profile: new PathLink("/profile", "profile"),
  orders: new PathLink("/orders", "orders"),
  cart: new PathLink("/cart", "cart"),
};

const Routes = () => (
  <Suspense fallback={<div />}>
    <Redirect exact to={routes.shops.path} />
    <Route exact path={routes.shops.path} component={ShopsPage} />
    <Route exact path={routes.profile.path} component={ProfilePage} />
    <Route exact path={routes.orders.path} component={OrdersPage} />
    <Route exact path={routes.cart.path} component={CartPage} />
  </Suspense>
);

export default Routes;
