import userInitialAvatar from "assets/GreyIcon.svg";
import CommentSVG from "assets/Comment.svg";
import LikeSVG from "assets/Like.svg";
import LikePress from "assets/LikePress.svg";
import styles from "./Tweets.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//TODO:要處理AddReplyModal時將下面兩個comment打開
import Button from "react-bootstrap/Button";
import { AddReplyModal } from "./modals/AddReplyModal";
import { useTweet } from "context/tweetContext";
import { getSingleTweet, tweetLike, tweetUnLike } from "api/tweet";
const id = localStorage.getItem("id");

export const Tweet = ({ value }) => {
  const [likesCount, setLikesCount] = useState(value.likesCount);
  const [isLiked, setIsLiked] = useState(value.isLiked);
  let navigate = useNavigate();

  // del
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // del

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const timestampDate = new Date(timestamp);
    const timeDifference = now - timestampDate;
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor(timeDifference / 60000);

    // 檢查是否剛剛發布
    if (timeDifference < 60000) {
      // 60000 毫秒 = 1 分鐘
      return "剛才";
    } else if (timeDifference < 3600000) {
      // 3600000 毫秒 = 1 小時
      return minutes + "分鐘";
    } else if (timeDifference < 86400000) {
      // 86400000 毫秒 = 24 小時
      return hours + "小時";
    }

    const formattedDate = timestampDate.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
    // 範例使用
    // const timestamp = "2023-06-13T06:07:56.000Z";
    // const formattedTimestamp = formatTimestamp(timestamp);
    // console.log(formattedTimestamp);
  };

  return (
    <div
      className={styles.openReplyList}
      onClick={() => navigate(`/replylist/${value.id}`)}
    >
      <div className={styles.tweetContainer}>
        {Number(id) === value.UserId ? (
          <Link to={`/userself/${value.UserId}`}>
            <img
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${styles.userAvatar} cursorPointer`}
              src={value.avatar === null ? userInitialAvatar : value.avatar}
              alt="userAvatar"
            />
          </Link>
        ) : (
          <Link to={`/userother/${value.UserId}`}>
            <img
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={`${styles.userAvatar} cursorPointer`}
              src={value.avatar === null ? userInitialAvatar : value.avatar}
              alt="userAvatar"
            />
          </Link>
        )}
        <div className={styles.tweetTextContainer}>
          <header className={styles.tweetHeader}>
            <p className={styles.userName}>{value.name}</p>
            <p className={styles.userNickName}>{`@${
              value.account
            }・${formatTimestamp(value.createdAt)}`}</p>
          </header>
          <p className={styles.comment}>{value.description}</p>
          <footer className={styles.tweetFooter}>
            <Button
              className={styles.replyButton}
              // variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleShow();
              }}
            >
              <img
                src={CommentSVG}
                alt="CommentSVG"
                className={styles.commentIcon}
              />
              <p className={styles.counts}>{value.repliesCount}</p>
            </Button>
            <AddReplyModal
              handleClose={handleClose}
              show={show}
              twtId={value.id}
            />
            <div
              className={styles.likeButton}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                src={isLiked ? LikePress : LikeSVG}
                alt="LikeSVG"
                className={styles.likeIcon}
                onClick={async () => {
                  isLiked
                    ? await tweetUnLike(value.id)
                    : await tweetLike(value.id);
                  const res = await getSingleTweet(value.id);
                  //value是在homepage打api取得後傳下來的, 在tweet裡無法即時更新, 因此在裡面設自己的state來更新comp
                  setLikesCount(res.likesCount);
                  setIsLiked(res.isLiked);
                }}
              />
              <p className={styles.counts}>{likesCount}</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export const UserTweets = () => {
  const { userTweets } = useTweet();
  if (!userTweets) return;
  return (
    <div className={styles.tweetsCollection}>
      {userTweets.map((tweet) => {
        return <Tweet key={tweet.id} value={tweet} />;
      })}
    </div>
  );
};

export const UserLikeTweets = () => {
  const { userLikedTweets } = useTweet();
  if (!userLikedTweets) return;
  return (
    <div className={styles.tweetsCollection}>
      {userLikedTweets.map((tweet) => {
        return <Tweet key={tweet.id} value={tweet} />;
      })}
    </div>
  );
};
