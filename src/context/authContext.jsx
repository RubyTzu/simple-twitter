import { login, register } from "api/auth";
import { createContext, useContext, useEffect, useState } from "react";
// import * as jwt from "jsonwebtoken";
const defaultAuthContext = {
  isAuthenticated: null,
  currentUserId: "",
  currentUser: null,
  register: null,
  login: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [currentUserId, setCurrentUserId] = useState("");
  useEffect(() => {
    const checkTokenExist = () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      } else {
        setIsAuthenticated(true);
      }
      // else {
      //   const tempPayload = jwt.decode(token);
      //   if (tempPayload) {
      //     setIsAuthenticated(true);
      //     setPayload(tempPayload);
      //   } else {
      //     setIsAuthenticated(false);
      //     setPayload(null);
      //   }
      // }
    };
    checkTokenExist();
  }, []);

  const value = {
    isAuthenticated: isAuthenticated,
    payload: payload,
    currentUserId: currentUserId,
    // login: async (data) => {
    //   const result = await login({
    //     account: data.account,
    //     password: data.password,
    //   });
    //   const tempPayload = jwt.decode(result.token);

    //   console.log(tempPayload);
    //   if (tempPayload) {
    //     setIsAuthenticated(true);
    //     setPayload(tempPayload);
    //     setCurrentUserId(tempPayload.id);
    //     localStorage.setItem("authToken", result.token);
    //     localStorage.setItem("id", result.id);
    //   } else {
    //     setPayload(null);
    //     setIsAuthenticated(false);
    //     setCurrentUserId("");
    //   }
    //   return result.success;
    // },

    login: async (data) => {
      const result = await login({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        setIsAuthenticated(true);
        setPayload(result.userData);
        setCurrentUserId(result.userData.id);
        localStorage.setItem("id", result.userData.id);
        localStorage.setItem("authToken", result.token);
      }
      return result.success;
    },

    register: async (data) => {
      const result = await register({
        account: data.account,
        name: data.name,
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      });
      if (result.success === "success") {
        console.log("success in authContext");
        return { success: true };
      }
    },
    logout: () => {
      setIsAuthenticated(false);
      setPayload(null);
      localStorage.removeItem("authToken");
      localStorage.removeItem("id");
      return;
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
