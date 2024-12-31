import './App.css';
import { useContext, useEffect, useState } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';
import { AuthContext } from './context/Authprovidor';


function App() {

  const [user, setuser] = useState(null)
  const Authdata = useContext(AuthContext)
  // const [, set] = useState(second)

  useEffect(() => {
    if (Authdata && Authdata.employee) {
      console.log(Authdata.employee);
    }
  }, [Authdata]);
  

  // console.log(Authdata.employee.email == (("employee1@example.com")));
  
  const handlesubmit = (email, pass)=>{
    if(email == "admin@gmail.com" && pass == "123"){
      setuser("admin")
    }
    
    else if (Authdata && Authdata.employee.find((e)=>{e.email == email && e.password == pass})){
      setuser('user')
    }
    
    else{
      console.log("invalid user found...")
    }
  }
  
  
  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit}/> : ""}
      {user == "admin" ? <Admin_dash/> : <Emp_dash/>}
    </>
  );
}

export default App;
