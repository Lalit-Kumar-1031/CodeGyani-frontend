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
import summer from "../../assets/summer.jpg";
import flutter from "../../assets/flutter.webp";
import WhyChoose from "../../components/WhyChoose";
import ShowTestimonials from "../../components/ShowTestimonials";
import GrowthInNumbers from "../../components/Home/GrowthInNumbers";
import html from '../../assets/technologies_logo/html.png';
import js from '../../assets/technologies_logo/js.png';
import reactjs from '../../assets/technologies_logo/reactjs.png';
import nodejs from '../../assets/technologies_logo/nodejs.png';
import python from '../../assets/technologies_logo/python.png';
import java from '../../assets/technologies_logo/java.png';
import sql from '../../assets/technologies_logo/sql.png';
import db from '../../assets/technologies_logo/db.png';
import ai from '../../assets/ai.png';
import AIEraComponent from "../../components/About/AIEraComponent";
import { Link } from "react-router-dom";


function Home() {
  let trainingInfo = [
    {
      title: "Summer Training",
      subTitle: "6-8 Weeks",
      icon: (
        <div className="bg-amber-50 h-14 w-14 rounded-full flex items-center justify-center">
          <AiFillSun className="h-10 w-10 text-primary" />
        </div>
      ),
      description:
        "Don't spend your summer watching tutorials. Build real software applications, work on industry projects, and become job-ready with expert mentorship.",
      technologies: [
        "AI & ML",
        "Data Scrince & Analytics",
        "Web Development (flutter Stack, Java, Python etc)",
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
        "Web Development (flutter Stack, Java, Python etc)",
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
        "Web Development (flutter Stack, Java, Python etc)",
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
    //       <BsFillBuildingsFill className="h-10 w-10 text-secondary" />
    //     </div>
    //   ),
    //   description:
    //     "Gain hands-on industry exposure through practical development, code reviews, and project-based learning that prepares you for your first software job.",
    //   technologies: [
    //     "AI & ML",
    //     "Data Scrince & Analytics",
    //     "Web Development (flutter Stack, Java, Python etc)",
    //     "App Development (Flutter, React Native, Kotlin etc)",
    //   ],
    //   price: "₹6,999",
    //   jobAssistence: false,
    // },
  ];

  let batchesInfo = [
    {
      title: "Summer Training",
      with: " with Flutter App Development",
      duration: "6-8 Weeks",
      startFrom: "25 July 2026",
      icon: (
        <div className="bg-amber-50 h-14 w-14 rounded-full flex items-center justify-center">
          <AiFillSun className="h-10 w-10 text-primary" />
        </div>
      ),
      discountPrice: "₹6,999",
      discountPersentage: "20%",
      fullPrice: "₹7,999",
      jobAssistence: false,
    },
    {
      title: "Winter Training",
      with: " with React Frontend Development",
      duration: "6-8 Weeks",
      startFrom: "25 Aug 2026",
      icon: (
        <div className="bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center">
          <FaRegSnowflake className="h-10 w-10 text-blue-500" />
        </div>
      ),
      discountPrice: "₹6,999",
      discountPersentage: "20%",
      fullPrice: "₹7,999",
      jobAssistence: false,
    },
    {
      title: "Apprenticeship Training",
      with: " with Full Stack Development",
      duration: "6-8 Months",
      startFrom: "28 July 2026",
      icon: (
        <div className="bg-indigo-50 h-14 w-14 rounded-full flex items-center justify-center">
          <FaBriefcase className="h-8 w-8 text-indigo-700" />
        </div>
      ),
      discountPrice: "₹26,999",
      discountPersentage: "20%",
      fullPrice: "₹29,999",
      jobAssistence: true,
    },
  ];

  // Technologies
  let technologiesList = [
    {
      title: "AI & ML",
      image: ai,
    },
    {
      title: "HTML5 & CSS3",
      image: html,
    },
    {
      title: "Java Script",
      image: js,
    },
    {
      title: "Tailwind CSS",
      image: html,
    },
    {
      title: "Flutter",
      image: flutter,
    },
    {
      title: "ReactJS",
      image: reactjs,
    },
    {
      title: "NodeJs",
      image: nodejs,
    },
    {
      title: "MERN Full Stack",
      image: nodejs,
    },
    {
      title: "Java",
      image: java,
    },
    {
      title: "Python",
      image: python,
    },
    {
      title: "Mongodb Database",
      image: db,
    },
    {
      title: "SQL Database",
      image: sql,
    },
  ];

  return (
    <div className="px-5 md:px-10 py-5">
      <Hero />
      {/* Numbers That Inspire */}
      <GrowthInNumbers />
      {/* Popular Training */}
      <div className="flex flex-row items-center justify-between  pt-10 pb-10">
        <h1 className="text-xl md:text-2xl text-secondary font-bold">
          Popular Trainings
        </h1>
        <div className="group flex flex-row items-center justify-center gap-2 cursor-pointer">
          <p className="text-md md:text-lg text-secondary font-medium group-hover:text-primary">
            Explore All Tranings
          </p>
          <MdOutlineArrowForwardIos className="w-5 h-5 group-hover:text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {trainingInfo.map((info) => {
          return (
            <div className=" flex flex-col items-start justify-between py-5 px-5 shadow-sm shadow-gray-300 rounded-md">
              <div className="flex flex-row gap-5">
                {info.icon}
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-secondary font-bold">
                    {info.title}
                  </p>
                  <div className="w-fit flex bg-gray-100 py-1 px-3 items-center justify-center rounded-lg">
                    <span className="text-sm md:text-md text-gray-800 inline">
                      {info.subTitle}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-5 mt-5">{info.description}</p>
              <div className="flex flex-col w-full">
                <button className="w-full text-primary border border-primary py-2 px-5 mb-5 cursor-pointer rounded-lg font-medium hover:text-secondary hover:border-secondary">
                  View Details
                </button>
                <Link to="/training-registration" className="w-full bg-primary hover:bg-secondary text-white py-2 px-5 cursor-pointer rounded-lg text-center font-medium">
                  Enroll Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* Upcoming and Ongoing Batches */}
      <div className="flex flex-row items-center justify-between  pt-10 pb-10">
        <h1 className="text-xl md:text-2xl text-secondary font-bold">
          Upcoming Batches
        </h1>
        <div className="group flex flex-row items-center justify-center gap-2 cursor-pointer">
          <p className="text-md md:text-lg text-secondary font-medium group-hover:text-primary">
            Explore All Batches
          </p>
          <MdOutlineArrowForwardIos className="w-5 h-5 group-hover:text-primary" />
        </div>
      </div>
      {/* Batches Div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {batchesInfo.map((info) => {
          return (
            <div className=" flex flex-col items-start justify-between py-5 px-5 shadow-sm shadow-gray-300 rounded-md">
              <div className="rounded-md">
                <img
                  src={summer}
                  alt="Summer"
                  className="w-full h-full object-cover"
                />
              </div>
              <br />
              <div className="flex flex-row gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl text-secondary font-bold">
                    {info.title}{" "}
                    <span className="text-primary">{info.with}</span>
                  </p>
                  <div className="flex flex-row gap-5">
                    <div className="w-fit flex flex-row bg-gray-100 py-1 px-3 items-center justify-center rounded-lg mt-3">
                      <span className="text-sm md:text-md text-gray-800 inline">
                        {info.duration}
                      </span>
                    </div>
                    <div className="w-fit flex flex-row bg-gray-100 py-1 px-3 items-center justify-center rounded-lg mt-3">
                      <span className="text-sm md:text-md text-gray-800 inline">
                        {info.discountPersentage} Off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 mt-3">
                <span className="text-md">Batch Start From : </span>
                <span className="text-secondary font-medium pl-2 text-md">
                  {info.startFrom}
                </span>
              </div>
              <div>
                <span className="line-through text-md">{info.fullPrice}</span>
                <span className="text-secondary font-bold pl-2 text-xl">
                  {info.discountPrice}
                </span>
              </div>

              <br />
              <div className="flex flex-col w-full">
                <button className="w-full text-primary border border-primary py-2 px-5 mb-4 cursor-pointer rounded-lg font-medium hover:text-secondary hover:border-secondary">
                  View Details
                </button>
                <Link to="/training-registration" className="w-full bg-primary hover:bg-secondary text-white py-2 px-5 cursor-pointer rounded-lg text-center font-medium">
                  Enroll Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <br/>
      <br/>
      {/* Career in AI Era */}
      <AIEraComponent/>
      {/* Available Technologies */}
      <section id="technologies">
      <div className="flex flex-row items-center justify-between  pt-10 pb-10">
        <h1 className="text-xl md:text-2xl text-secondary font-bold">
          Training Available In
        </h1>
        <div className="group flex flex-row items-center justify-center gap-2 cursor-pointer">
          <p className="text-md md:text-lg text-secondary font-medium group-hover:text-primary">
            View All
          </p>
          <MdOutlineArrowForwardIos className="w-5 h-5 group-hover:text-primary" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 space-x-4 mb-8">
        {technologiesList.map((technology) => {
          return (
            <div className="flex flex-row items-center justify-start py-5 px-5 bg-gray-100 border border-gray-200 rounded-lg gap-5 mb-4">
              <img src={technology.image} className="h-12 w-12" />
              <p className="text-lg font-medium">{technology.title}</p>
            </div>
          );
        })}
      </div>
      </section>
      {/* Why Chhose Section */}
      <WhyChoose />
      <ShowTestimonials />
    </div>
  );
}

export default Home;
