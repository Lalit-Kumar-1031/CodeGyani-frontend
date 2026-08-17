import React from "react";
import { FaUsers } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsTrophy } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function GrowthInNumbers() {
  let successRecords = [
    {
      title: "10K",
      subTitle: "Students Trained",
      icon: <PiStudent className="w-10 h-10 text-secondary" />,
    },
    {
      title: "10+",
      subTitle: "Offline Trainings",
      icon: <PiUsersThreeLight className="w-10 h-10 text-secondary" />,
    },
    {
      title: "20+",
      subTitle: "In-Demand Technologies",
      icon: <GrLanguage className="w-10 h-10 text-secondary" />,
    },
    {
      title: "500+",
      subTitle: "Batches",
      icon: <BsTrophy className="w-10 h-8 text-secondary" />,
    },
    {
      title: "200+",
      subTitle: "Hiring Partners",
      icon: <FaRegBuilding className="w-10 h-8 text-secondary" />,
    },
  ];
  return (
    <>
      <h1 className="text-xl md:text-2xl text-secondary font-bold pt-10 pb-5">
        Our Success in Numbers
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-5 shadow-sm shadow-gray-300 rounded-md divide-x  divide-gray-300">
        {successRecords.map((record) => {
          return (
            <div className="flex flex-row gap-5 items-center justify-center px-10 py-5 lg:py-0 ">
              {record.icon}
              <div className="flex flex-col items-start justify-center gap-1">
                <p className="text-2xl text-secondary font-bold">
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
    </>
  );
}

export default GrowthInNumbers;
