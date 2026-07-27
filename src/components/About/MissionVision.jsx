import React from "react";
import target from "../../assets/target.png";
import vision from "../../assets/vision.png";
function MissionVision() {
  return (
    <>
      <h1 className="text-xl md:text-2xl text-secondary font-bold mb-8">
        What Motivate Us
      </h1>
      <div className="w-full  flex-col flex md:flex-row items-stretch justify-between">
        <div className="flex flex-col border border-gray-200 gap-3 p-5">
          <img src={target} className="h-10 w-10" />
          <p className="font-bold text-3xl">Our Mission</p>
          <p>
            To empower students with practical software development skills, AI
            knowledge, and real industry experience that helps them build
            successful careers in modern technology.
          </p>
        </div>
        <div className="flex flex-col border border-gray-200 gap-3 p-5">
          <img src={vision} className="h-10 w-10" />
          <p className="font-bold text-3xl">Our Vision</p>
          <p>
            To become India's most trusted software training institute — where
            every student graduates with confidence, practical experience, and
            the ability to solve real-world problems using technology.
          </p>
        </div>
      </div>
    </>
  );
}

export default MissionVision;
