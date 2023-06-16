import { useState, createContext, useContext, useEffect } from "react";
// import * as jwt from "jsonwebtoken";
import { getFollowCounts, getProfile } from "api/userinfo";
const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [followCounts, setFollowCounts] = useState({});
  // const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("id");
  // const { id } = jwt.decode(token);

  useEffect(() => {
    const getUserInfo = async () => {
      setCurrentUser(await getProfile(id));
      setFollowCounts(await getFollowCounts(id));
    };
    getUserInfo();
  }, [id]);

  const value = {
    currentUser: currentUser,
    followNumber: followCounts,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
