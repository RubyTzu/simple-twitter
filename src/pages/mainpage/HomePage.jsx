import avatar from "assets/Photo.png";
import { Tweets } from "components/Tweets";
import styles from "./HomePage.module.scss";
// import { useEffect } from "react";

export const HomePage = () => {
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
            src={avatar}
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
        <Tweets />
      </div>
    </>
  );
};
