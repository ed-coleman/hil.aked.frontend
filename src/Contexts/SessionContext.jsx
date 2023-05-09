

import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // store token in local storage

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

// grab the stored token from the local storage

const authenticateUser = () => {
  const storedToken = localStorage.getItem('authToken')

  if (storedToken) {
    // We must send the JWT token in the request's "Authorization" Headers
    axios.get(
      `${API_URL}/verify`, 
      { headers: { Authorization: `Bearer ${storedToken}`} }
    )
    .then((response) => {
      // If the server verifies that the JWT token is valid  
      const user = response.data;
     // Update state variables        
      setIsLoggedIn(true);
      setIsLoading(false);
      setUser(user);        
    })
    .catch((error) => {
      // If the server sends an error response (invalid token) 
      // Update state variables         
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);        
    });      
  } else {
    // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);      
  }   
}


useEffect(() => { 
  authenticateUser()
}, []);





  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
