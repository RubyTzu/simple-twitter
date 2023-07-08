import initialAvatar from "assets/GreyIcon.svg";
import styles from "./Rightbar.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addFollow, deleteFollow, showPopular } from "api/follow";
const id = localStorage.getItem("id");

export const Rightbar = () => {
  const [idFromButtonClick, setIdFromButtonClick] = useState(null);
  const [popularList, setPopularList] = useState([]);

  const handleAddFollowing = async (userId) => {
    await addFollow(userId);
    setIdFromButtonClick(userId);
  };

  const handleCancelFollowing = async (userId) => {
    await deleteFollow(userId);
    setIdFromButtonClick(userId);
  };

  const handleClick = async (id) => {
    await setIdFromButtonClick(Date.now());
  };

  useEffect(() => {
    (async () => setPopularList(await showPopular()))();
  }, [idFromButtonClick]);

  return (
    <div className={styles.rightbarContainer}>
      <div className={styles.popularbarContainer}>
        <h1 className={styles.RightbarTitle}>推薦跟隨</h1>

        <div className={styles.popularUserCollection}>
          {popularList.map((popular) => {
            return (
              <Fragment key={popular.id}>
                {Number(id) !== popular.id && (
                  <div className={styles.popularUser}>
                    {/* 以下不會有自己, 所以Link userself不會成立 */}
                    {Number(id) === popular.id ? (
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
                        if (!popular.isFollowing) {
                          await handleAddFollowing(popular.id);
                          window.location.reload();
                        } else {
                          await handleCancelFollowing(popular.id);
                          window.location.reload();
                        }
                        handleClick(popular.id);
                        window.location.reload();
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
