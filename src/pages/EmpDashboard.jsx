import Header from "../components/Header";
import Tasklist from "../components/TaskCount";


const EmpDashboard = () => {
  return (
    <div className="flex flex-col p-10 h-auto bg-gray-900 text-white font-mono">
      <Header />
      {/* task count list */}
      <Tasklist />

      {/* tasks */}
      {/* <AllTask /> */}
    </div>
  );
};

export default EmpDashboard;
