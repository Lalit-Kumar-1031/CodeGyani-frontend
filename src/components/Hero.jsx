import React from "react";
import hero from "../assets/hero.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { RiCertificate2Fill } from "react-icons/ri";

function Hero() {
  return (
    <section>
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Part */}
        <div className="h-90 md:h-120 w-full md:w-1/2 flex flex-col pr-5 pb-7 md:pb-0">
          <p className="text-sm text-[#F45116] leading-tight font-medium md:font-bold pb-5 lg:pt-10">
            INDIA'S TRUSTED SOFTWARE TRAINING COMPANY
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-[#2E0864] font-bold lg:leading-12 leading-10">
            Where Students Become Professional{" "}
            <span className="text-3xl text-[#F45116] md:text-4xl lg:text-5xl">Developers</span>
          </p>
          <p className="text-sm md:text-md text-black pt-7">
            Code Gyani Private Limited empowers students with practical AI and
            software development training through live projects, real coding
            experience, and industry-focused mentorship to build job-ready
            developers.
          </p>
          {/* Explore Button div */}
          <div className="flex flex-row pt-7 gap-4">
            <button className="bg-[#F45116] hover:bg-[#2E0864] transition-colors duration-300 px-5 py-3 rounded-md text-white font-medium flex items-center gap-2">
              <span>Explore Trainings</span>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
            <button className="bg-[#2E0864] hover:bg-[#F45116] py-2 text-white px-5 rounded-md font-medium flex flex-row items-center gap-2 transition-colors duration-300">
              <p>Upcoming Batches</p>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
          </div>
          {/* Expert Trainer Row */}
          <div className="hidden lg:flex flex-row pt-10 justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <IoPersonSharp className="w-5 h-5 text-[#2E0864]"/>
              <p className="text-[#2E0864] font-medium">Expert Trainer</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <FaBriefcase className="w-5 h-5 text-[#2E0864]"/>
              <p className="text-[#2E0864] font-medium">Hands-on Experience</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <RiCertificate2Fill className="w-5 h-5 text-[#2E0864]"/>
              <p className="text-[#2E0864] font-medium">Placement Assistence</p>
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 h-90 md:h-120 ">
          <img src={hero} alt="Hero" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
