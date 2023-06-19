import styles from "./AlertModal.module.scss";
import { ReactComponent as ErrorSVG } from "assets/Error.svg";
import { ReactComponent as CheckSVG } from "assets/Check.svg";

export const AlertModal = ({ value, alertIcon }) => {
  return (
    <div className={styles.alertTop}>
      <div
        className={`alert ${styles.alertContainer} ${styles.fadeOutAlert}`}
        role="alert"
      >
        <div className={styles.alertBody}>
          <p className={styles.alertText}>{value}</p>
          {!alertIcon ? <ErrorSVG /> : <CheckSVG />}
        </div>
      </div>
    </div>
  );
};
