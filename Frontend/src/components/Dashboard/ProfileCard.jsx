const ProfileCard = ({
  name = "Mashhood Ahmad Danish",
  role = "SDE-2 Engineer",
  company = "@Infosys",
  location = "Hyderabad, India",
  image = "https://i.pravatar.cc/150",
  showConnect = false,
  isSticky = false,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300 ${
        isSticky ? "sticky top-25" : ""
      }`}
    >
      {/* Cover */}
      <div className="h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      <div className="px-6 pb-6 text-center relative">
        {/* Profile Image */}
        <img
          src={image}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto -mt-12 border-4 border-white shadow-sm object-cover"
        />

        {/* Name */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">{name}</h2>

        {/* Role */}
        <p className="text-sm text-gray-500 mt-1">{role}</p>

        {/* Company */}
        <p className="text-sm text-blue-600 font-medium mt-1">{company}</p>

        {/* Location */}
        <p className="text-xs text-gray-500 mt-1">{location}</p>

        {/* Connect Button (Only when needed) */}
        {showConnect && (
          <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-full hover:bg-blue-50 transition font-medium text-sm">
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
