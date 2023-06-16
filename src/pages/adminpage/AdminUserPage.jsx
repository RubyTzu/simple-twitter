import { useEffect, useState } from "react";
import styles from "./AdminUserPage.module.scss";
import { UserCard } from "components/UserCard";
import { getUsers } from "api/admin";
import { useNavigate } from "react-router";
import { useAuth } from "context/authContext";

export const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const { admIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admIsAuthenticated) {
      navigate("/admin/login");
    } else return;
  }, [navigate, admIsAuthenticated]);

  useEffect(() => {
    const showUsersTweet = async () => setUsers(await getUsers());
    showUsersTweet();
    console.log("hello from useEffect-AdminUserPage");
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
