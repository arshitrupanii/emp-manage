import { useState } from "react";

const CreateTask = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskDate, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      id: Date.now(),
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

    const storedUser = JSON.parse(localStorage.getItem("emp-user"));

    const updatedEmployees = storedEmployees.map((emp) => {
      if (String(emp.id) === String(assignTo)) {
        const updatedTasks = emp.tasks ? [...emp.tasks, taskData] : [taskData];

        const updatedEmp = {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            newTask: (emp.taskCounts?.newTask || 0) + 1,
            active: emp.taskCounts?.active || 0,
            completed: emp.taskCounts?.completed || 0,
            failed: emp.taskCounts?.failed || 0,
          },
        };

        // 🔥 keep emp-user in sync
        if (storedUser && String(storedUser.id) === String(emp.id)) {
          localStorage.setItem("emp-user", JSON.stringify(updatedEmp));
        }

        return updatedEmp;
      }

      return emp;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // reset form
    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
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
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
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
              value={taskDate}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-400 mb-4 outline-none"
              type="date"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded bg-black text-white border border-gray-500 mb-4 outline-none"
              required
            >
              <option value="" disabled>
                Select employee
              </option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.firstName}
                </option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded bg-black text-white border border-gray-500 mb-4 outline-none"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/5 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded bg-transparent border border-gray-400 outline-none"
            required
          />

          <button
            type="submit"
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
