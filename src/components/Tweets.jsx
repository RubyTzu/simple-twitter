import userInitialAvatar from "assets/GreyIcon.svg";
import CommentSVG from "assets/Comment.svg";
import LikeSVG from "assets/Like.svg";
import LikePress from "assets/LikePress.svg";
import styles from "./Tweets.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//TODO:要處理AddReplyModal時將下面兩個comment打開
// import { AddReplyModal } from "./modals/AddReplyModal";
// import { createReplyTweet } from "../api/tweet";
import { useClickLike } from "context/clickLikeContext";
import { useTweet } from "context/tweetContext";
// import { getTweets } from "api/tweet";
const id = localStorage.getItem("id");
const getId = () => {
  return Number(id);
};

export const Tweet = ({ value }) => {
  const [likesCount, setLikesCount] = useState(value.likesCount);
  const [isLiked, setIsLiked] = useState(value.isLiked);
  const { clickLike } = useClickLike();
  let navigate = useNavigate();

  //TODO:要處理AddReplyModal時將下面四個comment打開
  // const [selectTweetId, setSelectTweetId] = useState(104);
  // const [inputValue, setInputValue] = useState("");
  // const [showModal, setShowModal] = useState(false);

  // const handleAddTweet = async () => {
  //   if (inputValue.length === 0 || inputValue.length > 140) {
  //     return;
  //   } else {
  //     await createReplyTweet({
  //       comment: inputValue,
  //       id: selectTweetId,
  //     });

  //     const reload = () => window.location.reload();
  //     reload();
  //   }
  // };

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
        {getId() === value.UserId ? (
          <Link
            to={`/userself/${value.UserId}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
              className={`${styles.userAvatar} cursorPointer`}
              src={value.avatar === null ? userInitialAvatar : value.avatar}
              alt="userAvatar"
            />
          </Link>
        ) : (
          <Link
            to={`/userother/${value.UserId}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
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
            <Link
              type="Link"
              className={`${styles.replyButton}`}
              //TODO:要處理AddReplyModal時將下面兩個comment打開
              // data-bs-toggle="modal"
              // data-bs-target={`#addReplyModal${value.id}`}
              onClick={async (e) => {
                // e.stopPropagation();
                console.log(value.id);
                //TODO:要處理AddReplyModal時將下面三個comment打開
                // setSelectTweetId(value.id);
                // setShowModal(true);
                // setIsOpen(true);
                // console.log(`comment button :${selectTweetId}`);
              }}
            >
              <img
                src={CommentSVG}
                alt="CommentSVG"
                className={styles.commentIcon}
              />
              <p className={styles.counts}>{value.repliesCount}</p>
            </Link>
            <Link
              className={styles.likeButton}
              href="/"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                src={isLiked ? LikePress : LikeSVG}
                alt="LikeSVG"
                className={styles.likeIcon}
                data-id={value.id}
                onClick={async (e) => {
                  const res = await clickLike(e, isLiked);
                  setLikesCount(likesCount + res);
                  setIsLiked(!isLiked);
                }}
              />

              <p className={styles.counts}>{likesCount}</p>
            </Link>
          </footer>
          {/* TODO:要處理AddReplyModal時將下面一個comment打開 */}

          {/* {showModal && (
            <AddReplyModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onClick={() => {
                handleAddTweet();
              }}
              onChange={(value) => {
                setInputValue(value);
              }}
              inputValue={inputValue}
              tweetId={value.id}
            />
          )} */}
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
