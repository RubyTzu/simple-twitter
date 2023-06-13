import styles from "./AdminHomePage.module.scss";
import { AdminTweet } from "components/AdminTweet";
import { useEffect, useState } from "react";
import { deleteTweet, getTweets } from "api/admin";
export const AdminHomePage = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const showTweets = async () => setTweets(await getTweets());
    showTweets();
  }, []);
  const handleDelete = async (e) => {
    const id = e.target.dataset.id;
    await deleteTweet(id);
    setTweets(await getTweets());
    console.log(`第${id}號推文已被刪除`);
  };

  return (
    <>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminHomePageTitle}>推文清單</h1>
        <div className={styles.titleLine}></div>
        <div className={styles.adminTweetCollection}>
          {tweets.map((tweet) => {
            return (
              <AdminTweet
                key={tweet.id}
                value={tweet}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
