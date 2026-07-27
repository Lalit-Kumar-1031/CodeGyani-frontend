import React from "react";

function AITextContainer({content}) {
  return (
    <div className="w-fit py-2 px-3 border border-gray-50 rounded-full hover:border-primary hover:text-primary text-nowrap text-white">
      {content}
    </div>
  );
}

export default AITextContainer;
