import axiosInstance from "./axiosInstance";

//全部推文
export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get("/api/tweets");
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//個人資料頁推文tab
export const getUserTweets = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}/tweets`);
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 個人資料頁回覆tab
export const getUserReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}/replied_tweets`);
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//個人資料頁喜歡的內容tab"
export const getUserLikedTweets = async (id) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/users/${id}/tweets?liked=true`
    );
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//replylist裡單則貼文
export const getSingleTweet = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/tweets/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//replylist 單則貼文的回覆
export const getSingleTweetReplies = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/tweets/${id}/replies`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//tweet like
export const tweetLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`/api/tweets/${tweetId}/like`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
//tweet unlike
export const tweetUnLike = async (tweetId) => {
  try {
    const { data } = await axiosInstance.post(`/api/tweets/${tweetId}/unlike`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//add tweet 新增推文
export const createTweet = async (payload) => {
  const { description, likable, commendable } = payload;
  try {
    const res = await axiosInstance.post("/api/tweets", {
      description,
      likable,
      commendable,
    });
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};

//add reply tweet
export const createReplyTweet = async (payload) => {
  try {
    const { comment, id } = payload;
    const res = await axiosInstance.post(`/api/tweets/${id}/replies`, {
      comment,
    });
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
};
