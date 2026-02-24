import { FaPencilAlt } from "react-icons/fa";

const ProfileCard = ({ title, children, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Show edit only if onEdit exists */}
        {onEdit && (
          <button
            onClick={onEdit}
            className="bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100 transition"
          >
            <FaPencilAlt size={14} />
          </button>
        )}
      </div>

      {children}
    </div>
  );
};

export default ProfileCard;
