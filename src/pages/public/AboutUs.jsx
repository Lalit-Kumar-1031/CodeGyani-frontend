import React from "react";
import aboutUs from "../../assets/about_us.jpg";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { WebsiteConfig } from "../../constants/WebsiteConfig";
import target from "../../assets/target.png";
import vision from "../../assets/vision.png";
import WhyChoose from "../../components/WhyChoose";
import AITextContainer from "../../components/About/AITextContainer";
import AIEraComponent from "../../components/About/AIEraComponent";
import MentorAndRealExperience from "../../components/About/MentorAndRealExperience";
import MissionVision from "../../components/About/MissionVision";

function AboutUs() {
  return (
    <div className="w-full flex flex-col px-5 md:px-10 py-5">
        {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Part */}
        <div className="w-full md:w-1/2 mr-5">
          <p className="text-md text-primary font-medium uppercase">
            ABOUT {WebsiteConfig.companyName}
          </p>
          <br />
          <p className="text-secondary text-4xl md:text-5xl font-medium leading-9 md:leading-12">
            Get Trained Like a{" "}
            <span className="text-4xl md:text-5xl font-bold text-primary">
              Software Developer
            </span>
            , Not Just a Student.
          </p>
          <br />
          <p>
            At {WebsiteConfig.companyName} , we don't just teach programming —
            we prepare students to become industry-ready software engineers.
          </p>
          <br />
          <p>
            Our training is designed for CSE, IT, BCA, MCA, and Diploma students
            who want practical experience, real-world skills, and the confidence
            to build successful careers in software development. From your first
            line of code to deploying complete applications, you'll work on live
            projects, follow industry standards, and learn directly from
            experienced software engineers.
          </p>
          <br />
          <br />
          <p className="text-secondary text-3xl font-bold">
            Join Our Popular Trainings
          </p>
          {/* Explore Button div */}
          <div className="flex flex-row pt-7 gap-4">
            <button className="bg-primary hover:bg-primary/60 transition-colors duration-200 px-5 py-3 rounded-md text-white font-medium flex items-center gap-2">
              <span>Explore Trainings</span>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
            <button className="bg-secondary hover:bg-secondary/80 py-2 text-white px-5 rounded-md font-medium flex flex-row items-center gap-2 transition-colors duration-200">
              <p>Upcoming Batches</p>
              <IoArrowForwardCircleOutline className="w-5 h-5" />
            </button>
          </div>
          <br />
        </div>
        {/* Right Part */}
        <div className="w-full md:w-1/2 h-full">
          <img src={aboutUs} alt className="w-full object-fill rounded-lg" />
        </div>
      </div>
      <br />
      {/* About the Company */}
      <div className="w-full flex flex-col bg-secondary p-10 my-10">
        <h1 className="text-xl md:text-2xl text-primary font-bold">
          About {WebsiteConfig.companyName}
        </h1>
        <br />
        <p className="text-white leading-8 mb-5 md:mb-0">
          Code Gyani Pvt. Ltd. is a practical software training company
          dedicated to bridging the gap between college education and the
          software industry.
        </p>
        <p className="text-white leading-8 mb-5 md:mb-0">
          Transform students into professional software developers through
          practical learning, real projects, industry mentorship, and AI‑powered
          development skills.
        </p>
        <p className="text-white leading-8">
          Instead of focusing only on theory, we teach students how software is
          actually built inside IT companies — from planning and development to
          deployment and maintenance.
        </p>
      </div>
      {/* Mission and Vision */}
      <MissionVision/>
      <br />
      <br />
      {/* Why Choose Us */}
      <WhyChoose />
      <br />
      <br />
      <AIEraComponent />
      <br />
      <br />
      <MentorAndRealExperience />
    </div>
  );
}

export default AboutUs;
