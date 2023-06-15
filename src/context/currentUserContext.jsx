import { useState, createContext, useContext } from "react";
import axios from "axios";
import * as jwt from "jsonwebtoken";
const baseUrl = "https://twitter-2023.herokuapp.com";
const CurrentUserContext = createContext();
export const useCurrentUser = () => useContext(CurrentUserContext);
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const token = localStorage.getItem("authToken");
  const { id } = jwt.decode(token);
  const getCurrentUser = async () => {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setCurrentUser(data);
  };
  getCurrentUser();
  const value = {
    currentUser: currentUser,
  };
  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
