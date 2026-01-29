import { useRef, useState } from "react";
import { getlocalstorage } from "../utils/Localstorage";

const LoginPage = (props) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, seterror] = useState(false);

  // check employee details from localstorage and set emp-user into ls and update user state
  const handleLogin = (e) => {
    e.preventDefault();

    const { employees, admin } = getlocalstorage();

    // check employee
    const employee = employees.find(
      (emp) =>
        emp.email === emailRef.current.value &&
        emp.password === passwordRef.current.value,
    );

    if (employee) {
      localStorage.setItem(
        "emp-user",
        JSON.stringify({ role: "employee", ...employee }),
      );
      props.setuser({ role: "employee", ...employee });
    }

    // check admin
    const adminUser = admin.find(
      (ele) =>
        ele.email === emailRef.current.value &&
        ele.password === passwordRef.current.value,
    );

    if (adminUser) {
      localStorage.setItem(
        "emp-user",
        JSON.stringify({ role: "admin", ...adminUser }),
      );
      props.setuser({ role: "admin", ...adminUser });
    }

    // only if nothing matched
    seterror(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <div className="w-full max-w-lg p-10 bg-[#1e1e1e] rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10">Welcome back</h2>

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              ref={emailRef}
              className="w-full p-4 bg-[#222222] rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              ref={passwordRef}
              className="w-full p-4 bg-[#222222] rounded-lg "
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0fb87f] py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </form>
        {error ? (
          <p className="text-center mt-5 text-red-500">User doesnt exist</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginPage;
