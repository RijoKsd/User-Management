 
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
       <Link to="/" className="text-2xl font-bold">UserFlow</Link>
        <nav>
          <Link to="/login" className="px-4 py-2 hover:bg-gray-700 rounded">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 hover:bg-gray-700 rounded">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
