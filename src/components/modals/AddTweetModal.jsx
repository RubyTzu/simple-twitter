import styles from "./AddTweetModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import avatar from "assets/Photo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AddTweetModal = ({ onClick, onChange, inputValue }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    
    // console.log(`AddTweetModal useEffect 的showAlert ${showAlert}`);
  }, [showAlert]);

  return (
    <div
      className="modal fade"
      id="addTweetModal"
      tabIndex="-1"
      aria-labelledby="addTweetModalLabel"
      aria-hidden="true"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="modal-dialog">
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
            <img
              className={styles.addTweetAvatar}
              src={avatar}
              alt="avatar"
            ></img>
            <textarea
              className={styles.addTweetTextarea}
              placeholder="有什麼新鮮事？"
              onInput={handleAddTweetHeight}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <p className={styles.wordLimitHint}>
              {showAlert && inputValue.length === 0 && "內容不可空白"}
              {showAlert && inputValue.length > 140 && "字數不可超過 140 字"}
            </p>
            <button
              type="submit"
              className={styles.tweetButton}
              onClick={() => {
                if (inputValue.length === 0 || inputValue.length > 140) {
                  setShowAlert(true);
                } else {
                  onClick();
                }
              }}
              data-bs-dismiss={
                inputValue.length > 0 && inputValue.length <= 140 && "modal"
              }
            >
              推文
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
