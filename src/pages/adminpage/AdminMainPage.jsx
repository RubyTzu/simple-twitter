import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminMainPage.module.scss";
import { AdminTweet } from "components/AdminTweet";

export const AdminMainPage = () => {
  return (
    <div className={styles.adminMainPageContainer}>
      <AdminNavbar />
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminMainPageTitle}>推文清單</h1>
        <div className={styles.adminTweetCollection}>
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
          <AdminTweet />
        </div>
      </div>
    </div>
  );
};
