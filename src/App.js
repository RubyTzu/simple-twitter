import "./App.scss";
import { LoginPage } from "pages/LoginPage";
import { Register } from "pages/Register";
import { AdminLoginPage } from "pages/adminpage/AdminLoginPage";
import { HomePage } from "pages/mainpage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<LoginPage />} /> {/* 暫定 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
