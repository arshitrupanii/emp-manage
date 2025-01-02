import Accept from "./accept";
import Complete from "./complete";
import Failed from "./failed";
import New from "./new";

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
               
                {total_task.map((task, index) => {
                    if (task.newTask) {
                        return <New key={index} data={task} />;
                    }
                    if (task.completed) {
                        return <Complete key={index} data={task} />;
                    }
                    if (task.failed) {
                        return <Failed key={index} data={task} />;
                    }
                    if (task.active && !task.completed || task.active && !task.failed) {
                        return <Accept key={index} data={task} />;
                    }
                    return null; // Return null if no condition is met
                })}
            </div>
        </div>
    );
};

export default Tasklist;
