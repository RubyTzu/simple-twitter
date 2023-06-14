import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";
import { register } from "api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (account.length === 0) return;
    if (name.length === 0) return;
    if (email.length === 0) return;
    if (password.length === 0) return;
    if (checkPassword.length === 0) return;

    try {
      const success = await register({
        account,
        name,
        email,
        password,
        checkPassword,
      });
      console.log(success);
      if (success) {
        alert("註冊成功");
        navigate("/login");
        return;
      }
    } catch (error) {
      alert("註冊失敗");
      return;
    }
  };

  return (
    <div className={styles.authContainer}>
      <div>
        <LogoSVG />
      </div>
      <h1>建立你的帳號</h1>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          label="帳號"
          placeholder="請輸入帳號"
          onKeyDown={handleRegister}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="名稱"
          placeholder="請輸入使用者名稱"
          onKeyDown={handleRegister}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="請輸入Email"
          onKeyDown={handleRegister}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="密碼"
          placeholder="請設定密碼"
          onKeyDown={handleRegister}
        />
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
          label="密碼確認"
          placeholder="請再次輸入密碼"
          onKeyDown={handleRegister}
        />
      </div>

      <button className={styles.loginButton} onClick={handleRegister}>
        註冊
      </button>
      <div className={styles.linkTextCancel}>
        <Link to="/login">取消</Link>
      </div>
    </div>
  );
};
