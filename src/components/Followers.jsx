import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Followers.module.scss";
import { useState } from "react";
import { addFollow, deleteFollow } from "api/follow";

export const Follower = ({ value }) => {
  const [isFollowing, setIsFollowing] = useState(value.isFollowing);
  return (
    <div className={styles.followContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
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
              } else {
                const res = await addFollow(value.followerId);
                console.log(res);
                setIsFollowing(!isFollowing);
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
