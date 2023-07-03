import initialAvatar from "assets/GreyIcon.svg";
import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import LikeSVG from "assets/Like.svg";
import LikePress from "assets/LikePress.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TweetReadOnly } from "components/TweetsReadOnly";
import styles from "./ReplyListPage.module.scss";
import { AddReplyModalinReplyList } from "components/modals/AddReplyModalinReplyList";
import {
  getSingleTweet,
  getSingleTweetReplies,
  tweetLike,
  tweetUnLike,
} from "api/tweet";
import { useEffect } from "react";
import { useTweet } from "context/tweetContext";
const id = localStorage.getItem("id");

export const ReplyListPage = () => {
  const {
    singleTweet,
    setSingleTweet,
    replyListReplies,
    setReplyListReplies,
    addTweetRefresh,
  } = useTweet();

  const { tweetId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const showPage = async () => {
      setSingleTweet(await getSingleTweet(tweetId));
      setReplyListReplies(await getSingleTweetReplies(tweetId));
    };
    showPage();
  }, [tweetId, setReplyListReplies, setSingleTweet, addTweetRefresh]);

  const formatTimestamp = (timestamp) => {
    const timestampDate = new Date(timestamp);
    const formattedDate = timestampDate.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = timestampDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedTime}・${formattedDate}`;
  };

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.replyListHeader}>
          <Link className={styles.link} onClick={() => navigate(-1)}>
            <BackSVG className={styles.logo} />
          </Link>
          <h1 className={styles.replyListPageTitle}>推文</h1>
        </header>
        <div className={styles.tweetSection}>
          <div className={styles.tweetHeader}>
            {Number(id) === singleTweet.UserId ? (
              <Link to={`/userself/${singleTweet.UserId}`}>
                <img
                  className={`${styles.tweetAvatar} cursorPointer`}
                  src={singleTweet.avatar ? singleTweet.avatar : initialAvatar}
                  alt="avatar"
                ></img>
              </Link>
            ) : (
              <Link to={`/userother/${singleTweet.UserId}`}>
                <img
                  className={`${styles.tweetAvatar} cursorPointer`}
                  src={singleTweet.avatar ? singleTweet.avatar : initialAvatar}
                  alt="avatar"
                ></img>
              </Link>
            )}

            <div className={styles.userInfos}>
              <p className={styles.userName}>{singleTweet.name}</p>
              <p className={styles.userNickName}>@{singleTweet.account}</p>
            </div>
          </div>
          <p className={styles.tweetMain}>{singleTweet.description}</p>
          <div className={styles.tweetFooter}>
            <span className={styles.time}>
              <span>{formatTimestamp(singleTweet.createdAt)}</span>
            </span>
            <p className={styles.feedbackCounts}>
              <span>
                <b className={styles.commentCounts}>
                  {singleTweet.repliesCount}
                </b>{" "}
                回覆
              </span>
              <span>
                <b className={styles.likeCounts}>{singleTweet.likesCount}</b>{" "}
                喜歡次數
              </span>
            </p>
            <div className={styles.feedbackButtons}>
              <Link
                type="Link"
                className={`${styles.replyButton}`}
                data-bs-toggle="modal"
                data-bs-target="#addReplyModalinReplyList"
              >
                <CommentSVG className={styles.feedbackButton} />
              </Link>
              <AddReplyModalinReplyList />

              <img
                src={singleTweet.isLiked ? LikePress : LikeSVG}
                alt="Likebtn"
                className={`${styles.feedbackButton} cursorPointer`}
                onClick={async () => {
                  singleTweet.isLiked
                    ? await tweetUnLike(singleTweet.id)
                    : await tweetLike(singleTweet.id);
                  const res = await getSingleTweet(singleTweet.id);
                  //因為singleTweet是直接從context傳下來的, setSingleTweet會使context更新, 傳下來的資料也會是最新的
                  setSingleTweet(res);
                }}
              />
            </div>
          </div>
        </div>
        {replyListReplies.map((reply) => {
          return <TweetReadOnly key={reply.id} value={reply} />;
        })}
      </div>
    </>
  );
};
