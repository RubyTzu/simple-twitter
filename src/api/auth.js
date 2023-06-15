import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";

export const login = async ({ account, password }) => {
  const { data } = await axios.post(`${baseUrl}/api/signin?from=front`, {
    account,
    password,
  });
  const authToken = data.token;
  // console.log(data.token);
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
  const { data } = await axios.post(`${baseUrl}/api/users`, {
    account,
    name,
    email,
    password,
    checkPassword,
  });
  const status = data.status;
  if (status === "success") {
    return { success: true, ...data };
  } else {
    return { success: false, ...data };
  }
};
