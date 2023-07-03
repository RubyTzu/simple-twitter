import axiosInstance from "./axiosInstance";

export const updateInfo = async (payload) => {
  const { formData, id } = payload;
  try {
    const res = await axiosInstance.put(`/api/users/${id}`, formData);
    return res;
  } catch (error) {
    console.error("[upDate Info Failed] :" + error);
  }
};

export const removeCoverPhoto = async (id) => {
  try {
    const res = await axiosInstance.put(
      `/api/users/${id}?coverPhoto=null`,
      null
    );
    return res;
  } catch (error) {
    console.error("[upDate Info Failed] :" + error);
  }
};
