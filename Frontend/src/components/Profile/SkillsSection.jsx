import ProfileCard from "./ProfileCard";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const SkillsSection = ({ data, onEdit }) => {
  return (
    <ProfileCard title="Skills" onEdit={onEdit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 bg-white border border-gray-200 px-5 py-4 rounded-2xl  hover:border-gray-300"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
              <HiOutlineCodeBracket className="text-lg" />
            </div>

            {/* Skill Name */}
            <span className="text-gray-800 font-medium tracking-tight">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
};

export default SkillsSection;
