// import { getAdminTweets } from "api/tweet";
import styles from "./AdminHomePage.module.scss";
// import { AdminTweet } from "components/AdminTweet";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://twitter-2023.herokuapp.com";
export const AdminHomePage = () => {
  const [tweets, setTweets] = useState();
  useEffect(() => {
    const showUsersTweet = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const { data } = await axios.get(`${baseUrl}/api/admin/tweets`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(data);
        setTweets(data);
      } catch (error) {
        console.log(error);
      }
    };
    showUsersTweet();
  }, []);

  return (
    <>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminHomePageTitle}>推文清單</h1>
        <div className={styles.titleLine}></div>
        <div className={styles.adminTweetCollection}>
          {console.log(tweets)}
          {/* {tweets.map((tweet) => {
            return <AdminTweet key={tweet.id} value={tweet} />;
          })} */}
        </div>
      </div>
    </>
  );
};
