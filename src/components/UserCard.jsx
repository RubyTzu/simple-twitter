import styles from "./UserCard.module.scss";
import userselfBcg from "assets/userselfBcg.svg";
import AClogo from "assets/GreyIcon.svg";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { ReactComponent as ReviewIcon } from "assets/ReviewIcon.svg";

export const UserCard = ({ value }) => {
  return (
    <div className={styles.usercard}>
      <img
        className={styles.bcgImage}
        src={value.coverPhoto !== null ? value.coverPhoto : userselfBcg}
        alt="userbcg"
      />
      <img
        className={styles.avatar}
        src={value.avatar !== null ? value.avatar : AClogo}
        alt="avatar"
      />

      <div className={styles.userinfo}>
        <span className={styles.username}>{value.name}</span>
        <span className={styles.userNickname}>@{value.account}</span>
        <div className={styles.userActivity}>
          <div className={styles.review}>
            <ReviewIcon className={styles.icon} />
            <p>{value.tweetsCount}</p>
          </div>
          <div className={styles.heart}>
            <LikeSVG className={styles.icon} />
            <p>{value.likesCount}</p>
          </div>
        </div>

        <div className={styles.follow}>
          <div className={styles.followerInfoBtn}>
            <span className={styles.followNum}>{value.followingsCount}個</span>
            <span>跟隨中</span>
          </div>
          <div className={styles.followingInfoBtn}>
            <span className={styles.followNum}>{value.followersCount}位</span>
            <span>跟隨者</span>
          </div>
        </div>
      </div>
    </div>
  );
};
