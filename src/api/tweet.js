import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");

//homepage tweets
export const getTweets = async (id) => {
  //!!!!!要再加follow=true!!!!!
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
export const getSingleTweet = async () => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/294`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

//replylist 單則貼文的回覆
export const getSingleTweetReplies = async () => {
  const { data } = await axios.get(`${baseUrl}/api/tweets/294/replies`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
// export const getAdminTweets = async () => {
//   const { data } = await axios.get(`${baseUrl}/api/admin/tweets`, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   return data.data;
// };
