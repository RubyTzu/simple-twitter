import styles from "./InfoEditModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import { ReactComponent as CameraSVG } from "assets/Camera.svg";
import { Link } from "react-router-dom";

export const InfoEditModal = () => {
  return (
    <div
      className="modal fade"
      id="infoEditModal"
      tabIndex="-1"
      aria-labelledby="infoEditModalLabel"
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
            <p className={styles.modalHeaderTitle}>編輯個人資料</p>
            <button
              type="button"
              className={styles.saveButton}
              onClick={() => console.log("ok!")}
            >
              儲存
            </button>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <div className={styles.userBcgImage}></div>
            <div className={styles.BGButtons}>
              <Link>
                <CameraSVG className={styles.userBcgCamera} />
              </Link>

              <Link>
                <CloseSVG className={styles.close} />
              </Link>
            </div>

            <Link>
              <div className={styles.userAvatar}></div>
              <CameraSVG className={styles.userCamera} />
            </Link>
            <div className={styles.textContainer}>
              <div className={styles.inputContainer}>
                <div className={styles.inputs}>
                  <label className={styles.inputLabel}>名稱</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <p className={styles.wordLimit}>
                  <span className={styles.wordLimitCount}>8</span>/50
                </p>
              </div>
              <div className={styles.textareaContainer}>
                <div className={styles.textareas}>
                  <label className={styles.textareaLabel}>自我介紹</label>
                  <textarea
                    className={styles.textarea}
                    type="text"
                    placeholder="John Doe"
                  />
                </div>
                <p className={styles.wordLimit}>
                  <span className={styles.wordLimitCount}>0</span>/160
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
