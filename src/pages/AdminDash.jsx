import Header from "../components/Header";
import Createtask from "../components/admin/Createtask";
import Alltask from "../components/admin/Alltask";

const AdminDash = ({ user, setuser }) => {

  return (
    <div className="flex flex-col p-10 gap-10">
      {/* Header */}
      <Header user={user} setuser={setuser} />

      {/* create task */}
      <Createtask />

      {/* all task show table */}
      <Alltask />
    </div>
  );
};

export default AdminDash;