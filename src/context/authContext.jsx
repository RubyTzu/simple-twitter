import { login } from "api/auth";
import { createContext, useContext, useState } from "react";

const defaultAuthContext = {
  isAuthenticated: null,
  currentUser: null,
  register: null,
  login: null,
  logout: null,
};

export const AuthContext = createContext(defaultAuthContext);
// export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);

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
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
