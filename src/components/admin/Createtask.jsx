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
    category.current.value = "";
  };

  return (
    <div className="p-5 mt-5 rounded">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap w-full items-start justify-between"
      >
        {/* LEFT */}
        <div className="w-1/2">
          {/* Task Title */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              ref={taskTitle}
              className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-400 mb-4 outline-none"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              ref={taskDate}
              className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-400 mb-4 outline-none"
              type="date"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              ref={assignTo}
              className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-400 mb-4 outline-none"
              type="text"
              placeholder="Ex.. Ronak"
              required
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <select
              ref={category}
              className="text-sm py-2 px-3 w-4/5 rounded bg-[#0a0a0a] text-white border border-gray-400 mb-4 outline-none"
              required
            >
              <option value="High" disabled>
                Select category
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/5 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            ref={taskDescription}
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent border border-gray-400 outline-none"
            required
          />

          <button
            type="submit"
            onKeyDown={(e) => (e.target.value === "enter" ? handleSubmit : "")}
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
