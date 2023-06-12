import axios from "axios";
const token = localStorage.getItem("authToken");
const baseUrl = "https://twitter-2023.herokuapp.com";
// const id = localStorage.getItem("id");
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
