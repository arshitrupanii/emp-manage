import { useRef, useState } from "react";
import { getlocalstorage } from "../utils/Localstorage";

const LoginPage = (props) => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [error, seterror] = useState(false);

  // check employee details from localstorage and set emp-user into ls and update user state
  const handleLogin = (e) => {
    e.preventDefault();

    const { employees, admin } = getlocalstorage();

    // check employee
    const employee = employees.find(
      (emp) =>
        emp.email === emailRef.current.value && emp.password === passwordRef.current.value
    );

    if (employee) {
      localStorage.setItem(
        "emp-user",
        JSON.stringify({ role: "employee", ...employee })
      );
      props.setuser({ role: "employee", ...employee })
    }

    // check admin
    const adminUser = admin.find(
      (ele) =>
        ele.email === emailRef.current.value && ele.password === passwordRef.current.value
    );

    if (adminUser) {
      localStorage.setItem(
        "emp-user",
        JSON.stringify({ role: "admin", ...adminUser })
      );
      props.setuser({ role: "admin", ...adminUser })
    }

    // only if nothing matched
    seterror(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-400 mt-4">
          Don&apos;t have an account?{" "}
          <span className="text-blue-400 hover:underline">Sign up</span>
        </p>
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
