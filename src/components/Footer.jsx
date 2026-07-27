import React from "react";
import logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { WebsiteConfig } from "../constants/WebsiteConfig";

function Footer() {
  return (
    <>
    <div className="flex flex-col bg-white w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-300 pb-5">
        <div className="flex flex-col px-5 md:px-10 w-full order-3 md:order-1 pb-10 md:pb-0">
          <div className="h-10 w-20 mt-8">
            <img
              src={logo}
              className="h-20 w-20 object-center rounded-full"
            />
          </div>
          <br />

          <p className="text-md w-full mt-2">
            <span className="font-medium">{WebsiteConfig.companyName}</span> empowering
            students with industry-ready software development skills through
            hands-on projects, real-world company workflows, expert mentorship,
            AI & Machine Learning training, and personalized career guidance to
            build successful careers in the modern tech industry.
          </p>
          <br />
          <div className="flex gap-2">
          <FaLinkedin className="w-8 h-8 rounded-full border p-1.5 hover:text-primary" />
          <FaInstagram className="w-8 h-8 rounded-full border p-1.5 hover:text-primary" />
          <CiFacebook className="w-8 h-8 rounded-full border p-1.5 hover:text-primary" />
          <AiOutlineYoutube className="w-8 h-8 rounded-full border p-1.5 hover:text-primary" />
        </div>
          
        </div>
        <div className="flex flex-row mt-8 gap-2  justify-between mx-5 md:justify-around order-2 md:order-2">
          <div className="flex flex-col gap-2">
            <p className="text-md font-medium">Quick Links</p>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Home
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Technologies
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Trainings
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Batches
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="text-md font-medium">Popular Trainings</p>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Summer Training
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Winter Training
            </Link>
            <Link
              to="/"
              className="hover:font-medium hover:text-primary w-fit"
            >
              Apprenticeship
            </Link>
            <Link
            to="/"
            className="hover:font-medium hover:text-primary w-fit "
          >
            FAQ's
          </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8 mx-5 gap-2 order-1 md:order-3">
          <p className="text-md font-medium">Stay Updated</p>
          <p>
            Subscribe to our newsletter for the latest tranings, batches and
            offers.
          </p>
          <div className="w-full h-12 flex flex-row mt-2 rounded-md bg-amber-500">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="bg-gray-100 p-5 focus:outline-none w-full"
            />
            <button className="bg-primary hover:bg-primary/80 h-12 w-20 flex justify-center items-center">
              <FiSend className="text-white" />
            </button>
          </div>
          <div className="flex flex-row justify-start gap-3 mt-3">
            <input
              type="checkbox"
              h-5
              w-5
              className="accent-primary cursor-pointer"
            />
            <span>I agree to receive updates and offers</span>
          </div>
        </div>
      </div>
      {/* Copy Right Part */}
      <div className="flex flex-col-reverse md:flex-row  justify-center md:justify-between gap-5 px-10 py-5 border-t border-gray-300">
        <span className="text-md text-center">{WebsiteConfig.copyright}</span>
        <div className="flex gap-6">
          <Link
            to="/"
            className="cursor-pointer hover:text-primary w-fit text-secondary"
          >
            Terms and Conditions
          </Link>
          <Link
            to="/"
            className="cursor-pointer hover:text-primary w-fit text-secondary"
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            className="cursor-pointer hover:text-primary w-fit text-secondary"
          >
            Refund Policy
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
