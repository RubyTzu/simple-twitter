import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";
import styles from "./Followings.module.scss";
import { deleteFollow } from "api/follow";

export const Following = ({ value }) => {
  return (
    <div className={styles.followContainer}>
      <GreyIconSVG className={`${styles.userAvatar} cursorPointer`} />
      <div className={styles.followTextContainer}>
        <header className={styles.followHeader}>
          <p className={styles.userName}>{value.name}</p>
          <button
            className={styles.toNotFollowButton}
            onClick={async () => {
              const reload = () => window.location.reload;
              await deleteFollow(value.id);
              reload();
            }}
          >
            正在跟隨
          </button>
          {console.log(value.Followship.followingId)}
        </header>
        <p className={styles.comment}>{value.introduction}</p>
      </div>
    </div>
  );
};

export const Followings = ({ followings }) => {
  return (
    <div className={styles.followsCollection}>
      {followings.map((following) => {
        return <Following key={following.id} value={following} />;
      })}
    </div>
  );
};
