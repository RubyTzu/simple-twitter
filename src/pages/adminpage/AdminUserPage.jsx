import { useEffect, useState } from "react";
import styles from "./AdminUserPage.module.scss";
import { UserCard } from "components/UserCard";
import { getUsers } from "api/admin";

export const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const showUsersTweet = async () => setUsers(await getUsers());
    showUsersTweet();
  }, []);
  return (
    <>
      <div className={styles.titleLine}></div>
      <div className={styles.adminMainbarContainer}>
        <h1 className={styles.adminUserPageTitle}>使用者列表</h1>
        <div className={styles.userCardContainer}>
          {users.map((user) => {
            return <UserCard key={user.id} value={user} />;
          })}
        </div>
      </div>
    </>
  );
};
