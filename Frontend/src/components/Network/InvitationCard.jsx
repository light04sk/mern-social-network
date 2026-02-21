const InvitationCard = ({ type }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-between hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=15"
          alt="profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">Daniel Roberts</h4>
          <p className="text-sm text-gray-500">Frontend Developer @Amazon</p>
        </div>
      </div>

      {type === "received" ? (
        <div className="flex gap-2">
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
            Accept
          </button>
          <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">
            Ignore
          </button>
        </div>
      ) : (
        <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">
          Pending
        </button>
      )}
    </div>
  );
};

export default InvitationCard;
