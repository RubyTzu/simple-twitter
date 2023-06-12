import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { Link } from "react-router-dom";
// import { TweetReadOnly, TweetsReadOnly } from "components/TweetsReadOnly";
import styles from "./ReplyListPage.module.scss";
import { AddReplyModal } from "components/modals/AddReplyModal";
import { getSingleTweet, getSingleTweetReplies } from "api/tweet";
import { useEffect, useState } from "react";
// import { TweetsReadOnly } from "components/TweetsReadOnly";
// import moment from "moment/moment";

export const ReplyListPage = () => {
  const [singleTweet, setSingleTweet] = useState({});
  const [replies, setReplies] = useState({});
  useEffect(() => {
    const showPage = async () => {
      setSingleTweet(await getSingleTweet());
      setReplies(await getSingleTweetReplies());
    };
    showPage();
    setTimeout(() => {
      console.log(replies);
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.replyListHeader}>
          <Link className={styles.link} to="/home">
            <BackSVG className={styles.logo} />
          </Link>
          <h1 className={styles.replyListPageTitle}>推文</h1>
        </header>
        <div className={styles.tweetSection}>
          <div className={styles.tweetHeader}>
            <GreyIconSVG className={`${styles.tweetAvatar} cursorPointer`} />
            <div className={styles.userInfos}>
              <p className={styles.userName}>{singleTweet.id}</p>
              <p className={styles.userNickName}>@{singleTweet.id}</p>
            </div>
          </div>
          <p className={styles.tweetMain}>{singleTweet.description}</p>
          <div className={styles.tweetFooter}>
            <p className={styles.time}>
              <span>上午 10:05(時間還要改)</span>
              <span>・2021年11月10日(時間還要改)</span>
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
                data-bs-target="#addReplyModal"
              >
                <CommentSVG className={styles.feedbackButton} />
              </Link>
              <AddReplyModal />

              <Link href="/">
                <LikeSVG className={styles.feedbackButton} />
              </Link>
            </div>
          </div>
        </div>
        {/* <TweetsReadOnly value={replies} /> */}
      </div>
    </>
  );
};
