import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");
const id = localStorage.getItem("id");

//homepage tweets
export const getTweets = async () => {
  const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

//推文tab
export const getUserTweets = async () => {
  const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

// 回覆tab
export const getUserReplies = async () => {
  const { data } = await axios.get(
    `${baseUrl}/api/users/${id}/replied_tweets`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};

//喜歡的內容tab, endpoint後端還沒做好"
export const getUserLikedTweets = async () => {
  const { data } = await axios.get(
    `${baseUrl}/api/users/${id}/tweets?liked=true`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};

//replylist裡單則貼文
export const getSingleTweet = async () => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/294`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};

//replylist 單則貼文的回覆
export const getSingleTweetReplies = async () => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/294/replies`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
// export const getAdminTweets = async () => {
//   const { data } = await axios.get(`${baseUrl}/api/admin/tweets`, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   return data.data;
// };
