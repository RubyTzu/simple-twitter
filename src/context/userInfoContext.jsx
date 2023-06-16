import { useState, createContext, useContext } from "react";
const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [followCounts, setFollowCounts] = useState({});

  const value = {
    profile,
    setProfile,
    followCounts,
    setFollowCounts,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
