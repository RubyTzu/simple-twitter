import { useState, createContext, useContext } from "react";
// import * as jwt from "jsonwebtoken";
import { getProfile } from "api/userinfo";
const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  // const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("id");
  // const { id } = jwt.decode(token);
  const getCurrentUser = async () => {
    const data = await getProfile(id);
    setCurrentUser(data);
  };

  const value = {
    currentUser: currentUser,
    getCurrentUser: getCurrentUser,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
