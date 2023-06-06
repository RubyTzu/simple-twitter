import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweet.module.scss";

export const Tweet = () => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} ${styles.cursorPointer}`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>Apple</p>
          <p className={styles.userNickName}>@apple・3小時</p>
        </header>
        <p className={styles.comment}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elitlaborum.
        </p>
        <footer className={styles.tweetFooter}>
          <div className={styles.replyButton}>
            <CommentSVG className={styles.commentIcon} />
            <p className={styles.commentCounts}>13</p>
          </div>
          <div className={styles.likeButton}>
            <LikeSVG />
            76
          </div>
        </footer>
      </div>
    </div>
  );
};
