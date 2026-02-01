import { useRef } from "react";

const CreateTask = ({ emp, setemp }) => {
  const taskTitle = useRef("");
  const taskDescription = useRef("");
  const taskDate = useRef("");
  const assignTo = useRef("");
  const category = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    const existing = emp.find(
      (ele) =>
        ele.firstName?.toLowerCase().trim() ===
        assignTo.current.value?.toLowerCase().trim(),
    );

    if (!existing) {
      alert("This assign employee doesnt exist!");
      assignTo.current.value = "";
      return;
    }

    // new task name error

    const existingTitle = existing.tasks.find(
      (ele) =>
        ele.taskTitle?.toLowerCase().trim() ===
        taskTitle.current.value?.toLowerCase().trim(),
    );

    if (existingTitle) {
      alert("Task title already exists for this employee!");
      taskTitle.current.value = "";
      return;
    }

    // task add to emp state
    const task = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: taskTitle.current.value,
      taskDescription: taskDescription.current.value,
      taskDate: taskDate.current.value,
      category: category.current.value,
    };

    const updateEmployee = {
      ...existing,
      taskCounts: {
        ...existing.taskCounts,
        newTask: existing.taskCounts.newTask + 1,
      },
      tasks: [...existing.tasks, task],
    };

    // save into emp usestate
    const updatedEmpList = emp.map((e) =>
      e.firstName === existing.firstName ? updateEmployee : e,
    );

    setemp(updatedEmpList);

    // save into ls
    localStorage.setItem("employees", JSON.stringify(updatedEmpList));

    taskTitle.current.value = "";
    taskDescription.current.value = "";
    taskDate.current.value = "";
    assignTo.current.value = "";
    category.current.value = "High";
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full"
      >
        {/* LEFT */}
        <div className="flex flex-col gap-4">
          {/* Task Title */}
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">
              Task Title
            </h3>
            <input
              ref={taskTitle}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Date</h3>
            <input
              ref={taskDate}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="date"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              ref={assignTo}
              className="w-full text-sm py-2 px-3 rounded bg-transparent border border-gray-400 outline-none"
              type="text"
              placeholder="Ex.. Ronak"
              required
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Category</h3>
            <select
              ref={category}
              className="w-full text-sm py-2 px-3 rounded bg-[#0a0a0a] text-white border border-gray-400 outline-none"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">
              Description
            </h3>
            <textarea
              ref={taskDescription}
              className="w-full h-32 sm:h-44 text-sm py-2 px-4 rounded bg-transparent border border-gray-400 outline-none resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm w-full transition active:scale-95"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
