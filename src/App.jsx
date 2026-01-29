import { useEffect, useState } from "react";

import LoginPage from "./pages/LoginPage";
import { getlocalstorage, setlocalstorage } from "./utils/Localstorage";
import EmpDashboard from "./pages/EmpDashboard";
import AdminDash from "./pages/AdminDash";

function App() {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  // LOADING TODO
  useEffect(() => {    
    const { employees, admin, user } = getlocalstorage();
    if (!employees || !admin) {
      setlocalstorage();
    }

    setuser(user);
    setloading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex bg-black text-white items-center justify-center h-screen">
        <p>Loading data...</p>
      </div>
    );
  }

  return (
    <>
      {!user && <LoginPage user={user} setuser={setuser} />}

      {user?.role === "employee" && (
        <EmpDashboard user={user} setuser={setuser} />
      )}
      {user?.role === "admin" && <AdminDash user={user} setuser={setuser} />}
    </>
  );
}

export default App;
