import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import { Link } from "react-router-dom";
import "pages/LoginRegister.scss";

export const Register = () => {
  return (
    <div className="authContainer">
      <div>
        <LogoSVG />
      </div>
      <h1>建立你的帳號</h1>
      <div className="inputContainer">
        <AuthInput type="text" label="帳號" placeholder="請輸入帳號" />
      </div>
      <div className="inputContainer">
        <AuthInput type="text" label="名稱" placeholder="請輸入使用者名稱" />
      </div>
      <div className="inputContainer">
        <AuthInput type="text" label="Email" placeholder="請輸入Email" />
      </div>
      <div className="inputContainer">
        <AuthInput type="password" label="密碼" placeholder="請設定密碼" />
      </div>
      <div className="inputContainer">
        <AuthInput
          type="password"
          label="密碼確認"
          placeholder="請再次輸入密碼"
        />
      </div>

      <button className="loginButton" onClick={() => console.log("ok!")}>
        註冊
      </button>
      <div className="linkTextCancel">
        <Link to="/login">取消</Link>
      </div>
    </div>
  );
};
