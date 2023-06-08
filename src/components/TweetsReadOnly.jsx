import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./TweetsReadOnly.module.scss";
import { Link } from "react-router-dom";

export const TweetReadOnly = () => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>Devon Lane</p>
          <p className={styles.nickNameTime}>
            <Link className={styles.userNickName}>@devon_lane</Link>・12小時
          </p>
        </header>
        <p className={styles.replyTo}>
          回覆 <Link className={styles.replyNickName}>@apple</Link>
        </p>
        <p className={styles.comment}>
          former apple engineer shares a simple DIY fix to seal your surgical
          mask
        </p>
      </div>
    </div>
  );
};

export const TweetsReadOnly = () => {
  return (
    <div className={styles.replyTweetsCollection}>
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
    </div>
  );
};

export const UserReplyTweets = () => {
  return (
    <div className={styles.tweetsCollection}>
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
      <TweetReadOnly />
    </div>
  );
};