import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar1 = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          Pro
          <span className="bg-blue-600 text-white px-1 rounded-md ml-1">
            net
          </span>
        </h1>

        {/* Right */}
        <div className="flex items-center gap-6">
          <Link to="/signup" className="text-gray-600 hover:text-blue-600">
            Join now
          </Link>

          <Link
            to="/signin"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
