import React from "react";
import ContactDetailsComponent from "../../components/Contact/ContactDetailsComponent";
import SendInquiry from "../../components/Contact/SendInquiry";

function ContactUs() {
  return (
    <div className="flex flex-col px-5 md:px-10 py-5">
      <h1 className="text-3xl md:text-5xl text-secondary font-bold">
        Contact Us
      </h1>
      <br />
      <p>
        Have questions or need guidance? We're here to help you on your journey.
      </p>
      <br />
      <div className="flex flex-col md:flex-row gap-3 items-stretch justify-between">
        {/* Left Contcat Details */}
        <ContactDetailsComponent />
        {/* Right Side Form */}
        <SendInquiry />
      </div>
    </div>
  );
}

export default ContactUs;
