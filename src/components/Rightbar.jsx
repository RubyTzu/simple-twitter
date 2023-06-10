import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      console.log(data.data);
      // popularList.current = data.data;
    };
    showPopular();
  }, [token]);
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
                  <Link className={styles.popularUserNickName} to="#">
                    {`@${popular.name}`}
                  </Link>
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
