import initialAvatar from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
// import { followUser } from "../api/popular";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://twitter-2023.herokuapp.com";

export const Rightbar = () => {
  // const popularList = useRef([]);
  const [popularList, setPopularList] = useState([]);
  const token = localStorage.getItem("authToken");

  const handleFollowing = async (userId) => {
  console.log(userId)
    try {
      const res = await axios.post(
        `${baseUrl}/api/followships`,
        {
          id: userId,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const showPopular = async () => {
      const { data } = await axios.get(`${baseUrl}/api/users/top`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setPopularList(data.data);
      // console.log(data.data);
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
                <Link
                  className={`${styles.popularUserAvatar} cursorPointer`}
                  to="/userother"
                >
                  <img
                    src={
                      popular.avatar !== null ? popular.avatar : initialAvatar
                    }
                    alt="avatar"
                  ></img>
                </Link>

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
                  onClick={() => {
                    handleFollowing(popular.id);
                  }}
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
