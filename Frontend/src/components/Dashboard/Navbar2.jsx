import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const Navbar2 = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <NavLink to="/feed" className="flex items-center text-2xl font-bold">
            <span className="text-gray-900 tracking-tight">Pro</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md ml-1 text-sm font-semibold">
              net
            </span>
          </NavLink>

          {/* Search */}
          <div className="relative hidden md:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 pl-10 pr-4 py-2.5 rounded-full text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex items-center gap-13">
          <NavItem to="/feed" icon={<FaHome size={20} />} label="Home" end />
          <NavItem
            to="/network"
            icon={<FaUserFriends size={20} />}
            label="Network"
          />
          <NavItem
            to="/resume"
            icon={<FaBriefcase size={20} />}
            label="Resume"
          />
          <NavItem
            to="/message"
            icon={<FaCommentDots size={20} />}
            label="Message"
          />
          <NavItem
            to="/notification"
            icon={<FaBell size={20} />}
            label="Alerts"
          />
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition">
          <FaUserCircle size={32} className="text-gray-600" />
          <span className="hidden sm:block text-sm font-medium text-gray-700">
            Me
          </span>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, label, end }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative flex flex-col items-center text-xs transition-all duration-200 pb-2 ${
          isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
        }`
      }
    >
      <div>{icon}</div>
      <span className="mt-1 font-medium">{label}</span>

      {/* Active Indicator */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 transition-transform duration-300 group-[.active]:scale-x-100"></span>
    </NavLink>
  );
};

export default Navbar2;
