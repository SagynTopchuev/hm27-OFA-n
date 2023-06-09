import { Route, Routes } from "react-router-dom";
import { MealLayout } from "../layout/MealLayout";
import { Signin } from "../pages/Signin";
import { SignUp } from "../pages/SignUp";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersLayout />}>
        <Route index element={<MealLayout />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
