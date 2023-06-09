import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweets.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AddReplyModal } from "./modals/AddReplyModal";

export const Tweet = ({ value }) => {
  let navigate = useNavigate();

  const handleTweetClick = () => {
    navigate("/replylist");
  };

  return (
    <div className={styles.openReplyList} onClick={handleTweetClick}>
      <div className={styles.tweetContainer}>
        <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
        <div className={styles.tweetTextContainer}>
          <header className={styles.tweetHeader}>
            <p className={styles.userName}>{value.User.name}</p>
            <p
              className={styles.userNickName}
            >{`@${value.User.name}・3小時`}</p>
          </header>
          <p className={styles.comment}>{value.description}</p>
          <footer className={styles.tweetFooter}>
            <Link
              type="Link"
              className={`${styles.replyButton}`}
              data-bs-toggle="modal"
              data-bs-target="#addReplyModal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CommentSVG className={styles.commentIcon} />
              <p className={styles.counts}>{value.likesCount}</p>
            </Link>
            <AddReplyModal />
            <Link
              className={styles.likeButton}
              href="/"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <LikeSVG className={styles.likeIcon} />
              <p className={styles.counts}>{value.repliesCount}</p>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export const Tweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      <Tweet value={value} />
      {/* <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet /> */}
    </div>
  );
};

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
