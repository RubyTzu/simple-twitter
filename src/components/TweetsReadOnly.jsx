import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./TweetsReadOnly.module.scss";
import { Link } from "react-router-dom";

export const TweetReadOnly = ({ value }) => {
  return (
    <div className={styles.tweetContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
      <div className={styles.tweetTextContainer}>
        <header className={styles.tweetHeader}>
          <p className={styles.userName}>{value.User.name}</p>
          <p className={styles.nickNameTime}>
            <Link className={styles.userNickName}>@{value.User.name}</Link>
            ・12小時
          </p>
        </header>
        <p className={styles.replyTo}>
          回覆 <Link className={styles.replyNickName}>@{value.tweetUser}</Link>
        </p>
        <p className={styles.comment}>{value.comment}</p>
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

export const UserReplyTweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet) => {
        return <TweetReadOnly value={tweet} />;
      })}
    </div>
  );
};