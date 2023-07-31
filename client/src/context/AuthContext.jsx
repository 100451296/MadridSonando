/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  authenticateRequest,
} from "../api/auth.js";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
      setIsAuthenticated(true);
      setUser(res);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
      console.error(error);
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      if (res === "401"){
        setUser(null);
        setIsAuthenticated(false);
      }
      else{
          setUser(res);
          setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("efect");
    async function getAuth() {
      try {
        const user = await authenticateRequest();
        console.log(user);
        if (user === "401"){
            setIsAuthenticated(false);
            setUser(null);
        }
        else{
            setIsAuthenticated(true);
            setUser(user);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        console.error(error);
      }
    }
    getAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ signup, login, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
