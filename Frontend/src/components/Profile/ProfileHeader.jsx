import { FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";

const ProfileHeader = ({ data, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
      {/* COVER */}
      <div className="relative">
        <img
          src={data.coverPicture}
          alt="cover"
          className="w-full h-56 object-cover"
        />

        <button
          onClick={onEdit}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaPencilAlt size={14} />
        </button>

        <div className="absolute -bottom-14 left-6">
          <img
            src={data.profilePicture}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>
      </div>

      <div className="pt-16 px-6 pb-6 relative">
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>

        <p className="text-gray-600 mt-1">
          {data.title} @ {data.company}
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
          <FaMapMarkerAlt size={12} />
          {data.location}
        </div>

        <p className="text-blue-600 text-sm mt-2">
          {data.connections} Connections
        </p>

        {/* buttons untouched */}
      </div>
    </div>
  );
};

export default ProfileHeader;
