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
        console.log(res.data);
        return res.data
      } catch(error) {
        console.error('[upDate Info Failed] :' + error)
      }
}