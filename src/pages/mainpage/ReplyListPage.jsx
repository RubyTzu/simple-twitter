import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { Link, useParams } from "react-router-dom";
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

export const ReplyListPage = () => {
  const [singleTweet, setSingleTweet] = useState({});
  const [replies, setReplies] = useState([]);
  const { tweetId } = useParams();
    const [inputValue, setInputValue] = useState("");

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
              <p className={styles.userName}>{singleTweet.name}</p>
              <p className={styles.userNickName}>@{singleTweet.name}</p>
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
