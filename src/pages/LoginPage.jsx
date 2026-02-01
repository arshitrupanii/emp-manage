import { useRef, useState } from "react";
import { getlocalstorage } from "../utils/Localstorage";

const LoginPage = ({ setuser }) => {
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
      setuser({ role: "employee", ...employee });
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
      setuser({ role: "admin", ...adminUser });
    }

    // only if nothing matched
    seterror(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] px-4">
      <div className="w-full max-w-lg bg-[#1e1e1e] rounded-lg p-4 sm:p-6 lg:p-10 mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-10">
          Welcome back
        </h2>

        <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleLogin}>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-3 sm:p-4 bg-[#222222] rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0fb87f]/60"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            ref={passwordRef}
            className="w-full p-3 sm:p-4 bg-[#222222] rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0fb87f]/60"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#0fb87f] py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition active:scale-95"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-center mt-4 sm:mt-5 text-sm sm:text-base text-red-500">
            User doesn’t exist
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;