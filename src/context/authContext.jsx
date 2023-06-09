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
    login: async (data) => {
      const result = await login({
        account: data.account,
        password: data.password,
      });
      if (result.success) {
        setIsAuthenticated(true);
        setPayload(result.data.user);
        setCurrentUserId(result.data.user.id);
        localStorage.setItem("id", result.data.user.id);
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
      return;
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
