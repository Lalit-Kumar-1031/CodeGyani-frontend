import React from "react";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section>
      <div className="w-full flex flex-col md:flex-row h-80 md:h-120 lg:h-160">
        {/* Left Part */}
        <div className="w-1/2"></div>
        {/* Right Part */}
        <div className="w-1/2">
        <img src={hero} alt="Hero" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
