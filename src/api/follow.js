import axiosInstance from "./axiosInstance";

export const addFollow = async (id) => {
  const res = await axiosInstance.post(`/api/followships`, { id });
  return res;
};

export const deleteFollow = async (id) => {
  const res = await axiosInstance.delete(`/api/followships/${id}`);
  return res;
};
