import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          🎓 CampusFind
        </h1>

        <div className="flex gap-6 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/lost-items"
            className="hover:text-blue-600 transition"
          >
            Lost Items
          </Link>

          <Link
            to="/found-items"
            className="hover:text-blue-600 transition"
          >
            Found Items
          </Link>

          <Link
            to="/post-item"
            className="hover:text-blue-600 transition"
          >
            Post Item
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;