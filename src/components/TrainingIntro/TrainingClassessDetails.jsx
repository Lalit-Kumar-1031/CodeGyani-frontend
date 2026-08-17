import React from "react";



function TrainingClassessDetails({details}) {
 
  return (
    <div className="w-full bg-secondary mt-8 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:divide-x md:divide-gray-500">
      {details.map((detail) => {
        return (
          <div className="flex flex-row gap-3 items-center px-3 py-5 md:py-5 lg:py-0">
            {detail.icon}
            <div className="flex flex-col">
              <p className="text-white font-bold  text-xl md:text-2xl">{detail.title}</p>
              <p className="text-white text-md">{detail.subTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrainingClassessDetails;
