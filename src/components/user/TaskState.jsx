const TaskState = ({ user }) => {
  return (
    <div className="min-h-32 w-full flex gap-4">
      <div className="flex-1 bg-[#5fa5f7] rounded-lg p-6">
        <div className="text-3xl">{user?.taskCounts?.newTask}</div>
        <div className="text-xl">New Task</div>
      </div>

      <div className="flex-1 bg-[#48de7e] rounded-lg p-6">
        <div className="text-3xl">{user?.taskCounts?.completed}</div>
        <div className="text-xl">Completed Task</div>
      </div>

      <div className="flex-1 bg-[#fbe045] rounded-lg p-6 text-black">
        <div className="text-3xl">{user?.taskCounts?.active}</div>
        <div className="text-xl">Active Task</div>
      </div>

      <div className="flex-1 bg-[#f8726e] rounded-lg p-6">
        <div className="text-3xl">{user?.taskCounts?.failed}</div>
        <div className="text-xl">Failed Task</div>
      </div>
    </div>
  );
};

export default TaskState;
