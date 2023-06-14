import { useEffect, useState } from "react";
import styles from "./SettingPage.module.scss";
import { AuthInput } from "components/AuthInput";
import { getProfile, updateProfile } from "api/userinfo";
const id = localStorage.getItem("id");

export const SettingPage = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const showPage = async () => setUser(await getProfile(id));
    showPage();
  }, []);

  const handleSave = async () => {
    await updateProfile(user);
    const refresh = () => window.location.reload(true);
    refresh();
  };
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.settingPageHeader}>
          <h1 className={styles.settingPageTitle}>帳戶設定</h1>
        </header>

        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="帳號"
            value={user.account}
            onChange={(e) => {
              setUser({
                ...user,
                account: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="名稱"
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="text"
            label="Email"
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼"
            value=""
            placeholder="請設定密碼"
            // onChange={(e) => {
            //   setUser({
            //     ...user,
            //     password: e.target.value,
            //   });
            // }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼再確認"
            value=""
            placeholder="請再次輸入密碼"
            // onChange={(e) => {
            //   setUser({
            //     ...user,
            //     passwordCheck: e.target.value,
            //   });
            // }}
          />
        </div>
        <button className={styles.btn} onClick={handleSave}>
          儲存
        </button>
      </div>
    </>
  );
};
