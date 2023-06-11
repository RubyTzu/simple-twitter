// import avatar from "assets/Photo.png";
import initialAvatar from "assets/GreyIcon.svg";
import { Tweet } from "components/Tweets";
import styles from "./HomePage.module.scss";
// import { useAuth } from "context/authContext";
import { useEffect, useRef, useState } from "react";
import { getTweets } from "api/tweet";
import { getUserProfile } from "api/userinfo";

export const HomePage = () => {
  const userAvatar = useRef("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const showUserAvatar = async () => {
      const user = await getUserProfile();
      userAvatar.current = user.avatar;
      if (userAvatar.current === null) {
        return (userAvatar.current = initialAvatar);
      }
    };
    const showTweets = async () => setTweets(await getTweets());
    showUserAvatar();
    showTweets();
  }, [userAvatar]);

  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      <div className={styles.mainbarContainer}>
        <h1 className={styles.homePageTitle}>首頁</h1>
        <div className={styles.addTweetSection}>
          <img
            className={styles.addTweetAvatar}
            src={userAvatar.current}
            alt="avatar"
          ></img>
          <div className={styles.addTweetSpace}>
            <textarea
              className={styles.addTweetTextarea}
              placeholder="有什麼新鮮事？"
              onInput={handleAddTweetHeight}
            />
            <button
              className={`${styles.tweetButton} cursorPointer`}
              onClick={() => console.log("ok!")}
            >
              推文
            </button>
          </div>
        </div>
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} value={tweet} />;
        })}
      </div>
    </>
  );
};
