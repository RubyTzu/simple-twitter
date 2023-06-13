import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");

// // export const adminLogin = async ({ account, password }) => {
// //   const { data } = await axios.post(`${baseUrl}/api/signin`, {
// //     account,
// //     password,
// //   });
// //   const authToken = data.token;
// //   console.log(data.data.user.role);
// //   if (authToken) {
// //     return { success: true, ...data };
// //   } else {
// //     return { success: false, ...data };
// //   }
// // };

export const login = async ({ account, password }) => {
  const { data } = await axios.post(`${baseUrl}/api/signin?from=back`, {
    account,
    password,
  });
  const authToken = data.token;
  console.log(data.token);
  if (authToken) {
    return { success: true, ...data };
  } else {
    return { success: false, ...data };
  }
};

export const getTweets = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/admin/tweets`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/admin/users`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTweet = async (id) => {
  try {
    const { data } = await axios.delete(`${baseUrl}/api/admin/tweets/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      param: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
