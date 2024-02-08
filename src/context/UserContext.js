"use client";
import { authCheckRequest } from "@/utils/server-request";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, _setToken] = useState(localStorage.getItem("_token"));
  const [loginUser, setLoginUser] = useState({});

  const setToken = (_token) => {
    _setToken(_token);
    localStorage.setItem("_token", _token);
  };

  useEffect(() => {
    const checkAuth = async () => {
      await authCheckRequest(
        token,
        (res) => {
          setLoginUser(res);
          setAuthenticated(true);
        },
        () => {
          setLoginUser({});
          setToken("");
          setAuthenticated(false);
        }
      );
    };

    checkAuth();
  }, []);

  return (
    <UserContext.Provider
      value={{ authenticated, setAuthenticated, token, setToken, loginUser, setLoginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
