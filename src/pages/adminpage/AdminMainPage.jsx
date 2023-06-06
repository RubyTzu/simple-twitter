import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminMainPage.module.scss"

export const AdminMainPage = () => {
  return (
    <div className={styles.adminMainPageContainer}>
      <AdminNavbar />
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminMainPageTitle}>推文清單</h1>
      </div>
    </div>
  );
};
