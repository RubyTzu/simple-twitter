import axiosInstance from "./axiosInstance";

export const getTweets = async () => {
  try {
    const { data } = await axiosInstance.get(`/api/admin/tweets`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance.get(`/api/admin/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTweet = async (id) => {
  try {
    const { data } = await axiosInstance.delete(`/api/admin/tweets/${id}`, {
      param: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
