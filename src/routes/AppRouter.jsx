import { Route, Routes } from "react-router";
import { App } from "../App";
/* import { LoginPage } from "../auth/login/LoginPage";
import { RegisterPage } from "../auth/register/RegisterPage"; */
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  return (
    <>
      <Routes>
        {/*         <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/register" element={<RegisterPage />} /> */}
        <Route path="/*" element={<App />} />
      </Routes>
    </>
  );
};
