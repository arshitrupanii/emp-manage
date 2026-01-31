import { getlocalstorage } from "../../utils/Localstorage";

const Active = ({ task, user, setuser }) => {
  const handleUpdate = (status) => {
    const { employees } = getlocalstorage();

    let updatedTasks = user.tasks.map((t) =>
      t.taskTitle === task.taskTitle
        ? {
            ...t,
            active: false,
            completed: status === "completed" ? true : false,
            failed: status === "failed" ? true : false,
          }
        : t,
    );

    let updatedUser = {
      ...user,
      tasks: updatedTasks,
      taskCounts: {
        ...user.taskCounts,
        active: user.taskCounts.active - 1,
        completed:
          status === "completed"
            ? user.taskCounts.completed + 1
            : user.taskCounts.completed,
        failed:
          status === "failed"
            ? user.taskCounts.failed + 1
            : user.taskCounts.failed,
      },
    };

    const updatedEmployees = employees.map((emp) => {
      if (emp.id === user.id) {
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
    <div className="flex shrink-0 flex-col gap-4 p-6 w-[20vw] border-2 rounded-lg border-[#554a2e]">
      <div className="flex flex-1 justify-between items-center">
        <div className="bg-[#463019] w-fit rounded-md p-1 text-[#ccb351]">
          {String(task?.category)}
        </div>
        <div className="text-[#515151]">{task?.taskDate}</div>
      </div>

      <h1 className="text-xl flex-1">{task?.taskTitle}</h1>
      <p className="text-[#9a9fa5] flex-1">{task?.taskDescription}</p>

      <div className="flex flex-1 gap-4">
        <button
          onClick={() => handleUpdate("completed")}
          className="btn flex-1 bg-[#17b880]"
        >
          Complete
        </button>

        <button
          onClick={() => handleUpdate("failed")}
          className="btn flex-1 bg-[#ef4644]"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default Active;
