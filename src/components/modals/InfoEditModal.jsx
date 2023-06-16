import styles from "./InfoEditModal.module.scss";
import { ReactComponent as CloseSVG } from "assets/Close.svg";
import { ReactComponent as CameraSVG } from "assets/Camera.svg";
import initialAvatar from "assets/GreyIcon.svg";
import initialSelfBcg from "assets/BGPhoto.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { removeCoverPhoto, updateInfo } from "api/infoEdit";
import { getProfile } from "api/userinfo";

const id = localStorage.getItem("id");

export const InfoEditModal = () => {
  const [user, setUser] = useState({
    name: "null",
    introduction: "null",
    avatar: "null",
    coverPhoto: "null",
  });
  const [bgImagePreview, setBgImagePreview] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [bgImageFile, setBgImageFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);



  useEffect(() => {
    const showPage = async () => {
      const userData = await getProfile(id);
      if (userData.introduction === null) {
        setUser({ ...userData, introduction: "" });
      } else {
        setUser(
          userData || {
            name: "null",
            introduction: "null",
            avatar: null,
            coverPhoto: null,
          }
        );
      }

      if (userData && userData.coverPhoto) {
        setBgImagePreview(userData.coverPhoto);
      }

      if (userData && userData.avatar) {
        setAvatarPreview(userData.avatar);
      }
    };
    showPage();
    console.log("hello from useEffect-InfoEditModal");
  }, []);

  const handleUpdateInfo = async () => {
    const formData = new FormData();

    formData.append("name", user.name);
    formData.append("introduction", user.introduction);

    if (avatarFile) {
      formData.append("avatar", avatarFile, "avatar.png");
    }

    if (bgImageFile && bgImageFile !== "null") {
      formData.append("coverPhoto", bgImageFile, "bg.png");
    }

    await updateInfo({ formData, id });

    if (bgImageFile === "null") {
      await removeCoverPhoto(id);
    }
    //  navigate(`/userself/${id}`);
    const reload = () => window.location.reload();
    reload();
  };

  const handleBgImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setBgImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
      setBgImageFile(file);
    }
  };

  const handleRemoveBgImage = () => {
    setBgImagePreview(initialSelfBcg);
    setBgImageFile("null");
    console.log(bgImageFile);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };

      reader.readAsDataURL(file);
      setAvatarFile(file);
    }
  };

  const handleSave = () => {
    handleUpdateInfo();
    console.log(bgImageFile);
    console.log(avatarFile);
   
    // 在此處執行其他需要在按下儲存後立即執行的動作
    // 例如關閉彈出視窗、重新導向等等
  };

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleIntroductionChange = (e) => {
    setUser({
      ...user,
      introduction: e.target.value,
    });
  };

  return (
    <div
      className="modal fade"
      id="infoEditModal"
      tabIndex="-1"
      aria-labelledby="infoEditModalLabel"
      aria-hidden="true"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="modal-dialog">
        <div className={`modal-content ${styles.modalContainer}`}>
          <div
            className={`modal-header position-relative ${styles.modalHeader}`}
          >
            <Link
              to={`/userself/${id}`}
              type="button"
              className={`position-absolute ${styles.closeButton}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <CloseSVG />
            </Link>
            <p className={styles.modalHeaderTitle}>編輯個人資料</p>
            <button
              type="button"
              className={styles.saveButton}
              data-bs-dismiss={
                Number(user.name.length) <= 50 &&
                Number(user.introduction.length) <= 160 &&
                "modal"
              }
              onClick={(e) => {
                e.stopPropagation();
                if (
                  Number(user.name.length) <= 50 &&
                  Number(user.introduction.length) <= 160
                ) {
                  handleSave();
                }
                return;
              }}
            >
              儲存
            </button>
          </div>
          <div className={`modal-body ${styles.modalBody}`}>
            <div className={styles.uploadBcgSection}>
              <div className={styles.imagePreviewContainer}>
                {/* <img
                  className={styles.userBcgImage}
                  src={bgImagePreview || user.coverPhoto}
                  alt="Background"
                /> */}
                {bgImagePreview ? (
                  <img
                    className={styles.userBcgImage}
                    src={bgImagePreview || user.coverPhoto}
                    alt="Background"
                  />
                ) : (
                  <img
                    className={styles.userBcgImage}
                    src={initialSelfBcg}
                    alt="Background"
                  />
                )}
              </div>
              <div className={styles.BGButtons}>
                <label htmlFor="bgImageInput">
                  <CameraSVG className={styles.userBcgCamera} />
                </label>
                <input
                  id="bgImageInput"
                  className={styles.userBcgInput}
                  type="file"
                  onChange={handleBgImageChange}
                />
                <button
                  className={styles.removeButton}
                  onClick={e=>{
                    e.stopPropagation()
                    handleRemoveBgImage()}}
                >
                  del
                </button>
                <CloseSVG className={styles.close} />
              </div>
            </div>

            <div className={styles.uploadAvatarSection}>
              {avatarPreview ? (
                <img
                  className={styles.userAvatar}
                  src={avatarPreview || user.avatar}
                  alt="Avatar"
                />
              ) : (
                <img
                  className={styles.userAvatar}
                  src={initialAvatar}
                  alt="Avatar"
                />
              )}
              <div className={styles.uploadInputAndCamera}>
                <input
                  className={styles.userInput}
                  type="file"
                  onChange={handleAvatarChange}
                />
                <CameraSVG className={styles.userCamera} />
              </div>
            </div>

            <div className={styles.textContainer}>
              <div className={styles.inputContainer}>
                <div
                  className={
                    Number(user.name.length) <= 50
                      ? `${styles.inputs}`
                      : `${styles.inputsExceedWordLimitHint}`
                  }
                >
                  <label className={styles.inputLabel}>名稱</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={user.name}
                    onChange={handleNameChange}
                  />
                </div>
                <p className={styles.wordLimit}>
                  {Number(user.name.length) > 50 && (
                    <span className={styles.wordLimitHint}>字數超出上限！</span>
                  )}
                  <span>
                    <span className={styles.wordLimitCount}>
                      {user.name.length}
                    </span>
                    /50
                  </span>
                </p>
              </div>
              <div className={styles.textareaContainer}>
                <div
                  className={
                    Number(user.introduction.length) <= 160
                      ? `${styles.textareas}`
                      : `${styles.exceedWordLimit}`
                  }
                >
                  <label className={styles.textareaLabel}>自我介紹</label>
                  <textarea
                    className={styles.textarea}
                    type="text"
                    value={user.introduction}
                    onChange={handleIntroductionChange}
                  />
                </div>

                <p className={styles.wordLimit}>
                  {Number(user.introduction.length) > 160 && (
                    <span className={styles.wordLimitHint}>字數超出上限！</span>
                  )}
                  <span>
                    <span className={styles.wordLimitCount}>
                      {user.introduction.length}
                    </span>
                    /160
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
