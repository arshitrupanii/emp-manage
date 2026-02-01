const Failed = ({ task }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 w-full border-2 rounded-lg border-[#3f2522]">
      {/* upper line */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <div className="bg-[#4d2422] rounded-md px-2 py-1 text-[#c2827b] text-xs sm:text-sm">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <h1 className="text-base sm:text-lg lg:text-xl font-semibold leading-snug">
        {task?.taskTitle}
      </h1>

      <p className="text-xs sm:text-sm lg:text-base text-[#9a9fa5] flex-1 leading-relaxed">
        {task?.taskDescription}
      </p>

      <button className="btn bg-[#4d2422] w-full text-sm sm:text-base">
        Failed
      </button>
    </div>
  );
};

export default Failed;
