import {useState} from 'react'

const Createtask = () => {

    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            taskTitle,
            description,
            date,
            assignTo,
            category,
        };
        console.log("Task Created:", taskData);
        // Add your logic to handle the task creation (e.g., API call)

        // Clear the form fields
        setTaskTitle("");
        setDescription("");
        setDate("");
        setAssignTo("");
        setCategory("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", scrollBehavior:"auto" }}>
                <h2 className="text-3xl mb-5">Create Task</h2>

                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="taskTitle">Task Title:</label>
                    <input
                        className="text-black"
                        type="text"
                        id="taskTitle"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>

                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className="text-black"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>

                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="date">Date:</label>
                    <input
                        className="text-black"
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>

                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="assignTo">Assign To:</label>
                    <input
                        className="text-black"
                        type="text"
                        id="assignTo"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>

                <div style={{ marginBottom: "1em" }}>
                    <label htmlFor="category">Category:</label>
                    <input
                        className="text-black"
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        style={{ width: "100%", padding: "0.5em" }}
                    />
                </div>
                {/* 
        <button type="submit" style={{ padding: "0.5em 1em", cursor: "pointer" }}>
          Create Task
        </button> */}

                <div className="flex justify-center">
                    <button type="button" className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Task</button>

                </div>

            </form>
        </div>
    )
}

export default Createtask
