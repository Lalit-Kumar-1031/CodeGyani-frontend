import React from "react";
import TopNavbar from "../components/TopNavbar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

function UserLayout() {
  return (
    <div>
      <Topbar />
      <TopNavbar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
