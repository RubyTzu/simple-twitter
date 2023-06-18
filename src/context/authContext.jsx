import { login, register, adminLogin } from "api/auth";
import { createContext, useContext, useEffect, useState } from "react";
import * as jwt from "jsonwebtoken";
import { useLocation } from "react-router";
const defaultAuthContext = {
  admIsAuthenticated: null,
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
  const [admIsAuthenticated, setAdmIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const pathname = useLocation();

  useEffect(() => {
    const checkTokenExist = () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setIsAuthenticated(false);
        setAdmIsAuthenticated(false);
        setPayload(null);
        return;
      } else {
        const { role } = jwt.decode(token);
        if (role === "admin") {
          setAdmIsAuthenticated(true);
        } else {
          setIsAuthenticated(true);
        }
        return;
      }
    };
    checkTokenExist();
  }, [pathname]);

  const value = {
    admIsAuthenticated: admIsAuthenticated,
    isAuthenticated: isAuthenticated,
    currentUser: payload,
    login: async (data) => {
      const result = await login({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        setIsAuthenticated(true);
        const tempPayload = jwt.decode(result.token);
        console.log(tempPayload);
        setPayload(tempPayload);
        localStorage.setItem("id", result.userData.id);
        localStorage.setItem("authToken", result.token);
        return result;
      } else if (!result.success) {
        return result.message;
      }
      return;
    },
    adminLogin: async (data) => {
      const result = await adminLogin({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        setAdmIsAuthenticated(true);
        const tempPayload = jwt.decode(result.token);
        setPayload(tempPayload);
        localStorage.setItem("id", result.userData.id);
        localStorage.setItem("authToken", result.token);
        return result;
      } else if (!result.success) {
        return result.message;
      }
      return;
    },

    register: async (data) => {
      const result = await register({
        account: data.account,
        name: data.name,
        email: data.email,
        password: data.password,
        passwordCheck: data.passwordCheck,
      });
      if (result.success) {
        console.log("success in authContext");
        return { success: result.success, message: result.message };
      }
    },
    logout: () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("id");
      setIsAuthenticated(false);
      setAdmIsAuthenticated(false);
      setPayload(null);
      return;
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
