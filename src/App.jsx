import './App.css';
import { useContext, useState } from 'react';
import LoginPage from './components/Auth/LoginPage';
import Emp_dash from './components/Dashboard/Emp_dash';
import Admin_dash from './components/Dashboard/admin_dash';
import { AuthContext } from './context/Authprovidor';

function App() {

  const [user, setuser] = useState(null)

  const handlesubmit = (email, pass)=>{
    if(email == "admin@gmail.com" && pass == "123"){
      setuser("admin")
    }

    else if (email == "user@gmail.com" && pass == "123"){
      setuser('user')
    }

    else{
      console.log("invalid user found...")
    }
  }

  const data = useContext(AuthContext)
  console.log(data);

  return (
    <>
      {!user ? <LoginPage handlesubmit={handlesubmit}/> : ""}
      {user == "admin" ? <Admin_dash/> : <Emp_dash/>}
    </>
  );
}

export default App;
