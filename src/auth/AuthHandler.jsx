import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./register/RegisterPage";

export const AuthHandler = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(true);

  const toggleLoginModal = () => setLoginModal((loginModal) => !loginModal);

  const toggleRegisterModal = () =>
    setRegisterModal((registerModal) => !registerModal);

  const openModalFirstTimeHandler = () => {
    toggleLoginModal();
  };

  const toggleLoginOrRegister = () => {
    setLoginOrRegister((loginOrRegister) => !loginOrRegister);
  };

  const switchLoginOrRegister = () => {
    toggleLoginModal();
    toggleLoginOrRegister();
    toggleRegisterModal();
  };

  const handleHide = () => {
    if (!loginOrRegister) toggleLoginOrRegister();
    if (loginModal) toggleLoginModal();
    if (registerModal) toggleRegisterModal();
  };
  return (
    <>
      {loginModal || registerModal ? (
        <div></div>
      ) : (
        <Button
          className="d-flex justify-content-end mx-3"
          onClick={openModalFirstTimeHandler}
        >
          Login
        </Button>
      )}
      {loginOrRegister ? (
        <LoginPage
          loginModal={loginModal}
          toggleLoginModal={toggleLoginModal}
          switchLoginOrRegister={switchLoginOrRegister}
          handleHide={handleHide}
        />
      ) : (
        <RegisterPage
          registerModal={registerModal}
          switchLoginOrRegister={switchLoginOrRegister}
          toggleRegisterModal={toggleRegisterModal}
          handleHide={handleHide}
        />
      )}
    </>
  );
};
