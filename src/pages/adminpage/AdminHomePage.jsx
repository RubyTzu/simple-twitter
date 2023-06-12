// import { getAdminTweets } from "api/tweet";
import styles from "./AdminHomePage.module.scss";
import { AdminTweet } from "components/AdminTweet";
import axios from "axios";
const baseUrl = "https://twitter-2023.herokuapp.com";
export const AdminHomePage = () => {
  const showUsersTweet = async () => {
    // const res = await getAdminTweets();
    // console.log(res);
    try {
      // const token = localStorage.getItem("authToken");
      const { data } = await axios.get(`${baseUrl}/api/admin/tweets`, {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiYWNjb3VudCI6InJvb3QiLCJuYW1lIjoicm9vdCIsImVtYWlsIjoicm9vdEBleGFtcGxlLmNvbSIsImludHJvZHVjdGlvbiI6bnVsbCwidGVsZXBob25lIjpudWxsLCJhdmF0YXIiOm51bGwsImNvdmVyUGhvdG8iOm51bGwsInJvbGUiOiIxIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0wN1QwMzoxMDo1Mi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0wN1QwMzoxMDo1Mi4wMDBaIiwiaWF0IjoxNjg2MTI3OTA3LCJleHAiOjE2ODY3MzI3MDd9.xx_97BGxoUlmmPsSAXi-FGJtX1c6CrU-3v65Zwawod0",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  showUsersTweet();
  return (
    <>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminHomePageTitle}>推文清單</h1>
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
