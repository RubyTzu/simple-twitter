import initialAvatar from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addFollow, deleteFollow } from "api/follow";

const baseUrl = "https://twitter-2023.herokuapp.com";

const getId = () => {
  const id = localStorage.getItem("id");
  return Number(id);
};

export const Rightbar = () => {
  const [idFromButtonClick, setIdFromButtonClick] = useState(null);
  const [popularList, setPopularList] = useState([]);
  const token = localStorage.getItem("authToken");

  const handleAddFollowing = async (userId) => {
    console.log(`add following ${userId}`);
    try {
      await addFollow(userId);
      setIdFromButtonClick(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelFollowing = async (userId) => {
    console.log(`cancel following ${userId}`);
    try {
      await deleteFollow(userId);
      setIdFromButtonClick(userId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (id) => {
    await setIdFromButtonClick(Date.now());
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

    // console.log(`Rightbar useEffect idFromButtonClick ${idFromButtonClick}`);
  }, [token, idFromButtonClick]);

  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          {popularList.map((popular) => {
            return (
              <Fragment key={popular.id}>
                {getId() !== popular.id && (
                  <div className={styles.popularUser}>
                    {/* 以下不會有自己, 所以Link userself不會成立 */}
                    {getId() === popular.id ? (
                      <Link to={`/userself/${popular.id}`}>
                        <img
                          className={`${styles.popularUserAvatar} cursorPointer`}
                          src={
                            popular.avatar !== null
                              ? popular.avatar
                              : initialAvatar
                          }
                          alt="avatar"
                        ></img>
                      </Link>
                    ) : (
                      <Link to={`/userother/${popular.id}`}>
                        <img
                          className={`${styles.popularUserAvatar} cursorPointer`}
                          src={
                            popular.avatar !== null
                              ? popular.avatar
                              : initialAvatar
                          }
                          alt="avatar"
                        ></img>
                      </Link>
                    )}

                    <div className={styles.userInfos}>
                      <p className={styles.popularUserName}>{popular.name}</p>
                      <Link className={styles.popularUserNickName} to="#">
                        {`@${popular.account}`}
                      </Link>
                    </div>
                    <button
                      className={
                        popular.isFollowing
                          ? styles.toNotFollowButton
                          : styles.toFollowButton
                      }
                      onClick={async () => {
                        // const reload = () => window.location.reload();
                        if (!popular.isFollowing) {
                          await handleAddFollowing(popular.id);
                          // reload();
                        } else {
                          await handleCancelFollowing(popular.id);
                          // reload();
                        }
                        handleClick(popular.id);
                        // reload();
                      }}
                    >
                      {popular.isFollowing ? "正在跟隨" : "跟隨"}
                    </button>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
