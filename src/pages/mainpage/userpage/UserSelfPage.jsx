import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./UserPage.module.scss";

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
          <img
            className={styles.userBcgImage}
            src="https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_1280.jpg"
            alt=""
          />
          <img
            className={styles.userAvatar}
            src="https://www.drelseys.com/wp-content/uploads/2018/09/cat-meme-blog-001-1200x0-c-default.jpg"
            alt=""
          />
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
