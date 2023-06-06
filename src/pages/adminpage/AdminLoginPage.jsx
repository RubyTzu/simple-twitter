import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";

export const AdminLoginPage = () => {
  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>後台登入</h1>
      <div className={styles.inputContainer}>
        <AuthInput type="text" label="帳號" placeholder="請輸入帳號" />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      </div>

      <button className={styles.loginButton} onClick={() => console.log("ok!")}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/login">前台登入</Link>
      </div>
    </div>
  );
};
