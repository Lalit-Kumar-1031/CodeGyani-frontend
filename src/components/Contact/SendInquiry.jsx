import React from "react";

function SendInquiry() {
  return (
    <div className="w-full md:w-1/3 flex flex-col gap-4 p-5 border border-gray-200 bg-gray-50">
      <p className="text-secondary font-bold text-lg text-left">Send us a Message</p>
      <form className="w-full flex flex-col gap-4">
      <input required type="text" placeholder="Name" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-primary"/>
      <input required type="email" placeholder="Email" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-primary"/>
      <input required type="number" placeholder="Mobile Number" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-primary"/>
      <textarea required type="number" placeholder="Message" className="w-full border border-gray-300 p-2 focus:outline-none focus:border-primary h-30"/>
      <button className="w-full bg-primary text-white p-2 hover:bg-primary/80">Send Message</button>
      </form>
    </div>
  );
}

export default SendInquiry;
