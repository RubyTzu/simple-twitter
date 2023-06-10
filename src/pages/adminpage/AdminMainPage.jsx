import { AdminNavbar } from "components/AdminNavbar";
import styles from "./AdminMainPage.module.scss";

export const AdminMainPage = ({ rightContent }) => {
  return (
    <div className={styles.adminMainPageContainer}>
      <AdminNavbar />
      {rightContent}
    </div>
  );
};
