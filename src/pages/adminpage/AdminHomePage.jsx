import styles from "./AdminHomePage.module.scss";
import { AdminTweet } from "components/AdminTweet";
import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
export const AdminHomePage = () => {
  const showUsers = async () => {
    try {
      console.log("OK");
      const token = localStorage.getItem("authToken");
      const data = await axios.get(`${baseUrl}/api/admin/tweets`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminHomePageTitle} onClick={showUsers}>
          推文清單
        </h1>
        <div className={styles.titleLine}></div>
        <div className={styles.adminTweetCollection}>
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
        </div>
      </div>
    </>
  );
};
