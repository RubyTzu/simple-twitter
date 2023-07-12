import styles from "./LoadingDots.module.scss";

export const LoadingDots = () => {
  return (
    <div className={styles.snippet} data-title={styles.dotFlashing}>
      <div className={styles.stage}>
        <div className={styles.dotFlashing}></div>
      </div>
    </div>
  );
};
