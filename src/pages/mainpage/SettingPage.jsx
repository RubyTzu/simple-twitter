import styles from "./SettingPage.module.scss";
import { AuthInput } from "components/AuthInput";

export const SettingPage = () => {
  return (
    <>
      <div className={styles.mainbarContainer}>
        <header className={styles.settingPageHeader}>
          <h1 className={styles.settingPageTitle}>帳戶設定</h1>
        </header>

        <div className={styles.inputContainer}>
          <AuthInput type="text" label="帳號" value="從後端拿" />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput type="text" label="名稱" value="從後端拿" />
        </div>
        <div className={styles.inputContainer}>
          <AuthInput type="text" label="Email" value="從後端拿" />
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


