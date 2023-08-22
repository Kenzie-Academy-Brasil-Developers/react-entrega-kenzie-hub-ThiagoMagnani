import { Route, Routes } from "react-router-dom";
import { PagRegister } from "../PagRegister/PagRegister";
import { DashBoard } from "../DashBoard/DashBoard";
import { PagLogin } from "../PagLogin/PagLogin";
import { ProtectedRoutes } from "../ProtectedRoutes/protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PagLogin />} />
      <Route path="/register" element={<PagRegister />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashBoard />} />
      </Route>
    </Routes>
  );
};
