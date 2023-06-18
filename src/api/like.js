import { tweetLike, tweetUnLike } from "api/tweet";

export const clickLike = async (e, isLiked) => {
  const tweetId = e.target.dataset.id;
  if (isLiked) {
    await tweetUnLike(tweetId);
    return -1;
  } else {
    await tweetLike(tweetId);
    return 1;
  }
};
