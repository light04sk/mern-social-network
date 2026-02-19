const ProfileCard = () => {
  return (
    <div className="sticky top-25 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition duration-300">
      {/* Cover */}
      <div className="h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>

      {/* Profile Section */}
      <div className="px-6 pb-6 text-center relative">
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto -mt-12 border-4 border-white shadow-sm object-cover"
        />

        {/* Name */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800">
          Mashhood Ahmad Danish
        </h2>

        {/* Role */}
        <p className="text-sm text-gray-500">
          SDE-2 Engineer <span className="text-blue-600">@Infosys</span>
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 my-5"></div>

        {/* Stats */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer transition">
            <span>Profile Viewers</span>
            <span className="font-semibold text-gray-800">23</span>
          </div>

          <div className="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer transition">
            <span>Post Impressions</span>
            <span className="font-semibold text-gray-800">90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
