import Active from "../taskCards/Active";
import Completed from "../taskCards/Completed";
import Failed from "../taskCards/Failed";
import New from "../taskCards/New";

const TaskCards = ({ user, setuser }) => {
  
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-md pb-10 h-auto">
      <h1 className="text-xl font-bold mb-6">Your Tasks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...user?.tasks].reverse().map((task, index) => {
          if (task.newTask)
            return (
              <New key={index} task={task} user={user} setuser={setuser} />
            );
          if (task.active)
            return (
              <Active key={index} task={task} user={user} setuser={setuser} />
            );

          if (task.completed) return <Completed key={index} task={task} />;
          if (task.failed) return <Failed key={index} task={task} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default TaskCards;
