import Header from "../components/Header";
import TaskState from "../components/TaskState";


const EmpDashboard = (props) => {

  return (
    <div className="flex flex-col p-10 h-auto bg-gray-900 text-white font-mono">
      <Header user={props.user} setuser={props.setuser}  />

      {/* task state */}
      <TaskState user={props.user} />

      {/* tasks */}
      {/* <AllTask /> */}
    </div>
  );
};

export default EmpDashboard;
