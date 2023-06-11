import axios from "axios";
const token = localStorage.getItem("authToken");
const id = localStorage.getItem("id");
const baseUrl = "https://twitter-2023.herokuapp.com";

export const getUserProfile = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/users/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {}
};
