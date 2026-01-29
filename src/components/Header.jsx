const Header = ({user, setuser}) => {
  const logOutUser = () => {
    localStorage.removeItem("emp-user");
    setuser(null);
  };

  return (
    <div className="bg-[#1e1e1e] p-8 rounded-lg flex justify-between items-center">
      {/* Welcome Section */}
      <div>
        <p className="text-[#7f8186]">Welcome back!</p>
        <h1 className="text-3xl font-bold">{user.firstName} 👋🏻</h1>
      </div>

      <div>
        <button onClick={logOutUser} className="btn bg-[#17b880]">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
