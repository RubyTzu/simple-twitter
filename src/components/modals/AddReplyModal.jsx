import styles from "./AddReplyModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import avatar from "assets/Photo.png";
import { Link } from "react-router-dom";

export const AddReplyModal = () => {
  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div
      className="modal fade"
      id="addReplyModal"
      tabIndex="-1"
      aria-labelledby="addReplyModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog `}>
        <div className={`modal-content ${styles.modalContainer}`}>
          <div
            className={`modal-header position-relative ${styles.modalHeader}`}
          >
            <Link
              type="button"
              className={`position-absolute ${styles.closeButton}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseSVG />
            </Link>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <div className={styles.othersTweet}>
              <GreyIconSVG className={`${styles.tweetAvatar} cursorPointer`} />
              <div className={styles.tweetTextContainer}>
                <header className={styles.tweetHeader}>
                  <p className={styles.userName}>Apple</p>
                  <p className={styles.nickNameTime}>
                    <Link className={styles.userNickName}>@apple</Link>
                    ・3 小時
                  </p>
                </header>
                <p className={styles.comment}>
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </p>
                <p className={styles.replyTo}>
                  回覆給 <Link className={styles.replyNickName}>@Mitsubishi</Link>
                </p>
              </div>
            </div>
            <span className={styles.avatarLine}></span>
            <div className={styles.yourReply}>
              <img
                className={styles.replyTweetAvatar}
                src={avatar}
                alt="avatar"
              ></img>
              <textarea
                className={styles.replyTweetTextarea}
                placeholder="推你的回覆"
                onInput={handleAddTweetHeight}
              />
            </div>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <p className={styles.wordLimitHint}>內容不可空白</p>
            <button
              type="button"
              className={styles.tweetButton}
              onClick={() => console.log("ok!")}
            >
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
