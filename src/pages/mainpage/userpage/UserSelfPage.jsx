import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./UserPage.module.scss";
import userselfAvatar from "assets/userselfAvatar.svg";
import userselfBcg from "assets/userselfBcg.svg";
export const UserSelfPage = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.userPageHeader}>
          <BackSVG className={styles.logo} />
          <div className={styles.userPageHeaderText}>
            <p className={styles.userPageTitle}>mySelf</p>
            <p className={styles.userPageTweetCounts}>25 推文</p>
          </div>
        </header>
        <div className={styles.userinfoContainer}>
          <img className={styles.userBcgImage} src={userselfBcg} alt="" />
          <img className={styles.userAvatar} src={userselfAvatar} alt="" />
          <div className={styles.editUserinfoBtn}>編輯個人資料</div>
          <div className={styles.userinfo}>
            <span>
              <b>John Doe</b>
            </span>
            <br />
            <span>@heyjogn</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
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
      </div>
      <Rightbar />
    </div>
  );
};
