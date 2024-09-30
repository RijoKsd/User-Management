import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
   const navigate = useNavigate();

   const handleLogout = () => {
     // Clear the isLoggedIn flag
     localStorage.removeItem("isLoggedIn");
     
     navigate("/");
   };
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/user" className="text-2xl font-bold">
          UserFlow
        </Link>
        <nav>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
