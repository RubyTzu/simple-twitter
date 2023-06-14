import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import DeleteIcon from "assets/DeleteIcon.svg";
import styles from "./AdminTweet.module.scss";

export const AdminTweet = ({ value, onDelete }) => {
  const stringSlice = () => {
    if (value.description.length >= 50) {
      return value.description.slice(0, 50) + "...";
    } else {
      return value.description;
    }
  };
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} ${styles.cursorPointer}`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>{value.name}</p>
          <p className={styles.userNickName}>
            @{value.name}・{value.lastUpdated}
          </p>
          <img
            data-id={value.id}
            src={DeleteIcon}
            alt="DeleteIcon"
            className={styles.deleteBtn}
            onClick={onDelete}
          />
        </header>
        <p className={styles.comment}>{stringSlice()}</p>
      </div>
    </div>
  );
};
