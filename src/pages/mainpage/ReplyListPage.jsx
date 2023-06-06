import { ReactComponent as BackSVG } from "assets/Back.svg";
import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import styles from "./ReplyListPage.module.scss";

export const ReplyListPage = () => {
  return (
    <div className={styles.replyPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.replyListHeader}>
          <BackSVG className={styles.logo} />
          <h1 className={styles.replyListPageTitle}>推文</h1>
        </header>
      </div>
      <Rightbar />
    </div>
  );
};
