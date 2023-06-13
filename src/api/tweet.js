import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");

//homepage tweets
export const getTweets = async (id) => {
  const { data } = await axios.get(
    `${baseUrl}/api/users/${id}/tweets?follows=true`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(data);
  return data;
};

//推文tab
export const getUserTweets = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

// 回覆tab
export const getUserReplies = async (id) => {
  const { data } = await axios.get(
    `${baseUrl}/api/users/${id}/replied_tweets`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
};

//喜歡的內容tab"
export const getUserLikedTweets = async (id) => {
  const { data } = await axios.get(
    `${baseUrl}/api/users/${id}/tweets?liked=true`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
};

//replylist裡單則貼文
export const getSingleTweet = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

//replylist 單則貼文的回覆
export const getSingleTweetReplies = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/${id}/replies`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

//add tweet 新增推文
export const createTweet = async (payload) => {
  const { description, likable, commendable } = payload;

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
};

//add reply tweet
export const createReplyTweet = async (payload) => {
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
};

//tweet like
export const tweetLike = async (tweetId) => {
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
};
//tweet unlike
export const tweetUnLike = async (tweetId) => {
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
};
