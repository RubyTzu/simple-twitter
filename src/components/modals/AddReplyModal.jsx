import styles from "./AddReplyModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import initialAvatar from "assets/GreyIcon.svg";
// import avatar from "assets/Photo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTweet } from "context/tweetContext";
import { createReplyTweet, getSingleTweet } from "../../api/tweet"

export const AddReplyModal = ({ onClose, tweetId}) => {
  const {
    replyInputValue,
    setReplyInputValue,
    showReplyAlert,
    setShowReplyAlert,
    onRefresh,
  } = useTweet();

  const [singleTweet, setSingleTweet] = useState({});

  const handleAddReplyTweet = async () => {
    if (replyInputValue.length === 0 || replyInputValue.length > 140) {
      return;
    } else {
      await createReplyTweet({
        comment: replyInputValue,
        id: tweetId,
      });
      setShowReplyAlert(false);
      setReplyInputValue("");
      onRefresh();
      window.location.reload();
    }
  };

  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

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

  useEffect(() => {
    const showPage = async () => {
      setSingleTweet(await getSingleTweet(tweetId));
      console.log(`AddReplyModalinReplyList useEffect 的showAlert ${tweetId}`);
    };
    showPage();
  }, [tweetId]);

  useEffect(() => {
    console.log(
      `AddReplyModalinReplyList useEffect 的showAlert ${showReplyAlert}`
    );
  }, [showReplyAlert]);

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
      onClose={onClose}
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
                    ・{formatTimestamp(singleTweet.createdAt)}
                  </p>
                </header>
                <p className={styles.comment}>{singleTweet.description}</p>
                <p className={styles.replyTo}>
                  回覆給
                  <Link className={styles.replyNickNameLink}>
                    <span className={styles.replyNickName}>
                      {" "}
                      @{singleTweet.account}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <span className={styles.avatarLine}></span>
            <div className={styles.yourReply}>
              <img
                className={styles.replyTweetAvatar}
                src={
                  singleTweet.userAvatar !== null
                    ? singleTweet.userAvatar
                    : initialAvatar
                }
                alt="avatar"
              ></img>
              <textarea
                className={styles.replyTweetTextarea}
                placeholder="推你的回覆"
                onInput={handleAddTweetHeight}
                value={replyInputValue}
                onChange={(e) => {
                  setReplyInputValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <p className={styles.wordLimitHint}>
              {showReplyAlert && replyInputValue.length === 0 && "內容不可空白"}
              {showReplyAlert &&
                replyInputValue.length > 140 &&
                "字數不可超過 140 字"}
            </p>
            <button
              type="button"
              className={styles.tweetButton}
              onClick={() => {
                if (
                  replyInputValue.length === 0 ||
                  replyInputValue.length > 140
                ) {
                  setShowReplyAlert(true);
                  return;
                } else {
                  handleAddReplyTweet();
                }
              }}
              data-bs-dismiss={
                replyInputValue.length > 0 &&
                replyInputValue.length <= 140 &&
                "modal"
              }
            >
              回覆
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
