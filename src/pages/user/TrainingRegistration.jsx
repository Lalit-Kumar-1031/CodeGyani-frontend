import React from "react";
import { WebsiteConfig } from "../../constants/WebsiteConfig";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";

function TrainingRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    gender: "",
    training: "",
    collegeName: "",
    currentYear: "",
    highestEducation: "",
    classesMode: "offline",
    registrationFee: 1000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      registrationFee:
        name === "training" && value === "apprenticeship" ? 2000 : 1000,
    }));
    console.log("fee=>", formData.registrationFee);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("FormData =>", JSON.stringify(formData));
  };

  const trainingBenefits = [
    { title: "Team-Based Learning" },
    { title: "Real Industry-Level Projects" },
    { title: "Offline Classes" },
    { title: "Task Kit for More Practice" },
    { title: "Physical Project File" },
    { title: "Code Gyani T-Shirt" },
    { title: "Code Gyani I-Card" },
    { title: "PG & Room Guidance" },
    { title: "Real Interview Tips" },
    { title: "Mentor Guidance & Support" },
    { title: "AI-Powered Development" },
    { title: "Practical Development Environment" },
    { title: "Training Certificate & Farewell Party" },
  ];
  return (
    <div className="px-5 md:px-10 py-5">
      <div className="w-full bg-secondary p-5">
        <p className="text-center text-white text-xl md:text-2xl font-bold">
          Complete Training Registration to Start Your Tech Career
        </p>
      </div>
      <br />
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10">
        <div className="w-full flex-2">
          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col border border-gray-300  p-5 md:p-8 space-y-3"
          >
            {/* Name Email */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>
                  Student Name<span className="text-red-600 text-md">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} required
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>
                  Email<span className="text-red-600 text-md">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange} required
                  type="email"
                  placeholder="Email"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
            </div>
            {/* Mobile No College Name */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>
                  Mobile No<span className="text-red-600 text-md">*</span>
                </label>
                <input
                  type="number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange} required
                  placeholder="Mobile Number"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>
                  Gender<span className="text-red-600 text-md">*</span>{" "}
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange} required
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                >
                  <option value="" disabled>
                    {" "}
                    Select Gender{" "}
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            {/* Training & College Name */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>
                  Choose Training<span className="text-red-600 text-md">*</span>
                </label>
                <select
                  name="training"
                  value={formData.training}
                  onChange={handleChange} required
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                >
                  <option value="" disabled>
                    {" "}
                    Select Training{" "}
                  </option>
                  <option value="summer-training">Summer Training</option>
                  <option value="winter-training">Winter Training</option>
                  <option value="apprenticeship">ApprenticeShip</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label>
                  College Name
                  <span className="text-red-600 text-md">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange} required
                  placeholder="College Name"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
            </div>
            {/* Course & Year */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>
                  Current Year<span className="text-red-600 text-md">*</span>
                </label>
                <select
                  name="currentYear"
                  value={formData.currentYear}
                  onChange={handleChange} required
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                >
                  <option value="" disabled>
                    {" "}
                    Select Year{" "}
                  </option>
                  <option value="1st year">1st Year</option>
                  <option value="2nd year">2nd Year</option>
                  <option value="3rd year">3rd Year</option>
                  <option value="4th year">4th Year</option>
                  <option value="passout">Passout</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label>
                  Highest Education
                  <span className="text-red-600 text-md">*</span>
                </label>
                <select
                  name="highestEducation"
                  value={formData.highestEducation}
                  onChange={handleChange} required
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                >
                  <option value="" disabled>
                    {" "}
                    Select Education{" "}
                  </option>
                  <option value="diploma (cse)">Diploma (CSE)</option>
                  <option value="diploma (it)">Diploma (IT)</option>
                  <option value="diploma (ai & ml)">Diploma (AI & ML)</option>
                  <option value="bca">BCA</option>
                  <option value="mca">MCA</option>
                  <option value="b.tech (cse)">B.Tech (CSE)</option>
                  <option value="b.tech (it)">B.Tech (IT)</option>
                  <option value="b.tech (ai & ml)">B.Tech (AI & ML)</option>
                  <option value="m.tech (cse & it)">M.Tech (CSE & IT)</option>
                  <option value="b.s.c (computer science)">B.S.C (Computer Science)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            {/* Training Mode & Registration Fee */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>
                  Classes Mode<span className="text-red-600 text-md">*</span>
                </label>
                <input
                  type="text"
                  name="classesMode"
                  value={formData.classesMode}
                  readOnly
                  className="border outline-none border-gray-300 p-2 mt-3 bg-gray-50"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>
                  Registration Fee
                  <span className="text-red-600 text-md">*</span>
                </label>
                <input
                  type="number"
                  readOnly
                  name="registrationFee"
                  value={formData.registrationFee}
                  className="border outline-none border-gray-300 bg-gray-50 p-2 mt-3"
                />
              </div>
            </div>
            {/* CheckBox and Pay Button */}
            <div className="flex gap-3 mb-5 mt-3 items-start">
              <input type="checkbox" className="mt-2" />
              <p>
                I agree to the{" "}
                <span className="text-primary cursor-pointer">
                  Terms & Conditions
                </span>
                ,{" "}
                <span className="text-primary cursor-pointer">
                  Privacy Policy
                </span>
                , and{" "}
                <span className="text-primary cursor-pointer">
                  Refund Policy
                </span>{" "}
                of {WebsiteConfig.shortName} and confirm that the information
                provided by me is correct.
              </p>
            </div>
            <button
              type="submit"
              className="py-2 px-5 w-full md:w-1/2 bg-primary text-white font-medium text-md hover:bg-primary/80"
            >
              Continue & Pay
            </button>
          </form>
        </div>
        <div className="flex flex-col p-5 border border-gray-300 bg-gray-50 flex-1">
          <p className="font-bold text-secondary text-2xl mt-4 mb-3">
            Benefits & Perks
          </p>

          {trainingBenefits.map((benefit) => {
            return (
              <div key={benefit.title} className="flex flex-row gap-1.5 mb-3">
                <CiCircleCheck className="w-5 h-5 text-primary" />
                <p className="text-secondary">{benefit.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrainingRegistration;
