import { getSingleTweet, tweetLike, tweetUnLike } from "api/tweet";

export const clickLike = async (id, isLiked) => {
  //依現在是不是isLiked執行按讚/取消按讚
  if (isLiked) {
    await tweetUnLike(id);
  } else {
    await tweetLike(id);
  }
  //再抓一次該則tweet資料, 將最新的資料回傳給畫面
  const res = await getSingleTweet(id);
  return res;
};
