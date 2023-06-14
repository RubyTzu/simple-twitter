import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");


//add follow
export const addFollow = async (id) => {
  const res = await axios.post(
    `${baseUrl}/api/followships`,
    {id},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return res;
};

//delete follow
export const deleteFollow = async (id) => {
  const res = await axios.delete(
    `${baseUrl}/api/followships/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },      });
  return res;
};