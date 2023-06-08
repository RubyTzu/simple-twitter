import { AdminNavbar } from "components/AdminNavbar";

import styles from "./AdminUserPage.module.scss";
import { UserCard } from "components/UserCard";

export const AdminUserPage = () => {
  return (
    <div className={styles.adminUserPageContainer}>
      <AdminNavbar />
      <div className={styles.titleLine}></div>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminUserPageTitle}>使用者列表</h1>
        <div className={styles.userCardContainer}>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};
