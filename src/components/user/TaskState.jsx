const TaskState = ({ user }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#5fa5f7] rounded-lg p-4 sm:p-6">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {user?.taskCounts?.newTask}
        </div>
        <div className="text-sm sm:text-base lg:text-xl">
          New Task
        </div>
      </div>

      <div className="bg-[#48de7e] rounded-lg p-4 sm:p-6">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {user?.taskCounts?.completed}
        </div>
        <div className="text-sm sm:text-base lg:text-xl">
          Completed Task
        </div>
      </div>

      <div className="bg-[#fbe045] rounded-lg p-4 sm:p-6 text-black">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {user?.taskCounts?.active}
        </div>
        <div className="text-sm sm:text-base lg:text-xl">
          Active Task
        </div>
      </div>

      <div className="bg-[#f8726e] rounded-lg p-4 sm:p-6">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {user?.taskCounts?.failed}
        </div>
        <div className="text-sm sm:text-base lg:text-xl">
          Failed Task
        </div>
      </div>
    </div>
  );
};

export default TaskState;
