import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as DeleteIcon } from "assets/DeleteIcon.svg";

import styles from "./AdminTweet.module.scss";

export const AdminTweet = ({ value }) => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} ${styles.cursorPointer}`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>{value.name}</p>
          <p className={styles.userNickName}>@{value.name}・3小時</p>
          <DeleteIcon className={styles.deleteBtn} />
        </header>
        <p className={styles.comment}>{value.description}</p>
      </div>
    </div>
  );
};
