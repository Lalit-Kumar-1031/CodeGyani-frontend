import React from "react";
import { WebsiteConfig } from "../../constants/WebsiteConfig";

function TrainingRegistration() {
  return (
    <div className="px-5 md:px-10 py-5">
      <div className="w-full bg-secondary p-5">
        <p className="text-center text-white text-xl md:text-2xl font-bold">
          Complete Training Registration to Start Your Tech Career Now
        </p>
      </div>
      <br />
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10">
        <div className="w-full">
          <form className="w-full flex flex-col border border-gray-300  p-5 md:p-8 space-y-3">
            {/* Name Email */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>Student Name<span className="text-red-600 text-md">*</span></label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>Email<span className="text-red-600 text-md">*</span></label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
            </div>
            {/* Mobile No College Name */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>Mobile No<span className="text-red-600 text-md">*</span></label>
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label>Gender<span className="text-red-600 text-md">*</span> </label>
                <select className="border outline-none border-gray-300 focus:border-primary p-2 mt-3">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            {/* Mobile No College Name */}
            <div className="flex flex-col md:flex-row  gap-5 md:gap-10 w-full">
              <div className="flex flex-col flex-1">
                <label>Choose Training<span className="text-red-600 text-md">*</span></label>
                <select className="border outline-none border-gray-300 focus:border-primary p-2 mt-3">
                  <option value="summer-training">Summer Training</option>
                  <option value="winter-training">Winter Training</option>
                  <option value="apprenticeShip">ApprenticeShip</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label>College Name<span className="text-red-600 text-md">*</span> </label>
                <input
                  type="text"
                  placeholder="College Name"
                  className="border outline-none border-gray-300 focus:border-primary p-2 mt-3"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col p-5 border border-gray-300 bg-gray-50"></div>
      </div>
    </div>
  );
}

export default TrainingRegistration;
