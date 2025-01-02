// that is create task component which is used to create a new task

import { useState } from 'react';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setDescription] = useState("");
  const [taskDate, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      completed: false,
      failed: false
    };

    // Get the existing tasks from local storage
    const emp = JSON.parse(localStorage.getItem("employees")) || [];

    let employeeFound = false;
    emp.forEach(element => {
      if (element.firstName == assignTo) {
        employeeFound = true;
        element.tasks = element.tasks || [];
        element.tasks.push(taskData);
        element.taskCounts = element.taskCounts || { newTask: 0, active: 0, completed: 0, failed: 0 };
        element.taskCounts.newTask += 1;
        element.taskCounts.active += 1;
      }
    });

    if (!employeeFound) {
      console.log("Employee not found");
    }

    // Save the updated tasks back to local storage
    localStorage.setItem("employees", JSON.stringify(emp));

    // Clear the form fields
    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className='p-5 mt-5 rounded'>
      <form onSubmit={handleSubmit} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='Make a UI design'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="date"
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='employee name'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
              type="text"
              placeholder='High, medium, low'
              required
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
            required
          ></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;