import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");
//homepage tweets
export const getTweets = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/tweets`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};

//推文tab
export const getUserTweets = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};

// 回覆tab
export const getUserReplies = async (id) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/users/${id}/replied_tweets`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    return false;
  }
};

//喜歡的內容tab"
export const getUserLikedTweets = async (id) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/users/${id}/tweets?liked=true`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    return false;
  }
};

//replylist裡單則貼文
export const getSingleTweet = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/tweets/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

//replylist 單則貼文的回覆
export const getSingleTweetReplies = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/tweets/${id}/replies`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

//tweet like
export const tweetLike = async (tweetId) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/tweets/${tweetId}/like`,
      {
        id: tweetId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};
//tweet unlike
export const tweetUnLike = async (tweetId) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/tweets/${tweetId}/unlike`,
      {
        id: tweetId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

//add tweet 新增推文
export const createTweet = async (payload) => {
  const { description, likable, commendable } = payload;
  try {
    const res = await axios.post(
      `${baseUrl}/api/tweets`,
      { description, likable, commendable },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

//add reply tweet
export const createReplyTweet = async (payload) => {
  try {
    const { comment, id } = payload;
    const res = await axios.post(
      `${baseUrl}/api/tweets/${id}/replies`,
      { comment },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
