import initialAvatar from "assets/GreyIcon.svg";
import { Tweet } from "components/Tweets";
import styles from "./HomePage.module.scss";
import { useEffect, useState } from "react";
import { getTweets, createTweet } from "api/tweet";
import { useAuth } from "context/authContext";
import { useNavigate } from "react-router-dom";
import { getProfile } from "api/userinfo";

export const HomePage = () => {
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { isAuthenticated } = useAuth();
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
      const profile = await getProfile(id);
      setAvatar(profile.avatar);
    };
    const showTweets = async () => setTweets(await getTweets(id));
    showAvatar();
    showTweets();
    // console.log(currentUser.avatar === avatar);
  }, [id]);

  useEffect(() => {
    console.log(showAlert);
  }, [showAlert]);

  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleAddTweet = async () => {
    if (inputValue.length === 0) {
      return;
    }

    await createTweet({
      description: inputValue,
      likable: 1,
      commendable: 1,
    });

    const reload = () => window.location.reload();
    reload();
  };

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
              onInput={handleAddTweetHeight}
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
                    handleAddTweet();
                  }
                }}
              >
                推文
              </button>
            </div>
          </div>
        </div>
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} value={tweet} />;
        })}
      </div>
    </>
  );
};
