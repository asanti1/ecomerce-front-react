import { useState } from "react";
import { LoginPage } from "./login/LoginPage";
import { RegisterPage } from "./register/RegisterPage";

export const AuthHandler = ({
  loginModal,
  toggleLoginModal,
  registerModal,
  toggleRegisterModal,
}) => {
  const [loginOrRegister, setLoginOrRegister] = useState(true);

  const toggleLoginOrRegister = () => {
    setLoginOrRegister((loginOrRegister) => !loginOrRegister);
  };

  if (!loginModal && !registerModal) {
    toggleLoginOrRegister();
    console.log(`loginModal && !registerModal falsos = ${loginOrRegister}`);
  }

  return (
    <>
      {loginOrRegister ? (
        <LoginPage
          loginModal={loginModal}
          toggleLoginModal={toggleLoginModal}
          toggleLoginOrRegister={toggleLoginOrRegister}
        />
      ) : (
        <RegisterPage
          toggleLoginOrRegister={toggleLoginOrRegister}
          toggleRegisterModal={toggleRegisterModal}
          registerModal={registerModal}
        />
      )}
    </>
  );
};
