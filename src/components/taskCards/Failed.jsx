import React from "react";

const Failed = ({ task }) => {
  return (
    <div className="flex flex-shrink-0 flex-col gap-4 p-6 w-[20vw] border-2 rounded-lg border-[#3f2522]">
      {/* upper line */}
      <div className="flex flex-1 justify-between items-center">
        <div className="bg-[#4d2422] w-fit rounded-md p-1 text-[#c2827b]">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <div>
        <h1 className="text-xl flex-1">{task?.taskTitle}</h1>
      </div>

      <div>
        <p className="text-[#9a9fa5] flex-1">{task?.taskDescription}</p>
      </div>

      <div className="flex flex-1 gap-4">
        <button className="btn bg-[#4d2422] w-full">Failed</button>
      </div>
    </div>
  );
};

export default Failed;
