import { Route, Routes } from "react-router-dom";
import { PagRegister } from "../PagRegister/PagRegister";
import { DashBoard } from "../DashBoard/DashBoard";
import { PagLogin } from "../PagLogin/PagLogin";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PagLogin />}></Route>
      <Route path="/register" element={<PagRegister />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
    </Routes>
  );
};
