// task status card which show upperbar

const Tasklist = ({ data }) => {

    return (
        <div>
            <div className="flex h-28 mt-5 w-full">
                <div className="bg-blue-700 w-[49%] m-1 rounded-md p-4">
                    <h1 className="text-3xl font-semibold">{data.taskCounts.newTask}</h1>
                    <h1 className="text-2xl mt-1">new Task</h1>
                </div>
                <div className="bg-lime-800 w-[49%] m-1 rounded-md p-4">
                    <h1 className="text-3xl font-semibold">{data.taskCounts.completed}</h1>
                    <h1 className="text-2xl mt-1">Completed</h1>
                </div>
            </div>

            <div className="flex h-28 w-full">
                <div className="bg-yellow-500 w-[49%] m-1 rounded-md p-4">
                    <h1 className="text-3xl font-semibold">{data.taskCounts.active}</h1>
                    <h1 className="text-2xl mt-1">Active</h1>
                </div>
                <div className="bg-orange-500 w-[49%] m-1 rounded-md p-4">
                    <h1 className="text-3xl font-semibold">{data.taskCounts.failed}</h1>
                    <h1 className="text-2xl mt-1">Failed</h1>
                </div>
            </div>
        </div>

    )
}

export default Tasklist
