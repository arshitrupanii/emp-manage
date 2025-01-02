
const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("LoggedIn_user", "");
    changeUser(null);
  };

  return (
    <div className="text-white rounded-lg">
      <div className="flex justify-between items-center">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold">
            Hello, {data.firstName}👋
          </h1>
          <p className="text-sm text-gray-200 mt-1">
            Welcome back! Have a productive day ahead.
          </p>
        </div>

        <div>
          <button
            onClick={logOutUser}
            className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;