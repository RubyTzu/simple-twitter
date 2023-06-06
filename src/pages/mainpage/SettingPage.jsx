import { Navbar } from "components/Navbar";
import styles from "./SettingPage.module.scss";

export const SettingPage = () => {
  return (
    <div className={styles.settingPageContainer}>
      <Navbar />
      <div className={styles.mainbarContainer}>
        <header className={styles.settingPageHeader}>
          <h1 className={styles.settingPageTitle}>帳戶設定</h1>
        </header>
      </div>
      <Rightbar />
    </div>
  );
};

const Rightbar = () => {
  return (
    <div>
      <div className={styles.rightbarContainer}>
      </div>
    </div>
  );
};