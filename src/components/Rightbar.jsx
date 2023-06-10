import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
const baseUrl = "https://twitter-2023.herokuapp.com";

export const Rightbar = () => {
  // const popularList = useRef([]);
  const [popularList, setPopularList] = useState([]);
  const token = localStorage.getItem("authToken");
  useEffect(() => {
    const showPopular = async () => {
      const { data } = await axios.get(`${baseUrl}/api/users/top`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setPopularList(data.data);
      // popularList.current = await data.data;
    };
    showPopular();
  }, []);
  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          {popularList.map((popular) => {
            return (
              <div className={styles.popularUser} key={popular.id}>
                <GreyIconSVG
                  className={`${styles.popularUserAvatar} cursorPointer`}
                />
                <div className={styles.userInfos}>
                  <p className={styles.popularUserName}>{popular.name}</p>
                  <a className={styles.popularUserNickName} href="/">
                    {`@${popular.name}`}
                  </a>
                </div>
                <button
                  className={
                    popular.isFollowing
                      ? styles.toNotFollowButton
                      : styles.toFollowButton
                  }
                >
                  {popular.isFollowing ? "正在跟隨" : "跟隨"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
