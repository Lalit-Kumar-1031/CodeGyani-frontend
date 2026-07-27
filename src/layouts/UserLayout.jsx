import React from "react";
import TopNavbar from "../components/TopNavbar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function UserLayout() {
  return (
    <div>
      <Topbar />
      <TopNavbar />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default UserLayout;
