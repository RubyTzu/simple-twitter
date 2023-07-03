import GreyIconSVG from "assets/GreyIcon.svg";
import styles from "./Followings.module.scss";
import { deleteFollow } from "api/follow";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Following = ({ value }) => {
  const [isFollowing, setIsFollowing] = useState(true);
  return (
    <div className={styles.followContainer}>
      <Link
        to={`/userother/${value.followingId}`}
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
            className={styles.toNotFollowButton}
            onClick={async () => {
              await deleteFollow(value.followingId);
              setIsFollowing(!isFollowing);
              const reload = () => window.location.reload();
              reload();
            }}
          >
            正在跟隨
          </button>
        </header>
        <p className={styles.comment}>{value.introduction}</p>
      </div>
    </div>
  );
};

export const Followings = ({ followings }) => {
  return (
    <div className={styles.followsCollection}>
      {followings.map((following) => {
        return <Following key={following.id} value={following} />;
      })}
    </div>
  );
};
