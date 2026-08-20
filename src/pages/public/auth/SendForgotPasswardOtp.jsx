import React, { useState } from "react";
import login from "../../../assets/auth/login.jpg";
import CustomInput from "../../../components/Auth/CustomInput";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SendForgotPasswardOtp() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full flex flex-row h-150">
      {/* Left Form */}
      <div className="flex flex-col flex-1 items-center justify-start">
        <div className="flex flex-col border border-black w-[80%] md:w-[70%] mt-20 py-10 px-8">
          <form>
            <h1 className="text-2xl font-bold text-center">
              Forgot Your Passward?
            </h1>
            <p className="mt-4 mb-5 text-center">
              Enter the email associated with your account and we'll send a code
              on your email to reset the password.
            </p>

            <CustomInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleOnChange}
              required
              className="mt-5"
            />
            <br />
            <button className="w-full p-2.5 font-medium text-white rounded-md bg-primary hover:bg-primary/80">
              Send Verification Code
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

export default SendForgotPasswardOtp;
