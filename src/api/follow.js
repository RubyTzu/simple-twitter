import axiosInstance from "./axiosInstance";

export const addFollow = async (id) => {
  try {
    const res = await axiosInstance.post(`/api/followships`, { id });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const deleteFollow = async (id) => {
  try {
    const res = await axiosInstance.delete(`/api/followships/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const showFollowers = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}/followers`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const showFollowings = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/api/users/${id}/followings`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
