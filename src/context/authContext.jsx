import { login, register, adminLogin } from "api/auth";
import { createContext, useContext, useEffect, useState } from "react";
import * as jwt from "jsonwebtoken";
import { useLocation } from "react-router";
const defaultAuthContext = {
  isAuthenticated: null,
  payload: null,
  register: null,
  login: null,
  adminLogin: null,
  logout: null,
};

const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const pathname = useLocation();

  useEffect(() => {
    const checkTokenExist = () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      } else {
        setIsAuthenticated(true);
        return;
      }
    };
    checkTokenExist();
  }, [pathname]);

  const value = {
    isAuthenticated: isAuthenticated,
    payload: payload,
    login: async (data) => {
      const result = await login({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        setIsAuthenticated(true);
        const tempPayload = jwt.decode(result.token);
        setPayload(tempPayload);
        localStorage.setItem("id", result.userData.id);
        localStorage.setItem("authToken", result.token);
      }
      return result.success;
    },
    adminLogin: async (data) => {
      const result = await adminLogin({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        console.log("context 成功");
        setIsAuthenticated(true);
        const tempPayload = jwt.decode(result.token);
        setPayload(tempPayload);
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
