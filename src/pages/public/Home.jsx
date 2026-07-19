import React from "react";
import Hero from "../../components/Hero";
import { FaUsers } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsTrophy } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillSun } from "react-icons/ai";
import { FaRegSnowflake } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";

function Home() {
  let successRecords = [
    {
      title: "10K",
      subTitle: "Students Trained",
      icon: <PiStudent className="w-10 h-10 text-[#2E0864]" />,
    },
    {
      title: "10+",
      subTitle: "Offline Trainings",
      icon: <PiUsersThreeLight className="w-10 h-10 text-[#2E0864]" />,
    },
    {
      title: "20+",
      subTitle: "In-Demand Technologies",
      icon: <GrLanguage className="w-10 h-10 text-[#2E0864]" />,
    },
    {
      title: "500+",
      subTitle: "Batches",
      icon: <BsTrophy className="w-10 h-8 text-[#2E0864]" />,
    },
    {
      title: "200+",
      subTitle: "Hiring Partners",
      icon: <FaRegBuilding className="w-10 h-8 text-[#2E0864]" />,
    },
  ];

  let trainingInfo = [
    {
      title: "Summer Training",
      subTitle: "6-8 Weeks",
      icon: (
        <div className="bg-amber-50 h-14 w-14 rounded-full flex items-center justify-center">
          <AiFillSun className="h-10 w-10 text-[#F45116]" />
        </div>
      ),
      description:
        "Don't spend your summer watching tutorials. Build real software applications, work on industry projects, and become job-ready with expert mentorship.",
      technologies: [
        "AI & ML",
        "Data Scrince & Analytics",
        "Web Development (MERN Stack, Java, Python etc)",
        "App Development (Flutter, React Native, Kotlin etc)",
      ],
      price: "₹6,999",
      jobAssistence: false,
    },
    {
      title: "Winter Training",
      subTitle: "6-8 Weeks",
      icon: (
        <div className="bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center">
          <FaRegSnowflake className="h-10 w-10 text-blue-500" />
        </div>
      ),
      description:
        "Stay ahead of your classmates by mastering in-demand technologies and building an impressive project portfolio this winter.",
      technologies: [
        "AI & ML",
        "Data Scrince & Analytics",
        "Web Development (MERN Stack, Java, Python etc)",
        "App Development (Flutter, React Native, Kotlin etc)",
      ],
      price: "₹6,999",
      jobAssistence: false,
    },
    {
      title: "Apprenticeship Training",
      subTitle: "6-8 Months",
      icon: (
        <div className="bg-indigo-50 h-14 w-14 rounded-full flex items-center justify-center">
          <FaBriefcase className="h-8 w-8 text-indigo-700" />
        </div>
      ),
      description:
        "Build enterprise-level applications, master modern development practices, and prepare for a successful software career with dedicated 100% Job Assistance.",
      technologies: [
        "AI & ML",
        "Data Scrince & Analytics",
        "Web Development (MERN Stack, Java, Python etc)",
        "App Development (Flutter, React Native, Kotlin etc)",
      ],
      price: "₹29,999",
      jobAssistence: true,
    },
    // {
    //   title: "Industrial Training",
    //   subTitle: "6-8 Weeks",
    //   icon: (
    //     <div className="bg-purple-50 h-14 w-14 rounded-full flex items-center justify-center">
    //       <BsFillBuildingsFill className="h-10 w-10 text-[#2E0864]" />
    //     </div>
    //   ),
    //   description:
    //     "Gain hands-on industry exposure through practical development, code reviews, and project-based learning that prepares you for your first software job.",
    //   technologies: [
    //     "AI & ML",
    //     "Data Scrince & Analytics",
    //     "Web Development (MERN Stack, Java, Python etc)",
    //     "App Development (Flutter, React Native, Kotlin etc)",
    //   ],
    //   price: "₹6,999",
    //   jobAssistence: false,
    // },
  ];

  return (
    <div className="px-5 md:px-10 py-5">
      <Hero />
      {/* Numbers That Inspire */}
      <h1 className="text-xl md:text-2xl text-[#2E0864] font-bold pt-10 pb-10">
        Our Success in Numbers
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 shadow-sm shadow-[#4f3279] rounded-md divide-x  divide-gray-300">
        {successRecords.map((record) => {
          return (
            <div className="flex flex-row gap-5 items-center justify-center px-10 py-5 lg:py-0 ">
              {record.icon}
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-2xl text-[#2E0864] font-bold">
                  {record.title}
                </p>
                <p className="text-sm font-medium text-black">
                  {record.subTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Popular Training */}
      <div className="flex flex-row items-center justify-between  pt-10 pb-10">
        <h1 className="text-xl md:text-2xl text-[#2E0864] font-bold">
          Popular Trainings
        </h1>
        <div className="group flex flex-row items-center justify-center gap-2 cursor-pointer">
          <p className="text-md md:text-lg text-[#2E0864] font-medium group-hover:text-[#F45116]">
            Explore All Tranings
          </p>
          <MdOutlineArrowForwardIos className="w-5 h-5 group-hover:text-[#F45116]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {trainingInfo.map((info) => {
          return (
            <div className="py-5 px-5 shadow-sm shadow-gray-400 rounded-md">
              <div className="flex flex-row gap-5">
                {info.icon}
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-[#2E0864] font-bold">
                    {info.title}
                  </p>
                  <div className="w-fit flex bg-gray-100 py-1 px-3 items-center justify-center rounded-lg">
                    <span className="text-sm md:text-md text-gray-800 inline">
                      {info.subTitle}
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <p className="text-gray-600">{info.description}</p>
              {/* <p className="pb-5 text-[#2E0864] font-bold">{info.title} avaialble in </p>
              <ul className="list-disc pl-5">
                {info.technologies.map((tech) => {
                  return <li className="pb-2">{tech}</li>;
                })}
              </ul> */}
              <br/>
              <button className="w-full text-[#F45116] border border-[#F45116] py-2 px-5 mb-5 cursor-pointer rounded-lg font-medium hover:text-[#2E0864] hover:border-[#2E0864]">View Details</button>
              <button className="w-full bg-[#F45116] hover:bg-[#2E0864] text-white py-2 px-5 cursor-pointer rounded-lg">View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
