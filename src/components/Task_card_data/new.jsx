import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovidor.jsx';

const New = ({ index, data }) => {
    const { data: employees, setdata } = useContext(AuthContext);  // Get state & setter
    console.log(data); 

    const handlechange = (task) => {
        const updatedEmployees = employees.map((employee) => ({
            ...employee,
            tasks: employee.tasks.map((t) =>
                t.taskTitle === task.taskTitle ? { ...t, newTask: false } : t
            ),
        }));

        // Update localStorage
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));

        // Update React state
        setdata(updatedEmployees);
    };

    const taskColors = {
        high: "bg-red-600",
        medium: "bg-yellow-500",
        low: "bg-green-500",
    };

    return (
        <div>
            <div>
                <div key={index} className={`flex-shrink-0 bg-blue-700 p-5 w-[350px] h-[350px] rounded-lg shadow-lg ${data.category} text-white flex flex-col justify-between`}>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className={`px-3 py-1 rounded-full text-sm font-semibold ${taskColors[data.category]} `}>{data.category}</h3>
                            <h3 className="text-sm">{data.taskDate}</h3>
                        </div>

                        <h1 className="text-xl font-bold mb-2">{data.taskTitle}</h1>
                        <p className="text-sm line-clamp-15">{data.taskDescription}</p>
                    </div>

                    <button 
                        onClick={() => handlechange(data)} 
                        className="mt-auto px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:from-indigo-600 hover:to-blue-500 hover:scale-105 transition-all duration-300"
                    >
                        Accept
                    </button>
                    {console.log(data)}
                </div>
            </div>
        </div>
    );
};

export default New;
