const AllTask = ({ emp }) => {
  return (
    <div className="mt-6 sm:mt-10">
      {/* HEADER (desktop only) */}
      <div className="hidden sm:flex bg-red-400 mb-2 py-2 px-4 rounded text-sm sm:text-lg font-medium">
        <div className="w-1/5">Employee Name</div>
        <div className="w-1/5 text-center">New Task</div>
        <div className="w-1/5 text-center">Active Task</div>
        <div className="w-1/5 text-center">Completed</div>
        <div className="w-1/5 text-center">Failed</div>
      </div>

      {/* ROWS */}
      <div className="space-y-2">
        {emp.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 rounded p-3 sm:p-4
                       flex flex-col sm:flex-row sm:items-center gap-3"
          >
            {/* Name */}
            <h2 className="text-base sm:text-lg font-medium sm:w-1/5">
              {elem.firstName}
            </h2>

            {/* Numbers */}
            <div className="grid grid-cols-4 sm:flex sm:w-4/5 text-center text-sm sm:text-lg">
              <span className="text-blue-400 sm:w-1/4">
                {elem.taskCounts.newTask}
              </span>

              <span className="text-yellow-400 sm:w-1/4">
                {elem.taskCounts.active}
              </span>

              <span className="text-white sm:w-1/4">
                {elem.taskCounts.completed}
              </span>

              <span className="text-red-600 sm:w-1/4">
                {elem.taskCounts.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
