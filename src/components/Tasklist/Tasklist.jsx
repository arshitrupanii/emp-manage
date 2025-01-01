
const Tasklist = ({ data }) => {
    const total_task = data.tasks

    const taskColors = {
        high: "bg-red-600",
        medium: "bg-yellow-500",
        low: "bg-green-500",
    };

    return (
        <div className="py-5">
            <h2 className="text-3xl font-bold mb-5">Task List</h2>
            <div id="task_bar" className="flex overflow-x-auto space-x-4 py-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">

                {total_task.map((task, index) => (

                    <div key={index} className={`flex-shrink-0 p-5 w-[350px] h-[350px] rounded-lg shadow-lg ${taskColors[task.category]} text-white`}>


                        <div className="flex justify-between items-center mb-3">

                            <h3 className={`px-3 py-1 rounded-full text-sm font-semibold ${task.category === "high" ? "bg-red-800": task.category === "medium" ? "bg-yellow-700" : "bg-green-700"}`}>
                                {task.category}
                            </h3>
                            <h3 className="text-sm">{task.taskDate}</h3>
                        </div>

                        <h1 className="text-xl font-bold mb-2">{task.taskTitle}</h1>
                        <p className="text-sm line-clamp-15">{task.taskDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasklist;
