import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/public/Home";

export default function AppRoutes() {
  return (
    <Routes>
       {/* UserLayout */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
};
