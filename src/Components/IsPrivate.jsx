import React from "react";
import { useContext } from "react";
import { Loader } from "@mantine/core";
import { AuthContext } from "../Contexts/SessionContext";
import { Navigate } from "react-router-dom";

export default function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  console.log(isLoggedIn)
  

  if (!isLoggedIn) {
    <Navigate to='/' />
  }

  return isLoading ? (
    <Loader color="dark" size="xl" variant="dots" />
  ):(
    <>
      {children}
    </>
  )
}




