import styles from "./AlertModal.module.scss";
import { ReactComponent as ErrorSVG } from "assets/Error.svg";

export const AlertModal = ({value}) => {
  return (
    <div className={styles.alertTop}>
      <div
        className={`alert ${styles.alertContainer} ${styles.fadeOutAlert}`}
        role="alert"
      >
        <div className={styles.alertBody}>
          <p className={styles.alertText}>{value}</p>
          <ErrorSVG />
        </div>
      </div>
    </div>
  );
};
