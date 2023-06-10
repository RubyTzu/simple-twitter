import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import styles from "./Tweets.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AddReplyModal } from "./modals/AddReplyModal";

export const Tweet = ({ tweet }) => {
  let navigate = useNavigate();
  // console.log(tweet);
  const handleTweetClick = () => {
    navigate("/replylist");
  };

  return (
    <div className={styles.openReplyList} onClick={handleTweetClick}>
      <div className={styles.tweetContainer}>
        <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
        <div className={styles.tweetTextContainer}>
          <header className={styles.tweetHeader}>
            <p className={styles.userName}>{tweet.User.name}</p>
            <p
              className={styles.userNickName}
            >{`@${tweet.User.name}・3小時`}</p>
          </header>
          <p className={styles.comment}>{tweet.description}</p>
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
              <p className={styles.counts}>{tweet.likesCount}</p>
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
              <p className={styles.counts}>{tweet.repliesCount}</p>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export const Tweets = ({ value }) => {
  console.log(value);
  return (
    <div className={styles.tweetsCollection}>
      <Tweet value={value} />
    </div>
  );
};

export const UserTweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </div>
  );
};

export const UserLikeTweets = ({ value }) => {
  return (
    <div className={styles.tweetsCollection}>
      {value.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </div>
  );
};
