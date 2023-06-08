import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweets.module.scss";
import { Link } from "react-router-dom";
import { AddReplyModal } from "./modals/AddReplyModal";

export const Tweet = () => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
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
          <Link
            type="Link"
            className={`${styles.replyButton}`}
            data-bs-toggle="modal"
            data-bs-target="#addReplyModal"
          >
            <CommentSVG className={styles.commentIcon} />
            <p className={styles.counts}>13</p>
          </Link>
          <AddReplyModal />
          <Link className={styles.likeButton} href="/">
            <LikeSVG className={styles.likeIcon} />
            <p className={styles.counts}>76</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export const Tweets = () => {
  return (
    <div className={styles.tweetsCollection}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export const UserTweets = () => {
  return (
    <div className={styles.tweetsCollection}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export const UserLikeTweets = () => {
  return (
    <div className={styles.tweetsCollection}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};