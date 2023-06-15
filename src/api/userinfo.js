import axios from "axios";
const token = localStorage.getItem("authToken");
const baseUrl = "https://twitter-2023.herokuapp.com";
export const getProfile = async (id) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFollowCounts = async (id) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/users/${id}/follow_counts`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async (user) => {
  const id = localStorage.getItem("id");
  console.log(user);
  try {
    const data = axios.put(
      `${baseUrl}/api/users/${id}?setting=account`,
      {
        account: user.account,
        name: user.name,
        email: user.email,
        // password: user.password,
        // passwordCheck: user.passwordCheck,
        password: user.password,
        checkPassword: user.checkPassword,
        introduction: user.introduction,
        // avatar: null,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
