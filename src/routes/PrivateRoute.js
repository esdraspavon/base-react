import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { Context } from "../Context";
export default ({ component: Component, admin, params, ...rest }) => {
  const { isAuth, user } = useContext(Context);
  return (
    <Route
      {...rest}
      render={props => {
        if (admin) {
          if (user && user.admin) {
            return <Component {...params} {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }
        if (isAuth) {
        return <Component {...params} {...props} />;
        } else {
        return <Redirect to="/login" />;
        }
      }}
    />
  );
};
