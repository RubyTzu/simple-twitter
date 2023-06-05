import "./App.scss";
import { LoginPage } from "pages/LoginPage";
import { Register } from "pages/Register";
import { AdminLoginPage } from "pages/adminpage/AdminLoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<AdminLoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<LoginPage />} /> {/* 暫定 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
