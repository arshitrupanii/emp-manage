import './App.css';
import { useContext, useState, useEffect } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';
import { AuthContext } from './context/Authprovidor';

function App() {
  const [user, setuser] = useState(null);
  const [LoggedinuserData, setLoggedinuserData] = useState(null)
  const Authdata = useContext(AuthContext);

  // this use for checking the user is already logged reload the page 
  useEffect(() => {
    if (Authdata) {
      const loggedIn = localStorage.getItem('LoggedInuser');
      if (loggedIn) {
        setuser(JSON.parse(loggedIn).role);
      }
    }
  }, [Authdata])
  
  // this function is used for checking the user is valid or not for login
  const handlesubmit = (email, pass) => {
    if (Authdata && Authdata.admin.find((e) => e.email === email && e.password === pass)) {
      const data = Authdata.admin.find((e) => e.email === email && e.password === pass);
      setuser("admin");
      localStorage.setItem('LoggedInuser', JSON.stringify({ role: "admin" }));
      setLoggedinuserData(data);
    }

    else if (Authdata && Authdata.employee.find((e) => e.email === email && e.password === pass)) {
      const data = Authdata.employee.find((e) => e.email === email && e.password === pass);
      setuser('user');
      localStorage.setItem('LoggedInuser', JSON.stringify({ role: "user" }));
      setLoggedinuserData(data);
    }

    else {
      console.log("invalid user found...");
    }
  };

  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit} /> : ""}
      {user === "user" ? <Emp_dash data={LoggedinuserData} /> : (user === "admin" ? <Admin_dash data={LoggedinuserData} /> : "")}

    </>
  );
}

export default App;