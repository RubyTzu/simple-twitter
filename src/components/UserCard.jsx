import styles from "./UserCard.module.scss";
import userselfBcg from "assets/userselfBcg.svg";
import userselfAvatar from "assets/userselfAvatar.svg";
import { Link } from "react-router-dom";
import { ReactComponent as LikeSVG } from "assets/Like.svg";
import { ReactComponent as ReviewIcon } from "assets/ReviewIcon.svg";

export const UserCard = () => {
  return (
    <div className={styles.usercard}>
      <img className={styles.bcgImage} src={userselfBcg} alt="userbcg" />
      <img className={styles.avatar} src={userselfAvatar} alt="avatar" />

      <div className={styles.userinfo}>
        <span className={styles.username}>John Doe</span>
        <span className={styles.userNickname}>@heyjohn</span>
        <div className={styles.userActivity}>
          <Link className={styles.review} to="/">
            <ReviewIcon className={styles.icon} />
            <p> 1.5k</p>
          </Link>
          <Link className={styles.heart} to="/">
            <LikeSVG className={styles.icon} />
            <p> 20k</p>
          </Link>
        </div>

        <div className={styles.follow}>
          <div className={styles.followerInfoBtn}>
            <span className={styles.followNum}>34個</span>
            <span>跟隨中</span>
          </div>
          <div className={styles.followingInfoBtn}>
            <span className={styles.followNum}>59位</span>
            <span>跟隨者</span>
          </div>
        </div>
      </div>
    </div>
  );
};
