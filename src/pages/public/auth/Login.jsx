import React, { useState } from "react";
import login from "../../../assets/auth/login.webp";
import CustomInput from "../../../components/Auth/CustomInput";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        <div className="flex flex-col border border-black w-[80%] md:w-[70%] h-110 mt-20 py-10 px-8">
            <form>
          <h1 className="text-2xl font-bold text-center">Hey there! ✋</h1>
          <p className="mt-4 mb-5 text-center">Enter email and password to login.</p>

          <CustomInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleOnChange}
            required
            className="mt-5"
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleOnChange}
            required
          />
          <div className="flex justify-end mt-2">
            <Link to="/send-forgot-password-otp" className="text-primary font-normal cursor-pointer">Forgot Passward?</Link>
          </div>
          <br/>
          <button className="w-full p-2.5 font-medium text-white rounded-md bg-primary hover:bg-primary/80">Log In</button>
          <Link to="/register" className="block text-center mt-3">Don't have an account? <span className="text-primary cursor-pointer font-medium">Register</span></Link>
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-col flex-1 bg-primary h-150">
        <img src={login} className="w-full object-cover h-full" />
      </div>
    </div>
  );
}

export default Login;
