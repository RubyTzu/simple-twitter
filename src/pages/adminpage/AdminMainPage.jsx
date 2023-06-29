import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminMainPage.module.scss";
import { useAuth } from "context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import { AdminTweet } from "components/AdminTweet";
// import axios from "axios";
// const baseUrl = "https://twitter-2023.herokuapp.com";
export const AdminMainPage = ({ rightContent }) => {
  const { admIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admIsAuthenticated) navigate("/admin/login");
  }, [navigate, admIsAuthenticated]);

  // const showUsers = async () => {
  //   try {
  //     console.log("OK");
  //     const token = localStorage.getItem("authToken");
  //     const data = await axios.get(`${baseUrl}/api/admin/users`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.adminMainPageContainer}>
      <AdminNavbar />
      {rightContent}
    </div>
  );
};
