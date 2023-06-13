import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";
import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";
import { adminLogin } from "api/admin";

export const AdminLoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { login, isAuthenticated } = useAuth();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/tweetslist");
    } else return;
  }, [navigate, isAuthenticated]);

  const handleAdminLogin = async () => {
    if (account.length === 0) return;
    if (password.length === 0) return;
    try {
      const res = await adminLogin({ account, password });
      if (res.token) {
        localStorage.setItem("authToken", res.token);
        localStorage.setItem("id", res.userData.id);
        alert("登入成功");
        navigate("/admin/tweetslist");
        return;
      }
    } catch (error) {
      alert("登入失敗");
      return;
    }
  };
  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>後台登入</h1>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={account}
          onChange={setAccount}
          label="帳號"
          placeholder="請輸入帳號"
          onKeyDown={handleAdminLogin}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          value={password}
          onChange={setPassword}
          label="密碼"
          placeholder="請輸入密碼"
          onKeyDown={handleAdminLogin}
        />
      </div>

      <button className={styles.loginButton} onClick={handleAdminLogin}>
        登入
      </button>
      <div className={styles.linkText}>
        <Link to="/login">前台登入</Link>
      </div>
    </div>
  );
};
