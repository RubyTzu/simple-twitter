import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
const token = localStorage.getItem("authToken");


export const updateInfo = async(payload) => {
      const { formData, id } = payload;
      try{
        const res = await axios.put(
          `${baseUrl}/api/users/${id}`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        return res
      } catch(error) {
        console.error('[upDate Info Failed] :' + error)
      }
}

export const removeCoverPhoto = async(id) => {

      try{
        const res = await axios.put(
          `${baseUrl}/api/users/${id}?coverPhoto=null`,
          null,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        return res
      } catch(error) {
        console.error('[upDate Info Failed] :' + error)
      }
}
