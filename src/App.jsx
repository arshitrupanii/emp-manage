import './App.css';
import { useContext, useState, useEffect } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';
import { AuthContext } from './context/Authprovidor';

function App() {
  const [user, setuser] = useState(null);
  const [Loggedinuser, setLoggedinuser] = useState(null);
  const Authdata = useContext(AuthContext);

  // this use for checking the user is already logged reload the page 
  useEffect(() => {
    const logged_In = localStorage.getItem('LoggedIn_user');

    if (logged_In) {
      const userdata = JSON.parse(logged_In);
      setuser(userdata.role);
      setLoggedinuser(userdata.data);
    }
  }, []);

  // this function is used for checking the user is valid or not for login
  const handlesubmit = (email, pass) => {
    if (Authdata && Authdata.admin.find((e) => e.email === email && e.password === pass)) {
      const admin_data = Authdata.admin.find((e) => e.email === email && e.password === pass);
      setuser('admin');
      localStorage.setItem('LoggedIn_user', JSON.stringify({ role: "admin", data: admin_data }));
      setLoggedinuser(admin_data);
    } else if (Authdata && Authdata.employees) {
      const emp_data = Authdata.employees.find((e) => e.email === email && e.password === pass);
      setuser('user');
      localStorage.setItem('LoggedIn_user', JSON.stringify({ role: "user", data: emp_data }));
      setLoggedinuser(emp_data);
    } else {
      console.log("invalid user found...");
    }
  };

  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit} /> : ""}
      {user === "admin" ? <Admin_dash data={Loggedinuser} changeUser={setuser} /> : (user === "user" ? <Emp_dash data={Loggedinuser} changeUser={setuser} /> : " ")}
    </>
  );
}

export default App;