import { Route, Routes } from "react-router";
import { App } from "../App";
import { UserAdresses } from "../user/UserAddresses";
import { UserProfile } from "../user/UserProfile";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/address" element={<UserAdresses />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </>
  );
};
