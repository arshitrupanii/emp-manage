import React from 'react'

const New = ({data, index}) => {
    const taskColors = {
        high: "bg-red-600",
        medium: "bg-yellow-500",
        low: "bg-green-500",
    };

    const task = data;
    return (
    <div>
        <div>
            <div key={index} className={`flex-shrink-0 bg-orange-500 p-5 w-[350px] h-[350px] rounded-lg shadow-lg ${task.category} text-white flex flex-col justify-between`}>

                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className={`px-3 py-1 rounded-full text-sm font-semibold ${taskColors[task.category]} `}>{task.category}</h3>
                        <h3 className="text-sm">{task.taskDate}</h3>
                    </div>

                    <h1 className="text-xl font-bold mb-2">{task.taskTitle}</h1>
                    <p className="text-sm line-clamp-15">{task.taskDescription}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default New