import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweet.module.scss";

export const Tweet = () => {
  return (
    <>
      <GreyIconSVG className={`${styles.userAvatar}${styles.cursorPointer}`} />
      <div className={styles.tweetContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>Apple</p>
          <p className={styles.userNickName}>@apple</p>
          <p>・3小時</p>
        </header>
        <p className={styles.comment}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
        <footer className={styles.tweetFooter}>
          <button clasName={styles.replyButton}>
            <CommentSVG />
            13
          </button>
          <button clasName={styles.likeButton}>
            <LikeSVG />
            76
          </button>
        </footer>
      </div>
    </>
  );
};
