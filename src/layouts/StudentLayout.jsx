import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { WebsiteConfig } from "../constants/WebsiteConfig";
import { FaHome } from "react-icons/fa";
import { RiCertificate2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

function StudentLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState();

  const toggleSideBar = ({ closeSideBar }) => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="min-h-screen flex md:flex-row flex-col relative">
      {/* Menu Button */}
      <div className="flex md:hidden p-4 bg-secondary text-white z-20">
        <button onClick={toggleSideBar}>
          <FaBars size={20} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Student Dashboard</h1>
      </div>
      {/* Mobile overlay */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 z-10 bg-secondary/10 md:hidden"
          onClick={toggleSideBar}
        ></div>
      )}

      {/* Side Bar */}
      <div
        className={`bg-secondary w-64 min-h-screen text-white absolute md:static transform ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <div className="px-2 py-4">
          <div className="flex flex-col gap-5">
            <Link to="/" className="text-3xl font-bold text-primary uppercase">
              {WebsiteConfig.shortName}
            </Link>
            <p className="text-lg font-bold ">Student Dashboard</p>
            {/* Nav Items */}
            <nav className="flex flex-col space-y-2">
              <NavLink
                to="/student"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white py-3 px-4 rounded flex items-center space-x-2 "
                    : "text-gray-300 hover:bg-white hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                }
              >
                <FaHome />
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="/student/certificate"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white py-3 px-4 rounded flex items-center space-x-2 "
                    : "text-white hover:bg-primary py-3 px-4 rounded flex items-center space-x-2"
                }
              >
                <RiCertificate2Fill />
                <span>Certificate</span>
              </NavLink>
              <p className="text-lg font-bold ">Account</p>
              <NavLink
                to="/student/profile"
                onClick={toggleSideBar}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary text-white py-3 px-4 rounded flex items-center space-x-2 "
                    : "text-white hover:bg-primary py-3 px-4 rounded flex items-center space-x-2"
                }
              >
                <FaUserAlt />
                <span>Profile</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
