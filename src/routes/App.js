import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
// import Layout from "../containers/Layout";
// import PrivateRoute from "./PrivateRoute";

import { Context } from "../Context";

const App = () => {
  const { isAuth, user } = useContext(Context);
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <PrivateRoute
          exact
          key="some-key"
          admin
          path="/url"
          component={Component}
          params={params_to_component}
        /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
export default App;
