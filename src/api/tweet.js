// import axios from "axios";
// import { useState } from "react";

// const baseUrl = "https://twitter-2023.herokuapp.com";

// const [tweets, setTweets] = useState([]);
// export const getUserTweets = async () => {
//   const token = localStorage.getItem("authToken");
//   const id = localStorage.getItem("id");

//   const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   console.log(data.data);
//   setTweets(data.data);
// };
