import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as DeleteIcon } from "assets/DeleteIcon.svg";

import styles from "./AdminTweet.module.scss";

export const AdminTweet = () => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} ${styles.cursorPointer}`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>Apple</p>
          <p className={styles.userNickName}>@apple・3小時</p>
          <DeleteIcon className={styles.deleteBtn} />
        </header>
        <p className={styles.comment}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elitlaborum.
        </p>
      </div>
    </div>
  );
};
