import React from "react";
import heroTech from "../../assets/trainings/heroTech2.png";
import { RiTargetFill } from "react-icons/ri";
import { WebsiteConfig } from "../../constants/WebsiteConfig";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import TrainingClassessDetails from "../../components/TrainingIntro/TrainingClassessDetails";
import { IoTimer } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { RiCertificate2Line } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { CiCircleCheck } from "react-icons/ci";
import TopCareerDomains from "../../components/TrainingIntro/TopCareerDomains";

function SummerTrainingDetails() {
  let studentImage = [
    "https://randomuser.me/api/portraits/men/66.jpg",
    "https://randomuser.me/api/portraits/men/62.jpg",
    "https://randomuser.me/api/portraits/men/69.jpg",
    "https://randomuser.me/api/portraits/men/68.jpg",
  ];
  let starIcons = [
    <IoIosStar className="text-yellow-500 h-5 w-5" />,
    <IoIosStar className="text-yellow-500 h-5 w-5" />,
    <IoIosStar className="text-yellow-500 h-5 w-5" />,
    <IoIosStar className="text-yellow-500 h-5 w-5" />,
    <IoStarHalfSharp className="text-yellow-500 h-5 w-5" />,
  ];

  let summerTraining = [
    {
      title: "45-60",
      subTitle: "Days Duration",
      icon: <IoTimer className="w-10 h-10 text-primary" />,
    },
    {
      title: "Daily",
      subTitle: "3-5 Hour Classes",
      icon: <FaCalendarDays className="w-8 h-8 text-primary" />,
    },
    {
      title: "Mode",
      subTitle: "Offline Classes",
      icon: <IoIosStar className="w-10 h-10 text-primary" />,
    },
    {
      title: "Live",
      subTitle: "Mini & Major Projects",
      icon: <GrProjects className="w-10 h-10 text-primary" />,
    },
    {
      title: "Certificate",
      subTitle: "& Awards Ceremony",
      icon: <RiCertificate2Line className="w-10 h-10 text-primary" />,
    },
  ];

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
    <div className="w-full flex flex-col px-5 md:px-10 py-5">
      <div className="w-full flex flex-col md:flex-row">
        {/* Left */}
        <div className="h-100 md:h-105 w-full md:w-1/2 flex flex-col">
          <div className="flex flex-row mt-5 py-1 px-3 border border-primary w-fit rounded-lg">
            <RiTargetFill className="h-6 w-6 text-primary pr-1" />
            <p className="text-primary text-sm font-bold uppercase">
              Industry Focused Program
            </p>
          </div>
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-secondary lg:leading-12 leading-8">
            Summer Training For <span className="text-primary">CS & IT </span>
            <span className="text-secondary">Students</span>
          </h1>
          <br />
          <p className="mb-5">
            Want to Become a <span className="font-medium text-secondary">Software Developer</span> in the AI Era? Learn Offline
            with Expert Mentors, Build Real Projects, Master AI-Powered
            Development, <span className="font-medium text-secondary">Join{" "}
            {WebsiteConfig.shortName}'s Summer Training Program in Bareilly</span> and
            prepare for a successful IT career.
          </p>
          <div className="flex flex-row gap-5 ">
            <div className=" cursor-pointer flex flex-row  items-center gap-3 bg-primary text-white py-3 px-5 rounded-md w-fit">
              <button className="cursor-pointer">Enroll Now</button>
              <FaArrowRight />
            </div>
            <div className="cursor-pointer flex flex-row  items-center gap-3 text-white py-3 px-5 rounded-md w-fit bg-secondary">
              <button className="cursor-pointer">Check Curriculum</button>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-row mt-5 items-center">
            <div className="flex flex-row">
              {studentImage.map((image, index) => {
                return (
                  <img
                    src={image}
                    key={index}
                    className={`h-8 w-8 rounded-full border border-secondary ${index !== 0 ? "-ml-1.5" : ""}`}
                  />
                );
              })}
            </div>
            <div className="flex ml-4 gap-1">
              {starIcons.map((star) => {
                return star;
              })}
            </div>
            <div className="flex ml-4">
              <p className="text-secondary font-bold text-xl mr-1 whitespace-nowrap">4.7</p>
              <p className="hidden md:block">(4500+ reviews on Google)</p>  
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 h-100 md:h-105">
          <img
            src={heroTech}
            className="w-full h-full object-fill md:object-cover"
          />
        </div>
      </div>
      {/* Training Classes Details */}
      <TrainingClassessDetails details={summerTraining} />
      <br />
      {/* About The Program */}
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left */}
        <div className="w-full md:w-2/3 p-5 border border-gray-300 flex flex-col">
          <h1 className="text-secondary text-xl md:text-2xl font-bold">
            ABOUT THE{" "}
            <span className="text-primary text-xl md:text-2xl font-bold">
              PROGRAM
            </span>
          </h1>
          <br />
          <p>
            <span className="font-medium">
              {WebsiteConfig.shortName} Summer Training
            </span>{" "}
            is an
            <span className="font-medium">
              {" "}
              offline, classroom-based practical training program
            </span>{" "}
            designed for BTECH, CSE, IT, BCA, MCA, Polytechnic, and other
            technology students who want to develop real software skills—not
            just collect another certificate.
          </p>
          <br />
          <p>
            We believe every student learns differently. That is why our
            training is conducted offline with direct mentor interaction, where
            students can ask questions, discuss problems, get immediate
            guidance, and learn concepts step by step. Our focus is to ensure
            that students don't feel lost while learning technical subjects.
          </p>
          <br />
          <p>
            At {WebsiteConfig.shortName}, you don't just sit and watch someone
            write code. You write it, run it, break it, debug it, and improve
            it. Our training focuses on hands-on assignments, practical
            development, real-world problem solving, and project-based learning.
          </p>
          <br />
          <p>
            Students learn how software is actually developed—from understanding
            requirements and planning features to writing code, working with
            APIs and databases, debugging errors, using Git, testing
            applications, and improving their projects.
          </p>
          <br />
          <p>
            We also understand that the software industry is changing rapidly
            because of Artificial Intelligence. Instead of teaching students to
            fear AI, we teach them how to use{" "}
            <span className="font-medium">AI as a productivity partner.</span>
          </p>
          <br />
          <p>
            Our offline classroom environment makes this learning process more
            effective. When students face a problem, they can discuss it
            directly with mentors. When a concept is difficult, it can be
            explained again with practical examples. When a student gets stuck
            while building a project, guidance is available during the learning
            process.
          </p>
          <br />
          <p className="font-bold">
            {WebsiteConfig.shortName} — Offline Learning. Practical Development.
            Industry-Oriented Skills.
          </p>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/3 p-5 border flex flex-col border-gray-300 bg-white rounded-md">
          <p className="text-primary text-xl md:text-2xl font-bold mb-3">
            PROGRAM FEE
          </p>
          <p className="text-green-500 text-2xl md:text-3xl font-bold">
            ₹7000/-
          </p>
          <br />
          <button className="bg-primary text-white font-bold p-3 rounded-md cursor-pointer hover:bg-primary/90">
            Enroll Now
          </button>
          <br />
          <hr className="text-gray-300 " />
          <p className="font-bold text-secondary text-2xl mt-4 mb-3">
            Benefits & Perks
          </p>

          {trainingBenefits.map((benefit) => {
            return (
              <div className="flex flex-row gap-1.5 mb-3">
                <CiCircleCheck className="w-5 h-5 text-primary" />
                <p className="text-secondary">{benefit.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <TopCareerDomains/>
    </div>
  );
}

export default SummerTrainingDetails;
