import React from "react";
import aiFear from "../../assets/ai_fear.jpg";

function AIEraComponent() {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between bg-secondary p-5">
      <div className="flex flex-col gap-3 mb-5 md:mb-0">
        <p className="text-md text-primary font-medium uppercase">
          Career in the AI era
        </p>
        <p className="text-white text-3xl md:text-5xl">
          Great developers are more valuable than ever -
          <span className="text-primary text-3xl md:text-5xl">
            {" "}
            if they can work with AI.
          </span>
        </p>
        <br />
        <p className="text-white">
          Artificial Intelligence is transforming software development, but it
          hasn't replaced the need for skilled engineers. At Code Gyani, we
          teach students how to work with AI instead of competing against it.
        </p>
        <p className="text-white">
          We prepare students for the next generation of software engineering —
          future-proof, practical, and ready for how companies actually build
          software today.
        </p>
      </div>
      <div className="w-full md:w-full flex flex-col gap-3.5 pl-0 md:pl-5 ">
        <img src={aiFear} className=" w-full h-100 rounded-md" />
      </div>
    </div>
  );
}

export default AIEraComponent;
