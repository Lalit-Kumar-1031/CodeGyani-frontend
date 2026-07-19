import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

function TopNavbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F45116] font-semibold border-b-2 border-[#F45116] pb-2"
      : "text-[#2E0864] font-medium hover:text-[#F45116]";

  return (
    <div className="container mx-auto py-2 px-10 flex justify-between items-center border-b border-gray-300">
      {/* LOGO */}
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="LOGO" className="h-20 w-20 object-contain" />
      </Link>

      {/* Nav Items */}
      <div className="hidden md:flex space-x-6">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/register" className={navLinkClass}>
          Technologies
        </NavLink>

        <NavLink to="/trainings" className={navLinkClass}>
          Trainings
        </NavLink>

        <NavLink to="/gallery" className={navLinkClass}>
          Batches
        </NavLink>

        <NavLink to="/about-us" className={navLinkClass}>
          About Us
        </NavLink>
      </div>
      <button className="hidden md:flex items-center justify-center w-32 h-10 bg-[#F45116] hover:bg-[#2E0864] cursor-pointer rounded-md text-white">
        Login/Signup
      </button>
      
      <IoMenuSharp className="md:hidden flex items-center justify-center w-8 h-6"/>

    </div>
  );
}

export default TopNavbar;
