import { Navbar } from "components/Navbar";
import { Rightbar } from "components/Rightbar";
import "../mainpage/mainpage.scss"

export const HomePage = () => {
  return (
    <div className="mainPageContainer">
      <Navbar />
      <div className="mainbarContainer">mainbar container</div>
      <Rightbar />
    </div>
  );
};
