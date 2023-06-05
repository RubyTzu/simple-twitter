import "components/Rightbar.scss";
import { ReactComponent as GreyIconSVG } from "assets/GreyIcon.svg";

export const Rightbar = () => {
  return (
    <div className="rightbarContainer">
      <div className="popularbarContainer">
        <h1 className="RightbarTitle">推薦跟隨</h1>

        <div className="popularUserCollection">
          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">Pizza Hut</p>
              <a className="popularUserNickName" href="/">
                @pizzahut
              </a>
            </div>
            <button className="toNotFollowButton">正在跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">McDonald</p>
              <a className="popularUserNickName" href="/">
                @McDonald
              </a>
            </div>
            <button className="toNotFollowButton">正在跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">Bank</p>
              <a className="popularUserNickName" href="/">
                @Bank
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">L'Oréal</p>
              <a className="popularUserNickName" href="/">
                @Loreal
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">Nintendo</p>
              <a className="popularUserNickName" href="/">
                @Nintendo
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">MasterCard</p>
              <a className="popularUserNickName" href="/">
                @MasterCard
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">Nike</p>
              <a className="popularUserNickName" href="/">
                @Nike
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>

          <div className="popularUser">
            <GreyIconSVG className="popularUserAvatar cursorPointer" />

            <div className="userInfos">
              <p className="popularUserName">Adidas</p>
              <a className="popularUserNickName" href="/">
                @Nike
              </a>
            </div>
            <button className="toFollowButton">跟隨</button>
          </div>
        </div>
      </div>
    </div>
  );
};
