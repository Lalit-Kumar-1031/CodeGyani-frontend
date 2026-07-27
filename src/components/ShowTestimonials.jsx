import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function ShowTestimonials() {
  let testimonials = [
    {
      content:
        "Code Gyani's training program helped me build confidence and real-world skills. I got placed as a Software Developer.",
      picUrl: "https://randomuser.me/api/portraits/men/66.jpg",
      role: "Software Developer, TCS",
      rating: 3,
      name: "Krish Verma",
    },
    {
      content:
        "The hands-on projects and expert mentorship made me industry-ready. I cracked my first interview with confidence.",
      picUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Verma",
      role: "Frontend Developer, Infosys",
      rating: 5,
    },
    {
      content:
        "I learned React, Node.js, and MongoDB from scratch. The practical sessions were the best part of the course.",
      picUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Sharma",
      role: "MERN Stack Developer, Wipro",
      rating: 5,
    },
    {
      content:
        "The placement support, mock interviews, and resume guidance helped me secure my dream job within two months.",
      picUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Aman Singh",
      role: "Flutter Developer, Accenture",
      rating: 4,
    },
    {
      content:
        "I had no coding experience before joining. Today, I'm working as a Full Stack Developer thanks to Code Gyani.",
      picUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sneha Gupta",
      role: "Full Stack Developer, Cognizant",
      rating: 5,
    },
    {
      content:
        "Building real-world applications during training gave me the confidence to work on production-level projects.",
      picUrl: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Arjun Patel",
      role: "Software Engineer, Capgemini",
      rating: 5,
    },
  ];
  return (
    <>
      <h1 className="text-xl md:text-2xl text-secondary font-bold mt-8 mb-5">
        What Our Students Say
      </h1>
      <div className="flex flex-row items-stretch overflow-x-auto hide-scrollbar justify-start gap-5">
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial} className="min-w-full md:min-w-[30%] flex flex-col justify-between shadow-sm shadow-gray-300 rounded-md py-5 px-3 mb-4 mx-1">
              <div className="flex flex-row">
                <FaQuoteLeft className="text-primary w-14 pr-1" />
                <span className="text-gray-600">{testimonial.content}</span>
              </div>
              <br />
              <div className="flex px-4 gap-4">
                <div className="h-20 w-20 rounded-full">
                  <img
                    src={testimonial.picUrl}
                    alt="Profile Pic"
                    className="h-15 w-15 rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <p className="text-secondary font-medium text-md">
                    {testimonial.name}
                  </p>
                  <span className="text-gray-600 whitespace-pre-wrap">
                    {testimonial.role}
                  </span>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => {
                      return (
                        <FaStar key={index}
                          className={
                            index < testimonial.rating
                              ? "text-yellow-400 h-4 w-4 cursor-pointer"
                              : "text-gray-300 h-4 w-4 cursor-pointer"
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShowTestimonials;
