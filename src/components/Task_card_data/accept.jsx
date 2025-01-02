import React from 'react'

const New = ({data, index}) => {
    const taskColors = {
        high: "bg-red-600",
        medium: "bg-yellow-300",
        low: "bg-green-500",
    };

    const task = data;
    return (
    <div>
        <div>
            <div key={index} className={`flex-shrink-0 bg-yellow-500 p-5 w-[350px] h-[350px] rounded-lg shadow-lg ${task.category} text-white flex flex-col justify-between`}>

                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className={`px-3 py-1 rounded-full text-sm font-semibold ${taskColors[task.category]} `}>{task.category}</h3>
                        <h3 className="text-sm">{task.taskDate}</h3>
                    </div>

                    <h1 className="text-xl font-bold mb-2">{task.taskTitle}</h1>
                    <p className="text-sm line-clamp-15">{task.taskDescription}</p>
                </div>
                <div className="flex justify-between mt-auto">
                    <button className="px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:from-green-700 hover:to-green-500 hover:scale-105 transition-all duration-300">
                        Completed
                    </button>
                    <button className="px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-red-500 to-red-700 shadow-lg hover:from-red-700 hover:to-red-500 hover:scale-105 transition-all duration-300">
                        Failed
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default New