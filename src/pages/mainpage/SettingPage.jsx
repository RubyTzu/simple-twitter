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
    console.log("3600 test from setting page");
  }, []);

  const handleSave = async () => {
    if (user.password !== user.checkPassword) {
      alert("請確認兩次密碼輸入一致");
      return;
    }
    if (user.name.length > 50) {
      alert("名稱超過50字元");
      return;
    }
    console.log(user);
    const res = await updateProfile(user);
    console.log(res);
    if (res) {
      alert("已成功更新");
      const refresh = () => window.location.reload(true);
      refresh();
    }
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
          <span className={styles.limit}>
            <p>字數超出上限!</p>
            <p>0/50</p>
          </span>
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
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼再確認"
            value=""
            placeholder="請再次輸入密碼"
            onChange={(e) => {
              setUser({
                ...user,
                checkPassword: e.target.value,
              });
            }}
          />
        </div>
        <button className={styles.btn} onClick={handleSave}>
          儲存
        </button>
      </div>
    </>
  );
};
