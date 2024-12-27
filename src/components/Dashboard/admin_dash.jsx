import Header from "../../other/Header";
import Createtask from "../../other/Createtask";
import Alltask from "../../other/Alltask";

const AdminDash = () => {

  return (
    <div className="h-screen bg-gray-900 text-white w-full p-10 font-mono">
      <Header />
      <Createtask />
      <Alltask /> 

    </div>
  );
};

export default AdminDash;
