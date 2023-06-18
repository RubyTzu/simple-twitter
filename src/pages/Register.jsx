import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link } from "react-router-dom";
import styles from "pages/LoginRegister.module.scss";
import { register } from "api/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertModal } from "components/modals/AlertModal";
import Swal from "sweetalert2";
import clsx from "clsx";

export const Register = () => {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertWord, setAlertWord] = useState("");
  const [namePassed, setNamePassed] = useState(true);
  const [accountPassed, setAccountPassed] = useState(true);
  const [pwdPassed, setPwdPassed] = useState(true);
  const [emailPassed, setEmailPassed] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        setAlertWord("");
      }, 3000);
      console.log("register useEffect");
      return () => clearTimeout(timeout); // cleanup function
    }
  }, [showAlert]);

  const handleRegister = async () => {
    if (account.length === 0) return;
    if (name.length === 0) return;
    if (email.length === 0) return;
    if (password.length === 0) return;
    if (checkPassword.length === 0) return;

    try {
      const res = await register({
        account,
        name,
        email,
        password,
        checkPassword,
      });
      console.log(
        `success: ${res.success} message:${res.message} 在register裏`
      );
      if (res.message === "Create success") {
        Swal.fire({
          title: "註冊成功!",
          icon: "success",
          iconColor: "#82C43C",
          showConfirmButton: false,
          timer: 1000,
          position: "top",
        });
        navigate("/login");
        return;
      } else if (res.message === "Max length 50") {
        // alert("Max length 50");
        setShowAlert(true);
        setAlertWord("字數超過上限50字");
        setNamePassed(false);
        return;
      } else if (res.message === "Email already exists!") {
        // alert("Email 已重覆註冊")
        setShowAlert(true);
        setAlertWord("Email 已重覆註冊");
        setEmailPassed(false);
        return;
      } else if (res.message === "Account already exists!") {
        // alert("Account  已重覆註冊");
        setShowAlert(true);
        setAlertWord("帳號已重覆註冊");
        setAccountPassed(false);
        return;
      } else if (res.message === "Password do not match!") {
        // alert("Password do not match!");
        setShowAlert(true);
        setAlertWord("密碼不一致");
        setPwdPassed(false);
        return;
      }
    } catch (error) {
      Swal.fire({
        title: "註冊失敗!",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        position: "top",
      });
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
          onChange={(e) => {
            setAccount(e.target.value);
            setAccountPassed(true);
          }}
          label="帳號"
          placeholder="請輸入帳號"
          onKeyDown={handleRegister}
          accountPassed={accountPassed}
        />
        <span
          className={clsx("", {
            [styles.limit]: !accountPassed,
            [styles.noLimit]: accountPassed,
          })}
        >
          帳號已重覆註冊
        </span>
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNamePassed(true);
          }}
          label="名稱"
          placeholder="請輸入使用者名稱"
          onKeyDown={handleRegister}
          namePassed={namePassed}
        />
        <span
          className={clsx("", {
            [styles.limit]: !namePassed,
            [styles.noLimit]: namePassed,
          })}
        >
          字數超出上限！
        </span>
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailPassed(true);
          }}
          label="Email"
          placeholder="請輸入Email"
          onKeyDown={handleRegister}
          emailPassed={emailPassed}
        />
        <span
          className={clsx("", {
            [styles.limit]: !emailPassed,
            [styles.noLimit]: emailPassed,
          })}
        >
          Email 已重覆註冊
        </span>
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPwdPassed(true);
          }}
          label="密碼"
          placeholder="請設定密碼"
          onKeyDown={handleRegister}
          pwdPassed={pwdPassed}
        />
        <span
          className={clsx("", {
            [styles.limit]: !pwdPassed,
            [styles.noLimit]: pwdPassed,
          })}
        >
          密碼不一致！
        </span>
      </div>
      <div className={styles.inputContainer}>
        <AuthInput
          type="password"
          value={checkPassword}
          onChange={(e) => {
            setCheckPassword(e.target.value);
            setPwdPassed(true);
          }}
          label="密碼確認"
          placeholder="請再次輸入密碼"
          onKeyDown={handleRegister}
          pwdPassed={pwdPassed}
        />
        <span
          className={clsx("", {
            [styles.limit]: !pwdPassed,
            [styles.noLimit]: pwdPassed,
          })}
        >
          密碼不一致！
        </span>
      </div>

      <button
        data-bs-toggle="modal"
        data-bs-target="#alertModal"
        className={styles.loginButton}
        onClick={handleRegister}
      >
        註冊
      </button>
      {showAlert && <AlertModal value={alertWord} />}
      <div className={styles.linkTextCancel}>
        <Link to="/login">取消</Link>
      </div>
    </div>
  );
};
