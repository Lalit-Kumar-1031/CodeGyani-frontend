import React, { useState } from "react";
import login from "../../../assets/auth/login.jpg";
import CustomInput from "../../../components/Auth/CustomInput";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

function SetNewPassward() {
  const navigate = useNavigate();
  const [showNewPassword, SetshowNewPassword] = useState(false);
  const [showConfirmPassword, SetconfirmNewPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="w-full flex flex-row h-150">
      {/* Left Form */}
      <div className="flex flex-col flex-1 items-center justify-start">
        <div className="flex flex-col border border-black w-[80%] md:w-[70%] mt-20 py-10 px-8">
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-2xl font-bold text-center">Set New Passward</h1>
            <p className="mt-4 mb-5 text-center">
              Create new secure passward for your account.
            </p>
            <div className="w-full flex flex-row items-center justify-center gap-3">
              <CustomInput
                label="New Password"
                name="newPassword"
                type={showNewPassword ? "password" : "text"}
                value={formData.newPassword}
                onChange={handleOnChange}
                required
              />
              {/* Toggle Button / Icon */}
              <button
                type="button"
                onClick={() => SetshowNewPassword((prev) => !prev)}
                className="text-gray-500 hover:text-gray-700 mt-10 cursor-pointer"
              >
                {showNewPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
            <div className="w-full flex flex-row items-center justify-center gap-3">
              <CustomInput
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword?"password":"text"}
              value={formData.confirmPassword}
              onChange={handleOnChange}
              required
              className="mt-5"
            />
              {/* Toggle Button / Icon */}
              <button
                type="button"
                onClick={() => SetconfirmNewPassword((prev) => !prev)}
                className="text-gray-500 hover:text-gray-700 mt-10 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
            <br />
            <button
              type="submit"
              className="w-full p-2.5 font-medium text-white rounded-md bg-primary hover:bg-primary/80"
            >
              Set Password
            </button>
          </form>
        </div>
        <Link
          to="/login"
          className="flex justify-center items-center mt-3 gap-2"
        >
          <FaArrowLeft className="text-secondary" />
          <p className="text-secondary font-medium">Back to log in</p>
        </Link>
      </div>
      <div className="hidden md:flex flex-col flex-1 bg-primary">
        <img src={login} className="w-full object-cover h-full" />
      </div>
    </div>
  );
}

export default SetNewPassward;
