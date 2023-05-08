import React, { createContext } from "react";
import { useState, useEffect } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("");

  const verifyToken = async (jwt) => {
    const response = await fetch(
      "https://hil-aked-backend.adaptable.app/verify",
      {
        headers: {
          method: "GET",
          authorization: `Bearer ${jwt}`,
        },
      }
    );
    console.log('headers: ', response)
    const parsed = await response.json();
    console.log("response from verify =>", response);
    if (response.status === 2000) {
      console.log("response json", parsed);
      setToken(jwt);
      console.log(jwt);
      setUser(parsed.data);
      setIsLoading(false);
      console.log("token = ", token);
      setIsAuth(true);
    } else {
      setToken(undefined);
      setIsAuth(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem("authToken");
    verifyToken(localToken);
  }, []);

  useEffect(() => {
    console.log("token = ", token);
    if (token) {
      window.localStorage.setItem("authToken", token);
      verifyToken(token);
    }
  }, [token]);

  return (
    <SessionContext.Provider
      value={{ setToken, isAuth, isLoading, user, setUser, verifyToken, token }}
    >
      {children}
    </SessionContext.Provider>
  );
};
export default SessionContextProvider;
