import styles from "./AddTweetModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import avatar from "assets/Photo.png";
import { Link } from "react-router-dom";

export const AddTweetModal = () => {
  const handleAddTweetHeight = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  
    return (
      <div
        className="modal fade"
        id="addTweetModal"
        tabIndex="-1"
        aria-labelledby="addTweetModalLabel"
        aria-hidden="true"
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
              />
            </div>
            <div className={`modal-footer ${styles.modalFooter}`}>
              <p className={styles.wordLimitHint}>字數不可超過 140 字</p>
              <button
                type="button"
                className={styles.tweetButton}
                onClick={() => console.log("ok!")}
              >
                推文
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};