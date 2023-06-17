import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/signin?from=front`, {
      account,
      password,
    });
    const authToken = data.token;
    // console.log(data.token);
    if (authToken) {
      return { success: true, ...data };
    }
    
    // if (data === "Account incorrect") {
    //   return { success: false, message: data };
    // }
  } catch (error) {
    return { success: false, message: error };
  }
};

export const adminLogin = async ({ account, password }) => {
  const { data } = await axios.post(`${baseUrl}/api/signin?from=back`, {
    account,
    password,
  });
  const authToken = data.token;
  console.log("api 成功");
  if (authToken) {
    return { success: true, ...data };
  } else {
    return { success: false, ...data };
  }
};

export const register = async ({
  account,
  name,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    // console.log(`${data} 在auth裏`);
    if (data) {
      return { success: true, message: data };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
