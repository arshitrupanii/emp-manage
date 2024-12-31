import './App.css';
import { useContext, useState, useEffect } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';
import { AuthContext } from './context/Authprovidor';

function App() {
  const [user, setuser] = useState(null);
  const [Loggedinuser, setLoggedinuser] = useState(null)
  const Authdata = useContext(AuthContext);

  useEffect(() => {
    if (Authdata) {
      const loggedin = localStorage.getItem('LoggedInuser');
      if (loggedin) {
        setuser(JSON.parse(loggedin).role);
      }
    }
  }, [Authdata])
  

  const handlesubmit = (email, pass) => {
    if (Authdata && Authdata.admin.find((e) => e.email === email && e.password === pass)) {
      const data = Authdata.admin.find((e) => e.email === email && e.password === pass);
      setuser("admin");
      localStorage.setItem('LoggedInuser', JSON.stringify({ role: "admin" }));
      setLoggedinuser(data);
    }

    if (Authdata && Authdata.employee.find((e) => e.email === email && e.password === pass)) {
      const data = Authdata.employee.find((e) => e.email === email && e.password === pass);
      setuser('user');
      localStorage.setItem('LoggedInuser', JSON.stringify({ role: "user" }));
      setLoggedinuser(data);
    }

    else {
      console.log("invalid user found...");
    }
  };

  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit} /> : ""}
      {user === "user" ? <Emp_dash data={Loggedinuser} /> : (user === "admin" ? <Admin_dash /> : "")}

    </>
  );
}

export default App;