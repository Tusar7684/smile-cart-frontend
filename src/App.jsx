// import { Route, NavLink, Switch } from "react-router-dom";
import { PageNotFound } from "components/commons";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import "./App.css";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

// const App = () => <Product />;
const App = () => (
  <Switch>
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);
export default App;
