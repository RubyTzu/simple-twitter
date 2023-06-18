import { tweetLike, tweetUnLike } from "api/tweet";
import { createContext, useContext } from "react";

const ClickLikeContext = createContext();
export const useClickLike = () => useContext(ClickLikeContext);
export const ClickLikeProvider = ({ children }) => {
  const value = {
    clickLike: async (e, isLiked) => {
      console.log("hello from context");
      const tweetId = e.target.dataset.id;
      if (isLiked) {
        await tweetUnLike(tweetId);
        return -1;
      } else {
        await tweetLike(tweetId);
        return 1;
      }
    },
  };

  return (
    <ClickLikeContext.Provider value={value}>
      {children}
    </ClickLikeContext.Provider>
  );
};
