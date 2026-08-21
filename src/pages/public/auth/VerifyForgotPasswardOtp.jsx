import React, { useRef, useState } from "react";
import login from "../../../assets/auth/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";


function VerifyForgotPasswardOtp({ length = 6 }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
    const navigate = useNavigate();

  const handleOnChange = (index, e) => {
    let value = e.target.value;

    if (isNaN(value)) return;

    setOtp((prev) => {
      const newOtp = [...prev];
      newOtp[index] = value;
      return newOtp;
    });

    // handle focus
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // handle back space
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleOnPaste = (e) => {
    e.preventDefault();

    //1.get the pasted data from clipboard
    const pasteData = e.clipboardData.getData("text").trim();

    //2.check paste data is numbers and take up to the required length
    if (isNaN(pasteData)) return;
    const digits = pasteData.slice(0, length).split("");

    //3.create new otp array and filled it with pasted digits
    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    //4.Now move the focus to last input or avaialble
    const nexIndex = Math.min(digits.length, length) - 1;
    if (inputRefs.current[nexIndex]) {
      inputRefs.current[nexIndex].focus();
    }
  };

  // handle otp resend timer
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResendClick = () => {
    // Add your logic to resend OTP here (e.g., API call)
    setTimeLeft(60);
    setCanResend(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/set-new-passward");
  };
  return (
    <div className="w-full flex flex-row">
      {/* Left Form */}
      <div className="flex flex-col flex-1 items-center justify-start">
        <div className="flex flex-col border border-black w-[80%] md:w-[70%] mt-20 py-10 px-8">
          <form onSubmit={handleOnSubmit}>
            <h1 className="text-2xl font-bold text-center">
              Enter Verification Code
            </h1>
            <p className="mt-4 mb-5 text-center">
              We've sent a 6-digit code to{" "}
              <span className="text-primary">lalit@gmail.com</span>
              <br /> Please enter it below
            </p>
            <center>
              {" "}
              {otp.map((value, index) => {
                return (
                  <input
                    value={value}
                    maxLength={1}
                    ref={(el) => (inputRefs.current[index] = el)}
                    key={index}
                    onChange={(e) => handleOnChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={(e) => handleOnPaste(e)}
                    className="h-10 w-10 border border-gray-400 mr-1 ml-1 text-center rounded-md bg-gray-50"
                  />
                );
              })}
            </center>

            <button type="submit" className="w-full p-2.5 font-medium text-white rounded-md bg-primary hover:bg-primary/80 mt-5 mb-3">
              Verify Code
            </button>

            <center>
              <p className="cursor-pointer">
                Didn't receive the code?{" "}
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendClick}
                    className="text-primary font-semibold hover:underline inline cursor-pointer"
                  >
                    resend OTP
                  </button>
                ) : (
                  <span className="text-gray-500 inline">
                    resend OTP in <span className="font-bold">{timeLeft}s</span>
                  </span>
                )}
              </p>
            </center>
          </form>
        </div>
        <Link
          to="/login"
          className="flex justify-center items-center mt-3 gap-2"
        >
          <FaArrowLeft className="text-secondary" />
          <p className="text-secondary font-medium">Back to log in</p>
        </Link>
      </div>
      <div className="hidden md:flex flex-col flex-1 bg-primary">
        <img src={login} className="w-full object-cover h-full" />
      </div>
    </div>
  );
}

export default VerifyForgotPasswardOtp;
