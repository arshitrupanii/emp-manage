import Header from "../components/Header";
import Createtask from "../components/admin/Createtask";
import Alltask from "../components/admin/Alltask";
import { useState } from "react";
import { getlocalstorage } from "../utils/Localstorage";

const AdminDash = ({ user, setuser }) => {
  const { employees } = getlocalstorage();

  const [emp, setemp] = useState(employees);

  return (
    <div className="flex flex-col p-10 gap-10">
      {/* Header */}
      <Header user={user} setuser={setuser} />

      {/* create task */}
      <Createtask emp={emp} setemp={setemp} />

      {/* all task show table */}
      <Alltask emp={emp} />
    </div>
  );
};

export default AdminDash;
