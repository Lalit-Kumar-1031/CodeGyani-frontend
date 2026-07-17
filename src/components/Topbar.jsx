import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Topbar() {
  return (
    <div className="w-full h-10 bg-[#2E0864] block lg:flex flex-row items-center justify-around">
      {/* Left Part Text */}
      <div className="w-full flex flex-row items-center justify-center lg:w-1/2 h-full gap-2">
        <VscWorkspaceTrusted className="w-5 h-5 hover:text-white text-[#F45116]" />
        <p className="text-white">
          Build in-demand skills with industry-focused training programs
        </p>
      </div>
      <div className="hidden lg:flex items-center w-1/2 h-full justify-center gap-3">
        <p className="text-white">Have any questions?</p>
        <div className="flex items-center justify-center gap-0.5 cursor-pointer group">
          <MdOutlinePhoneInTalk className="w-4 h-5 text-white group-hover:text-[#F45116]" />
          <p className="text-white group-hover:text-[#F45116]">+91 9876543210</p>
        </div>
        <div className="flex items-center justify-center gap-0.5 cursor-pointer group">
          <MdEmail className="w-4 h-5 text-white group-hover:text-[#F45116]" />
          <p className="text-white group-hover:text-[#F45116]">support@codegyani.com</p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
