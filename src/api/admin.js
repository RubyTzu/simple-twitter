// import axios from "axios";
// const baseUrl = "https://twitter-2023.herokuapp.com";

// // export const adminLogin = async ({ account, password }) => {
// //   const { data } = await axios.post(`${baseUrl}/api/signin`, {
// //     account,
// //     password,
// //   });
// //   const authToken = data.token;
// //   console.log(data.data.user.role);
// //   if (authToken) {
// //     return { success: true, ...data };
// //   } else {
// //     return { success: false, ...data };
// //   }
// // };


// export const getusers = async() => {
// try{
// const res = await axios.get(`${baseUrl}/api/admin/users`);
// console.log(res);

// } catch(error){
// console.error('[Get Users failed]: ', error);
// }
// }