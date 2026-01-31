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
    <div className="flex flex-shrink-0 flex-col gap-4 p-6 w-[20vw] border-2 rounded-lg border-[#292945]">
      {/* upper line */}
      <div className="flex flex-1 justify-between items-center">
        <div className="bg-[#2c2b59] w-fit rounded-md p-1 text-[#7b7db8]">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <h1 className="text-xl flex-1">{task?.taskTitle}</h1>
      <p className="text-[#9a9fa5] flex-1 w-full flex-nowrap">
        {task?.taskDescription}
      </p>

      <div className="flex flex-1 gap-4">
        <button
          onClick={handleUpdate}
          className="btn flex-1 bg-[#4e47e4] w-full"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default New;
