import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import frontend from "../../assets/domains/frontend.png";
import fullStack from "../../assets/domains/full_stack.png";
import backend from "../../assets/domains/backend.png";
import appDev from "../../assets/domains/app_development.png";
import ai from "../../assets/domains/ai.png";
import dataAnalyst from "../../assets/domains/data_analyst.png";
import { BiArrowFromRight } from "react-icons/bi";

const courses = [
  {
    title: "Frontend Development with React.js",
    icon: <img src={frontend} className="h-20 w-20" />,
  },
  {
    title: "Backend Development with Node.js",
    icon: <img src={backend} className="h-20 w-20" />,
  },
  {
    title: "Full Stack Development with MERN",
    icon: <img src={fullStack} className="h-20 w-20" />,
  },
  {
    title: "App Development with Flutter",
    icon: <img src={appDev} className="h-20 w-20" />,
  },
  {
    title: "Master AI & ML",
    icon:<img src={ai} className="h-20 w-20" />,
  },
  {
    title: "Master Data Analytics",
    icon: <img src={dataAnalyst} className="h-20 w-20" />,
  },
];

function TopCareerDomains() {
  return (
    <div className="p-10 bg-secondary mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Fist Text Section */}
      <div className="lg:col-span-2 flex flex-col justify-center text-white">
        <h2 className="text-2xl font-bold mb-5">
          Explore Top Software Career Domains
        </h2>
        <p className="text-md text-gray-200">
          Choose your career path, learn through hands-on projects, receive
          expert guidance, and develop the technical skills needed to succeed in
          today's fast-changing software industry.
        </p>
      </div>
      {/* Render the technology options */}
      {courses.map((course) => {
        return (
          <div className="p-5 bg-white transition-transform duration-500 hover:-translate-y-3 rounded-md gap-5 flex flex-col justify-center items-center">
            {course.icon}
            <p className="text-md md:text-lg font-medium text-center text-secondary">{course.title}</p>
            <div className="flex flex-row items-center justify-center px-3 py-2 bg-primary hover:bg-secondary cursor-pointer rounded-full">
              <p className="text-white text-sm md:text-md mr-1">Check Syllabus</p>
              <IoIosArrowForward className="text-white"/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TopCareerDomains;
