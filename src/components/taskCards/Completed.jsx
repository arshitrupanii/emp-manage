import React from "react";

const Completed = ({ task }) => {
  return (
    <div className="flex flex-shrink-0 flex-col bg-[#252525] gap-4 p-6 w-[20vw] border-2 rounded-lg border-[#223529]">
      {/* upper line */}
      <div className="flex flex-1 justify-between items-center">
        <div className="bg-[#223529] w-fit rounded-md p-1 text-[#7fd6a6]">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <h1 className="text-xl flex-1">{task?.taskTitle}</h1>
      <p className="text-[#9a9fa5] flex-1">{task?.taskDescription}</p>

      <div className="flex flex-1 gap-4">
        <button className="btn flex-1 bg-[#17b880] w-full">Completed</button>
      </div>
    </div>
  );
};

export default Completed;
