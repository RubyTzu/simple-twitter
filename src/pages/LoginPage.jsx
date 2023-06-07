import { useAuth } from "context/authContext";
import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import styles from "pages/LoginRegister.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context/authContext";
export const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { login } = useAuth();
  const { login } = useContext(AuthContext);

  const handleClick = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;
    const success = await login({ account, password });
    if (success) {
      alert("登入成功");
      navigate("/home");
      return;
    } else {
      alert("登入失敗");
      return;
    }
  };

  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>登入 Alphitter</h1>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={account}
          label="帳號"
          placeholder="請輸入帳號"
          onChange={setAccount}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={setPassword}
        />
      </div>

      <button className={styles.loginButton} onClick={handleClick}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/register">註冊</Link> ・{" "}
        <Link to="/adminlogin">後台登入</Link>
      </div>
    </div>
  );
};
