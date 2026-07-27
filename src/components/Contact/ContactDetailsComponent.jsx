import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosStopwatch } from "react-icons/io";

function ContactDetailsComponent() {
  let contactDetails = [
    {
      title: "Address",
      subtitle: "302, 2nd Floor, Tech Plaza, Bareilly, Uttar Pradesh, India ",
      icon: <IoLocation className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Email",
      subtitle: "support@codegyani.com",
      icon: <MdEmail className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Phone",
      subtitle: "+91 9876543210",
      icon: <IoCall className="h-8 w-8 text-secondary" />,
    },
    {
      title: "Working Hours",
      subtitle: "Mon - Sat, 10:00 AM - 06:00 PM",
      icon: <IoIosStopwatch className="h-8 w-8 text-secondary" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {contactDetails.map((detail) => {
        return (
          <div className="flex flex-row gap-4 bg-gray-50 border border-gray-200 p-5 my-1">
            {detail.icon}
            <div className="flex flex-col">
              <p className="text-lg md:text-xl text-secondary font-medium">
                {detail.title}
              </p>
              <p>{detail.subtitle} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactDetailsComponent;
