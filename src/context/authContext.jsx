import { login, register } from "api/auth";
import { createContext, useContext, useEffect, useState } from "react";
const defaultAuthContext = {
  isAuthenticated: null,
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
    };
    checkTokenExist();
  }, []);

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
        setPayload(result.data.user);
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
