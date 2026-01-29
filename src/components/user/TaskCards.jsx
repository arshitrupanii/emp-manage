import Active from "../taskCards/Active";
import Completed from "../taskCards/Completed";
import Failed from "../taskCards/Failed";
import New from "../taskCards/New";

const TaskCards = ({ user, setuser }) => {
  return (
    <div className="bg-[#1e1e1e] p-5 rounded-md pb-20">
      <h1 className="text-xl font-bold mb-6">Your Tasks</h1>

      <div className="flex gap-4 pb-10 overflow-x-auto">
        {user?.tasks.map((task, index) => {
          if (task.newTask)
            return (
              <New key={index} task={task} user={user} setuser={setuser} />
            );
          if (task.active)
            return (
              <Active key={index} task={task} user={user} setuser={setuser} />
            );

          if (task.completed)
            return (
              <Completed
                key={index}
                task={task}
                user={user}
                setuser={setuser}
              />
            );
          if (task.failed)
            return (
              <Failed key={index} task={task} user={user} setuser={setuser} />
            );
          return null;
        })}
      </div>
    </div>
  );
};

export default TaskCards;
