import Header from "../../other/Header";
import Createtask from "../../other/Createtask";
import Alltask from "../../other/Alltask";

const AdminDash = (props) => {
  console.log(props);
  return (
      <div className="h-[100%] text-white w-[100%] bg-gray-900 p-10 font-mono">
      <Header data={props}/>
      <Createtask />
      <Alltask data={data}/> 

      </div>

  );
};

export default AdminDash;
