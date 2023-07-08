import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getProfile = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFollowCounts = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}/follow_counts`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async (user) => {
  const id = localStorage.getItem("id");
  console.log(user);
  try {
    const { data } = await axiosInstance.put(
      `/api/users/${id}?setting=account`,
      {
        account: user.account,
        name: user.name,
        email: user.email,
        password: user.password,
        checkPassword: user.checkPassword,
        introduction: user.introduction,
      }
    );
    return { success: true, data: data };
  } catch (error) {
    console.error(error);
    return { success: false, data: error };
  }
};

export const getWord = async () => {
  try {
    const res = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    return res;
  } catch (error) {
    console.error("error from this api" + error);
  }
};
