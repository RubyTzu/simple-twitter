import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminMainPage.module.scss"

export const AdminMainPage = () => {
  return (
    <div className={styles.adminMainPageContainer}>
      <AdminNavbar />
      <div className={styles.adminMainbarContainer}></div>
    </div>
  );
};
