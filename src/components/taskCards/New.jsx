import { getlocalstorage } from "../../utils/Localstorage";

const New = ({ task, user, setuser }) => {
  const handleUpdate = () => {
    const { employees } = getlocalstorage();

    const updatedTasks = user.tasks.map((t) =>
      t.taskTitle === task.taskTitle
        ? { ...t, active: true, newTask: false }
        : t,
    );

    const updatedUser = {
      ...user,
      tasks: updatedTasks,
      taskCounts: {
        ...user.taskCounts,
        newTask: user.taskCounts.newTask - 1,
        active: user.taskCounts.active + 1,
      },
    };

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === user.firstName) {
        const { role, ...userWithoutRole } = updatedUser;
        return userWithoutRole;
      }
      return emp;
    });

    setuser(updatedUser);

    localStorage.setItem("emp-user", JSON.stringify(updatedUser));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 w-full border-2 rounded-lg border-[#292945]">
      {/* upper line */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <div className="bg-[#2c2b59] rounded-md px-2 py-1 text-[#7b7db8] text-xs sm:text-sm">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <h1 className="text-base sm:text-lg lg:text-xl font-semibold leading-snug">
        {task?.taskTitle}
      </h1>

      <p className="text-xs sm:text-sm lg:text-base text-[#9a9fa5] flex-1 w-full leading-relaxed">
        {task?.taskDescription}
      </p>

      <button
        onClick={handleUpdate}
        className="btn bg-[#4e47e4] w-full text-sm sm:text-base"
      >
        Accept
      </button>
    </div>
  );
};

export default New;
