import initialAvatar from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = "https://twitter-2023.herokuapp.com";

export const Rightbar = () => {
  const [idFromButtonClick, setIdFromButtonClick] = useState(null);
  const [popularList, setPopularList] = useState([]);
  const token = localStorage.getItem("authToken");

  const handleAddFollowing = async (userId) => {
    console.log(`add following ${userId}`);
    try {
      await axios.post(
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
      setIdFromButtonClick(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelFollowing = async (userId) => {
    console.log(`cancel following ${userId}`);
    try {
      await axios.delete(`${baseUrl}/api/followships/${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setIdFromButtonClick(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (id) => {
    setIdFromButtonClick(Date.now());
    // console.log(`inside handleClick ${id}`);
    //  console.log(`inside handleClick 2 ${idFromButtonClick}`);
  };

  useEffect(() => {
    const showPopular = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/api/users/top`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPopularList(data);

        // console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    showPopular();
    // console.log(`inside useEffect ${idFromButtonClick}`);
  }, [token, idFromButtonClick]);

  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          {popularList.map((popular) => {
            return (
              <div className={styles.popularUser} key={popular.id}>
                <Link to="/userother">
                  <img
                    className={`${styles.popularUserAvatar} cursorPointer`}
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
                    if (!popular.isFollowing) {
                      handleAddFollowing(popular.id);
                    } else {
                      handleCancelFollowing(popular.id);
                    }
                    handleClick(popular.id);
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
