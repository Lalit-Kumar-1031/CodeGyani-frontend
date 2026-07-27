import React from "react";
import { PiBookOpenTextBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { TbArrowGuide } from "react-icons/tb";
import { PiUsersThree } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import laptop from '../assets/laptop.png';
import ai from '../assets/ai.png';
import placement from '../assets/placement.png';
import target from '../assets/target.png';
import { WebsiteConfig } from "../constants/WebsiteConfig";

function WhyChoose() {
  let features = [
    {
      title: "Get Real IT Company Experience",
      subtitle:
        "Learn how software developers actually work inside professional IT companies",
      icon: <FaRegBuilding className="h-8 w-8 text-secondary" />,
    },
    {
      title: "100% Practical Training",
      subtitle: "Less theory. More coding. More building. Every concept is taught through implementation.",
      icon: <img src={laptop} className="h-8 w-8" />,
    },
    {
      title: "Live Industry Projects",
      subtitle:
        "Build complete web and mobile applications from scratch using real development practices.",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
    {
      title: "AI & Machine Learning",
      subtitle:
        "Learn how AI is changing software development and how to use AI tools effectively as a developer.",
      icon: <img src={ai} className="h-8 w-8" />,
    },
    {
      title: "Placement Assistance",
      subtitle: "Get interview preparation and placement support from our team those have real experience.",
      icon: <img src={placement} className="h-10 w-10" />,
    },
    {
      title: "Career-Focused Learning",
      subtitle: "Master the exact skills companies expect during internships and job interviews.",
      icon:<img src={target} className="h-10 w-10" />,
    },
  ];

  return (
    <>
      <h1 className="text-xl md:text-2xl text-secondary font-bold mb-5">
        Why Choose {WebsiteConfig.shortName}?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          return (
            <div className="flex border border-gray-200 py-5 px-5">
              <div className="flex flex-col">
                <div className="w-15 h-15"> {feature.icon}</div>
                <p className="text-lg md:text-xl text-black font-bold">
                  {feature.title}
                </p>
                <p className="text-gray-600 mb-5 mt-2">{feature.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WhyChoose;
