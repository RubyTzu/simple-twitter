import { useAuth } from "context/authContext";
import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import styles from "pages/LoginRegister.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    } else return;
  }, [navigate, isAuthenticated]);

  const handleLogin = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;

    try {
      const success = await login({ account, password });
      if (success) {
        alert("登入成功");
        navigate("/home");
        return;
      }
    } catch (eeror) {
      alert("登入失敗");
      return;
    }

  }
  
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
          onKeyDown={handleLogin}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={setPassword}
          onKeyDown={handleLogin}
        />
      </div>

      <button className={styles.loginButton} onClick={handleLogin}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/register">註冊</Link> ・{" "}
        <Link to="/admin/login">後台登入</Link>
      </div>
    </div>
  );
};
