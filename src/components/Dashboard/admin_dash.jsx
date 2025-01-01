import Header from "../../other/Header";
import Createtask from "../../other/Createtask";
import Alltask from "../../other/Alltask";

const AdminDash = ({ changeUser, data }) => {
  console.log(changeUser, "Admin_dash");
  return (
    <div className="h-[100%] text-white w-[100%] bg-gray-900 p-10 font-mono">
      <Header changeUser={changeUser} data={data} />
      <Createtask />
      <Alltask data={data} />
    </div>
  );
};

export default AdminDash;