// import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import GreyIconSVG from "assets/GreyIcon.svg";

import styles from "./Followers.module.scss";
import { useState } from "react";
import { addFollow, deleteFollow } from "api/follow";
import { Link } from "react-router-dom";

export const Follower = ({ value }) => {
  const [isFollowing, setIsFollowing] = useState(value.isFollowing);
  return (
    <div className={styles.followContainer}>
      <Link
        to={`/userother/${value.followerId}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={value.avatar ? value.avatar : GreyIconSVG}
          alt="avatar"
          className={`${styles.userAvatar} cursorPointer`}
        />
      </Link>

      <div className={styles.followTextContainer}>
        <header className={styles.followHeader}>
          <p className={styles.userName}>{value.name}</p>
          <button
            className={
              isFollowing ? styles.toNotFollowButton : styles.toFollowButton
            }
            onClick={async () => {
              if (isFollowing) {
                const res = await deleteFollow(value.followerId);
                console.log(res);
                setIsFollowing(!isFollowing);
                const reload = () => window.location.reload();
                reload();
              } else {
                const res = await addFollow(value.followerId);
                console.log(res);
                setIsFollowing(!isFollowing);
                const reload = () => window.location.reload();
                reload();
              }
            }}
            // }}
          >
            {isFollowing ? "正在跟隨" : "跟隨"}
          </button>
        </header>
        <p className={styles.comment}>{value.introduction}</p>
      </div>
    </div>
  );
};

export const Followers = ({ followers }) => {
  return (
    <div className={styles.followsCollection}>
      {followers.map((follower) => {
        return <Follower key={follower.followerId} value={follower} />;
      })}
    </div>
  );
};
