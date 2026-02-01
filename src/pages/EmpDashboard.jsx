import Header from "../components/Header";
import TaskState from "../components/user/TaskState";
import TaskCards from "../components/user/TaskCards";

const EmpDashboard = ({ user, setuser }) => {
  return (
    <div className="flex flex-col p-6 md:p-8 lg:p-10 gap-8 lg:gap-10">
      <Header user={user} setuser={setuser} />

      {/* task state */}
      <TaskState user={user} />

      {/* tasks */}
      <TaskCards user={user} setuser={setuser} />
    </div>
  );
};

export default EmpDashboard;
