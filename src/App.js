import "./App.scss";
import { LoginPage } from "pages/LoginPage";
import { Register } from "pages/Register";
import { AdminLoginPage } from "pages/adminpage/AdminLoginPage";
import { AdminMainPage } from "pages/adminpage/AdminMainPage";
import { AdminUserPage } from "pages/adminpage/AdminUserPage";
import { HomePage } from "pages/mainpage/HomePage";
import { ReplyListPage } from "pages/mainpage/ReplyListPage";
import { UserSelfPage } from "pages/mainpage/userpage/UserSelfPage";
import { UserOtherPage } from "pages/mainpage/userpage/UserOtherPage";
import { SettingPage } from "pages/mainpage/SettingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/admin/tweetsList" element={<AdminMainPage />} />
          <Route path="/admin/usersList" element={<AdminUserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/replyList" element={<ReplyListPage />} />
          <Route path="/userSelf" element={<UserSelfPage />} />
          <Route path="/userOther" element={<UserOtherPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<LoginPage />} /> {/* 暫定 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
