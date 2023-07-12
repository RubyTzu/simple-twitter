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
import { LoadingDots } from "components/loadingItems/LoadingDots";
import { LoadingIcon } from "components/loadingItems/LoadingIcon";
const id = localStorage.getItem("id");

export const ReplyListPage = () => {
  const { singleTweet, setSingleTweet, replyListReplies, setReplyListReplies } =
    useTweet();

  const { tweetId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setSingleTweet(await getSingleTweet(tweetId));
      setReplyListReplies(await getSingleTweetReplies(tweetId));
    })();
  }, [tweetId, setReplyListReplies, setSingleTweet]);

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
          <Link
            className={styles.link}
            onClick={() => {
              navigate(-1);
              setSingleTweet({});
              setReplyListReplies([]);
            }}
          >
            <BackSVG className={styles.logo} />
          </Link>
          <h1 className={styles.replyListPageTitle}>推文</h1>
        </header>
        {Number(tweetId) === singleTweet.id ? (
          <div className={styles.tweetSection}>
            <div className={styles.tweetHeader}>
              {Number(id) === singleTweet.UserId ? (
                <Link to={`/userself/${singleTweet.UserId}`}>
                  <img
                    className={`${styles.tweetAvatar} cursorPointer`}
                    src={
                      singleTweet.avatar ? singleTweet.avatar : initialAvatar
                    }
                    alt="avatar"
                  ></img>
                </Link>
              ) : (
                <Link to={`/userother/${singleTweet.UserId}`}>
                  <img
                    className={`${styles.tweetAvatar} cursorPointer`}
                    src={
                      singleTweet.avatar ? singleTweet.avatar : initialAvatar
                    }
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
                    setSingleTweet(res);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.tweetSection}>
            <div className={styles.tweetHeader}>
              <img
                className={`${styles.tweetAvatar} cursorPointer`}
                src={initialAvatar}
                alt="avatar"
              ></img>

              <div className={styles.userInfos}>
                <p className={styles.userName}>loading...</p>
                <p className={styles.userNickName}>@loading...</p>
              </div>
            </div>
            <div className={styles.tweetMainLoading}>
              <div className={styles.Loading}>
                <LoadingDots />
              </div>
            </div>
            <div className={styles.tweetFooter}>
              <span className={styles.time}>
                <span>推文時間・載入中</span>
              </span>
              <p className={styles.feedbackCounts}>
                <span>
                  <b className={styles.commentCounts}>0</b> 回覆
                </span>
                <span>
                  <b className={styles.likeCounts}>0</b> 喜歡次數
                </span>
              </p>
              <div className={styles.feedbackButtons}>
                <Link
                  className={`${styles.replyButton}`}
                >
                  <CommentSVG className={styles.feedbackButton} />
                </Link>

                <img
                  src={LikeSVG}
                  alt="Likebtn"
                  className={`${styles.feedbackButton} cursorPointer`}
                />
              </div>
            </div>
          </div>
        )}

        {replyListReplies.length > 0 ? (
          <>
            {Number(tweetId) === replyListReplies[0].TweetId ? (
              <>
                {replyListReplies.map((reply) => {
                  return <TweetReadOnly key={reply.id} value={reply} />;
                })}
              </>
            ) : (
              <>
                <LoadingIcon />
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
