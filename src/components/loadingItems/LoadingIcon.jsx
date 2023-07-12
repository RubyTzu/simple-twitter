import styles from "./LoadingIcon.module.scss";

export const LoadingIcon = () => {
  return (
    <div className={styles.loadingDiv}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
