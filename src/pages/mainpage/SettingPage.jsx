import { useEffect, useState } from "react";
import styles from "./SettingPage.module.scss";
import { AuthInput } from "components/AuthInput";
import { getProfile } from "api/userinfo";

export const SettingPage = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const showUserAvatar = async () => setUser(await getProfile());
    showUserAvatar();
  }, []);

  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.settingPageHeader}>
          <h1 className={styles.settingPageTitle}>帳戶設定</h1>
        </header>

        <div className={styles.inputContainer}>
          <AuthInput type="text" label="帳號" value={user.account} />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput type="text" label="名稱" value={user.name} />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput type="text" label="Email" value={user.email} />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼"
            value=""
            placeholder="請設定密碼"
          />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput
            type="password"
            label="密碼再確認"
            value=""
            placeholder="請再次輸入密碼"
          />
        </div>
        <button className={styles.btn}>儲存</button>
      </div>
    </>
  );
};
