import React, { useState } from "react";
import register from "../../../assets/auth/register.webp";
import CustomInput from "../../../components/Auth/CustomInput";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName:"",
    email: "",
    password: "",
    mobileNumber:""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="w-full flex flex-row">
      {/* Left Form */}
      <div className="flex flex-col flex-1 items-center justify-start">
        <div className="flex flex-col border border-black w-[80%] md:w-[70%] my-10 py-10 px-8">
          <form>
            <h1 className="text-2xl font-bold text-center">Hey there! ✋</h1>
            <p className="mt-4 mb-5 text-center">
              Provide your personal details to register.
            </p>

            <CustomInput
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleOnChange}
              required
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleOnChange}
              required
            />
            <CustomInput
              label="Mobile No"
              name="mobileNumber"
              type="number"
              value={formData.mobileNumber}
              onChange={handleOnChange}
              placeholder="Ex: 9876543210"
              required
            />
            <br />
            <button className="w-full p-2.5 font-medium text-white rounded-md bg-primary hover:bg-primary/80">
             Create Account
            </button>
            <Link to="/login" className="text-center mt-3 block">
              Already have an account?{" "}
              <span className="text-primary cursor-pointer font-medium">
                Log In
              </span>
            </Link>
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-col flex-1 bg-primary">
        <img src={register} className="w-full object-cover h-170" />
      </div>
    </div>
  );
}

export default Register;
