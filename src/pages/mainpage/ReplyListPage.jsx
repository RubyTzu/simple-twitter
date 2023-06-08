import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import { ReactComponent as BackSVG } from "assets/Back.svg";
import { ReactComponent as CommentSVG } from "assets/Comment.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { Link } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import { TweetsReadOnly } from "components/TweetsReadOnly";
import styles from "./ReplyListPage.module.scss";

export const ReplyListPage = () => {
  return (
    <div className={styles.replyPageContainer}>
      <Navbar />
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
              <p className={styles.userName}>Apple</p>
              <p className={styles.userNickName}>@apple</p>
            </div>
          </div>
          <p className={styles.tweetMain}>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
          </p>
          <div className={styles.tweetFooter}>
            <p className={styles.time}>
              <span>上午 10:05</span>
              <span>・2021年11月10日</span>
            </p>
            <p className={styles.feedbackCounts}>
              <span>
                <b className={styles.commentCounts}>34</b> 回覆
              </span>
              <span>
                <b className={styles.likeCounts}>808</b> 喜歡次數
              </span>
            </p>
            <div className={styles.feedbackButtons}>
              <Link href="/">
                <CommentSVG className={styles.feedbackButton} />
              </Link>
              <Link href="/">
                <LikeSVG className={styles.feedbackButton} />
              </Link>
            </div>
          </div>
        </div>
        <TweetsReadOnly />
      </div>
      <Rightbar />
    </div>
  );
};
