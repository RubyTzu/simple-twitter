import initialAvatar from "assets/GreyIcon.svg";
import { Tweet } from "components/Tweets";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";
import { useTweet } from "context/tweetContext";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "context/userInfoContext";

export const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const {
    allTweets,
    inputValue,
    setInputValue,
    showAlert,
    setShowAlert,
    onInput,
    onAddTweetClick,
  } = useTweet();
  const { currentUser } = useCurrentUser();
  const [avatar, setAvatar] = useState("");
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    } else return;
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const showAvatar = async () => {
      setAvatar(currentUser.avatar);
    };
    showAvatar();
    console.log("hello from useEffect-HomePage");
  }, [id, currentUser.avatar]);


  return (
    <>
      <div className={styles.mainbarContainer}>
        <h1 className={styles.homePageTitle}>首頁</h1>
        <div className={styles.addTweetSection}>
          <img
            className={styles.addTweetAvatar}
            src={avatar === null ? initialAvatar : avatar}
            alt="avatar"
          ></img>
          <div className={styles.addTweetSpace}>
            <textarea
              className={styles.addTweetTextarea}
              placeholder="有什麼新鮮事？"
              value={inputValue}
              onInput={onInput}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />

            <div className={styles.addTweetSpacefooter}>
              <p className={styles.wordLimitHint}>
                {showAlert && inputValue.length === 0 && "內容不可空白"}
                {showAlert && inputValue.length > 140 && "字數不可超過 140 字"}
              </p>
              <button
                className={`${styles.tweetButton} cursorPointer`}
                onClick={() => {
                  if (inputValue.length === 0 || inputValue.length > 140) {
                    setShowAlert(true);
                  } else {
                    onAddTweetClick();
                    navigate(0);
                  }
                }}
              >
                推文
              </button>
            </div>
          </div>
        </div>
        {allTweets.map((tweet) => {
          return <Tweet key={tweet.id} value={tweet} />;
        })}
      </div>
    </>
  );
};
