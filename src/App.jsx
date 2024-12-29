import './App.css';
import { useEffect, useState } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';

function App() {

  const [user, setuser] = useState(null)

  const handlesubmit = (email, pass)=>{
    if(email == "admin@gmail.com" && pass == "123"){
      console.log("this is admin")
    }

    else if (email == "user@gmail.com" && pass == "123"){
      console.log("this is user ")
    }

    else{
      console.log("invalid user found...")
    }
  }

  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit}/> : ""}
    </>
  );
}

export default App;
