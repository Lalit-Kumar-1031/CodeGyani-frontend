import React from "react";
import hero from "../assets/hero.jpg";
import heroTech from '../assets/trainings/heroTech2.png';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { RiCertificate2Fill } from "react-icons/ri";
import { WebsiteConfig } from "../constants/WebsiteConfig";

function Hero() {
  return (
    <section>
      <div className="w-full flex flex-col md:flex-row md:items-stretch">
        {/* Left Part */}
        <div className="h-90 md:h-105 w-full md:w-1/2 flex flex-col pr-5 pb-7 md:pb-0">
          <p className="text-sm text-primary leading-tight font-medium md:font-bold pb-5 lg:pt-10">
            INDIA'S TRUSTED SOFTWARE TRAINING COMPANY
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-secondary font-bold lg:leading-12 leading-10">
            Where Students Become Professional{" "}
            <span className="text-3xl text-primary md:text-4xl lg:text-5xl">Developers</span>
          </p>
          <p className="text-sm md:text-md text-black pt-7">
           {WebsiteConfig.companyName} empowers students with practical AI and
            software development training through live projects, real coding
            experience, and industry-focused mentorship to build job-ready
            developers.
          </p>
          {/* Explore Button div */}
          <div className="flex flex-row pt-7 gap-4">
            <button className="bg-primary hover:bg-secondary transition-colors duration-300 px-5 py-3 rounded-md text-white font-medium flex items-center gap-2">
              <span>Explore Trainings</span>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
            <button className="bg-secondary hover:bg-primary py-2 text-white px-5 rounded-md font-medium flex flex-row items-center gap-2 transition-colors duration-300">
              <p>Upcoming Batches</p>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
          </div>
          {/* Expert Trainer Row */}
          <div className="hidden lg:flex flex-row pt-10 justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <IoPersonSharp className="w-5 h-5 text-secondary"/>
              <p className="text-secondary font-medium">Expert Trainer</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <FaBriefcase className="w-5 h-5 text-secondary"/>
              <p className="text-secondary font-medium leading-5">Hands-on Experience</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <RiCertificate2Fill className="w-5 h-5 text-secondary"/>
              <p className="text-secondary font-medium">Placement Assistence</p>
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 h-90 md:h-105 ">
          <img src={heroTech} alt="Hero" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
