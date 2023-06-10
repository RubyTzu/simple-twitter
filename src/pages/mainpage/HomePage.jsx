import avatar from "assets/Photo.png";
import { Tweet } from "components/Tweets";
import styles from "./HomePage.module.scss";
// import { useAuth } from "context/authContext";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "https://twitter-2023.herokuapp.com";

export const HomePage = () => {
  const [user, setUser] = useState();
  const [tweets, setTweets] = useState([]);
  const token = localStorage.getItem("authToken");
  const id = localStorage.getItem("id");

  useEffect(() => {
    const showUserProfile = async () => {
      try {
        const id = localStorage.getItem("id");
        const { data } = await axios.get(`${baseUrl}/api/users/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(data.data);
        console.log(user);
      } catch (error) {}
    };
    const getTweets = async () => {
      const { data } = await axios.get(`${baseUrl}/api/users/${id}/tweets`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(data.data);
      setTweets(data.data);
      console.log(data.data);
    };
    showUserProfile();
    getTweets();
  }, [id, token, user]);

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
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })}
      </div>
    </>
  );
};
