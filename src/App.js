import "./App.scss";

import { LoginPage } from "pages/LoginPage";
import { Register } from "pages/Register";
import { AdminLoginPage } from "pages/adminpage/AdminLoginPage";
import { AdminMainPage } from "pages/adminpage/AdminMainPage";
import { AdminHomePage } from "pages/adminpage/AdminHomePage";
import { AdminUserPage } from "pages/adminpage/AdminUserPage";
import { MainPage } from "pages/mainpage/MainPage";
import { HomePage } from "pages/mainpage/HomePage";
import { ReplyListPage } from "pages/mainpage/ReplyListPage";
import { UserSelfPage } from "pages/mainpage/userpage/UserSelfPage";
import { UserOtherPage } from "pages/mainpage/userpage/UserOtherPage";
import { FollowPage } from "pages/mainpage/FollowPage";
import { SettingPage } from "pages/mainpage/SettingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { ClickLikeProvider } from "context/clickLikeContext";

import { TweetContextProvider } from "context/tweetContext";
import { CurrentUserProvider } from "context/userInfoContext";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <CurrentUserProvider>
          <TweetContextProvider>
            <ClickLikeProvider>
              <Routes>
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin/tweetslist"
                  element={
                    <AdminMainPage
                      rightContent={<AdminHomePage />}
                      page="推文清單"
                    />
                  }
                />
                <Route
                  path="/admin/userslist"
                  element={
                    <AdminMainPage
                      rightContent={<AdminUserPage />}
                      page="使用者列表"
                    />
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/home"
                  element={
                    <MainPage middleContent={<HomePage />} page="首頁" />
                  }
                />
                <Route
                  path="/replylist/:tweetId"
                  element={
                    <MainPage middleContent={<ReplyListPage />} page="推特文" />
                  }
                />
                <Route
                  path="/userself/:userId"
                  element={
                    <MainPage
                      middleContent={<UserSelfPage />}
                      page="個人資料"
                    />
                  }
                />
                <Route
                  path="/userother/:userId"
                  element={
                    <MainPage
                      middleContent={<UserOtherPage />}
                      page="他人資料"
                    />
                  }
                />
                <Route
                  path="/followlist"
                  element={
                    <MainPage middleContent={<FollowPage />} page="追蹤清單" />
                  }
                />
                <Route
                  path="/setting"
                  element={
                    <MainPage middleContent={<SettingPage />} page="設定" />
                  }
                />
                <Route path="*" element={<LoginPage />} /> {/* 暫定 */}
              </Routes>
            </ClickLikeProvider>
          </TweetContextProvider>
          </CurrentUserProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
