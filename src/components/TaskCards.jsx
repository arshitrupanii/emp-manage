import { getlocalstorage } from "../utils/Localstorage";


const TaskCards = () => {
  const { user } = getlocalstorage();

  return (
    <div>
      {user?.tasks.forEach((task) => {
        {task?.completed == true && }
      })}
    </div>
  );
};

export default TaskCards;
