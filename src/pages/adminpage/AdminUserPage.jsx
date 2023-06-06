import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminUserPage.module.scss";

export const AdminUserPage = () => {
  return (
    <div className={styles.adminUserPageContainer}>
      <AdminNavbar />
      <div className={styles.titleLine}></div>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminUserPageTitle}>使用者列表</h1>
      </div>
    </div>
  );
};