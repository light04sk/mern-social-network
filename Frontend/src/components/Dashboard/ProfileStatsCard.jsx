const ProfileStatsCard = () => {
  return (
    <div className="sticky top-99 bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition duration-300">
      <div className="space-y-4 text-sm">
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
  );
};

export default ProfileStatsCard;
