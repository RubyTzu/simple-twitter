import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";

export const Register = () => {
  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>建立你的帳號</h1>
      <div className={styles.inputContainer}>
        <AuthInput type="text" label="帳號" placeholder="請輸入帳號" />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput type="text" label="名稱" placeholder="請輸入使用者名稱" />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput type="text" label="Email" placeholder="請輸入Email" />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput type="password" label="密碼" placeholder="請設定密碼" />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          label="密碼確認"
          placeholder="請再次輸入密碼"
        />
      </div>

      <button className={styles.loginButton} onClick={() => console.log("ok!")}>
        註冊
      </button>
      <div className={styles.linkTextCancel}>
        <Link to="/login">取消</Link>
      </div>
    </div>
  );
};
