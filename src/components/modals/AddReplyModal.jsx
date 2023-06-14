import styles from "./AddReplyModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import initialAvatar from "assets/GreyIcon.svg";
import avatar from "assets/Photo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getSingleTweet,
} from "api/tweet";

export const AddReplyModal = ({
  tweetId,
  onClick,
  onChange,
  inputValue,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [singleTweet, setSingleTweet] = useState({});

  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    const showPage = async () => {
      await tweetId;
      setSingleTweet(await getSingleTweet(tweetId));
    };
    console.log(`AddReplyModal useEffect 的showAlert ${tweetId}`);
    showPage();
  }, [tweetId]);

  useEffect(() => {
    // console.log(showAlert);
    console.log(`AddReplyModal useEffect 的showAlert ${showAlert}`);
  }, [showAlert]);

  return (
    <div
      className="modal fade"
      id={`addReplyModal${tweetId}`}
      tabIndex="-1"
      aria-labelledby={`addReplyModal${tweetId}Label`}
      aria-hidden="true"
      onClick={(e) => {
        e.stopPropagation();
      }}
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
              <img
                className={`${styles.tweetAvatar} cursorPointer`}
                src={
                  singleTweet.avatar !== null
                    ? singleTweet.avatar
                    : initialAvatar
                }
                alt="avatar"
              ></img>
              <div className={styles.tweetTextContainer}>
                <header className={styles.tweetHeader}>
                  <p className={styles.userName}>{singleTweet.name}</p>
                  <p className={styles.nickNameTime}>
                    <Link className={styles.userNickName}>
                      @{singleTweet.account}
                    </Link>
                    ・3 小時(時間還要改)
                  </p>
                </header>
                <p className={styles.comment}>{singleTweet.description}</p>
                <p className={styles.replyTo}>
                  回覆給
                  <Link className={styles.replyNickName}>
                    @{singleTweet.account}
                  </Link>
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
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <p className={styles.wordLimitHint}>
              {showAlert && inputValue.length === 0 && "內容不可空白"}
              {showAlert && inputValue.length > 140 && "字數不可超過 140 字"}
            </p>
            <button
              type="button"
              className={styles.tweetButton}
              onClick={() => {
                if (inputValue.length === 0 || inputValue.length > 140) {
                  setShowAlert(true);
                } else {
                  onClick();
                }
              }}
            >
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
