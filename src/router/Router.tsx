import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import routes from "./routes";

const jsonRoutes = routes();

const Router = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Suspense fallback={<div className="wait">Wait...</div>}>
          <Switch>
            {jsonRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Fragment>
      <Home />
    </BrowserRouter>
  );
};

export default Router;
