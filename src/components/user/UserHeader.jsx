import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          UserFlow
        </Link>
        <nav>
          
          <button   className="px-4 py-2 hover:bg-gray-700 rounded">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;
