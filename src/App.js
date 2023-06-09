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
import { MainPage } from "pages/mainpage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "context/authContext";
const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/tweetslist" element={<AdminMainPage />} />
            <Route path="/admin/userslist" element={<AdminUserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={<MainPage middleContent={<HomePage />} page="首頁" />}
            />
            <Route
              path="/replylist"
              element={
                <MainPage middleContent={<ReplyListPage />} page="推特文" />
              }
            />
            <Route
              path="/userself"
              element={
                <MainPage middleContent={<UserSelfPage />} page="個人資料" />
              }
            />
            <Route
              path="/userother"
              element={
                <MainPage middleContent={<UserOtherPage />} page="他人資料" />
              }
            />
            <Route
              path="/setting"
              element={<MainPage middleContent={<SettingPage />} page="設定" />}
            />
            <Route path="*" element={<LoginPage />} /> {/* 暫定 */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
