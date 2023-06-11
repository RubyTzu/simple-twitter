import axios from "axios";
const token = localStorage.getItem("authToken");
const id = localStorage.getItem("id");
const baseUrl = "https://twitter-2023.herokuapp.com";

export const getProfile = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {}
};

export const getFollowCounts = async () => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/users/${id}/follow_counts`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data.data;
  } catch (error) {}
};
