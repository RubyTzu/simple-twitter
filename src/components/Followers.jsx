import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Followers.module.scss";

export const Follower = ({ value }) => {
  return (
    <div className={styles.followContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
      <div className={styles.followTextContainer}>
        <header className={styles.followHeader}>
          <p className={styles.userName}>{value.name}</p>
          <button className={styles.toFollowButton}>跟隨</button>
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
        return <Follower key={follower.id} value={follower} />;
      })}
    </div>
  );
};
