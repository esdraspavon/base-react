import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(window.sessionStorage.getItem("user"));
  });
  const getResource = (url, method = "GET", body) => {
    let options = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isAuth}`
      }
    };
    if (body) {
      options["body"] = JSON.stringify(body);
    }
    return fetch(url, options)
      .then(response => {
        if (response.status == 401) {
          setIsAuth(false);
          setUser({});
          window.sessionStorage.removeItem("token");
          window.sessionStorage.removeItem("user");
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => data)
      .catch(err => console.log(err));
  };

  const value = {
    user,
    setUser: data => {
      setUser(data);
      window.sessionStorage.setItem("user", JSON.stringify(data));
    },
    updateUser: data => {
      let updatedUser = { ...user };
      updatedUser = { ...updatedUser, ...data };
      setUser(updatedUser);
      window.sessionStorage.setItem("user", JSON.stringify(data));
    },
    isAuth,
    activateAuth: token => {
      setIsAuth(token);
      window.sessionStorage.setItem("token", token);
    },
    removeAuth: () => {
      setIsAuth(false);
      setUser();
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("user");
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer
};
