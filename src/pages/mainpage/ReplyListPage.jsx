import initialAvatar from "assets/GreyIcon.svg";
import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TweetReadOnly } from "components/TweetsReadOnly";
import styles from "./ReplyListPage.module.scss";
import { AddReplyModalinReplyList } from "components/modals/AddReplyModalinReplyList";
import {
  getSingleTweet,
  getSingleTweetReplies,
  createReplyTweet,
} from "api/tweet";
import { useEffect, useState } from "react";
// import { TweetsReadOnly } from "components/TweetsReadOnly";
// import moment from "moment/moment";

const getId = () => {
  const id = localStorage.getItem("id");
  return Number(id);
};

export const ReplyListPage = () => {
  const [singleTweet, setSingleTweet] = useState({});
  const [replies, setReplies] = useState([]);
  const { tweetId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const showPage = async () => {
      setSingleTweet(await getSingleTweet(tweetId));
      setReplies(await getSingleTweetReplies(tweetId));
    };
    showPage();
  }, [tweetId]);

  const handleAddTweet = async () => {
    if (inputValue.length === 0 || inputValue.length > 140) {
      return;
    } else {
      await createReplyTweet({
        comment: inputValue,
        id: tweetId,
      });

      const reload = () => window.location.reload();
      reload();
    }
  };
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
            {getId() === singleTweet.UserId ? (
              <Link to={`/userself/${singleTweet.UserId}`}>
                <img
                  className={`${styles.tweetAvatar} cursorPointer`}
                  src={
                    singleTweet.avatar !== null
                      ? singleTweet.avatar
                      : initialAvatar
                  }
                  alt="avatar"
                ></img>
              </Link>
            ) : (
              <Link to={`/userother/${singleTweet.UserId}`}>
                <img
                  className={`${styles.tweetAvatar} cursorPointer`}
                  src={
                    singleTweet.avatar !== null
                      ? singleTweet.avatar
                      : initialAvatar
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
            <p className={styles.time}>
              <span>{formatTimestamp(singleTweet.createdAt)}</span>
            </p>
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
              <AddReplyModalinReplyList
                onClick={handleAddTweet}
                onChange={(value) => {
                  setInputValue(value);
                }}
                inputValue={inputValue}
              />

              <Link href="/">
                <LikeSVG className={styles.feedbackButton} />
              </Link>
            </div>
          </div>
        </div>
        {/* {console.log(replies)} */}
        {/* <TweetsReadOnly value={replies} /> */}
        {replies.map((reply) => {
          return <TweetReadOnly key={reply.id} value={reply} />;
        })}
        {/* {replies.current.map((reply) => {
          return <TweetReadOnly key={reply.id} value={reply} />;
        })} */}
      </div>
    </>
  );
};
